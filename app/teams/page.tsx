import Link from "next/link";

const teamCards = [
  {
    path: "/teams/vexrc-high-school-team",
    title: "VEXRC High School Team",
    description: "A competitive high school robotics squad focused on advanced design, programming, and tournament success.",
  },
  {
    path: "/teams/vexrc-middle-school-team",
    title: "VEXRC Middle School Team",
    description: "A rising middle school team learning fundamentals of engineering, strategy, and collaboration.",
  },
  {
    path: "/teams/vexrc-all-girl-team",
    title: "VEXRC All Girl Team",
    description: "An empowering all-girl robotics team driving creative solutions and peer mentorship.",
  },
  {
    path: "/teams/arialdrone-team",
    title: "ArialDrone Team",
    description: "Aerial robotics experts training in drone flight, navigation, and sensor-based missions.",
  },
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-100">
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 font-semibold">Team Pages</p>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">Our Competitive Teams</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the different teams at Mi3L School, each with a unique mission, coaching style, and student leadership structure.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {teamCards.map((team) => (
              <Link
                key={team.path}
                href={team.path}
                className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">Team</p>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">{team.title}</h2>
                <p className="mt-4 text-gray-600 leading-7">{team.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-orange-600 font-semibold">
                  <span>Learn more</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
