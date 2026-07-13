import Image from "next/image";
import Link from "next/link";

export default function SpecialNeedsWorkshopPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Community Outreach
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Special Needs STEM & Robotics Workshop
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            In collaboration with the Northstar Special Needs Society, we hosted an exclusive STEM and robotics workshop designed specifically for children with special needs.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-start">
            <section className="rounded-2xl bg-orange-50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                A meaningful January event
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                This January workshop was a cornerstone of our Girl Powered Online Challenge, bringing accessible, hands-on learning to young learners who deserve every opportunity to explore technology, creativity, and problem-solving.
              </p>
            </section>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-sm sm:p-3">
              <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 sm:p-2">
                <Image
                  src="/images/workshop/special-needs_workshop.png"
                  alt="Special Needs STEM and Robotics Workshop flyer"
                  width={1400}
                  height={1900}
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>

            <section className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                What made it special
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Inclusive STEM and robotics activities tailored for children with special needs</li>
                <li>• A welcoming environment that encourages curiosity and confidence</li>
                <li>• A strong commitment to making innovation accessible for every child</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Why it matters</h2>
            <p className="mt-4 text-gray-700 leading-7">
              Our goal was to ensure that the future of innovation remains accessible to every child, regardless of their learning journey. By creating spaces where students can learn, create, and belong, we help inspire the next generation of thinkers and builders.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
