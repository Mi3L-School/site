import Image from "next/image";

const teams = [
  {
    id: "2055a",
    name: "VEX VRC Team",
    number: "2055A",
    photo: "/images/teams/2055a_team.jpg",
    achievements23: [
      "Create Award @ VRC Worlds 2024",
      "Excellence Award @ Brampton Regional",
      "Tournament Champions @ Brampton Regional",
      "3× Think Award",
      "Sportsmanship Award @ Hollywood Signature Event",
      "Skills Champion @ Bristol Signature Event",
    ],
    achievements24: [
      "Think Award @ Riverbots Signature Event",
      "Design Award @ Glenforest Qualifier",
      "Think Award @ Highlander Signature Event",
    ],
  },
  {
    id: "2055x",
    name: "VEX VRC Team",
    number: "2055X",
    photo: "/images/teams/2055x_team.webp",
    achievements23: [
      "Design Award @ State Championship",
      "Tournament Finalists @ Regional Qualifier",
      "Robot Skills Finalists @ Signature Event",
    ],
    achievements24: [
      "Design Award @ VRC Worlds 2025",
      "Judges Award @ Gateway Signature Event",
      "Design Award @ Riverbots Signature Event",
      "Innovate Award @ St. Catharines Qualifier",
    ],
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative h-16 w-48">
              <Image
                src="/images/vex_robotics_logo.png"
                alt="VEX Robotics Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Team Achievements
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-12 md:space-y-20">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="md:flex">
                <div className="md:w-7/12 bg-gray-50 flex items-center justify-center p-8">
                  <div className="relative w-full h-64 md:h-96">
                    <Image
                      src={team.photo}
                      alt={`${team.name} ${team.number}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-8 md:w-5/12">
                  <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                    {team.name}
                  </div>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Team {team.number}
                  </h2>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      2024-2025 Season Highlights:
                    </h3>
                    <ul className="space-y-3">
                      {team.achievements24.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="shrink-0 h-5 w-5 text-orange-500 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      2023-2024 Season Highlights:
                    </h3>
                    <ul className="space-y-3">
                      {team.achievements23.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="shrink-0 h-5 w-5 text-orange-500 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}