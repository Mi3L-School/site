"use client";

import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    name: "High School Team",
    img: "/images/teams/2055a_team.jpg",
    desc: "Our High School team competes at the highest level, tackling advanced robotics challenges and representing MI3L School at regional, national, and world events. Members focus on engineering, programming, and leadership skills.",
  },
  {
    name: "Middle School Team",
    img: "/images/teams/2055x_team.webp",
    desc: "The Middle School team is designed for students eager to learn robotics fundamentals and teamwork. They participate in VEX and other competitions, building a strong foundation for future success.",
  },
  {
    name: "All Girl Team",
    img: "/images/teams/2055c_team.jpg",
    desc: "Our Girl Team empowers young women in STEM, providing mentorship, hands-on experience, and a supportive environment. They compete in robotics events and inspire the next generation of female engineers.",
  },
];

export default function CompetitionPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">MI3L School Competition Teams</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">Explore our robotics competition teams and discover how MI3L School students excel in STEM, teamwork, and leadership.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((team) => (
              <article key={team.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                <div className="relative h-56 w-full">
                  <Image src={team.img} alt={team.name} fill className="object-cover rounded-t-2xl" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-blue-700 mb-2">{team.name}</h2>
                  <p className="text-gray-700 mb-4">{team.desc}</p>
                  <Link href="/registration" className="mt-auto inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Join This Team</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Compete?</h2>
            <p className="text-gray-700 mb-4">MI3L School offers expert coaching, hands-on learning, and a supportive environment for all competition teams. Sign up to join or learn more!</p>
            <Link href="/registration" className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Register Now</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
