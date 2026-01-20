"use client";

import Image from "next/image";

export default function SummerCourse() {
  const handleYTClick = () => {
    window.open(
      "https://youtu.be/nitDt76IX3k",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleImgClick = () => {
    window.open(
      "https://forms.gle/SwSXMds9dLMcsFZj7",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const paymentClick = () => {
    window.open(
      "https://www.zeffy.com/en-CA/ticketing/v5rc-summer-course--2025",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            2025 Summer Course
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="text-center space-y-4 mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Mi3L School is offering summer courses for middle and high schoolers
              to learn V5 robotics and enjoy STEM in a practical and hands on
              experience. We'd also like to recruit a few new members to join our
              high school and middle school teams. Small classes, groups are
              seperated by age, and all supplies and parts are provided. Suitable
              for{" "}
              <span className="font-semibold text-gray-900">Grades 5-11</span>, no
              experience required.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-700 mt-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium">
                  2A-1453 Cornwall Rd, Oakville
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div
              onClick={handleImgClick}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500"
            >
              <Image
                src="/images/summercourse.jpeg"
                alt="2025 Summer Course"
                width={600}
                height={400}
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleYTClick}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch Video
            </button>

            <button
              onClick={handleImgClick}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-md hover:shadow-lg"
            >
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Reserve a Spot
            </button>

            <button
              onClick={paymentClick}
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-md hover:shadow-lg"
            >
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Make a Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}