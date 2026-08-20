"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SummerCoursePage() {
  const [openModal, setOpenModal] = useState<null | "science" | "robotics">(
    null
  );
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="relative bg-gradient-to-br from-green-700 to-teal-700 pt-24 pb-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Course — Aug 17 &ndash; Aug 28</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.zeffy.com/en-CA/ticketing/science-fair-summer-course--2026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-full hover:bg-gray-100"
            >
              Register — Science Fair
            </a>

            <a
              href="https://www.zeffy.com/en-CA/ticketing/v5rc-vex-robotics-summer-course--2026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600"
            >
              Register — Robotics
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Afternoon Structure</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p><strong>Time:</strong> 1:00pm &ndash; 5:15pm (Mon &ndash; Fri)</p>
              <p><strong>Format:</strong> 2 hours Science Fair (1:00pm &ndash; 3:00pm) + 2 hours Robotics (3:15pm &ndash; 5:15pm)</p>
              <p><strong>Dates:</strong> Aug 17 &ndash; Aug 21, Aug 24 &ndash; Aug 28</p>
              
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl overflow-hidden shadow-lg bg-gray-100">
                <div className="overflow-hidden">
                  <button
                    onClick={() => setOpenModal("science")}
                    className="w-full text-left"
                    aria-label="Open Science Fair teaching plan"
                  >
                    <Image
                      src="/images/summer_course/science_fair_flyer.png"
                      alt="Science Fair Flyer"
                      width={1200}
                      height={1600}
                      className="object-cover w-full h-auto"
                      priority
                    />
                  </button>
                </div>

                <div className="overflow-hidden">
                  <button
                    onClick={() => setOpenModal("robotics")}
                    className="w-full text-left"
                    aria-label="Open Robotics teaching plan"
                  >
                    <Image
                      src="/images/summer_course/robotics.PNG"
                      alt="Robotics Course Flyer"
                      width={1200}
                      height={1600}
                      className="object-cover w-full h-auto"
                    />
                  </button>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
        <p className="mb-6 text-blue-200">Choose a registration link for the track you want to join.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.zeffy.com/en-CA/ticketing/science-fair-summer-course--2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-semibold"
          >
            Register — Science Fair
          </a>

          <a
            href="https://www.zeffy.com/en-CA/ticketing/v5rc-vex-robotics-summer-course--2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 rounded-full font-semibold text-white"
          >
            Register — Robotics
          </a>
        </div>
      </section>

      {/* Modals */}
      {openModal === "science" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setOpenModal(null)}
          />
          <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-auto max-h-[80vh] p-6">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-3">Science Fair — Teaching Plan & Schedule</h2>
            <p className="font-semibold">Week: Aug 17-21, 1-3pm</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>
                <strong>Monday:</strong> Learn what qualities are found in good
                science projects. Learn the purpose and methods of an
                experiment, study, and innovation.
              </li>
              <li>
                <strong>Tuesday:</strong> Decide what type of project to work
                on and find partners. Explore various topics and brainstorm
                project ideas.
              </li>
              <li>
                <strong>Wednesday:</strong> Learn about the sections of a
                project report. Finalize project ideas and begin researching
                and providing background information in the work journal.
              </li>
              <li>
                <strong>Thursday:</strong> Finish gathering background
                information. Establish goals and methods of the project.
              </li>
              <li>
                <strong>Friday:</strong> Create a pitch for your proposed
                project. Explain your topic, how your project addresses it,
                and the importance of your project.
              </li>
            </ul>

            <p className="font-semibold mt-4">Week: Aug 24-28, 1-3pm</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>
                <strong>Monday:</strong> Develop a procedure to conduct your
                experiment and properly report procedure and materials.
              </li>
              <li>
                <strong>Tuesday:</strong> Class activity identifying good and
                bad practices in project work and reporting.
              </li>
              <li>
                <strong>Wednesday:</strong> Learn to analyze measurements,
                perform calculations, and record data.
              </li>
              <li>
                <strong>Thursday:</strong> Analyze and interpret results;
                report patterns in data.
              </li>
              <li>
                <strong>Friday:</strong> Finalize project report, register the
                project for the science fair, and review next steps.
              </li>
            </ul>
          </div>
        </div>
      )}

      {openModal === "robotics" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setOpenModal(null)}
          />
          <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-auto max-h-[80vh] p-6">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-3">V5RC Robotics — Schedule & Plan</h2>
            <p className="font-semibold">Week 1: Aug 17-21, 3:15-5:15pm — Mechatronics Engineering</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>Aug 17:</strong> Mechanical engineering basics & build drive train for V5RC.</li>
              <li><strong>Aug 18:</strong> Math & physics application in mechanical engineering: lift and arm.</li>
              <li><strong>Aug 19:</strong> Mechanical engineering intermediate: CAD 3D model design, CNC and 3D printing.</li>
              <li><strong>Aug 20:</strong> Mechatronics: brain, controller, motors, sensors, pneumatics.</li>
              <li><strong>Aug 21:</strong> Testing, improvement, engineering process and decision making.</li>
            </ul>

            <p className="font-semibold mt-4">Week 2: Aug 24-28, 3:15-5:15pm — Software Engineering</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li><strong>Aug 24:</strong> Computer science basics in C++: syntax and fundamentals.</li>
              <li><strong>Aug 25:</strong> Intermediate C++: projects, objects and functions for V5RC pros.</li>
              <li><strong>Aug 26:</strong> Programming PID using sensors; CS & electrical engineering concepts.</li>
              <li><strong>Aug 27:</strong> Autonomous routines, debugging and code management.</li>
              <li><strong>Aug 28:</strong> Object detection and tracking: camera/AI vision sensor and distance sensing for position tracking.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
