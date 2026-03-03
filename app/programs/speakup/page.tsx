"use client";

export default function SpeakUp() {
  const handleJoinClick = () => {
    window.open(
      "https://forms.gle/your-form-link-here",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-12 px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Speak Up!</h1>
            <p className="text-2xl md:text-3xl mb-2">Youth Workshops</p>
            <p className="text-lg opacity-90">
              A fun and interactive workshop for young voices.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-orange-100 text-orange-800 px-6 py-3 rounded-full">
                <h2 className="text-xl font-bold">AGES 9-14 | NO EXPERIENCE NEEDED</h2>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                You Will Learn:
              </h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    How to speak up with confidence
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    Present ideas clearly in front of others
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">
                    Develop charisma and presence
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-teal-600 text-white rounded-lg p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                SPEAK. SHARE. SHINE.
              </h2>

              <div className="space-y-4 mb-8 text-lg">
                <div className="flex items-start justify-center gap-3">
                  <svg
                    className="w-6 h-6 shrink-0 mt-0.5"
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
                  <p>
                    <strong>When:</strong> Monday, Aug 11th | Wednesday, Aug 13th |
                    Friday, Aug 15th | Sunday, Aug 17th
                  </p>
                </div>
                <div className="flex items-start justify-center gap-3">
                  <svg
                    className="w-6 h-6 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    <strong>Time:</strong> 7pm - 9pm
                  </p>
                </div>
                <div className="flex items-start justify-center gap-3">
                  <svg
                    className="w-6 h-6 shrink-0 mt-0.5"
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
                  <p>
                    <strong>Where:</strong> 1453 Cornwall Rd, L6J 7T5 2nd Floor Unit 2A
                  </p>
                </div>
              </div>

              <button
                onClick={handleJoinClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 text-xl font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl mb-6"
              >
                JOIN NOW
              </button>

              <div className="space-y-2 text-sm opacity-90">
                <p className="font-semibold">2055 members have 25% off</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:416-523-5965"
                    className="flex items-center gap-2 hover:underline"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    416-523-5965
                  </a>
                  <a
                    href="mailto:admin@mi3lschool.org"
                    className="flex items-center gap-2 hover:underline"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    admin@mi3lschool.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}