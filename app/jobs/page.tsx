import Link from "next/link";
import Image from "next/image";

const jobs = [
  {
    id: "robotics-instructor",
    title: "Robotics Instructor",
    type: "Part-Time",
    description: "Seeking a passionate instructor to teach VEX Robotics (V5RC & IQ) and Aerial Drone courses. Guide students in robot design, building, and programming.",
    link: "https://forms.gle/your-typeform-or-google-form-instructor", // Placeholder for actual link
  },
  {
    id: "volunteer",
    title: "Volunteers",
    type: "Volunteer",
    description: "Join our mission and help inspire the next generation of engineers! We're looking for enthusiastic volunteers to support our robotics programs.",
    image: "/images/volunteer.jpg",
    link: "https://forms.gle/your-typeform-or-google-form-volunteer", // Placeholder for actual link
  }
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 track-tight">
            Join the <span className="text-orange-600">Mi3L School</span> Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us shape the future of robotics education. We're looking for passionate individuals to join our growing community.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Robotics Instructor Job Card - Full Width or Large Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row">
            <div className="p-8 md:p-12 flex-grow">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-6">
                Part-Time
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Robotics Instructor</h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Teach weekly VEX Robotics (V5RC/IQ) and Drone courses. Foster technical skills and teamwork in an engaging environment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      VEX V5RC & IQ Proficiency
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      CAD & Drone Experience
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      $20-$30/hr Base Rate
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      High School Diploma Required
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <Link 
                  href="/jobs/robotics-instructor"
                  className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  View Details & Apply
                </Link>
              </div>
            </div>
          </div>

          {/* Volunteer Card - Optimized for 1280x1657 aspect ratio */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row">
             <div className="relative w-full md:w-1/2 min-h-[500px] md:min-h-[700px]">
              <Image
                src="/images/volunteer.jpg"
                alt="Volunteer Hiring Flyer"
                fill
                className="object-contain bg-gray-50"
                priority
              />
            </div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center self-start px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                Volunteer
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Volunteer Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Inspire the next generation of engineers! We are looking for passionate individuals to support our robotics programs and help students reach their full potential.
              </p>
              <div className="space-y-4">
                 <Link 
                  href="/volunteer"
                  className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200 text-center"
                >
                  Learn More & Apply
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Have questions about a role? Contact us at{' '}
            <a href="mailto:admin@mi3lschool.org" className="text-orange-600 font-medium hover:underline">
              admin@mi3lschool.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
