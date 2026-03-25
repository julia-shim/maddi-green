import { useEffect, useState } from 'react';

export default function Gallery({ category }: { category: string }) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate some random placeholder images based on category
    const count = category === 'wedding' ? 12 : category === 'senior' ? 10 : 14;
    const newImages = Array.from({ length: count }).map((_, i) => {
      // Mix of portrait and landscape aspect ratios for masonry
      const width = 800;
      const height = i % 3 === 0 ? 1200 : i % 4 === 0 ? 600 : 1000;
      return `https://picsum.photos/seed/${category}-${i}/${width}/${height}`;
    });
    setImages(newImages);
  }, [category]);

  const titles: Record<string, string> = {
    'senior': 'Senior Portraits',
    'wedding': 'Weddings',
    'coursework': 'Coursework'
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-brown inline-block">
          {titles[category]}
        </h1>
      </div>
      
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, idx) => (
          <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm border-4 border-white shadow-md hover:border-gold transition-colors duration-300 bg-lightsage/20">
            <img 
              src={src} 
              alt={`${category} ${idx}`} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-rust/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
