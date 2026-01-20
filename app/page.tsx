import Image from "next/image";
import Link from "next/link";

const events = [
  {
    label: "2025 Science Fair Preparation Course Registration Open!",
    link: "/programs/ScienceFair",
  },
  {
    label: "Virtual Skills Summer Camp Registration Open!",
    link: "/programs/virtualskills",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div id="home" className="relative">
        <div className="w-full bg-orange-500 text-white py-3 px-4 md:py-4 md:px-6 shadow-sm">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="font-semibold text-sm md:text-lg whitespace-nowrap">
              Latest Events:
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap inline-flex gap-16">
                {events.map((event, idx) => (
                  <Link
                    key={idx}
                    href={event.link}
                    className="underline font-medium text-sm md:text-lg hover:text-orange-100 transition-colors"
                  >
                    {event.label}
                  </Link>
                ))}
                {events.map((event, idx) => (
                  <Link
                    key={`dup-${idx}`}
                    href={event.link}
                    className="underline font-medium text-sm md:text-lg hover:text-orange-100 transition-colors"
                  >
                    {event.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-96 w-full overflow-hidden bg-gray-200">
          <Image
            src="/images/home1.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Link
              href="#mi3l"
              className="px-8 py-4 bg-white text-gray-900 font-semibold text-lg md:text-2xl rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Learn More!
            </Link>
          </div>
        </div>
      </div>

      <div id="mi3l" className="text-center mt-12 md:mt-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          My Life Long Learning
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Join our World Class VEX Robotics Team Today!
        </p>
      </div>

      <section className="mt-12 md:mt-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our mission is to provide a world-class robotics education to
              students of all ages. We strive to provide a safe, inclusive, and
              fun environment for students to learn and grow. Our goal is to
              inspire curiosity, creativity, and a lifelong passion for
              technology and innovation. Through hands-on learning and
              collaborative projects, we aim to equip students with the critical
              thinking, problem-solving, and teamwork skills necessary for
              success.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-96 relative rounded-lg overflow-hidden">
            <Image
              src="/images/home2.jpg"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 md:mt-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 w-full h-64 md:h-96 relative rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/images/home3.png"
              alt="Values"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-2/3 order-1 md:order-2">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our values embrace inclusivity and diversity, ensuring our
              programs are accessible and welcoming to all students, regardless
              of background or ability. Collaboration and teamwork are
              paramount, fostering mutual respect and the value of working
              together towards common goals. Upholding the highest standards of
              integrity and respect, we ensure all community interactions are
              conducted with honesty and kindness. Finally, we strive to empower
              our students, building their confidence and equipping them with
              the skills necessary for success.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 md:mt-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/programs"
            className="group relative h-64 md:h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/im2.png"
              alt="Our Programs"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <h3 className="font-bold text-2xl md:text-4xl text-white">
                Our Programs
              </h3>
            </div>
          </Link>

          <Link
            href="/achievements"
            className="group relative h-64 md:h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/im3.png"
              alt="Our Team"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <h3 className="font-bold text-2xl md:text-4xl text-white">
                Our Team
              </h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-12 md:mt-16 relative h-64 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/im4.png"
          alt="Quote"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl">
            <p className="text-center text-lg md:text-xl text-white italic">
              &quot;The cure for boredom is curiosity. There is no cure for
              curiosity.&quot;
            </p>
          </div>
          <p className="mt-4 text-center text-white text-base md:text-lg">
            - Dorothy Parker
          </p>
        </div>
      </section>
    </div>
  );
}
