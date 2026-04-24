import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Navbar({ onBookingClick }: { onBookingClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về Gạch', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Không Gian', href: '#gallery' },
    { name: 'Liên Hệ', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-baseline gap-2">
          <span className={`serif text-3xl font-bold tracking-tighter ${isScrolled ? 'text-brick' : 'text-white'}`}>GẠCH</span>
          <span className={`text-[10px] uppercase tracking-widest opacity-60 ${isScrolled ? 'text-brick' : 'text-white'}`}>EST. 2024</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-terracotta ${isScrolled ? 'text-brick' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onBookingClick}
            className="bg-brick text-white px-8 py-2 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-xl hover:bg-terracotta transition-all"
          >
            Đặt bàn
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-brick' : 'text-white'} /> : <Menu className={isScrolled ? 'text-brick' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-beige shadow-xl md:hidden py-8 px-6 flex flex-col gap-6 border-t border-brick/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brick text-[12px] uppercase tracking-widest font-bold hover:text-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookingClick();
              }}
              className="bg-brick text-white px-8 py-4 text-xs uppercase tracking-widest font-bold rounded-sm"
            >
              Đặt bàn ngay
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
