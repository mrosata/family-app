'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Photo {
  src: string;
  alt: string;
}

const allPhotos: Photo[] = [
  { src: '/images/gallery/family-1.jpg', alt: 'Family gathering' },
  { src: '/images/gallery/wedding-home-1.jpg', alt: 'Wedding celebration at home' },
  { src: '/images/gallery/wedding-india-3.jpg', alt: 'Indian wedding celebration' },
  { src: '/images/gallery/wedding-india-2.jpg', alt: 'Indian wedding moments' },
  { src: '/images/gallery/engagement-2.jpg', alt: 'Engagement celebration' },
  { src: '/images/gallery/engagement-1.jpg', alt: 'Engagement moment' },
  { src: '/images/gallery/wedding-encore.jpg', alt: 'Wedding encore celebration' },
  { src: '/images/gallery/wedding-encore-2.jpg', alt: 'Wedding encore moments' },
  { src: '/images/gallery/wedding-encore-1.jpg', alt: 'Wedding encore gathering' },
  { src: '/images/gallery/drummer-park-9-2025.jpg', alt: 'Day at the park' },
  { src: '/images/gallery/cabin-1.jpg', alt: 'Cabin getaway' },
  { src: '/images/gallery/wedding-india-1.jpg', alt: 'Indian wedding ceremony' },
  { src: '/images/gallery/assortment.jpg', alt: 'Family assortment' },
  { src: '/images/gallery/safari-1.jpg', alt: 'Safari adventure' },
  { src: '/images/gallery/snowport-1.jpg', alt: 'Winter memories' },
  { src: '/images/gallery/ptown-trip-3.jpg', alt: 'Provincetown trip moments' },
  { src: '/images/gallery/ptown-trip-2.jpg', alt: 'Provincetown adventures' },
  { src: '/images/gallery/ptown-trip-1.jpg', alt: 'Provincetown family time' }
];

const INITIAL_PHOTO_COUNT = 6;

export default function GalleryGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedPhotos = isExpanded ? allPhotos : allPhotos.slice(0, INITIAL_PHOTO_COUNT);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPhotos.map((photo, index) => (
          <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      
      {allPhotos.length > INITIAL_PHOTO_COUNT && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 px-4 bg-adaptive-gray-100 hover:bg-adaptive-gray-200 rounded-lg transition-colors duration-200 font-medium text-adaptive-gray-900 flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>Show Less <span className="text-xl">↑</span></>
          ) : (
            <>Show More ({allPhotos.length - INITIAL_PHOTO_COUNT} photos) <span className="text-xl">↓</span></>
          )}
        </button>
      )}
    </div>
  );
} 