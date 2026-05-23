"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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
                  <span>8 - 14 Years Old</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 font-bold">Time</div>
                  <span>9:00 AM – 4:30 PM (Half Day Available)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 font-bold">Tech</div>
                  <span>VEX, 3D Design, Science Fair, Public Speaking, and LEGO Robotics</span>
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
              <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl bg-gray-200 relative">
                 <Image
                   src="/images/summer_camp/summer_camp.PNG"
                   alt="Summer Camp - BJJ and Robotics"
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
                Our morning sessions focus on the physical and mental discipline of <strong>Brazilian Jiu-Jitsu</strong>. After lunch, we shift gears into high-tech engineering with <strong>VEX Robotics</strong>, covering everything from LEGO building to advanced C++ coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT TO BRING & PREPARE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What to Bring & Prepare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">For BJJ</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  GI (uniform) provided
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Water bottle (refillable)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Small towel
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Clean fingernails
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
                  Laptop/tablet (optional)
                </li>
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
                  Comfortable clothes
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Closed-toe shoes
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
                  Snacks & lunch (we have snacks)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sunscreen
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Valid ID/wristband
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emergency contact form
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    
      {/* SECTION 6: WHY CHOOSE US */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Camp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-500 mb-2">2</div>
              <h4 className="text-lg font-semibold mb-2">Unique Disciplines</h4>
              <p className="text-gray-300">Combine martial arts training with cutting-edge robotics technology in one immersive experience.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl font-bold text-orange-500 mb-2">8-14</div>
              <h4 className="text-lg font-semibold mb-2">Age Range</h4>
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

      {/* SECTION 7: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Do I need prior experience?</h4>
              <p className="text-gray-700">No! Both BJJ and robotics programming are designed for all experience levels. Our instructors will work with everyone from complete beginners to experienced students.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">What if my child only wants to do half-day?</h4>
              <p className="text-gray-700">We offer flexible scheduling! You can choose morning-only (BJJ) or afternoon-only (Robotics) sessions. Pricing is adjusted accordingly.</p>
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

   

      {/* SECTION 8: CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Spot for Summer</h2>
        <p className="text-xl text-blue-200 mb-10">Spaces are limited to ensure quality instruction for both BJJ and Robotics.</p>
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