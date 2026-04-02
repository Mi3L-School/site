"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const programLinks = [
  { path: "/course-list/robotics", name: "Robotics Course" },
  { path: "/course-list/aerialdrone", name: "Aerial Drone Course" },
];

const teamLinks = [
  { path: "/teams/vex-v5", name: "VEX V5 Team" },
];

const aboutLinks = [
  { path: "/about", name: "About Us" },
  { path: "/history", name: "History" },
  { path: "/achievements", name: "Achievements" },
];

type DropdownId = "about" | "programs" | "teams" | null;

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const user = null;

  // Close on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const cancelClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const toggleMobileSection = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path: string) => pathname === path;
  const isDropdownActive = (links: { path: string }[]) =>
    links.some((l) => pathname === l.path);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Mi3L School"
              width={72}
              height={48}
              className="object-contain"
              priority
            />
            <span className="text-lg font-semibold text-white hidden sm:block">
              Mi3L School
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { cancelClose(); setOpenDropdown("about"); }}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isDropdownActive(aboutLinks)
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                About
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "about" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-1.5 w-44 bg-gray-800 border border-white/10 rounded-xl shadow-xl py-1.5 transition-all duration-200 origin-top ${openDropdown === "about"
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
                  }`}
                onMouseEnter={() => { cancelClose(); setOpenDropdown("about"); }}
                onMouseLeave={scheduleClose}
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-2 text-sm transition-colors ${isActive(link.path)
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

{/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { cancelClose(); setOpenDropdown("programs"); }}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isDropdownActive(programLinks)
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                Programs
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "programs" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-1.5 w-44 bg-gray-800 border border-white/10 rounded-xl shadow-xl py-1.5 transition-all duration-200 origin-top ${openDropdown === "programs"
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
                  }`}
                onMouseEnter={() => { cancelClose(); setOpenDropdown("programs"); }}
                onMouseLeave={scheduleClose}
              >
                {programLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-2 text-sm transition-colors ${isActive(link.path)
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Teams Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { cancelClose(); setOpenDropdown("teams"); }}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isDropdownActive(teamLinks)
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                Teams
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "teams" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-1.5 w-44 bg-gray-800 border border-white/10 rounded-xl shadow-xl py-1.5 transition-all duration-200 origin-top ${openDropdown === "teams"
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
                  }`}
                onMouseEnter={() => { cancelClose(); setOpenDropdown("teams"); }}
                onMouseLeave={scheduleClose}
              >
                {teamLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-2 text-sm transition-colors ${isActive(link.path)
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            {[
              { href: "/activities", label: "Activities" },
              { href: "/donation", label: "Donate" },
              { href: "/blog", label: "Blog" },
              { href: "/jobs", label: "Jobs" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(href)
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {label}
              </Link>
            ))}

            {user ? (
              <Link
                href="/profile"
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/registration"
                className="ml-1 px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors shadow-sm"
              >
                Join Us
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-white/10 bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {/* About Section */}
          <div>
            <button
              onClick={() => toggleMobileSection("about")}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              About
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded["about"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${mobileExpanded["about"] ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="pl-4 mt-0.5 space-y-0.5">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div>
            <button
              onClick={() => toggleMobileSection("programs")}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Programs
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded["programs"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${mobileExpanded["programs"] ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="pl-4 mt-0.5 space-y-0.5">
                {programLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Teams Section */}
          <div>
            <button
              onClick={() => toggleMobileSection("teams")}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Teams
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded["teams"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${mobileExpanded["teams"] ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="pl-4 mt-0.5 space-y-0.5">
                {teamLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Links */}
          {[
            { href: "/activities", label: "Activities" },
            { href: "/donation", label: "Donate" },
            { href: "/blog", label: "Blog" },
            { href: "/jobs", label: "Jobs" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {label}
            </Link>
          ))}

          <div className="pt-2 pb-1">
            {user ? (
              <Link
                href="/profile"
                className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/registration"
                className="block px-4 py-2.5 text-sm font-semibold bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors text-center shadow-sm"
              >
                Join Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}