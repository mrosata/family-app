export default function PreBabySummerParty() {
  return (
    <article className="divide-y divide-gray-200">
      {/* Event Header/Invitation */}
      <div className="relative aspect-[3/2] w-full bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Pre-Baby Summer Party</h1>
            <p className="text-xl opacity-90">Join us for a celebration before our newest family member arrives!</p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="px-6 py-8 sm:p-10 space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Event Details</h2>
          
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Date & Time</dt>
              <dd className="text-lg text-gray-900">July 15, 2025 • 2:00 PM</dd>
            </div>
            
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="text-lg text-gray-900">
                The Family Garden
                <br />
                123 Sunshine Avenue
                <br />
                Paradise City, ST 12345
              </dd>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">What to Expect</dt>
              <dd className="text-lg text-gray-900">
                Join us for an afternoon of joy and celebration as we prepare to welcome the newest 
                member of our family. There will be games, refreshments, and lots of love to share!
              </dd>
            </div>
          </dl>
        </div>

        {/* Photo Gallery Section (Initially Empty) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Photo Gallery</h2>
          <p className="text-gray-600 italic">
            Photos from the event will be shared here after the celebration.
          </p>
        </div>

        {/* Messages Section (Initially Empty) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Messages</h2>
          <p className="text-gray-600 italic">
            Guest messages and well-wishes will appear here after the event.
          </p>
        </div>
      </div>
    </article>
  )
} 