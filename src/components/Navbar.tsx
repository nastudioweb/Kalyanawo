import { useState } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: (defaultMessage?: string) => void;
  onSelectBookingPackage?: (packageName: string) => void;
}

export default function Navbar({ onOpenWhatsApp }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Paket & Harga', href: '#paket' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Simulasi Biaya', href: '#simulasi' },
    { label: 'Tips Pernikahan', href: '#tips' },
    { label: 'Testimoni', href: '#testimoni' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DFD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0 focus:outline-none"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wide text-[#1A1A1A] group-hover:text-[#9A7B56] transition-colors">
              Kalyana
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#736B5E] -mt-1 font-sans-clean font-medium">
              Wedding Atelier
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A453E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#9A7B56] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9A7B56] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenWhatsApp('Halo Kalyana Wedding Atelier, saya ingin konsultasi paket pernikahan.')}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#1A1A1A] hover:bg-[#9A7B56] rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D8CEBE]" />
              <span>Konsultasi WhatsApp</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A453E] hover:text-[#1A1A1A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E6DFD5] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4A453E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-2 hover:text-[#9A7B56] border-b border-[#F0EBE1] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#pemesanan"
                onClick={handleNavClick}
                className="w-full text-center py-3 text-sm font-medium text-[#1A1A1A] bg-[#EFE9DF] hover:bg-[#E5DDD0] rounded-md transition-colors"
              >
                Formulir Pemesanan
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp('Halo Kalyana WO, saya ingin konsultasi ketersediaan jadwal tanggal pernikahan.');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-[#1A1A1A] hover:bg-[#9A7B56] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
