"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RoboticsPage() {
  const [isOutlineExpanded, setIsOutlineExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            V5RC Program
          </h1>
        </div>

        {/* Mountain Shape Divider */}
        <div 
          className="absolute bottom-0 left-0 w-full leading-[0] transform rotate-180" 
          aria-hidden="true"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 100" 
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[100px] fill-white"
          >
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: V5RC INFO & VIDEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Info Card */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  src="/images/logo.png" 
                  alt="VEX Robotics Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Age:</span>
                  <span>Grades 6-12</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Team Size:</span>
                  <span>4-10</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Hardware:</span>
                  <a href="https://www.vexrobotics.com/v5" target="_blank" rel="noopener" className="underline hover:text-orange-600">VEX V5</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Programming:</span>
                  <span>C/C++</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Video & Heading */}
            <div className="space-y-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ocmONiVun9M?controls=1&rel=0" 
                  title="VEX V5 Robotics Competition : Push Back | 2025-2026 Game"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4">
                Age: Grades 6 - 12
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT IS VRC? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/homepage/world1.webp" 
                alt="Students with Robotics" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right: Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                V5RC... What Is It Exactly?
              </h2>
              <div className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                <Link href="/registration">
                  Join Us <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>VRC (VEX Robotics Competition) brings STEM skills to life!</p>
                <p className="p-4 bg-orange-100/50 rounded-lg border-l-4 border-orange-500">
                  Students join a team, build and program robots, and compete with teams all across Canada and the world.
                </p>
                <p>
                  Matches are 2‑on‑2 alliances on a game field where teams work together to outscore their opponents with their robots. Local and regional tournaments lead up to VEX Worlds—the ultimate global championship.
                </p>
                <p>
                  With over 20,000 teams worldwide, VRC is the perfect hands‑on introduction to STEM, engineering, and computer science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 8: ACHIEVEMENTS */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Top Mountain Divider */}
        <div className="absolute top-0 left-0 w-full leading-[0]" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-gray-50">
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
           <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">Our Achievements</h2>
           </div>

           {/* Achievements Carousel (Simplified for now) */}
           <div className="flex flex-wrap justify-center gap-8 mb-24">
              {[
                "/images/achievement/world_championship.webp",
                "/images/achievement/ontario_champion.webp",
                "/images/achievement/signature.jpg"
              ].map((img, idx) => (
                <div key={idx} className="w-80 group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 border border-white/10">
                    <img src={img} alt={`Achievement ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                </div>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { title: "Ontario Provincial Champion", count: "3x" },
                { title: "Worlds Qualifiers", count: "4x" },
                { title: "World Division Champion", count: "1x" }
              ].map((stat, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 group hover:border-orange-500/50 transition-all">
                  <h4 className="text-xl text-gray-400 mb-4 h-16 flex items-center justify-center">{stat.title}</h4>
                  <p className="text-6xl font-bold text-orange-500 group-hover:scale-110 transition-transform">{stat.count}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 9: CTA FOOTER */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Be Our Next Champion</h2>
           <div className="inline-block">
             <Link 
               href="/registration" 
               className="flex items-center gap-3 px-12 py-5 bg-orange-500 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:bg-orange-600 transition-all hover:scale-105"
             >
               Join Us
               <svg className="w-6 h-6 fill-current" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
                 <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
               </svg>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}