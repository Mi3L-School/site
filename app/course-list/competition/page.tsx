"use client";

import React from "react";
import Link from "next/link";

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">

      {/* SECTION 1: HERO */}
      <section className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            VEX V5 Robotics Competition
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Engineering the future, one robot at a time.
          </p>
        </div>

        {/* Mountain Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] transform rotate-180" aria-hidden="true">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-white">
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: V5RC TEAM STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">V5RC Team Overview</h2>
                <p className="text-gray-600">Building champions through engineering excellence.</p>
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Division:</span>
                  <span>Middle & High School</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Team Size:</span>
                  <span>3-6 Students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Hardware:</span>
                  <a href="https://www.vexrobotics.com/v5" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600">VEX V5 System</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 min-w-[120px]">Software:</span>
                  <span>C++ or Python</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4">Core Team Roles</h3>
              <div className="space-y-4">
                {[
                  { role: "Build Team", desc: "Mechanical engineers focusing on chassis and scoring mechanisms." },
                  { role: "Programming Team", desc: "Developing driver controls and sensor-based autonomous routines." },
                  { role: "Notebook Manager", desc: "Documenting the Engineering Design Process for judged awards." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.role}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">2025 - 2026 Season Roadmap</h2>
            <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">VEX V5RC: Push Back</p>
          </div>
          <div className="relative border-l-4 border-orange-500 max-w-4xl mx-auto pl-8 space-y-12">
            {[
              { date: "May 2025", title: "Season Kickoff", desc: "Initial release of the 'Push Back' game challenge." },
              { date: "Oct 2025 - Jan 2026", title: "Qualifying Events", desc: "Local tournaments and Signature Events." },
              { date: "March 2026", title: "Region Championships", desc: "The high-stakes road to the World Stage.", active: true },
              { date: "April 21-30, 2026", title: "VEX World Championship", desc: "Finals at the America’s Center in St. Louis, Missouri." }
            ].map((event, idx) => (
              <div key={idx} className="relative">
                <div className={`absolute -left-[42px] top-0 w-6 h-6 rounded-full border-4 border-white shadow ${event.active ? 'bg-orange-500 animate-pulse' : 'bg-gray-300'}`}></div>
                <div className={`p-6 rounded-2xl bg-white border ${event.active ? 'border-orange-500 shadow-md' : 'border-gray-100 shadow-sm'}`}>
                  <span className="text-orange-600 font-bold text-xs uppercase">{event.date}</span>
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TEAMS */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Top Mountain Divider */}
        <div className="absolute top-0 left-0 w-full leading-[0]" aria-hidden="true">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-gray-50">
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-5xl font-bold text-center mb-20">Our Teams</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            {["hs-2025.JPG", "ms-2025.JPG", "ag-2025.jpg"].map((img, idx) => (
              <div key={idx} className="w-full sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img src={`/images/teams/${img}`} alt="Team" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "High School Team", awards: "7x", detail: "World Championship Qualifier" },
              { title: "Middle School Team", awards: "5x", detail: "World Championship Qualifier" },
              { title: "All Girls Team", awards: "2x", detail: "Inovate & Judge Awards" }
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-orange-500 transition-all">
                <h4 className="text-gray-400 font-medium mb-2">{stat.title}</h4>
                <div className="flex justify-center items-baseline gap-2">
                  <span className="text-6xl font-bold text-orange-500">{stat.awards}</span>
                  <span className="text-lg font-bold">Awards</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRAINING PROGRAM */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
                New Program
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                VEX V5 Robotics <br />
                <span className="text-orange-500">Training Intensive</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive 8-course series designed to take students from basics to competition-ready engineering excellence.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-orange-500 rounded-xl shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">8 Courses Total</h4>
                    <p className="text-gray-600 text-sm">Apr 11-12, Apr 18-19, May 2-3, May 9-10</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-orange-500 rounded-xl shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">3:00 PM – 5:00 PM</h4>
                    <p className="text-gray-600 text-sm">Every Saturday & Sunday during session dates</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-orange-500 rounded-xl shadow-sm flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Oakville Campus</h4>
                    <p className="text-gray-600 text-sm">1453 Cornwall Rd #2A, Oakville, ON</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="relative bg-gray-900 rounded-3xl p-10 text-white shadow-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm">✨</span>
                  What You'll Learn
                </h3>
                <ul className="space-y-6">
                  {[
                    "Robot Building & Design Principles",
                    "Advanced C++ Coding for V5",
                    "Sensor Integration & Data Logic",
                    "Winning Competition Strategies"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <svg className="w-3 h-3 text-orange-500 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <span className="text-lg font-medium text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Total Program Fee</span>
                    <span className="text-3xl font-bold text-orange-400">$320</span>
                  </div>
                  <p className="text-sm text-gray-500">Limited to ages 10+ | Maximum 12 students per session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}

      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10">Be Our Next Champion</h2>
        <Link
          href="/registration"
          className="inline-flex items-center gap-3 px-12 py-5 bg-orange-500 text-white text-2xl font-bold rounded-2xl shadow-xl hover:bg-orange-600 transition-all hover:scale-105"
        >
          Join Us <span>→</span>
        </Link>
      </section>
    </div>
  );
}