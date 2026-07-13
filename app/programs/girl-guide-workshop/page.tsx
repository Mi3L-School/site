import Link from "next/link";

export default function GirlGuideWorkshopPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Community Outreach</p>
        <h1 className="text-4xl font-bold">Girl Guide Workshop</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our Girl Guide Workshop focuses on teamwork, problem-solving, and hands-on exploration in a welcoming environment.
        </p>
        <Link href="/" className="mt-8 inline-flex text-orange-600 hover:text-orange-700 font-semibold">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
