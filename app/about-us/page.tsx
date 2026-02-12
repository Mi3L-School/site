import Image from "next/image";
import Link from "next/link";

const coaches = [
  {
    name: "Chairmaine Li",
    title: "Head Coach & Robotics Lead",
    img: "/images/coaches/coach1.jpeg",
    bio: "Aerospace engineer with 8+ years coaching experience. Specializes in drivetrain design and strategic programming for competition teams.",
  },
  {
    name: "Connor",
    title: "Coach",
    img: "/images/coaches/coach2.jpeg",
    bio: "Passionate educator focused on project-based learning.",
  },
  {
    name: "Daniel Kim",
    title: "AI & Coding Coach",
    img: "/images/coaches/coach3.jpeg",
    bio: "Software engineer and competition mentor. Daniel teaches algorithmic thinking, vision, and autonomous behaviors.",
  },
  {
    name: "Sarah Lopez",
    title: "Technical Coach",
    img: "/images/coaches/coach4.jpeg",
    bio: "Mechanical design specialist who guides teams on precision mechanisms, CAD workflows, and prototyping.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Meet Our Coaches</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">Our coaching team blends industry experience with championship-proven mentoring to help students excel.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((c) => (
              <article key={c.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="p-6 flex items-center gap-6">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm flex-shrink-0">
                      <Image src={c.img} alt={c.name} width={128} height={128} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{c.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{c.title}</p>
                      <p className="text-sm text-gray-700">{c.bio}</p>
                    </div>
                  </div>
                  {/* removed contact button and availability text per request */}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-3">Join our team</h2>
            <p className="text-gray-700 mb-4">We’re always looking for passionate coaches and mentors. If you have teaching experience or technical expertise, consider applying.</p>
            <Link href="/jobs" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">View open positions</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
