"use client";

import Image from "next/image";

export default function RoboticsWorkshops() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Robotics & STEM Workshops
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="text-center space-y-6 mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Welcome to join us in Oakville and Mississauga for two exciting{" "}
              <span className="font-semibold text-gray-900">
                Free Robotics & STEM Workshops
              </span>{" "}
              hosted by V5RC 2055A/X robotics, and Aerial drone teams from Mi3L
              School! Whether you're just starting out or already experienced in
              robotics, this workshop is the perfect opportunity to explore,
              create, and have fun while learning. Participants will get
              hands-on experience with building and programming robots, racing
              them, flying drones through obstacle courses, and trying creative
              STEM challenges.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-700">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium">
                    Oakville Library Central Branch (Aug 16, 1-4pm)
                  </p>
                  <p className="font-medium">
                    Burnhanthorpe Community Centre (Aug 22, 6-8pm)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p>Scan the QR code to register</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500">
              <Image
                src="/images/roboticsworkshop1.jpg"
                alt="Robotics Workshop QR Code 1"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500">
              <Image
                src="/images/roboticsworkshop2.jpg"
                alt="Robotics Workshop QR Code 2"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}