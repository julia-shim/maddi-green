import { Instagram, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-serif text-brown mb-12 tracking-tight">
        Let's Connect
      </h1>
      
      <p className="text-xl text-brown/90 mb-16 max-w-xl leading-relaxed bg-khaki/40 p-8 rounded-sm border-t-4 border-rust shadow-sm">
        I'd love to hear from you! Whether you're looking to book a session or just want to say hello, feel free to reach out using the information below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4 bg-lightsage/50 p-8 rounded-sm shadow-sm border-b-4 border-gold hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-rust rounded-full flex items-center justify-center text-cream mb-2 shadow-md">
            <Mail size={28} />
          </div>
          <h3 className="text-sm uppercase tracking-widest font-bold text-sage">Email</h3>
          <a href="mailto:hello@maddigreen.com" className="text-lg font-serif text-brown hover:text-rust transition-colors break-all">
            hello@maddigreen.com
          </a>
        </div>
        
        <div className="flex flex-col items-center space-y-4 bg-peach/40 p-8 rounded-sm shadow-sm border-b-4 border-rust hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-cream mb-2 shadow-md">
            <Phone size={28} />
          </div>
          <h3 className="text-sm uppercase tracking-widest font-bold text-sage">Phone</h3>
          <a href="tel:+1234567890" className="text-lg font-serif text-brown hover:text-rust transition-colors">
            (123) 456-7890
          </a>
        </div>
        
        <div className="flex flex-col items-center space-y-4 bg-khaki/30 p-8 rounded-sm shadow-sm border-b-4 border-sage hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center text-cream mb-2 shadow-md">
            <Instagram size={28} />
          </div>
          <h3 className="text-sm uppercase tracking-widest font-bold text-sage">Socials</h3>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg font-serif text-brown hover:text-rust transition-colors">
            @maddigreenphoto
          </a>
        </div>
      </div>
    </div>
  );
}
