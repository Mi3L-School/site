"use client";

import Image from "next/image";
import Link from "next/link";

const coaches = [
  {
    name: "Charmaine Li",
    title: "Founder & Head Coach",
    img: "/images/coaches/coach1.jpeg",
    bio: "Founder of mi3l school with 22 years of experience in Aerospace and Control Systems. Charmaine is a seasoned lead coach and judge for V5RC, VEX AI, and Aerial Drone competitions. She specializes in teaching PID controllers and the Engineering Design Process, focusing on building grit, leadership, and problem-solving skills in the next generation of engineers.",
  },
  {
    name: "Connor Zhou",
    title: "V5RC Lead Instructor & Founder",
    img: "/images/coaches/coach2.jpeg",
    bio: "Studying Mechatronics Engineering at the University of Waterloo. As the founder of 2055, Connor has led teams to the VEX World Championships every year. A former captain of 2055A and a 2025 VEXU World Build Award winner, he is an expert in CAD design, 3D printing, and high-performance competitive strategy.",
  },
  {
    name: "Noah Sun",
    title: "Instructor",
    img: "/images/coaches/coach5.jpg",
    bio: "A Mechatronics Engineering student at the University of Waterloo with 6 years of VEX experience. As captain of 16868C, Noah created ArkLib, a versatile programming library that powered four consecutive World Championship qualifications. On team 2055A, he worked extensively with Intel Depth Cameras and Radio Link technology. He is also the lead frontend developer for the VEX scouting application, Elapse.",
  },
  {
    name: "Edison Ying",
    title: "Programming Instructor",
    img: "/images/coaches/coach4.jpeg",
    bio: "A Computer Science student at the University of Waterloo and former programming lead for 2055A. Edison developed custom scouting and autonomous routine web tools that have supported numerous VEX teams. He is proficient in C++, Python, and JavaScript, and brings a wealth of experience in sensor-based autonomous logic and competitive data analysis.",
  },
  {
    name: "Jason Yang",
    title: "Software & Media Instructor",
    img: "/images/coaches/coach3.jpeg",
    bio: "Studying Computer Science at McMaster University and a former programmer for 2055A. Jason was part of the team that secured the World Skills Champion title in the VEX AI competition. He blends technical software development skills with several years of experience in professional video editing for non-profit organizations.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 tracking-tight">
          About Us
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="/achievements" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium">Achievements</Link>
          <Link href="/history" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium">History</Link>
          <Link href="/about" className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg font-medium">About Us</Link>
        </div>

        {/* COACHES SECTION */}
        <section className="space-y-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our team features world-class competitors and developers now pursuing engineering and computer science degrees at top-tier universities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {coaches.map((coach, i) => (
              <div key={i} className="flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="md:w-72 lg:w-80 relative h-72 md:h-auto overflow-hidden">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-col mb-4">
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-1">{coach.title}</span>
                    <h3 className="text-3xl font-bold text-gray-900">{coach.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {coach.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="bg-gray-900 text-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Connect With Us</h2>
                <p className="text-gray-400 text-lg mb-8">Ready to learn from World-Class mentors? Inquire about our Summer 2026 courses today.</p>
                <div className="space-y-4">
                  <a href="mailto:admin@mi3lschool.org" className="flex items-center gap-4 text-xl hover:text-orange-500 transition-colors">
                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sm">✉</span>
                    admin@mi3lschool.org
                  </a>
                  <a href="tel:+14165235965" className="flex items-center gap-4 text-xl hover:text-orange-500 transition-colors">
                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sm">📞</span>
                    (416) 523-5965
                  </a>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center backdrop-blur-sm">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Programs</p>
                <p className="text-xl font-medium mb-8">V5RC • VEX AI • Aerial Drone</p>
                <Link href="/registration" className="inline-block px-10 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-1">
                  Register Now
                </Link>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}