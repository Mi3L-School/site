import Link from "next/link";
import chaptersData from "./chapters.json";

export default function FullVRCGuide() {
  const chapters = chaptersData.chapters;
  const descriptions = chaptersData.descriptions;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Full VRC Programming Guide
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Welcome to the Full VRC Programming Guide. In this course, you will
            learn the very basics of programming a VEX Robot all the way to some
            more advanced algorithms to help increase your accuracy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What You'll Be Learning
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 mb-10">
            <li className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"
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
              <span>
                Programming Fundamentals (Variables, Data Structures, Functions,
                Algorithms, etc)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"
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
              <span>Motor Control & Autonomous Navigation</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"
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
              <span>
                Reading Sensor Data for Decision Making (Inertial, Rotational,
                Distance, etc)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"
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
              <span>PID Control and Tuning</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"
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
              <span>Debugging / Troubleshooting</span>
            </li>
          </ul>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Chapters</h2>
            <div className="space-y-3">
              {chapters.map((chapter, index) => (
                <Link
                  key={index}
                  href={`/programs/full-vrc-guide/chapter${index + 1}`}
                  className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors border-l-4 border-transparent hover:border-orange-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Chapter {index + 1}: {chapter}
                      </h3>
                      {descriptions[index] && (
                        <p className="text-sm text-gray-600 mt-1">
                          {descriptions[index]}
                        </p>
                      )}
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}