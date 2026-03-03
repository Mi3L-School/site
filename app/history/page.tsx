"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const imageMap: Record<string, string> = {
  a: "/images/a.webp",
  logo1: "/images/logo1.png",
  logo2: "/images/logo2.png",
  logo3: "/images/logo3.jpg",
  e: "/images/e.webp",
  b: "/images/b.webp",
  c: "/images/c.webp",
  d: "/images/d.webp",
  f: "/images/f.webp",
  g: "/images/g.webp",
  h: "/images/h.webp",
  i: "/images/i.png",
  j: "/images/j.png",
  k: "/images/k.webp",
  l: "/images/l.jpg",
  m: "/images/m.webp",
  n: "/images/teams/2055x_team.webp",
};

type TimelineItem = {
  title: string;
  location: string;
  date: string;
  imgKey?: string;
  description?: string;
  award1?: string;
  award2?: string;
  award3?: string;
  navigatePath?: string;
};

const items: TimelineItem[] = [
  {
    title: "VEX Robotics World Championship",
    location: "Dallas TX",
    date: "May 9-11th, 2025 - Dallas TX",
    imgKey: "n",
    description: "Awards:",
    award1: "   - Design Award (2055X)",
    navigatePath: "/achievements",
  },
  {
    title: "Gateway to the West VEX V5 Robotics Competition Signature Event",
    location: "Triadelphia WV",
    date: "January 29-30th, 2025 - Triadelphia WV",
    imgKey: "m",
    description: "Awards:",
    award1: "   - Judges Award (2055X)",
    navigatePath: "/achievements",
  },
  {
    title: "The RiverBots III VEX V5 Robotics Competition Signature Event",
    location: "Monroe MI",
    date: "December 13-14th & 15-16th, 2024 - Monroe MI",
    imgKey: "l",
    description: "Awards:",
    award1: "   - Design Award (2055X)",
    award2: "   - Think Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "St. Catharines VEX V5 Robotics Competition Qualifier",
    location: "St. Catharines ON",
    date: "December 7, 2024 - St. Catharines ON",
    imgKey: "k",
    description: "Awards:",
    award1: "   - Innovate Award (2055X)",
    navigatePath: "/achievements",
  },
  {
    title: "Glenforest iDESIGN 365 VEX V5 Robotics Competition",
    location: "Missisauga ON",
    date: "November 23, 2024 - Missisauga ON",
    imgKey: "j",
    description: "Awards:",
    award1: "   - Design Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "Highlander Summit VEX V5 Signature Event",
    location: "Newark NJ",
    date: "September 20-22nd, 2024 - Newark NJ",
    imgKey: "i",
    description: "Awards:",
    award1: "   - Think Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "VEX AI World Championship",
    location: "Houston TX",
    date: "June 7-8th, 2024 - Houston TX",
    imgKey: "e",
    description: "Awards:",
    award1: "   - Robot Skills Champion (2055A)",
    award2: "   - Innovate Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "2024 VEX Robotics World Championship",
    location: "Dallas TX",
    date: "April 25-27th, 2024 - Dallas TX",
    imgKey: "b",
    description: "Awards:",
    award1: "   - Create Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "Ontario VRC Over/Under Provincial Championships",
    location: "Markham ON",
    date: "Febuary 23-24th, 2024 - Markham ON",
    imgKey: "c",
    description: "Awards:",
    award1: "   - Tournament Champions (2055X)",
    navigatePath: "/achievements",
  },
  {
    title: "iDESIGN Central Toronto VEX VRC Robotics Competition",
    location: "Toronto ON",
    date: "Febuary 10th, 2024 - Toronto ON",
    imgKey: "d",
    description: "Awards:",
    award1: "   - Build Award (2055X)",
    award2: "   - Tournament Champions (2055X)",
    navigatePath: "/achievements",
  },
  {
    title: "Battle of the Bots VRC Signature Event",
    location: "Bristol TN",
    date: "Febuary 9-10th, 2024 - Bristol TN",
    imgKey: "f",
    description: "Awards:",
    award1: "   - Robot Skills Champion (2055A)",
    award2: "   - Think Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "Canadian Open VRC Signature Event",
    location: "Markham ON",
    date: "January 27-28th, 2024 - Markham ON",
    imgKey: "a",
    description: "Awards:",
    award1: "   - Think Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "Hollywood Blockbuster VRC Signature Event",
    location: "Los Angeles CA",
    date: "December 27-29th, 2023 - Los Angeles CA",
    imgKey: "g",
    description: "Awards:",
    award1: "   - Sportsmanship Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "VRC Over/Under Qualifier + Remote Judging and Notebooks",
    location: "Brampton ON",
    date: "December 16th, 2023 - Brampton ON",
    imgKey: "logo2",
    description: "Awards:",
    award1: "   - Excellence Award (2055A)",
    navigatePath: "/achievements",
  },
  {
    title: "St. Catharines VRC Qualifier",
    location: "St. Catharines ON",
    date: "December 2nd, 2023 - St. Catharines ON",
    imgKey: "logo3",
    description: "Awards:",
    award1: "   - Tournament Finalists (2055X)",
    award2: "   - Think Award (2055X)",
    navigatePath: "/achievements",
  },
  {
    title: "VRC Over/Under Qualifier + Remote Judging and Notebooks",
    location: "Brampton ON",
    date: "November 23rd, 2023 - Brampton ON",
    imgKey: "h",
    description: "Awards:",
    award1: "   - Tournament Champions",
    award2: "   - Think Award",
    navigatePath: "/achievements",
  },
  {
    title: "2023 VEX Robotics World Championship",
    location: "Dallas TX",
    date: "April 27-30th, 2023 - Dallas TX",
    imgKey: "",
    description: "Awards:",
    award1: "   - Division Champions (2055B)",
    award2: "   - Design Award (2055B)",
    navigatePath: "/achievements",
  },
  {
    title: "VEX Robotics Ontario VRC Provincial Championships 2023 (Remote Judging & Engineering Book Submission - 2055B)",
    location: "Niagara Falls ON",
    date: "March 5th, 2023 - Niagara Falls ON",
    imgKey: "",
    description: "Awards:",
    award1: "   - Innovate Award (2055A)",
    award2: "   - Judges Award (2055B)",
    navigatePath: "/achievements",
  },
  {
    title: "iDESIGN Central Toronto VEX Robotics Competition",
    location: "Toronto ON",
    date: "Febuary 25th, 2023 - Toronto ON",
    imgKey: "",
    description: "Awards:",
    award1: "   - Robot Skills Champion (2055B)",
    award2: "   - Build Award (2055B)",
    award3: "   - Tournament Champions (2055B)",
    navigatePath: "/achievements",
  },
  {
    title: "Brampton Robotics VRC Qualifier and Skills, Judging",
    location: "Brampton ON",
    date: "Febuary 18th, 2023 - Brampton ON",
    imgKey: "logo1",
    description: "Awards:",
    award1: "   - Tournament Semifinalists (2055B)",
    award2: "   - Judges Award (2055B)",
    navigatePath: "/achievements",
  },
  {
    title: "Canadian Open VRC Signature Event",
    location: "Markham ON",
    date: "Febuary 12th, 2023 - Markham ON",
    imgKey: "",
    description: "Awards:",
    award1: "   - Design Award (2055A)",
    award2: "   - Excellence Award (2055B)",
    navigatePath: "/achievements",
  },
  {
    title: "Brampton Robotics VRC Qualifier and Skills",
    location: "Brampton ON",
    date: "January 23rd, 2023 - Brampton ON",
    imgKey: "",
    description: "Awards:",
    award1: "   - Tournament Finalists (2055A + B)",
    award2: "   - Judges Award (2055B)",
    navigatePath: "/achievements",
  },
];

