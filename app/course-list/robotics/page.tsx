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
                  src="https://silverowlrobotics.com/wp-content/uploads/2025/03/vex_robotics_logo-1.png" 
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
                src="https://silverowlrobotics.com/wp-content/uploads/2025/02/Image_20250208183945-768x1024.jpg" 
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

      {/* SECTION 4: BEGINNER FRIENDLY / PROFILES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beginner Friendly, Yet Competitive
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Learn About Our Two Main Member Profiles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Beginner Card */}
            <div className="relative p-10 bg-gray-900 text-white rounded-3xl overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <svg className="w-10 h-10 text-orange-500 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <h3 className="text-3xl font-bold">Beginner</h3>
                </div>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-left">
                  <p>If you&apos;re an absolute beginner and feel VEX Robotics might be too challenging, do NOT worry!</p>
                  <p>Our club is great at accommodating beginners like you through our extensive <strong className="text-orange-400">12 Week Training Program</strong> and <strong className="text-orange-400">Expert Coaching</strong>.</p>
                  <p>After training completion, you&apos;ll start off on a learning team so you and your teammates can learn the foundation of Vex Robotics together before you move to advanced.</p>
                </div>
              </div>
            </div>

            {/* Experienced Card */}
            <div className="relative p-10 bg-gray-900 text-white rounded-3xl overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <svg className="w-10 h-10 text-orange-500 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <h3 className="text-3xl font-bold">Experienced</h3>
                </div>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-left">
                  <p>If you&apos;re already experienced (have done VEX Robotics for at least one season), you&apos;ll start off on an experienced team.</p>
                  <p>You&apos;ll be able to start practicing the <strong className="text-orange-400">FIRST DAY</strong> the new VRC Season begins and gain an edge over your competition.</p>
                  <p>Our World-Class Coaches are there for the full day at 5+ days a week to give you guidance and coaching throughout the entire season.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 12 WEEK TRAINING */}
      <section className="py-16 bg-gray-900 text-white overflow-hidden relative border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Content */}
              <div className="space-y-8">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">12 Week Training Program (For Beginners)</h2>
                  <div className="space-y-4 text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    <p>Dive into the exciting world of VEX Robotics, where you&apos;ll learn the principles of robotics, engage in the engineering design process, and get hands-on with build and code to bring your robot to life.</p>
                    <p>Forget about those boring after-school classes of theory after theory, and get hands-on in group activities to build exciting robots!</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Class Size */}
                  <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-1">Class Size</h4>
                    <p className="text-gray-400 text-sm">3-6 students per class</p>
                  </div>
                  {/* Hands-On Groups */}
                  <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-1">Hands-On Groups</h4>
                    <p className="text-gray-400 text-sm">Groups working on separate robots per class</p>
                  </div>
                </div>

                {/* Program Outline Accordion */}
                <div 
                  className="p-8 bg-gray-800 rounded-3xl border border-gray-700 relative cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-orange-500/10 hover:shadow-2xl"
                  onMouseEnter={() => setIsOutlineExpanded(true)}
                  onMouseLeave={() => setIsOutlineExpanded(false)}
                >
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 64c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm0 128c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"></path>
                        </svg>
                     </div>
                     <h3 className="text-2xl font-bold">Program Outline</h3>
                  </div>

                  <div className="space-y-3 text-sm md:text-base">
                    <h5 className="text-orange-500 font-bold uppercase tracking-wider underline">Build and Design:</h5>
                    <p><strong>Week 1:</strong> Basics of Building / Introduction to VEX Robotics</p>
                    <p><strong>Week 2:</strong> Build Techniques</p>
                    
                    <div className={`transition-all duration-700 overflow-hidden ${isOutlineExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p><strong>Week 3:</strong> Gear Ratios and Chassis Design</p>
                      <p><strong>Week 4:</strong> Pneumatics and PTO Systems</p>
                      <p><strong>Week 5:</strong> Lift Systems/Structures</p>
                      <p><strong>Week 6:</strong> Intake Systems </p>
                      <p><strong>Week 7:</strong> Pneumatic Systems</p>
                      <p><strong>Week 8:</strong> Autodesk Fusion</p>
                      <p><strong>Week 9:</strong> Fusion basic assembly</p>
                      <p><strong>Week 10:</strong> Fusion advanced assembly</p>
                      <p><strong>Week 11:</strong> Fusion custom assembly</p>
                      <p><strong>Week 12:</strong> Power Tools and Safety</p>
                      
                      <h5 className="text-orange-500 font-bold uppercase tracking-wider underline mt-6">Programming:</h5>
                      <p><strong>Week 1:</strong> VEX Robotics C++ Setup</p>
                      <p><strong>Week 2:</strong> C++ Basics</p>
                      <p><strong>Week 3:</strong> C++ Functions</p>
                      <p><strong>Week 4:</strong> C++ Coding Conventions</p>
                      <p><strong>Week 5:</strong> Version Control and GitHub</p>
                      <p><strong>Week 6:</strong> Motor Control and Sensors</p>
                      <p><strong>Week 7:</strong> PID and writing functions</p>
                      <p><strong>Week 8:</strong> Autonomous and Programming Principles</p>
                    </div>
                  </div>

                  {/* Gradient Overlay when collapsed */}
                  {!isOutlineExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
                  )}
                  
                  {/* Chevron Icon */}
                  <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-500 ${isOutlineExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                <div className="p-8 bg-gray-800 border border-gray-700 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 32z"></path>
                        </svg>
                     </div>
                     <h3 className="text-2xl font-bold">Class Structure</h3>
                  </div>
                  <div className="space-y-4 text-base md:text-lg">
                    <p><strong className="text-orange-400">1-Hour Lesson</strong> (PowerPoint)</p>
                    <p><strong className="text-orange-400">2-Hour Activity Period</strong> – Guided by coaches</p>
                    <div className="pt-4 border-t border-gray-700 space-y-2 text-gray-400 text-sm md:text-base">
                      <p><strong>Start Date:</strong> January 3rd 2026</p>
                      <p><strong>Break:</strong> April 11th, 2026</p>
                      <p><strong>Last build lesson:</strong> April 25th, 2026</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:sticky lg:top-32 self-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://silverowlrobotics.com/wp-content/uploads/2025/03/IMG_0507-rotated-1-1-683x1024.jpg" 
                    alt="Class Activity" 
                    className="w-full h-auto max-h-[800px] object-cover"
                  />
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 6: WHAT HAPPENS AFTER TRAINING? & TEAM STRUCTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Happens After Training?</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>Our Training Program gives you a <strong className="text-orange-600">STRONG foundation</strong> in building, programming, and driving—but it&apos;s just the beginning.</p>
                  <p>After training, you&apos;ll be placed on a Silver Owl team matched by skill and passion, and work together to take on the VEX Robotics season.</p>
                  <p>With coaches available 5+ days a week and the club open daily, you can practice as much as you want. From strategy to design, our expert coaches guide your team through every challenge, giving constant feedback and support for the entire season.</p>
                  <p>Missed a class or two? No problem—our coaching fills in the gaps and keeps you moving forward.</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/homepage/home1.png"
                  alt="Team Interaction"
                  className="w-full h-auto"
                />
              </div>
           </div>

           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">VRC Team Structure</h2>
              <p className="text-2xl text-orange-600 font-semibold">Ideal Team Size of 5-7 Members Per Team</p>
           </div>

           {/* Team Captain - Special Placement */}
           <div className="max-w-md mx-auto mb-12">
              <div className="p-8 bg-gray-50 rounded-2xl border border-orange-200 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                  Team Captain
                </h3>
                <p className="text-lg text-gray-600">Leads the team by organizing meetings and helping everyone work together smoothly.</p>
              </div>
           </div>

           {/* Rest of the roles in a grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Builder", desc: "Designs and builds the robot to work reliably" },
                { title: "Programmer", desc: "Writes the code for autonomous routes, programming skills, and driver control." },
                { title: "Drive Coach", desc: "Supports the driver during matches by giving real-time advice." },
                { title: "Driver", desc: "Operates the robot in competition. Practices regularly to improve control, speed, and accuracy under pressure." },
                { title: "Engineering Notebook", desc: "Documents the team&apos;s entire design process—ideas, planning, building, testing, and competition." },
                { title: "Scout", desc: "Researches and networks with other teams online and during events." }
              ].map((role, idx) => (
                <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                    {role.title}
                  </h3>
                  <p className="text-lg text-gray-600">{role.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 7: TIMELINES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">VRC Season Timeline</h2>
              <p className="text-xl text-gray-600">A general overview of the typical tournaments in a season</p>
           </div>
           
           {/* Desktop Timeline */}
           <div className="hidden lg:block mb-32">
              <img src="https://silverowlrobotics.com/wp-content/uploads/2026/01/VRC-Timeline-Desktop-2-1.png" alt="VRC Season Timeline Desktop" className="w-full h-auto rounded-3xl" />
           </div>
           {/* Mobile Timeline */}
           <div className="lg:hidden mb-32">
              <img src="https://silverowlrobotics.com/wp-content/uploads/2026/01/VRC-Timeline-Mobile-2-1.png" alt="VRC Season Timeline Mobile" className="w-full h-auto rounded-3xl" />
           </div>

           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">VRC Team Timeline</h2>
              <p className="text-xl text-gray-600">A general overview of the typical team journey</p>
           </div>

           <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {[
                { label: "Start Of Membership", sub: "Training Program", title: "Training Program", desc: "If you&apos;re a beginner to VEX, you&apos;ll gain the foundational skills for Robotics—Build, Design, and Programming" },
                { label: "3 Months Later", sub: "Teams Formed", title: "Teams Formed", desc: "We place you on a solid team with peers who match your enthusiasm and skill level. We take into account team chemistry and your personal preferences—who you want to work with, seriously." },
                { label: "Pre-Tournament", sub: "Design and Prototyping", title: "Design and Prototyping", desc: "Your team begins brainstorming and building your first robot based on the season&apos;s game. You&apos;ll prototype and test ideas, and explore different mechanisms of scoring." },
                { label: "Tournaments Begin", sub: "Robot Iterations and Practice", title: "Robot Iterations and Practice", desc: "Your team rebuilds and improves the robot—typically five major iterations per season. After each rebuild, you&apos;ll refine your code and sharpen your driving through focused practice and coaching." }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-900 text-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 border-white/10 z-10 transition-transform group-hover:scale-125">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M448 160H320V128H448V160ZM480 32H32C14.33 32 0 46.33 0 64V448C0 465.7 14.33 480 32 480H480C497.7 480 512 465.7 512 448V64C512 46.33 497.7 32 480 32ZM480 448H32V64H480V448ZM192 128V160H224V128H192ZM192 352V384H224V352H192ZM192 240V272H224V240H192ZM320 384H448V352H320V384ZM320 272H448V240H320V272Z"></path></svg>
                  </div>
                  {/* Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between space-x-2 mb-2">
                       <span className="font-bold text-gray-900">{item.title}</span>
                       <time className="font-medium text-orange-600 text-sm">{item.label}</time>
                    </div>
                    <div className="text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
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
                "/images/homepage/world1.webp",
                "/images/homepage/world_middle.webp",
                 "/images/homepage/world2.webp"
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
