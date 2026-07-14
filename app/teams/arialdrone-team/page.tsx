import Image from "next/image";
import Link from "next/link";

const members = [
  { name: "Ethan Nguyen", role: "Pilot & Flight Coordinator", image: "/images/teams/ethans.png" },
  { name: "Lila Green", role: "Airframe Design Lead", image: "/images/teams/ethanw.png" },
  { name: "Amina Hussain", role: "Sensor & Navigation Engineer", image: "/images/teams/ayush.png" },
  { name: "Diego Cruz", role: "Safety Officer & Data Analyst", image: "/images/teams/justin.png" },
];

export default function ArialDroneTeamPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-100">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 font-semibold">ArialDrone</p>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">ArialDrone Team</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            The ArialDrone team trains students in aerial robotics, drone control, and mission planning for precision flight challenges.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-8">
              <div className="rounded-3xl bg-white p-10 shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Team Introduction</h2>
                <p className="mt-5 text-gray-600 leading-8">
                  Our ArielDrone team focuses on drone aerodynamics, flight controls, and the safe operation of aerial robotics. Students learn mission planning, stability tuning, and real-time decision making.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-10 shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Member Roles</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {members.map((member) => (
                    <div key={member.name} className="rounded-2xl border border-gray-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-200 bg-white">
                          <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                          <p className="mt-2 text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Flight operations</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  The team practices precise takeoff, navigation, and landing routines while integrating sensors for obstacle avoidance and path planning.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Why join?</h3>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Master remote flight control and aerial design</li>
                  <li>• Develop skills in sensors, mapping, and automation</li>
                  <li>• Learn safe operation for competitive drone missions</li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link href="/teams" className="rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50">
              Back to Teams Home
            </Link>
            <Link href="/teams/vexrc-all-girl-team" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">
              View All Girl Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