export default function History() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            2055 Award History
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;
              const imagePath = item.imgKey && imageMap[item.imgKey] ? imageMap[item.imgKey] : null;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="hidden md:block md:w-1/2"></div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all ${
                        isHovered
                          ? "bg-orange-500 scale-125 border-orange-500"
                          : "bg-gray-900 border-gray-900"
                      }`}
                    ></div>
                  </div>

                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pl-12 md:pr-8" : "md:pr-12 md:pl-8"
                    } ml-16 md:ml-0`}
                  >
                    <Link
                      href={item.navigatePath || "#"}
                      className="block group"
                    >
                      <div
                        className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                          isHovered
                            ? "border-orange-500 shadow-xl transform scale-105"
                            : "border-gray-300"
                        } transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                            {item.date}
                          </span>
                          {isHovered && (
                            <svg
                              className="w-5 h-5 text-orange-500"
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
                          )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mb-3">{item.location}</p>

                        {item.description && (
                          <p className="text-gray-700 font-medium mb-3">
                            {item.description}
                          </p>
                        )}

                        <div className="space-y-2">
                          {item.award1 && (
                            <div className="flex items-start">
                              <svg
                                className="shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{item.award1}</span>
                            </div>
                          )}
                          {item.award2 && (
                            <div className="flex items-start">
                              <svg
                                className="shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{item.award2}</span>
                            </div>
                          )}
                          {item.award3 && (
                            <div className="flex items-start">
                              <svg
                                className="shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{item.award3}</span>
                            </div>
                          )}
                        </div>

                        {imagePath && (
                          <div className="mt-4 rounded-lg overflow-hidden border-2 border-gray-200">
                            <Image
                              src={imagePath}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}