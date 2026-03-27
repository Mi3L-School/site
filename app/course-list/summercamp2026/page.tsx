"use client";

import React from "react";
import Link from "next/link";

export default function SummerCampPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-orange-400 font-bold tracking-widest uppercase mb-4 block">Summer 2026 Adventure</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            BJJ & Robotics Camp
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Build discipline on the mats and innovation in the lab. A unique full-day experience for ages 8-14.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#schedule" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all">
              View Schedule
            </Link>
            <Link href="/registration" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition-all">
              Register Now
            </Link>
          </div>
        </div>

        {/* Decorative Mountain Divider (matching your provided style) */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] transform rotate-180" aria-hidden="true">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-white">
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: QUICK INFO CARD */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Camp Details */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Camp Logistics</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600 font-bold">Age</div>
                  <span>8 - 14 Years Old</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">Time</div>
                  <span>9:00 AM – 4:30 PM (Half Day Available)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 font-bold">Tech</div>
                  <span>VEX V5, IQ, and FLL</span>
                </li>
              </ul>

              {/* Schedule Table */}
              <div className="mt-10 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 font-bold">Time</th>
                      <th className="p-4 font-bold">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 text-orange-600 font-semibold">9am - 12pm</td>
                      <td className="p-4">Brazilian Jiu-Jitsu Instruction</td>
                    </tr>
                    <tr className="border-t bg-blue-50/30">
                      <td className="p-4 text-gray-500 font-semibold">12pm - 1pm</td>
                      <td className="p-4 text-gray-500 italic">Supervised Lunch Break</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-blue-600 font-semibold">1pm - 4pm</td>
                      <td className="p-4">VEX Robotics (FLL / IQ / V5)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-green-600 font-semibold">4pm - 4:30pm</td>
                      <td className="p-4">Pickup Window</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Visuals & Intro */}
            <div className="space-y-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-200 relative">
                 {/* Placeholder for your BJJ/Robot Image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-sm">
                   [ Place Camp Image Here ]
                 </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4">
                Full-Day Immersion
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our morning sessions focus on the physical and mental discipline of <strong>Brazilian Jiu-Jitsu</strong>. After lunch, we shift gears into high-tech engineering with <strong>VEX Robotics</strong>, covering everything from LEGO building to advanced C++ coding.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      {/* SECTION 4: CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Spot for Summer</h2>
        <p className="text-xl text-blue-200 mb-10">Spaces are limited to ensure quality instruction for both BJJ and Robotics.</p>
        <Link
          href="/registration"
          className="inline-flex items-center gap-3 px-12 py-5 bg-orange-500 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:bg-orange-600 transition-all hover:scale-105"
        >
          Register for Camp
        </Link>
      </section>
    </div>
  );
}