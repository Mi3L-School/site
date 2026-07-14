import Image from "next/image";
import Link from "next/link";

const members = [
  { name: "Sophia Xu", role: "Team Captain & Program Lead", image: "/images/teams/sophia.png" },
  { name: "Catherine", role: "Build Lead & Driver", image: "/images/teams/catherine.png" },
 ];

export default function VexrcAllGirlTeamPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-100">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 font-semibold">VEXRC All Girl</p>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">VEXRC All Girl Team</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            An all-girl robotics team that builds skills, confidence, and leadership while competing in VEX Robotics events.
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
                  The All Girl Team is dedicated to creating a welcoming environment for female-identifying students to learn robotics, engineering, and public speaking while preparing for competition.
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
                <h3 className="text-2xl font-bold text-gray-900">Inclusive leadership</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  This team emphasizes supportive leadership and cooperative problem solving while preparing each student to play a strong role in competition.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Why join?</h3>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• Build technical skills in a collaborative team</li>
                  <li>• Grow confidence through presentations and awards</li>
                  <li>• Connect with mentors and female STEM leaders</li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link href="/teams" className="rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50">
              Back to Teams Home
            </Link>
            <Link href="/teams/arialdrone-team" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">
              View ArialDrone Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
