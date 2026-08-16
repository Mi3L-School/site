"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SummerCoursePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="relative bg-gradient-to-br from-green-700 to-teal-700 pt-24 pb-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Course — Aug 17 &ndash; Aug 28</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Afternoons only: 1pm &ndash; 5pm. Each afternoon contains 2 hours of Robotics followed by 2 hours of Science Fair workshops.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.zeffy.com/en-CA/ticketing/science-fair-summer-course--2026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600"
            >
              Register on Zeffy
            </a>
            <Link
              href="/programs"
              className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-full hover:bg-gray-100"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Afternoon Structure</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p><strong>Time:</strong> 1:00pm &ndash; 5:00pm (Mon &ndash; Fri)</p>
              <p><strong>Format:</strong> 2 hours Robotics (1:00pm &ndash; 3:00pm) + 2 hours Science Fair (3:00pm &ndash; 5:00pm)</p>
              <p><strong>Dates:</strong> Aug 17 &ndash; Aug 21, Aug 24 &ndash; Aug 28</p>
              <p className="mt-4">This course focuses on hands-on robotics practice followed by scientific project development and presentation skills. Ideal for students who want both engineering and research experience.</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">What to Bring</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Water bottle</li>
                <li>Comfortable clothes and closed-toe shoes</li>
                <li>Laptop or tablet (optional for robotics programming)</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
              {/* Add the flyer image file at: public/images/summer_course/science_fair_flyer.png */}
              <Image
                src="/images/summer_course/science_fair_flyer.png"
                alt="Summer Course Flyer"
                width={1200}
                height={1600}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
        <p className="mb-6 text-blue-200">Registration will use our Zeffy link — please provide it and I will update the button.</p>
        <a
          href="https://www.zeffy.com/en-CA/ticketing/science-fair-summer-course--2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-orange-500 rounded-full font-semibold text-white"
        >
          Register on Zeffy
        </a>
      </section>
    </div>
  );
}
