import Image from "next/image";

export default function GirlPowerPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Community Outreach
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-bold sm:text-5xl">Girl Power</h1>
          <div className="w-24 overflow-hidden rounded-full border border-gray-200 bg-white p-2 shadow-sm sm:w-28">
            <Image
              src="/images/workshop/GP_icon.png"
              alt="Girl Power icon"
              width={300}
              height={300}
              className="h-auto w-full rounded-full"
            />
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This January, we hosted a Girl Powered STEM & robotics workshop designed to inspire curiosity and confidence in young learners.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-start">
          <section className="rounded-2xl bg-orange-50 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
              What the workshops included
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Our workshops included activities and crafts that boost and encourage STEM learning among all children, along with a VEX Speedbot building challenge. These sessions brought inclusivity, curiosity, and awareness towards STEM education through hands-on learning opportunities.
            </p>
          </section>

          <div className="flex justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm">
              <Image
                src="/images/workshop/girlpower.jpeg"
                alt="Girl Power event photo"
                width={1600}
                height={1000}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <section className="rounded-2xl border border-gray-200 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
              Why it matters
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Inspiring confidence in young learners through STEM exploration</li>
              <li>• Encouraging creativity, teamwork, and problem-solving</li>
              <li>• Creating welcoming opportunities for all children to engage with robotics</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Our impact</h2>
          <p className="mt-4 text-gray-700 leading-7">
            These workshops helped spark curiosity and make STEM feel accessible, hands-on, and inspiring for children of all backgrounds.
          </p>
        </div>
      </div>
    </main>
  );
}
