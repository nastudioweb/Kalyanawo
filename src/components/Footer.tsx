import { MessageCircle, Mail, MapPin, Phone, Instagram, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: (message?: string) => void;
}

export default function Footer({ onOpenWhatsApp }: FooterProps) {
  return (
    <footer className="bg-[#141210] text-[#D8CEBE] pt-16 pb-12 border-t border-[#2D2824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2D2824]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="font-serif-luxury text-3xl font-bold tracking-wide text-white">
                Kalyana
              </span>
              <span className="block text-[11px] tracking-[0.25em] uppercase text-[#C5A880] mt-0.5 font-sans-clean font-semibold">
                Wedding Atelier & Event Planner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A89E90] leading-relaxed mb-6 max-w-sm">
              Mewujudkan keagungan resepsi pernikahan Indonesia dengan perpaduan tradisi adiluhung Nusantara dan keanggunan modern internasional.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C5A880]">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Wedding Organizer Bersertifikasi & Berbadan Hukum Resmi</span>
            </div>
          </div>

          {/* Office & Operational Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Kantor & Studio Atelier
            </h4>
            <div className="space-y-3 text-xs text-[#A89E90]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Hotline: +62 812-9876-5432 (WhatsApp Aktif)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Email: halo@kalyanawedding.id</span>
              </div>
              <div className="pt-2 text-[11px] text-[#8C8274]">
                Jam Operasional: Senin – Minggu, 09.00 – 21.00 WIB (Kunjungan Studio dengan Janji Temu)
              </div>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Layanan & Menu
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E90]">
              <li><a href="#paket" className="hover:text-white transition-colors">Paket & Harga</a></li>
              <li><a href="#galeri" className="hover:text-white transition-colors">Galeri Pernikahan</a></li>
              <li><a href="#simulasi" className="hover:text-white transition-colors">Simulasi Biaya</a></li>
              <li><a href="#tips" className="hover:text-white transition-colors">Tips & Jurnal Pengantin</a></li>
              <li><a href="#testimoni" className="hover:text-white transition-colors">Kisah Klien</a></li>
              <li><a href="#pemesanan" className="hover:text-white transition-colors">Formulir Reservasi</a></li>
            </ul>
          </div>

          {/* Payment & Trust */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Metode Pembayaran
            </h4>
            <div className="space-y-2 text-xs text-[#A89E90]">
              <div>Transfer Rekening Giro Resmi PT:</div>
              <div className="font-mono text-[11px] text-[#C5A880] space-y-0.5">
                <div>• Bank Central Asia (BCA)</div>
                <div>• Bank Mandiri</div>
                <div>• Bank Rakyat Indonesia (BRI)</div>
                <div>• QRIS & Virtual Account</div>
              </div>
              <div className="text-[11px] text-[#8C8274] pt-2">
                Skema pembayaran bertahap 4 termin transparan.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quiet Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C8274] gap-4">
          <div>
            © 2026 Kalyana Wedding Atelier. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-6">
            <span>Kebijakan Privasi</span>
            <span aria-hidden="true">·</span>
            <span>Syarat & Ketentuan Layanan</span>
            <span aria-hidden="true">·</span>
            <span>Jakarta · Bandung · Bali</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
