"use client";

import React from "react";
import Link from "next/link";

const competitionGroups = [
  {
    team: "2055A",
    label: "High School Team",
    items: [
      "Aug 6-8, 2026 — Mall of America, Bloomington, MN (Sig)",
      "Oct 15-17, 2026 — Harbor Havoc Sig, South Portland, Maine (Sig)",
      "Oct 31, 2026 — Caution Tape Halloween, Markham",
      "Dec 12, 2026 — Brampton",
      "Jan 3-4, 2027 — Sugar Rush, Hershey, PA (Sig)",
      "Feb 20, 2027 — Brampton",
      "End of Feb — Provincial HS, Markham",
      "End of Apr — World HS, TBD",
    ],
    color: "bg-blue-100 text-blue-700",
  },
  {
    team: "2055X MS",
    label: "Middle School Team",
    items: [
      "Sep 18-20, 2026 — Speedway, Indianapolis, IN (Sig)",
      "Oct 31, 2026 — Caution Tape Halloween, Markham",
      "Dec 12, 2026 — Brampton",
      "Jan 20-21, 2027 — Kalahari (MS Sig), Sandusky, OH",
      "Feb 11-12, 2027 — Bots @ Bristol (MS Sig), TN (opt)",
      "Feb 20, 2027 — Brampton",
      "End of Feb — Provincial HS, Markham",
      "End of Apr — World MS, TBD",
    ],
    color: "bg-orange-100 text-orange-700",
  },
  {
    team: "2055C MS",
    label: "Middle School Team",
    items: [
      "Oct 31, 2026 — Caution Tape Halloween, Markham",
      "Dec 12, 2026 — Brampton",
      "Jan 15-16, 2027 — Cambrian College, Sudbury",
      "Feb 11-12, 2027 — Bots @ Bristol (MS Sig), TN (opt)",
      "Feb 20, 2027 — Brampton",
      "End of Feb — Provincial HS, Markham",
      "End of Apr — World MS, TBD",
    ],
    color: "bg-green-100 text-green-700",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            2026-2027 V5RC Competition
          </h1>
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

      {/* SECTION 2: UPCOMING EVENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">V5RC Upcoming Competitions</h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-1">2026-2027 season</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitionGroups.map((group) => (
              <div
                key={group.team}
                className="rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Team</p>
                    <h3 className="text-2xl font-bold text-gray-900">{group.team}</h3>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${group.color}`}>
                    {group.label}
                  </span>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item, index) => (
                    <li
                      key={`${group.team}-${index}`}
                      className="flex items-start gap-3 rounded-xl bg-gray-50 p-3 text-gray-700"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: JOIN CTA */}
      <section className="py-24 bg-gray-50 text-center">
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
