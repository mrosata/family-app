import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-adaptive-gray-900 sm:text-5xl md:text-6xl">
          Welcome to the Rosata Panchanan Family
        </h1>
        <p className="text-xl text-adaptive-gray-600 max-w-2xl mx-auto">
          We&apos;re excited to share our family&apos;s journey with you! This is where we keep our loved ones updated on all our special moments, celebrations, and milestones. Stay connected with us as our family grows and creates beautiful memories together.
        </p>
      </section>

      {/* Featured Event */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-2">Pre-Baby Summer Party</h2>
              <p className="text-lg">Join the Rosata Panchanan family as we celebrate our growing family!</p>
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

      {/* Upcoming Events */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-adaptive-gray-900">Our Upcoming Celebrations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link 
            href="/events/pre-baby-summer-2025"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-adaptive-gray-900">Pre-Baby Summer Party</h3>
            <p className="text-adaptive-gray-600 mt-2">Summer 2025</p>
            <span className="inline-block mt-4 text-blue-600 dark:text-blue-400">View details →</span>
          </Link>
        </div>
      </section>

      {/* Family Photos Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-adaptive-gray-900">Our Family Moments</h2>
        <GalleryGrid />
      </section>
    </div>
  );
}
