import maddi from '../assets/MADDI.jpg';

const MADDI = {maddi}; 
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
      <h1 className="text-5xl md:text-8xl font-serif text-rust mb-12 md:mb-24 text-center md:text-left tracking-tight drop-shadow-sm">
        MADDI GREEN
      </h1>
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="prose prose-lg text-brown/90">
            {/* <p className="text-2xl leading-relaxed mb-8 font-serif italic text-brown border-l-8 border-gold pl-6 py-4 bg-khaki/30 shadow-sm">
            Patience is at the core of my photography. I take time to observe my surroundings, study the light, and remain present until a moment naturally reveals itself. This slow, thoughtful approach allows my images to feel authentic rather than forced.
            </p> */}
            <p className="leading-relaxed mb-6">
            Patience is at the core of my photography. I take time to observe my surroundings, study the light, and remain present until a moment naturally reveals itself. This slow, thoughtful approach allows my images to feel authentic rather than forced.
            </p>
            <p className="leading-relaxed mb-6">
            I carry this same patience into my work with clients, creating space for them to be seen and understood. Whether discovering their aesthetic before a shoot or guiding them through poses during a session, I focus on what makes each person feel most like themselves. By honoring their preferences and comfort, I create photographs that are not only visually strong, but deeply personal images meant to be felt as much as they are seen.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto md:mr-0">
            {/* Colorful Decorative background blocks */}
            <div className="absolute top-6 -right-6 w-full h-full bg-rust rounded-sm -z-10 shadow-lg"></div>
            <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-gold rounded-sm -z-20"></div>
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 bg-peach rounded-sm -z-30"></div>
            <img 
              src={MADDI.maddi}
              alt="Maddi Green" 
              className="w-full h-full object-cover rounded-sm shadow-xl border-8 border-cream"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
