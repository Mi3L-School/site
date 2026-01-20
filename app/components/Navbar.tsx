"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const coursesLinks = [
  { path: "/programs/full-vrc-guide", name: "Full VRC Guide" },
  { path: "/programs/SummerCourse", name: "2025 Summer Course" },
  { path: "/programs/ScienceFair", name: "Science Fair Preparation Course" },
  { path: "/programs/iqWorkshop", name: "IQ Workshop" },
  { path: "/programs/roboticsWorkshops", name: "Robotics & STEM Workshops" },
  { path: "/programs/speakup", name: "Speak up! Workshop" },
];

const achievementsLinks = [
  { path: "/history", name: "History" },
  { path: "/achievements", name: "Achievements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isAchievementsDropdownOpen, setAchievementsDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setJobDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);
  const coursesTimeoutRef = useRef<number | null>(null);
  const achievementsTimeoutRef = useRef<number | null>(null);
  const jobTimeoutRef = useRef<number | null>(null);

  const user = null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
      if (achievementsRef.current && !achievementsRef.current.contains(event.target as Node)) {
        setAchievementsDropdownOpen(false);
      }
      if (jobRef.current && !jobRef.current.contains(event.target as Node)) {
        setJobDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (
    setter: (value: boolean) => void,
    timeoutRef: React.MutableRefObject<number | null>
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setter(true);
  };

  const handleMouseLeave = (
    setter: (value: boolean) => void,
    timeoutRef: React.MutableRefObject<number | null>
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setter(false);
      timeoutRef.current = null;
    }, 300) as unknown as number;
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Mi3L School"
              width={80}
              height={52}
              className="object-contain"
              priority
            />
            <span className="text-xl font-semibold text-white">Mi3L School</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href="https://2055vrc.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Blog
            </Link>

            <div
              ref={achievementsRef}
              onMouseEnter={() =>
                handleMouseEnter(setAchievementsDropdownOpen, achievementsTimeoutRef)
              }
              onMouseLeave={() =>
                handleMouseLeave(setAchievementsDropdownOpen, achievementsTimeoutRef)
              }
              className="relative"
            >
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-1"
              >
                About
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {isAchievementsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1"
                  onMouseEnter={() =>
                    handleMouseEnter(setAchievementsDropdownOpen, achievementsTimeoutRef)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(setAchievementsDropdownOpen, achievementsTimeoutRef)
                  }
                >
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/history"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    History
                  </Link>
                  <Link
                    href="/achievements"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    Achievements
                  </Link>
                </div>
              )}
            </div>

            <div
              ref={coursesRef}
              onMouseEnter={() =>
                handleMouseEnter(setCoursesDropdownOpen, coursesTimeoutRef)
              }
              onMouseLeave={() =>
                handleMouseLeave(setCoursesDropdownOpen, coursesTimeoutRef)
              }
              className="relative"
            >
              <Link
                href="/programs"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-1"
              >
                Programs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {isCoursesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1"
                  onMouseEnter={() =>
                    handleMouseEnter(setCoursesDropdownOpen, coursesTimeoutRef)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(setCoursesDropdownOpen, coursesTimeoutRef)
                  }
                >
                  <div className="relative group">
                    <span className="block px-4 py-2 text-sm text-gray-300 cursor-default hover:bg-gray-700">
                      Courses
                    </span>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <Link
                        href="/programs/full-vrc-guide"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        Online Courses
                      </Link>
                      <Link
                        href="/programs/SummerCourse"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        2025 Summer Course
                      </Link>
                      <Link
                        href="/programs/ScienceFair"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        Science Fair Preparation Course
                      </Link>
                    </div>
                  </div>
                  <div className="relative group">
                    <span className="block px-4 py-2 text-sm text-gray-300 cursor-default hover:bg-gray-700">
                      Workshops
                    </span>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <Link
                        href="/programs/iqWorkshop"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        IQ Summer Workshop
                      </Link>
                      <Link
                        href="/programs/speakup"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        Speak up! Workshop
                      </Link>
                      <Link
                        href="/programs/roboticsWorkshops"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        Robotics & STEM Workshops
                      </Link>
                    </div>
                  </div>
                  <div className="relative group">
                    <span className="block px-4 py-2 text-sm text-gray-300 cursor-default hover:bg-gray-700">
                      Camps
                    </span>
                    <div className="absolute left-full top-0 ml-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <Link
                        href="/programs/fllSummerCamp"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        FLL Robotics Summer Camp
                      </Link>
                      <Link
                        href="/programs/virtualskills"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        Virtual Skills Summer Camp
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/donation"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Donate
            </Link>

            <div
              ref={jobRef}
              onMouseEnter={() => handleMouseEnter(setJobDropdownOpen, jobTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setJobDropdownOpen, jobTimeoutRef)}
              className="relative"
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-1">
                Job
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isJobDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1"
                  onMouseEnter={() =>
                    handleMouseEnter(setJobDropdownOpen, jobTimeoutRef)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(setJobDropdownOpen, jobTimeoutRef)
                  }
                >
                  <Link
                    href="/volunteer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    Volunteer
                  </Link>
                </div>
              )}
            </div>

            {user ? (
              <Link
                href="/profile"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 rounded-lg transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="https://2055vrc.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/history"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              History
            </Link>
            <Link
              href="/achievements"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Achievements
            </Link>
            <Link
              href="/programs"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/donation"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Volunteer
            </Link>
            {user ? (
              <Link
                href="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 text-base font-medium bg-orange-500 text-white hover:bg-orange-600 rounded-lg transition-colors text-center"
              >
                Login
            </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}