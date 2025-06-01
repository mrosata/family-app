import Image from "next/image";

export default function PreBabySummerParty() {
  return (
    <article className="max-w-4xl mx-auto divide-y divide-gray-200">
      {/* Event Header/Invitation */}
      <div className="relative bg-[#FFF8F3] p-8 rounded-lg shadow-sm">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Summer Icons */}
          <div className="flex justify-between items-center px-4">
            <div className="w-16 h-16 text-[#FF6B4A]">
              {/* Watermelon SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <div className="w-16 h-16 text-[#FFB800]">
              {/* Sun SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
              </svg>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-[#008080] text-xl font-medium">JOIN US FOR A</h2>
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-[#FF6B4A]">PRE-BABY</span>
              <br />
              <span className="text-[#FFB800]">SUMMER</span>
              <br />
              <span className="text-[#FF6B4A]">PARTY</span>
            </h1>
          </div>

          <div className="space-y-2 text-[#008080] text-xl">
            <p>JULY 12 • AT 1:00 PM</p>
            <p>5 LONGFELLOW PLACE</p>
            <p>BOSTON, MA 02114</p>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-between items-center px-4">
            <div className="w-16 h-16 text-[#4AA3FF]">
              {/* Drink SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>
              </svg>
            </div>
            <div className="w-16 h-16 text-[#4AA3FF]">
              {/* Flower SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/>
              </svg>
            </div>
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
              <dd className="text-lg text-gray-900">July 12, 2025 • 1:00 PM onward</dd>
            </div>
            
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="text-lg text-gray-900">
                5 Longfellow Place
                <br />
                Boston, MA 02114
              </dd>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">What to Expect</dt>
              <dd className="text-lg text-gray-900">
                Join us for an afternoon of joy and celebration as we prepare to welcome the newest 
                member of our family. There will be games, refreshments, and lots of love to share!
              </dd>
            </div>

            {/* Registry Section */}
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Registry</dt>
              <dd className="text-lg text-gray-900 space-y-4">
                <p>
                  While your presence is the greatest gift, for those who have asked, we are registered at:
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="text-center">
                    <a 
                      href="https://my.babylist.com/michael-rosata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 underline"
                    >
                      View our Babylist Registry
                    </a>
                    <p className="text-sm text-gray-500 mt-2">Click or scan QR code</p>
                  </div>
                  <div className="w-32 h-32">
                    <Image
                      src="/images/registry-qr.png"
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