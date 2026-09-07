#!/usr/bin/env bun
/**
 * Adds competition events to the award-history pages (2055A / 2055X / 2055C)
 * and writes a matching blog post.
 *
 * Usage:
 *   bun scripts/add-events.ts [path-to-events.json|.ts]
 *   (defaults to scripts/events.json if no path is given)
 *
 * Rule: an event only gets added to its team's award-history page if it has
 * awards. Award-less events still get a blog post, just no history entry.
 * The usual workflow is to add the award(s) to the event 1 day before
 * postDate, then run this script.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export type Team = "2055A" | "2055X" | "2055C";

export type TimelineItem = {
  title: string;
  location: string;
  date: string;
  imgKey?: string;
  description?: string;
  award1?: string;
  award2?: string;
  award3?: string;
  navigatePath?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string;
  tags: string[];
};

export type EventInput = {
  team: Team;
  title: string;
  location: string;
  /** Display string shown on the award-history timeline, e.g. "January 2026" */
  date: string;
  /** ISO date (YYYY-MM-DD) the blog post should be dated */
  postDate: string;
  /** Omit or leave empty -> event is skipped on the award-history page, blog post still gets written */
  awards?: string[];
  /** Key into that team's imageMap in app/history<team>/data.ts -- must already exist there */
  imgKey?: string;
  navigatePath?: string;
  /** Blog cover image; defaults to the team's imgKey image, then a fallback */
  cover?: string;
  tags?: string[];
  /** Override the auto-generated excerpt */
  excerpt?: string;
  /** Override the auto-generated blog body (raw HTML) */
  content?: string;
};

const ROOT = path.resolve(fileURLToPath(import.meta.url), "..", "..");

const TEAM_META: Record<Team, { dataFile: string; label: string }> = {
  "2055A": { dataFile: path.join(ROOT, "app/history2055A/data.ts"), label: "2055A Capybaras" },
  "2055X": { dataFile: path.join(ROOT, "app/history2055X/data.ts"), label: "2055X Red Pandas" },
  "2055C": { dataFile: path.join(ROOT, "app/history2055C/data.ts"), label: "2055C The Orcas" },
};

const POSTS_FILE = path.join(ROOT, "app/blog/posts.ts");

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripBullet(award: string): string {
  return award.replace(/^\s*-\s*/, "").trim();
}

