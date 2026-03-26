import { useEffect, useState } from 'react';
import pinkHair from '../assets/live/pinkHair.jpg';
import flannel from '../assets/live/flannel.jpg';
import fourpeople from '../assets/live/fourpeople.jpg';
import ghost from '../assets/live/ghost.jpg';
import laughcry from '../assets/live/laughcry.JPG';
import redguitar from '../assets/live/redguitar.jpg';
import tshirtstripes from '../assets/live/tshirtstripes.JPG';

import anna1 from '../assets/portraits/anna/anna1.jpg';
import anna2 from '../assets/portraits/anna/anna2.jpg';
import anna3 from '../assets/portraits/anna/anna3.jpg';
import ars1 from '../assets/portraits/arsema/ars1.jpg';
import ars2 from '../assets/portraits/arsema/ars2.jpg';
import ars3 from '../assets/portraits/arsema/ars3.jpg';
import chaela from '../assets/portraits/chaela/chaela.JPG';
import kage from '../assets/portraits/kage/kage.jpg';
import lei1 from '../assets/portraits/leilani/lei1.jpg';
import lei2 from '../assets/portraits/leilani/lei2.jpg';
import lei3 from '../assets/portraits/leilani/lei3.jpg';
import lei4 from '../assets/portraits/leilani/lei4.jpg';

const shows = [pinkHair, flannel, fourpeople, ghost, laughcry, redguitar, tshirtstripes];
const portraits = [anna1, anna2, anna3, ars1, ars2, ars3, chaela, kage, lei1, lei2, lei3, lei4];
const coursework: string[] = []; // Currently empty

// Create a map to easily grab the right array based on the category prop
const galleryData: Record<string, string[]> = {
  shows: shows,
  portraits: portraits,
  coursework: coursework,
};

const titles: Record<string, string> = {
  shows: 'Shows',
  portraits: 'Portraits',
  coursework: 'Coursework'
};

export default function Gallery({ category }: { category: string }) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Sync the state with the imported arrays whenever the category changes
    // We use the fallback [] in case the category string doesn't match our keys
    const selectedImages = galleryData[category] || [];
    setImages(selectedImages);
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-brown inline-block">
          {titles[category] || 'Gallery'}
        </h1>
      </div>

      {images.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div 
              key={`${category}-${idx}`} 
              className="break-inside-avoid relative group overflow-hidden rounded-sm border-4 border-white shadow-md hover:border-gold transition-colors duration-300 bg-lightsage/20"
            >
              <img 
                src={src} 
                alt={`${category} ${idx}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-rust/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 italic">Coming soon to the {titles[category]} collection...</p>
        </div>
      )}
    </div>
  );
}