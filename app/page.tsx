import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Calendar, Bot, Code, Box, Calculator, Type, Globe, Trophy, Map, Library, GraduationCap, Building2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://techblazers.ca/wp-content/uploads/2025/02/212313213.mp4#t=60"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start pt-32 md:pt-40 items-center text-center text-white">
          {/* Top Text */}
          <p className="text-xs md:text-sm font-medium mb-4 tracking-wide">
            Excelling Since 2017
          </p>
          
          {/* Main Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight max-w-4xl">
            Inspiring Minds, Building Leaders, 
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Winning Globally
          </h2>
          
          {/* Subtitle */}
          <p className="text-xs md:text-sm mb-12 max-w-3xl opacity-90">
            Discover Life Long Learning with MI3L School: Where Young Innovators (Ages 9-18) Excel in Robotics, Coding, and STEM Education, Winning Globally Since 2017. Join Us to Ignite Your Child's Potential and Shape Future Leaders in an Automated World.
          </p>
          
          {/* Stats with Icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] md:text-xs font-medium opacity-90">Age Range:</div>
                <div className="text-sm md:text-base font-bold">9-18</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm md:text-base font-bold">30+</div>
                <div className="text-[10px] md:text-xs font-medium opacity-90">Courses</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm md:text-base font-bold">Year-Round</div>
                <div className="text-[10px] md:text-xs font-medium opacity-90">Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: Text Content */}
            <div className="lg:w-1/2">
              <p className="text-base md:text-lg font-semibold text-blue-600 mb-3 uppercase tracking-wide">About us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Where Innovation Takes Flight
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                At MI3L School, we equip the next generation with the skills to lead in an automated world. Our specialized programs in VEX IQ, VEX V5, and AirDrone technology provide a hands-on roadmap for students (ages 9–18) to move from basic logic to advanced mechanical design. We don’t just teach—we prepare students for the podium, fostering the teamwork and technical grit required for global robotics excellence. Join MI3L School and watch your child’s potential reach new heights, from the ground to the sky.
                  </p>
            </div>

            {/* Right: Image */}
            <div className="lg:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/im2.png" alt="About Mi3L" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: Overlapping Images */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[500px]">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-3/4 h-[350px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/images/im3.png" alt="Teaching Environment" fill className="object-cover" />
                </div>
                {/* Overlapping Image */}
                <div className="absolute bottom-0 right-0 w-3/4 h-[350px] rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <Image src="/images/im4.png" alt="Student Learning" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:w-1/2">
              <p className="text-base md:text-lg font-semibold text-blue-600 mb-3 uppercase tracking-wide">Why us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                World-Class Coaching, Engineered for Excellence in Oakville
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Located in Oakville, mi3l School is built on a foundation of world-class expertise. Our lead coach is an accomplished aerospace engineer, bringing real-world precision and systems thinking to our students. They are supported by a team of globally awarded coaches, recognized as champions on the world stage.
                This unique combination of elite engineering insight and championship-proven strategy creates an unmatched learning environment. We don't just teach—we mentor future innovators and leaders, equipping them with the discipline, strategic thinking, and passion for excellence that wins at the highest levels.              
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Know more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Globally Award-Winning Excellence.
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Mi3L School has become Oakville's world-renowned STEM team, celebrated annually on the global stage for historic achievements — earning so far 13 world championships, 26 international awards, and outstanding performances in VEX IQ, VEX Robotics.
            </p>
          </div>

          {/* Horizontal Auto-Scrolling Awards Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap scrollbar-hide">
              {/* First Set of Cards */}
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-6">
                  {/* VEX IQ */}
                  <div className="flex-none w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow whitespace-normal">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">VEX IQ</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2024-2025 VEX IQ World Championships - Inspire Award</li>
                      <li>• 2025 Create U.S. Open Robotics Championship - Design Award | Judge Award | Mega Award</li>
                      <li>• 2024-2025 The RiverBots III VEX IQ Robotics Competition Signature Event Middle School - Create Award | Skills Rank No.1</li>
                    </ul>
                  </div>

                  {/* VEX V5 High School*/}
                  <div className="flex-none w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow whitespace-normal">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">VEX V5 High School</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• LAUNCH at EATON V5 Robotics Competition Signature Event - Think Award</li>
                      <li>• 2024-2025 VEX World Championships - Create Award</li>
                      <li>• 2024-2025 Ontario VEX Middle School - Championship | Design Award</li>
                    </ul>
                  </div>

                  {/* VEX V5 Middle School */}
                  <div className="flex-none w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow whitespace-normal">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">VEX V5 Middle School</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2023 - 2024 FLL Oakville Qualifier 3rd Place</li>
                      <li>• 2023 - 2024 FLL Toronto Qualifier Innovate Award</li>
                      <li>• 2022 - 2023 FLL Western Provincial Breakthrough Award and Raising Star Award</li>
                    </ul>
                  </div>


                  {/* Air Drone */}
                  <div className="flex-none w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow whitespace-normal">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">Air Drone</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2024 Air Drone - Global Nominee</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Program List
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Robotics", icon: Bot, img: "/images/roboticsworkshop1.jpg", href: "/course-list/robotics" },
              { title: "Coding", icon: Code, img: "/images/i.png", href: "/course-list/coding" },
              { title: "Competition", icon: Trophy, img: "/images/vex1.png", href: "/course-list/competition" },
              { title: "Student Plan", icon: Map, img: "/images/a.webp", href: "/course-list/student-plan" },
            ].map((course, idx) => (
              <Link
                key={idx}
                href={course.href}
                className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="h-64 w-full relative">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Black Detail Bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 flex items-center gap-4 transition-colors group-hover:bg-blue-600/90">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-bold text-lg">{course.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Camp Theme Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Camp & Workshop
            </h2>
          </div>
          
          {/* Summer Camp Programs */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">Summer Camp</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Junior Explorers", subtitle: "Year 4-7", link: "/summer-camp/junior-explorers-year-4-7", img: "/images/home1.png" },
                { title: "Fencing & STEM", subtitle: "Year 4-7", link: "/summer-camp/fencing-stem-year-4-7", img: "/images/home2.jpg" },
                { title: "Tech Masters", subtitle: "Year 8-14", link: "/summer-camp/tech-masters-year-8-14-summer", img: "/images/home3.png" },
                { title: "AI Innovators", subtitle: "Year 8-14", link: "/summer-camp/ai-innovators-year-8-14", img: "/images/home4.png" },
                { title: "Fencing & STEM", subtitle: "Year 8-14", link: "/summer-camp/fencing-stem-year-8-14", img: "/images/im2.png" },
                { title: "MIT Tech Creators", subtitle: "Year 8-14", link: "/summer-camp/mit-tech-creators-year-8-14", img: "/images/im3.png" },
              ].map((program, idx) => (
                <Link
                  key={idx}
                  href={program.link}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={program.img} 
                      alt={program.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h4>
                    <p className="text-blue-600 font-medium text-sm">{program.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Assets Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">Core Assets</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Shaping Future Leaders <br className="hidden md:block" /> Through Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Program Diversity */}
            <div className="group p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <Library className="w-12 h-12 text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Diversity</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Offering a wide range of educational programs, from early childhood to advanced levels, catering to diverse age groups and learning needs.
              </p>
            </div>

            {/* Qualified Instructors */}
            <div className="group p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualified Instructors</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ensuring that all instructors and educators are highly qualified and experienced in their respective fields, guaranteeing the delivery of quality education.
              </p>
            </div>

            {/* Modern Facilities */}
            <div className="group p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <Building2 className="w-12 h-12 text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Facilities</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Providing state-of-the-art facilities equipped with the latest educational technology, ensuring a conducive learning environment for all age groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col items-center text-center gap-10">
            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-blue-600 font-semibold uppercase tracking-widest mb-4">
                Join in Your Favorite Courses Today
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
                Apply Your Courses Today
                <ArrowRight className="w-8 h-8 text-gray-900 shrink-0" />
              </h2>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Link
                href="/registration"
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-blue-600 text-white font-bold text-xl rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1"
              >
                Apply Now
                <div className="relative">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  {/* Custom SVG Decoration Path */}
                  <svg className="absolute -inset-4 w-14 h-14 text-white/20 group-hover:rotate-12 transition-transform" viewBox="0 0 100 100">
                    <path d="M10,50 Q25,10 50,10 T90,50 T50,90 T10,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
