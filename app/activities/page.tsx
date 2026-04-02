"use client";

import React from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    tag: "ADC",
    date: "Apr 19, 2026",
    title: "Aerial Drone Competition",
    description: "Aerial Drone Competition at Mi3L School club location Oakville.",
    location: "Oakville, ON",
    link: null,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    tag: "Worlds",
    date: "Apr 21-24, 2026",
    title: "2026 VEX Robotics World Championship (High School)",
    description: "2055A V5RC HS team will compete in 2026 VEX Robotics World Championship High School in St. Louis, Missouri.",
    location: "America's Center Convention Complex, St. Louis, MO",
    link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4025.html#general-info",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 3,
    tag: "Worlds",
    date: "Apr 25-27, 2026",
    title: "2026 VEX Robotics World Championship (Middle School)",
    description: "2055X V5RC MS team will compete in 2026 VEX Robotics World Championship Middle School in St. Louis, Missouri.",
    location: "America's Center Convention Complex, St. Louis, MO",
    link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4026.html#general-info",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 4,
    tag: "Championship",
    date: "May 15-16, 2026",
    title: "North Central Aerial Drone Championship",
    description: "2055X and 2055A ADC HS and MS will compete at North Central Aerial Drone Championship in Flint, Michigan.",
    location: "Kettering University, Flint, MI",
    link: null,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 5,
    tag: "Competition",
    date: "Jun 12-14, 2026",
    title: "2026 VEX AI Robotics Competition Championship",
    description: "2055C is continuing participation in VEX AI with 2055A V5RC HS team at UC Berkeley.",
    location: "UC Berkeley, CA",
    link: null,
    color: "bg-green-100 text-green-600"
  }
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Upcoming Activities
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Stay updated with our latest competitions, events, and championships.
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
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-1">Special events and competitions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="group p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${event.color}`}>
                    {event.tag}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {event.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 pb-6 border-b border-gray-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>

                {event.link ? (
                  <Link 
                    href={event.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                  >
                    Learn More <span className="text-lg">→</span>
                  </Link>
                ) : (
                  <span className="text-gray-300 font-bold cursor-not-allowed">
                    Details Coming Soon
                  </span>
                )}
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
