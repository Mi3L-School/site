"use client";

export default function Donation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900">
            Donate Now!
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
            (Please give it a few seconds to load), Any Issues: Please email{" "}
            <a
              href="mailto:admin@mi3lschool.org"
              className="text-orange-600 hover:text-orange-700 underline"
            >
              admin@mi3lschool.org
            </a>
          </p>
          <div
            className="relative overflow-hidden rounded-lg"
            style={{ height: "1200px", width: "100%" }}
          >
            <iframe
              title="Donation form powered by Zeffy"
              style={{
                position: "absolute",
                border: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.zeffy.com/embed/donation-form/f2b29422-9f3a-4b3b-8b4f-91d98adb7d54"
              allow="payment"
              allowtransparency="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
