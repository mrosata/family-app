import Link from 'next/link'

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Family Events</h1>
        <p className="mt-2 text-gray-600">
          Browse through our family celebrations and milestones.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/events/pre-baby-summer-2025"
          className="group block"
        >
          <div className="aspect-[3/2] relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="absolute inset-0 flex items-center justify-center text-white p-6 text-center">
              <div>
                <h2 className="text-xl font-semibold group-hover:underline">Pre-Baby Summer Party</h2>
                <p className="mt-2 text-sm text-white/90">July 15, 2025</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Join us for a celebration before our newest family member arrives!
            </p>
          </div>
        </Link>

        {/* Placeholder for future events */}
        <div className="aspect-[3/2] relative overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400 text-center px-4">
            More events coming soon...
          </p>
        </div>
      </div>
    </div>
  )
} 