import Image from "next/image";

export default function PreBabySummerParty() {
  return (
    <article className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
      
      {/* Event Header/Invitation */}
      <div className="space-y-6">
        {/* Header Content */}
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pre-Baby Summer Party</h1>
              <div className="text-xl space-y-2">
                <p>JULY 12 • STARTING AT 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        {/* Poster Image */}
        <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/images/pre-baby-summer-party-invite.png"
            alt="Pre-Baby Summer Party Invitation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Event Details */}
      <div className="px-6 py-8 sm:p-10 space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-adaptive-gray-900">Event Details</h2>
          
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <dt className="text-sm font-medium text-adaptive-gray-500">Date & Time</dt>
              <dd className="text-lg text-adaptive-gray-900">July 12, 2025 • 1:00 PM onward</dd>
            </div>
            
            <div className="space-y-1">
              <dt className="text-sm font-medium text-adaptive-gray-500">Location</dt>
              <dd className="text-lg text-adaptive-gray-900">
                5 Longfellow Place
                <br />
                Boston, MA 02114
              </dd>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <dt className="text-sm font-medium text-adaptive-gray-500">What to Expect</dt>
              <dd className="text-lg text-adaptive-gray-900">
                Join us for an afternoon of joy and celebration as we prepare to welcome the newest 
                member of our family. There will be friends, refreshments and good vibes <em>(no games!)</em>
              </dd>
            </div>

            {/* Registry Section */}
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-sm font-medium text-adaptive-gray-500">Registry</dt>
              <dd className="text-lg text-adaptive-gray-900 space-y-4">
                <p>
                  While your presence is the greatest gift, for those who have asked, we are registered at Babylist:
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="text-center">
                  <p className="text-sm text-adaptive-gray-500 mt-2">Click or scan QR code</p>
                  <a 
                      href="https://my.babylist.com/michael-rosata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 underline"
                    >
                      Priyanka and Michaels Babylist Registry
                    </a>
                  </div>
                  <div className="w-32 h-32">
                    <Image
                      src="/images/babylist-qr.png"
                      alt="Registry QR Code"
                      width={128}
                      height={128}
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>

        {/* Photo Gallery Section (Initially Empty) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-adaptive-gray-900">Photo Gallery</h2>
          <p className="text-adaptive-gray-600 italic">
            Photos from the event will be shared here after the celebration.
          </p>
        </div>

        {/* Messages Section (Initially Empty) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-adaptive-gray-900">Messages</h2>
          <p className="text-adaptive-gray-600 italic">
            Signed guest messages from the party will appear here after the event.
          </p>
        </div>
      </div>
    </article>
  )
} 