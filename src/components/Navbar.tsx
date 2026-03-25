import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `text-sm uppercase tracking-widest font-medium transition-colors pb-1 border-b-2 ${isActive(path) ? 'text-rust border-rust' : 'text-brown border-transparent hover:text-gold hover:border-gold'}`;
  const mobileLinkClass = (path: string) => `text-2xl font-serif italic tracking-widest transition-colors ${isActive(path) ? 'text-rust' : 'text-brown hover:text-gold'}`;

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-peach border-b-4 border-khaki sticky top-0 z-50 shadow-sm">
      <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-rust hover:text-gold transition-colors">
        MADDI GREEN
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link to="/senior-portraits" className={linkClass('/senior-portraits')}>Senior Portraits</Link>
        <Link to="/weddings" className={linkClass('/weddings')}>Weddings</Link>
        <Link to="/coursework" className={linkClass('/coursework')}>Coursework</Link>
        <Link to="/about" className={linkClass('/about')}>About Me</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream bg-sage p-2 rounded-full hover:bg-rust transition-colors ml-4 shadow-sm">
          <Instagram size={18} />
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button className="lg:hidden text-cream bg-rust p-2 rounded-sm hover:bg-gold transition-colors shadow-sm" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-peach border-b-8 border-rust shadow-xl flex flex-col items-center py-10 space-y-8 lg:hidden">
          <Link to="/senior-portraits" onClick={() => setIsOpen(false)} className={mobileLinkClass('/senior-portraits')}>Senior Portraits</Link>
          <Link to="/weddings" onClick={() => setIsOpen(false)} className={mobileLinkClass('/weddings')}>Weddings</Link>
          <Link to="/coursework" onClick={() => setIsOpen(false)} className={mobileLinkClass('/coursework')}>Coursework</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass('/about')}>About Me</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass('/contact')}>Contact</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream bg-rust p-4 rounded-full hover:bg-gold transition-colors mt-4 shadow-md">
            <Instagram size={28} />
          </a>
        </div>
      )}
    </nav>
  );
}
