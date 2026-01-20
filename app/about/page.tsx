import Image from "next/image";
import Link from "next/link";

const coaches = [
  {
    name: "Chairmaine",
    title: "Head Coach",
    img: "/images/coaches/coach1.jpeg",
  },
  {
    name: "Connor",
    title: "Coach/Instructor",
    img: "/images/coaches/coach2.jpeg",
  },
  {
    name: "Jason",
    title: "Mentor/Instructor",
    img: "/images/coaches/coach3.jpeg",
  },
  {
    name: "Edison",
    title: "Mentor/Instructor",
    img: "/images/coaches/coach4.jpeg",
  },
];

const teams = [
  {
    id: "2055A",
    name: "2055A",
    level: "High School Team",
    logo: "/images/teams/2055A_logo.png",
    photo: "/images/teams/2055a_team.jpg",
    link: "/teams/2055A",
  },
  {
    id: "2055X",
    name: "2055X",
    level: "Middle School Team",
    logo: "/images/teams/2055X_logo.webp",
    photo: "/images/teams/2055X.JPG",
    link: "/teams/2055X",
  },
  {
    id: "2055C",
    name: "2055C",
    level: "All-Girls Team",
    logo: "/images/teams/2055C_logo.png",
    photo: "/images/teams/2055c_team.jpg",
    link: "/teams/2055C",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          About Us
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/achievements"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Achievements
          </Link>
          <Link
            href="/history"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            History
          </Link>
          <Link
            href="/about"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            About Us
          </Link>
        </div>

        <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Meet Our Coaches
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden ring-4 ring-gray-200 group-hover:ring-orange-500 transition-all">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {coach.name}
                </h3>
                <p className="text-sm text-gray-600">{coach.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Our Teams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <div className="p-6 flex items-center justify-between bg-gray-50">
                  <div>
                    <div className="font-bold text-xl text-gray-900">
                      {team.name}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {team.level}
                    </div>
                  </div>
                  <div className="relative w-16 h-16">
                    <Image
                      src={team.logo}
                      alt={`${team.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={team.photo}
                    alt={`${team.name} team`}
                    fill
                    className={`object-cover ${
                      team.id === "2055C" ? "object-top" : "object-center"
                    }`}
                  />
                </div>

                <div className="p-6 flex justify-between items-center">
                  <Link
                    href={team.link}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                  >
                    View Team
                  </Link>
                  <Link
                    href={team.link}
                    className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Get in touch with us to learn more about our programs and teams.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a
                href="mailto:admin@mi3lschool.org"
                className="text-lg text-gray-700 hover:text-orange-500 transition-colors"
              >
                admin@mi3lschool.org
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="tel:+14165235965"
                className="text-lg text-gray-700 hover:text-orange-500 transition-colors"
              >
                (416) 523-5965
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}