import Link from "next/link";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border border-gray-100">
          <Link 
            href="/jobs"
            className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Jobs
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Volunteer with <span className="text-orange-600">Us</span>
          </h1>
          
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-50">
              <img
                src="/images/volunteer.jpg"
                alt="Volunteer Flyer"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                We welcome volunteers to join our mission! If you are interested in making an impact, we'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="px-8 py-4 bg-gray-400 text-white font-bold rounded-xl cursor-not-allowed shadow-lg text-center"
                disabled
              >
                Application Opening Soon
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-orange-600 shrink-0"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href="mailto:admin@mi3lschool.org"
                  className="text-lg text-gray-700 hover:text-orange-600 transition-colors"
                >
                  admin@mi3lschool.org
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-orange-600 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="tel:416-523-5965"
                  className="text-lg text-gray-700 hover:text-orange-600 transition-colors"
                >
                  416-523-5965
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
