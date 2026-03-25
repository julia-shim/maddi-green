export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
      <h1 className="text-5xl md:text-8xl font-serif text-rust mb-12 md:mb-24 text-center md:text-left tracking-tight drop-shadow-sm">
        MADDI GREEN
      </h1>
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="prose prose-lg text-brown/90">
            <p className="text-2xl leading-relaxed mb-8 font-serif italic text-brown border-l-8 border-gold pl-6 py-4 bg-khaki/30 shadow-sm">
              Capturing the warmth, the light, and the fleeting moments.
            </p>
            <p className="leading-relaxed mb-6">
              Hi, I'm Maddi. I'm a photographer based in [Location], specializing in senior portraits, weddings, and editorial coursework. My style is heavily influenced by the "golden hour glow"—that perfect, warm light that makes everything look a little more magical.
            </p>
            <p className="leading-relaxed mb-6 bg-peach/20 p-6 rounded-sm border border-rust/10">
              I believe that photography is about more than just taking a picture; it's about telling a story and capturing the genuine emotion of a moment. Whether we're shooting in a sun-drenched field or a dimly lit venue, my goal is to make you feel comfortable and beautiful.
            </p>
            <p className="leading-relaxed p-6 bg-lightsage/60 rounded-sm border-l-4 border-sage">
              When I'm not behind the camera, you can find me exploring new coffee shops, chasing the sunset, or planning my next creative project. I can't wait to work with you and bring your vision to life.
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
              src="https://picsum.photos/seed/maddigreen/800/1000" 
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
