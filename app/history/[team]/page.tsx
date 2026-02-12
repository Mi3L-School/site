"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const imageMap: Record<string, string> = {
  a: "/images/a.webp",
  logo1: "/images/logo1.png",
  logo2: "/images/logo2.png",
  logo3: "/images/logo3.jpg",
  e: "/images/e.webp",
  b: "/images/b.webp",
  c: "/images/c.webp",
  d: "/images/d.webp",
  f: "/images/f.webp",
  g: "/images/g.webp",
  h: "/images/h.webp",
  i: "/images/i.png",
  j: "/images/j.png",
  k: "/images/k.webp",
  l: "/images/l.jpg",
  m: "/images/m.webp",
  n: "/images/teams/2055x_team.webp",
};

type TimelineItem = {
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

const teamData: Record<string, { name: string; items: TimelineItem[] }> = {
  "2055a": {
    name: "Team 2055A",
    items: [
      {
        title: "VEX Robotics World Championship",
        location: "Dallas TX",
        date: "May 9-11th, 2025 - Dallas TX",
        imgKey: "n",
        description: "Awards:",
        award1: "   - Design Award (2055A)",
        navigatePath: "/achievements",
      },
      {
        title: "Battle of the Bots VRC Signature Event",
        location: "Bristol TN",
        date: "Febuary 9-10th, 2024 - Bristol TN",
        imgKey: "f",
        description: "Awards:",
        award1: "   - Robot Skills Champion (2055A)",
        award2: "   - Think Award (2055A)",
        navigatePath: "/achievements",
      },
      {
        title: "Canadian Open VRC Signature Event",
        location: "Markham ON",
        date: "January 27-28th, 2024 - Markham ON",
        imgKey: "a",
        description: "Awards:",
        award1: "   - Think Award (2055A)",
        navigatePath: "/achievements",
      },
    ],
  },
  "2055x": {
    name: "Team 2055X",
    items: [
      {
        title: "Gateway to the West VEX V5 Robotics Competition Signature Event",
        location: "Triadelphia WV",
        date: "January 29-30th, 2025 - Triadelphia WV",
        imgKey: "m",
        description: "Awards:",
        award1: "   - Judges Award (2055X)",
        navigatePath: "/achievements",
      },
      {
        title: "Ontario VRC Over/Under Provincial Championships",
        location: "Markham ON",
        date: "Febuary 23-24th, 2024 - Markham ON",
        imgKey: "c",
        description: "Awards:",
        award1: "   - Tournament Champions (2055X)",
        navigatePath: "/achievements",
      },
      {
        title: "iDESIGN Central Toronto VEX VRC Robotics Competition",
        location: "Toronto ON",
        date: "Febuary 10th, 2024 - Toronto ON",
        imgKey: "d",
        description: "Awards:",
        award1: "   - Build Award (2055X)",
        award2: "   - Tournament Champions (2055X)",
        navigatePath: "/achievements",
      },
    ],
  },
  "2055c": {
    name: "Team 2055C",
    items: [
      {
        title: "Regional VEX Robotics Qualifier",
        location: "Ontario ON",
        date: "November 2024 - Ontario ON",
        imgKey: "",
        description: "Awards:",
        award1: "   - Tournament Participation Award",
        navigatePath: "/achievements",
      },
      {
        title: "Fall VEX Competition",
        location: "Brampton ON",
        date: "September 2024 - Brampton ON",
        imgKey: "",
        description: "Awards:",
        award1: "   - Rookie Inspiration Award",
        navigatePath: "/achievements",
      },
    ],
  },
};

export default function TeamHistory({
  params,
}: {
  params: { team: string };
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const teamId = params.team.toLowerCase();
  const team = teamData[teamId];

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Team Not Found</h1>
          <p className="text-gray-600 mb-6">The team history you're looking for doesn't exist.</p>
          <Link href="/history" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Teams
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/history" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Teams
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {team.name} Award History
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {team.items.map((item, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;
              const imagePath = item.imgKey && imageMap[item.imgKey] ? imageMap[item.imgKey] : null;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="hidden md:block md:w-1/2"></div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all ${
                        isHovered
                          ? "bg-orange-500 scale-125 border-orange-500"
                          : "bg-gray-900 border-gray-900"
                      }`}
                    ></div>
                  </div>

                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pl-12 md:pr-8" : "md:pr-12 md:pl-8"
                    } ml-16 md:ml-0`}
                  >
                    <Link
                      href={item.navigatePath || "#"}
                      className="block group"
                    >
                      <div
                        className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                          isHovered
                            ? "border-orange-500 shadow-xl transform scale-105"
                            : "border-gray-300"
                        } transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                            {item.date}
                          </span>
                          {isHovered && (
                            <svg
                              className="w-5 h-5 text-orange-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mb-3">{item.location}</p>

                        {item.description && (
                          <p className="text-gray-700 font-medium mb-3">
                            {item.description}
                          </p>
                        )}

                        <div className="space-y-2">
                          {item.award1 && (
                            <div className="flex items-start">
                              <svg
                                className="shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{item.award1}</span>
                            </div>
                          )}
                          {item.award2 && (
                            <div className="flex items-start">
                              <svg
                                className="shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{item.award2}</span>
                            </div>
                          )}
                          {item.award3 && (
                            <div className="flex items-start">
                              <svg
                                className="shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{item.award3}</span>
                            </div>
                          )}
                        </div>

                        {imagePath && (
                          <div className="mt-4 rounded-lg overflow-hidden border-2 border-gray-200">
                            <Image
                              src={imagePath}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
