import Link from "next/link";

export default function RoboticsInstructorJob() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-900 text-white p-8 md:p-12">
          <Link 
            href="/jobs"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Jobs
          </Link>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Robotics Instructor</h1>
            <div className="flex flex-wrap gap-4 text-gray-300">
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Part-Time
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                $20 - $30 / hr
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          <div className="prose prose-orange max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Job Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Mi3L School is seeking a part-time Robotics Instructor to teach weekly VEX Robotics courses (V5RC and IQ) and Aerial Drone courses. The instructor will guide students through hands-on learning in robot design, building, programming, and CAD, fostering technical skills and teamwork in an engaging educational environment.
              </p>
            </section>

            <section className="mb-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Responsibilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Teach weekly VEX Robotics courses (V5RC and IQ) covering building, programming, and design.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Instruct Aerial Drone course, including flight operations, programming, and safety.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Provide hands-on guidance in CAD software for robot design and modeling.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Maintain classroom supplies, tools, robotics equipment, and drone inventory.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Communicate effectively with students, parents, and school administration.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Required Qualifications</h3>
                <ul className="space-y-3 text-gray-700">
                   <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Proficiency in VEX V5RC and IQ systems.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Experience with robot programming and CAD software.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Experience in robotics competitions (VEX, FIRST) is strongly preferred.
                  </li>
                   <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    High school diploma required; pursuing degree in STEM field preferred.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    Excellent problem-solving and troubleshooting skills.
                  </li>
                </ul>
              </div>
            </section>

            {/* Application Section */}
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
              <p className="text-gray-700 mb-8">
                Click the button below to fill out our application form. We look forward to meeting you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  className="px-8 py-4 bg-gray-400 text-white font-bold rounded-xl cursor-not-allowed shadow-lg"
                  disabled
                >
                  Application Opening Soon
                </button>
                <span className="text-gray-500">or email resume to</span>
                <a href="mailto:admin@mi3lschool.org" className="text-orange-600 font-semibold hover:underline">
                  admin@mi3lschool.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