function esc(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function escTemplate(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function serializeTimelineItem(item: TimelineItem): string {
  const lines: string[] = ["  {"];
  lines.push(`    title: "${esc(item.title)}",`);
  lines.push(`    location: "${esc(item.location)}",`);
  lines.push(`    date: "${esc(item.date)}",`);
  if (item.imgKey !== undefined) lines.push(`    imgKey: "${esc(item.imgKey)}",`);
  if (item.description !== undefined) lines.push(`    description: "${esc(item.description)}",`);
  if (item.award1 !== undefined) lines.push(`    award1: "${esc(item.award1)}",`);
  if (item.award2 !== undefined) lines.push(`    award2: "${esc(item.award2)}",`);
  if (item.award3 !== undefined) lines.push(`    award3: "${esc(item.award3)}",`);
  if (item.navigatePath !== undefined) lines.push(`    navigatePath: "${esc(item.navigatePath)}",`);
  lines.push("  },");
  return lines.join("\n");
}

function serializeImageMap(imageMap: Record<string, string>): string {
  return Object.entries(imageMap)
    .map(([k, v]) => `  ${/^[a-zA-Z_$][\w$]*$/.test(k) ? k : `"${esc(k)}"`}: "${esc(v)}",`)
    .join("\n");
}

function writeDataFile(dataFile: string, imageMap: Record<string, string>, items: TimelineItem[]) {
  const content = `export const imageMap: Record<string, string> = {
${serializeImageMap(imageMap)}
};

export type TimelineItem = {
  title: string;
  location: string;
  date: string;
  imgKey?: string;
  description?: string;
  award1?: string;
  award2?: string;
  award3?: string;
  navigatePath?: string;
};

export const items: TimelineItem[] = [
${items.map(serializeTimelineItem).join("\n")}
];
`;
  writeFileSync(dataFile, content, "utf8");
}

function serializePost(post: Post): string {
  const tags = post.tags.map((t) => `"${esc(t)}"`).join(", ");
  return `  {
    slug: "${esc(post.slug)}",
    title: "${esc(post.title)}",
    date: "${esc(post.date)}",
    excerpt:
      "${esc(post.excerpt)}",
    cover: "${esc(post.cover)}",
    tags: [${tags}],
    content: \`${escTemplate(post.content)}\`,
  },`;
}

function writePostsFile(posts: Post[]) {
  const content = `export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string;
  tags: string[];
};

export const posts: Post[] = [
${posts.map(serializePost).join("\n")}
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}

export function searchPosts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return posts;
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.join(" ").toLowerCase().includes(q)
  );
}

export function newPost(post: Post) {
  posts.push(post);
}
`;
  writeFileSync(POSTS_FILE, content, "utf8");
}

function renderBlogTitle(ev: EventInput, awards: string[]): string {
  if (awards.length > 0) {
    return `Team ${ev.team} Wins ${stripBullet(awards[0])}${awards.length > 1 ? " & More" : ""} at ${ev.title}!`;
  }
  return `Team ${ev.team} Competes at ${ev.title}`;
}

function renderBlogContent(ev: EventInput, teamLabel: string, awards: string[]): string {
  if (ev.content) return ev.content;
  const cleanAwards = awards.map(stripBullet);
  if (cleanAwards.length > 0) {
    const list =
      cleanAwards.length === 1
        ? `the <strong>${cleanAwards[0]}</strong>`
        : `the ${cleanAwards.slice(0, -1).map((a) => `<strong>${a}</strong>`).join(", ")} and <strong>${cleanAwards[cleanAwards.length - 1]}</strong>`;
    return `
      <p>Congratulations to Team ${ev.team} (${teamLabel}) on a fantastic performance at ${ev.title} in ${ev.location}! The team's hard work and preparation really showed on the field.</p>
      <p>${ev.team} was recognized with ${list} — a great result for the whole team. Way to go, ${ev.team}!</p>
    `;
  }
  return `
    <p>Team ${ev.team} (${teamLabel}) competed at ${ev.title} in ${ev.location}, representing MI3L School with hard work, sharp engineering, and great sportsmanship.</p>
    <p>Congratulations to the team on another great event — we're proud of the effort and can't wait to see what's next!</p>
  `;
}

function renderExcerpt(ev: EventInput, teamLabel: string, awards: string[]): string {
  if (ev.excerpt) return ev.excerpt;
  const cleanAwards = awards.map(stripBullet);
  if (cleanAwards.length > 0) {
    return `Team ${ev.team} (${teamLabel}) competed at ${ev.title} in ${ev.location}, taking home the ${cleanAwards.join(" and ")}.`;
  }
  return `Team ${ev.team} (${teamLabel}) competed at ${ev.title} in ${ev.location}.`;
}

export async function addEvents(events: EventInput[]) {
  const dataModules = {} as Record<Team, { items: TimelineItem[]; imageMap: Record<string, string> }>;
  for (const team of Object.keys(TEAM_META) as Team[]) {
    const mod = await import(pathToFileURL(TEAM_META[team].dataFile).href);
    dataModules[team] = { items: [...mod.items], imageMap: mod.imageMap };
  }
  const postsMod = await import(pathToFileURL(POSTS_FILE).href);
  const posts: Post[] = [...postsMod.posts];

  const touchedTeams = new Set<Team>();
  let postsChanged = false;

  for (const ev of events) {
    const teamLabel = TEAM_META[ev.team].label;
    const awards = (ev.awards ?? []).filter(Boolean);

    if (awards.length > 0) {
      const { items, imageMap } = dataModules[ev.team];
      const alreadyThere = items.some((it) => it.title === ev.title && it.date === ev.date);
      if (!alreadyThere) {
        const newItem: TimelineItem = {
          title: ev.title,
          location: ev.location,
          date: ev.date,
          ...(ev.imgKey !== undefined ? { imgKey: ev.imgKey } : {}),
          description: "Awards:",
          ...(awards[0] ? { award1: `   - ${stripBullet(awards[0])}` } : {}),
          ...(awards[1] ? { award2: `   - ${stripBullet(awards[1])}` } : {}),
          ...(awards[2] ? { award3: `   - ${stripBullet(awards[2])}` } : {}),
          ...(ev.navigatePath ? { navigatePath: ev.navigatePath } : {}),
        };
        items.unshift(newItem);
        touchedTeams.add(ev.team);

        if (ev.imgKey && !imageMap[ev.imgKey]) {
          console.warn(
            `[add-events] Warning: imgKey "${ev.imgKey}" isn't registered in ${ev.team}'s imageMap yet — add it to app/history${ev.team}/data.ts or the image won't render.`
          );
        }
      } else {
        console.log(`[add-events] Skipping history entry for "${ev.title}" (${ev.date}) — already present.`);
      }
    }

    const slug = slugify(`${ev.team}-${ev.title}-${ev.postDate}`);
    if (posts.some((p) => p.slug === slug)) {
      console.log(`[add-events] Skipping blog post "${ev.title}" — slug "${slug}" already exists.`);
      continue;
    }

    const imgPath = ev.imgKey ? dataModules[ev.team].imageMap[ev.imgKey] : undefined;
    const post: Post = {
      slug,
      title: renderBlogTitle(ev, awards),
      date: ev.postDate,
      excerpt: renderExcerpt(ev, teamLabel, awards),
      cover: ev.cover ?? imgPath ?? "/images/logo1.png",
      tags: ev.tags ?? ["Robotics", "Competitions", ...(awards.length ? ["Awards"] : [])],
      content: renderBlogContent(ev, teamLabel, awards),
    };
    posts.unshift(post);
    postsChanged = true;
  }

  for (const team of touchedTeams) {
    writeDataFile(TEAM_META[team].dataFile, dataModules[team].imageMap, dataModules[team].items);
    console.log(`[add-events] Updated app/history${team}/data.ts`);
  }
  if (postsChanged) {
    posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    writePostsFile(posts);
    console.log(`[add-events] Updated app/blog/posts.ts`);
  }
}

async function loadEvents(inputPath: string): Promise<EventInput[]> {
  const resolved = path.resolve(inputPath);
  if (resolved.endsWith(".ts") || resolved.endsWith(".js") || resolved.endsWith(".mjs")) {
    const mod = await import(pathToFileURL(resolved).href);
    return mod.events ?? mod.default;
  }
  return JSON.parse(readFileSync(resolved, "utf8"));
}

async function main() {
  const inputPath = process.argv[2] ?? "scripts/events.json";
  const events = await loadEvents(inputPath);
  if (!Array.isArray(events) || events.length === 0) {
    console.error(`No events found in ${inputPath}`);
    process.exit(1);
  }
  await addEvents(events);
}

// @ts-ignore -- import.meta.main is a Bun/Node runtime extension
if (import.meta.main) {
  main();
}
