import Image from "next/image";
import Link from "next/link";

export default function GirlGuideWorkshopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 px-6 py-16 text-gray-900 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] border border-orange-100 bg-white/90 p-8 shadow-xl shadow-orange-100 backdrop-blur sm:p-10 lg:p-14">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Community Outreach</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Girl Guide Workshop</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The Girl Guide Workshop is designed to spark confidence, creativity, and leadership in young girls through hands-on STEM learning, teamwork, and inspiring community connection.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 rounded-3xl bg-orange-50 p-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">What the workshop offers</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Interactive activities that build confidence and curiosity.</li>
                <li>• Creative problem-solving challenges inspired by robotics and technology.</li>
                <li>• A supportive environment that encourages girls to lead and collaborate.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Why families love it</h2>
              <p className="mt-4 text-gray-700 leading-8">
                Girls leave the workshop with stronger teamwork skills, fresh ideas, and a deeper belief that they can shape the future through science, engineering, and innovation.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-3 shadow-lg">
              <Image
                src="/images/workshop/gitl_guide_flyer.JPG"
                alt="Girl Guide workshop flyer"
                width={900}
                height={1200}
                className="h-auto w-full rounded-[1.5rem] object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/programs" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Explore More Programs
          </Link>
          <Link href="/" className="rounded-full border border-orange-200 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
