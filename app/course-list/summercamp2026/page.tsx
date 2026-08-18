"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SummerCampPage() {
  const weeklySchedule = [
    {
      dates: "Jul 27 - 31",
      grades: "Grades 1-8",
      morning: "Not offered this week",
      afternoon: "Aerial Drone & Python (1pm - 4pm only)",
    },
    {
      dates: "Aug 4 - 7",
      grades: "Grades 5-11",
      morning: "Aerial Drone & Python or BJJ",
      afternoon: "VEX V5RC Robotics — Days 1-4: Drive Train & Foundation",
    },
    {
      dates: "Aug 10 - 14",
      grades: "Grades 5-11",
      morning: "Aerial Drone & Python or BJJ",
      afternoon: "VEX V5RC Robotics — Days 5-9: Arm & Functions",
    },
    {
      dates: "Aug 17 - 21",
      grades: "Grades 5-11",
      morning: "Aerial Drone & Python or BJJ",
      afternoon: "Science Fair — \"Scientist for Everyone\" Series, Days 1-5",
    },
    {
      dates: "Aug 24 - 28",
      grades: "Grades 5-11",
      morning: "Aerial Drone & Python or BJJ",
      afternoon: "Science Fair — \"Scientist for Everyone\" Series, Days 6-10",
    },
  ];

  const roboticsProgression = [
    { day: "Day 1", title: "Game Analysis and Strategy", detail: "2026-2027 season overview" },
    { day: "Day 2", title: "CAD Drive Train", detail: "Design the robot base" },
    { day: "Day 3", title: "Build Drive Train", detail: "Construct and assemble the drivetrain" },
    { day: "Day 4", title: "Program the Drive Train", detail: "Foundational VEX programming" },
    { day: "Day 5", title: "Test and Drive", detail: "Refine movement and reliability" },
    { day: "Day 6", title: "CAD the Arm", detail: "Design the scoring arm mechanism" },
    { day: "Day 7", title: "Build the Arm", detail: "Construct the arm mechanism" },
    { day: "Day 8", title: "Program the Arm", detail: "Code the arm's functions" },
    { day: "Day 9", title: "Test and Scrimmage", detail: "Put everything together in competition-style play" },
  ];

  const campHighlights = [
    "Days 1-4: Build a working V5RC drive train and foundation",
    "Days 5-9: Design, build, and program a functional arm",
    "Hands-on building, testing, and iteration",
    "VEX programming fundamentals",
    "Competition-style scrimmage and teamwork",
  ];

  const droneProgression = [
    { day: "Day 1", title: "Certified Drone Pilot", detail: "Getting started with CoDrone EDU & Python, first flight, pre/post-flight checklist, TRUST Drone Pilot Certificate, and flight log" },
    { day: "Day 2", title: "Program Basic Movements", detail: "Flight movements: roll, pitch, throttle, and yaw" },
    { day: "Day 3", title: "Sensors & Smart Flight", detail: "Using the bottom and front range sensors for autonomous flight" },
    { day: "Day 4", title: "Piloting for Skills", detail: "Mission strategy for skills challenges; tracking speed and battery data" },
    { day: "Day 5", title: "Teamwork & Autonomous Flight", detail: "Team piloting and autonomous flight — 2025-2026 mission through Aug 11, then the new 2026-2027 mission" },
  ];

  const droneHighlights = [
    "All drones provided — no equipment to bring",
    "Python programming with CoDrone EDU",
    "TRUST Drone Pilot Certificate upon completion",
    "Autonomous flight using onboard sensors",
    "Team-based piloting and mission strategy",
  ];

  const scienceFairProgression = [
    { day: "Day 1", title: "The Types of Projects" },
    { day: "Day 2", title: "What Makes a Good Project" },
    { day: "Day 3", title: "Project Report" },
    { day: "Day 4", title: "What Makes a Good Hypothesis" },
    { day: "Day 5", title: "Background Information" },
    { day: "Day 6", title: "Materials and Procedure" },
    { day: "Day 7", title: "Test Your Knowledge" },
    { day: "Day 8", title: "Results" },
    { day: "Day 9", title: "Analysis and Discussion" },
    { day: "Day 10", title: "Conclusions and Next Steps" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-orange-400 font-bold tracking-widest uppercase mb-4 block">Summer 2026 Adventure · Jul 27 - Aug 28</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Drone, BJJ & Robotics Summer Camp
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose Aerial Drone & Python or Brazilian Jiu-Jitsu (BJJ) most mornings, then dive into VEX V5RC Robotics or our Science Fair series most afternoons — a five-week, hands-on summer experience for grades 1-11.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#schedule" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all">
              View Schedule
            </Link>
            <Link href="/registration?type=summercamp" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition-all">
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
                  <span>Grades 1-11 (varies by week — see schedule below)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">Time</div>
                  <span>9:00 AM – 4:30 PM (Jul 27-31 runs 1:00 PM – 4:30 PM only)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 font-bold">Tech</div>
                  <span>Aerial Drone & Python, BJJ, VEX V5RC, and Science Fair</span>
                </li>
              </ul>

              {/* Daily Structure */}
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
                      <td className="p-4">Aerial Drone & Python or Brazilian Jiu-Jitsu (BJJ)</td>
                    </tr>
                    <tr className="border-t bg-blue-50/30">
                      <td className="p-4 text-gray-500 font-semibold">12pm - 1pm</td>
                      <td className="p-4 text-gray-500 italic">Supervised Lunch Break</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-blue-600 font-semibold">1pm - 4pm</td>
                      <td className="p-4">VEX V5RC Robotics or Science Fair (varies by week)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-green-600 font-semibold">4pm - 4:30pm</td>
                      <td className="p-4">Pickup Window</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500 italic">
                Note: Jul 27-31 (Grades 1-8) runs a single 1pm-4pm session only — no morning session that week. See the weekly schedule below.
              </p>

              {/* Weekly Schedule */}
              <div className="mt-10 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 font-bold">Dates</th>
                      <th className="p-4 font-bold">Grades</th>
                      <th className="p-4 font-bold">Morning</th>
                      <th className="p-4 font-bold">Afternoon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeklySchedule.map((week) => (
                      <tr key={week.dates} className="border-t align-top">
                        <td className="p-4 font-semibold text-blue-900 whitespace-nowrap">{week.dates}</td>
                        <td className="p-4 text-gray-600 whitespace-nowrap">{week.grades}</td>
                        <td className={week.morning === "Not offered this week" ? "p-4 text-gray-400 italic" : "p-4 text-orange-600"}>{week.morning}</td>
                        <td className="p-4 text-blue-600">{week.afternoon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Visuals & Intro */}
            <div className="space-y-8">
              <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl bg-gray-200 relative">
                 <Image
                   src="/images/summer_camp/Drone_Camp_Summer_2026.PNG"
                   alt="Aerial Drone Summer Camp Flyer"
                   fill
                   className="object-cover"
                   style={{ objectPosition: 'center 50%' }}
                   priority
                 />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4">
                Full-Day Immersion
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Most mornings, campers choose between mastering <strong>Aerial Drone &amp; Python</strong> or training in <strong>Brazilian Jiu-Jitsu (BJJ)</strong>. After lunch, the afternoon rotates week by week through <strong>VEX V5RC</strong> robotics and our <strong>Science Fair</strong> series — see the full week-by-week breakdown above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AERIAL DRONE & PYTHON PROGRAM */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-orange-100 text-orange-700">
              Aerial Drone & Python · Jul 27 - Aug 28
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A 5-Day Flight & Coding Curriculum
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              This 5-day curriculum runs as the full-day program Jul 27-31 (Grades 1-8), then continues as the 9am-12pm morning option throughout August (Grades 5-11). All drones are provided.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Camp Focus</h3>
              <div className="space-y-4">
                {droneHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-sm text-white">
              <h3 className="text-2xl font-bold mb-6">Daily Progression</h3>
              <ol className="space-y-4">
                {droneProgression.map((item) => (
                  <li key={item.day} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex-shrink-0 w-20 text-sm font-bold uppercase tracking-wide text-orange-400">
                      {item.day}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VEX V5RC ROBOTICS PROGRAM */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-blue-100 text-blue-700">
              VEX V5RC Deep Dive · Aug 4 - 14
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Structured 9-Day Robotics Journey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              During the Aug 4-14 afternoons (Grades 5-11), students move through drive train, foundation, arm building, and functions in a clear progression, building confidence and teamwork day by day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Camp Focus</h3>
              <div className="space-y-4">
                {campHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-sm text-white">
              <h3 className="text-2xl font-bold mb-6">Weekly Progression</h3>
              <ol className="space-y-4">
                {roboticsProgression.map((item) => (
                  <li key={item.day} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex-shrink-0 w-20 text-sm font-bold uppercase tracking-wide text-orange-400">
                      {item.day}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-gray-400">
                Days 1-4 (drive train &amp; foundation) run Aug 4-7, and Days 5-9 (arm &amp; functions) run Aug 10-14.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SCIENCE FAIR PROGRAM */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-green-100 text-green-700">
              Science Fair · Aug 17 - 28
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scientist for Everyone: A 10-Day Series
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              During the Aug 17-28 afternoons (Grades 5-11), campers learn to think and work like scientists — from choosing a project to presenting their conclusions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scienceFairProgression.map((item) => (
                <div key={item.day} className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex-shrink-0 w-20 text-sm font-bold uppercase tracking-wide text-green-600">
                    {item.day}
                  </div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Days 1-5 run Aug 17-21, and Days 6-10 run Aug 24-28.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT TO BRING & PREPARE
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What to Bring & Prepare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">For Drone &amp; Python</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All drone equipment provided
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Water bottle (refillable)
                </li>
          
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">For Robotics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All equipment provided
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Laptop/tablet (optional)
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">General</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All equipment provided
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Water bottle
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

    
      {/* SECTION 7: WHY CHOOSE US */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Camp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-500 mb-2">5</div>
              <h4 className="text-lg font-semibold mb-2">Weeks of Camp</h4>
              <p className="text-gray-300">Choose Aerial Drone &amp; Python or BJJ most mornings, then VEX V5RC Robotics or Science Fair most afternoons.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-500 mb-2">1-11</div>
              <h4 className="text-lg font-semibold mb-2">Grade Range</h4>
              <p className="text-gray-300">Inclusive programming for all experience levels, from beginners to advanced learners.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <h4 className="text-lg font-semibold mb-2">Hours</h4>
              <p className="text-gray-300">Full week of immersive learning combining discipline, teamwork, and coding skills.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-500 mb-2">1:8</div>
              <h4 className="text-lg font-semibold mb-2">Student Ratio</h4>
              <p className="text-gray-300">Low instructor-to-student ratio ensures personalized attention and progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Do I need prior experience?</h4>
              <p className="text-gray-700">No! Drone piloting &amp; Python coding, BJJ, robotics, and Science Fair are all designed for all experience levels. Our instructors will work with everyone from complete beginners to experienced students.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">What if my child only wants to do half-day?</h4>
              <p className="text-gray-700">For Aug 4-28, we offer flexible scheduling! You can choose morning-only (Drone &amp; Python or BJJ) or afternoon-only (Robotics/Science Fair, depending on the week) sessions. Pricing is adjusted accordingly. Note: Jul 27-31 (Grades 1-8) only runs as a single 1pm-4pm afternoon session.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Are meals provided?</h4>
              <p className="text-gray-700">Lunch is not included, but participants should bring their lunch. We provide snacks and water throughout the day. Please inform us of any dietary restrictions.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">What about safety?</h4>
              <p className="text-gray-700">Safety is our top priority! All instructors are certified, equipment is regularly inspected, and we maintain a safe learning environment with proper protocols.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Can I sign up for multiple weeks?</h4>
              <p className="text-gray-700">Yes! We offer multi-week registrations with special discounts. Contact us for bulk pricing and package deals.</p>
            </div>
          </div>
        </div>
      </section>

   

      {/* SECTION 9: CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Spot for Summer</h2>
        <p className="text-xl text-blue-200 mb-10">Spaces are limited to ensure quality instruction for both Drone and Robotics programs.</p>
        <Link
          href="/registration?type=summercamp"
          className="inline-flex items-center gap-3 px-12 py-5 bg-orange-500 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:bg-orange-600 transition-all hover:scale-105"
        >
          Register for Camp
        </Link>
      </section>
    </div>
  );
}