import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Our Family
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join us in celebrating life&apos;s precious moments and milestones. From baby showers to birthdays,
          every moment is worth remembering.
        </p>
      </section>

      {/* Featured Event */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-2">Pre-Baby Summer Party</h2>
              <p className="text-lg">Join us for a celebration before our newest family member arrives!</p>
              <Link 
                href="/events/pre-baby-summer-2025"
                className="mt-4 inline-block px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-purple-500 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family Photos Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Family Moments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square relative rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Placeholder Photo {i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link 
            href="/events/pre-baby-summer-2025"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">Pre-Baby Summer Party</h3>
            <p className="text-gray-600 mt-2">Summer 2025</p>
            <span className="inline-block mt-4 text-blue-600">View details →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
