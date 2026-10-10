import { useState } from 'react';
import { WEDDING_PACKAGES, WeddingPackage } from '../data/weddingData';
import { Check, MessageCircle, ArrowRight, FileText, X, Users, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
  onOpenWhatsApp: (message?: string) => void;
}

export default function PackagesSection({ onSelectPackage, onOpenWhatsApp }: PackagesSectionProps) {
  const [selectedDetailPackage, setSelectedDetailPackage] = useState<WeddingPackage | null>(null);

  const handleBookNow = (pkg: WeddingPackage) => {
    onSelectPackage(pkg.name);
    const element = document.getElementById('pemesanan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppConsult = (pkg: WeddingPackage) => {
    const text = `Halo Kalyana Wedding Atelier, saya tertarik dan ingin menanyakan ketersediaan tanggal untuk *${pkg.name}* (${pkg.formattedPrice}). Bisakah minta jadwal konsultasi?`;
    onOpenWhatsApp(text);
  };

  return (
    <section id="paket" className="py-20 bg-[#FAF8F5] border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
            Pilihan Paket Pernikahan
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
            Daftar Paket & Rincian Harga Transparan
          </h2>
          <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed">
            Setiap paket dirancang komprehensif tanpa biaya tersembunyi. Kami memastikan setiap vendor berstandar mutu tinggi dengan alur koordinasi terpadu.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WEDDING_PACKAGES.map((pkg) => {
            const isHighlighted = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-xl p-6 transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#9A7B56] shadow-xl'
                    : 'bg-white/80 border border-[#DFD6C9] hover:border-[#B5A593] shadow-xs'
                }`}
              >
                {/* Popular Marker */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-6 bg-[#9A7B56] text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-sm shadow-xs">
                    {pkg.badge || 'Paling Diminati'}
                  </div>
                )}

                <div>
                  {/* Package Title & Capacity */}
                  <div className="mb-4">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] leading-snug">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#736B5E] mt-1 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#9A7B56]" />
                      <span>{pkg.capacity}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-[#F0EAE1]">
                    <div className="text-xs text-[#8C8375] uppercase tracking-wider font-medium">Mulai Dari</div>
                    <div className="font-serif-luxury text-3xl font-bold text-[#1A1A1A] tabular-nums mt-0.5">
                      {pkg.formattedPrice}
                    </div>
                    <div className="text-xs text-[#736B5E] mt-1">
                      Termasuk PPN & koordinasi all-in
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-[#5A534A] leading-relaxed mb-6 italic">
                    "{pkg.tagline}"
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#4A453E]">
                      Highlight Fasilitas:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A453E] leading-normal">
                        <Check className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2 pt-4 border-t border-[#F0EAE1]">
                  <button
                    type="button"
                    onClick={() => handleBookNow(pkg)}
                    className={`w-full py-2.5 px-4 rounded-md text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isHighlighted
                        ? 'bg-[#1A1A1A] hover:bg-[#9A7B56] text-white shadow-xs'
                        : 'bg-[#1A1A1A] hover:bg-[#9A7B56] text-white'
                    }`}
                  >
                    <span>Pilih & Isi Formulir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDetailPackage(pkg)}
                      className="py-2 px-2 text-center text-xs font-medium text-[#4A453E] hover:text-[#1A1A1A] bg-[#FAF8F5] hover:bg-[#EFE9DF] border border-[#E3DBD0] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Rincian Inklusi
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatsAppConsult(pkg)}
                      className="py-2 px-2 text-center text-xs font-medium text-[#1A1A1A] hover:text-[#1A1A1A] bg-[#E8F8EE] hover:bg-[#D5F2DF] border border-[#BCE8CA] rounded-md transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Tanya WA</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote on customization */}
        <div className="mt-12 p-6 bg-white border border-[#DFD6C9] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif-luxury text-xl font-bold text-[#1A1A1A] mb-1">
              Sudah Memiliki Venue Sendiri atau Menginginkan Penyesuaian Khusus?
            </h4>
            <p className="text-sm text-[#5A534A]">
              Kami menyediakan skema modular fleksibel. Item yang tidak Anda gunakan dapat dialihkan ke fasilitas lain atau disesuaikan dengan anggaran Anda.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenWhatsApp('Halo Kalyana WO, saya ingin konsultasi paket kustom (custom wedding package) sesuai kebutuhan dan anggaran keluarga.')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1A1A1A] bg-[#FAF8F5] hover:bg-[#EFE9DF] border border-[#C5B7A4] rounded-md transition-colors cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Kustomisasi Anggaran via WhatsApp</span>
          </button>
        </div>

      </div>

      {/* Package Detail Modal */}
      {selectedDetailPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-[#DFD6C9] p-6 sm:p-8 relative">
            
            <button
              type="button"
              onClick={() => setSelectedDetailPackage(null)}
              className="absolute top-5 right-5 p-2 text-[#736B5E] hover:text-[#1A1A1A] hover:bg-[#EAE3D8] rounded-full transition-colors"
              aria-label="Tutup jendela rincian"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-1">
                Rincian Inklusi Lengkap
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {selectedDetailPackage.name}
              </h3>
              <div className="flex items-center gap-3 mt-2 text-sm text-[#5A534A]">
                <span className="font-bold text-[#1A1A1A] font-serif-luxury text-xl">
                  {selectedDetailPackage.formattedPrice}
                </span>
                <span>·</span>
                <span>Kapasitas {selectedDetailPackage.capacity}</span>
              </div>
            </div>

            <div className="space-y-6 divide-y divide-[#EBE4D8]">
              {selectedDetailPackage.inclusions.map((group, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-5' : ''}>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">
                    {group.category}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-[#4A453E]">
                        <Check className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#EBE4D8] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedDetailPackage(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#5A534A] hover:text-[#1A1A1A]"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  const pkg = selectedDetailPackage;
                  setSelectedDetailPackage(null);
                  handleBookNow(pkg);
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#9A7B56] rounded-md transition-colors"
              >
                Pilih Paket Ini Sekarang
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
