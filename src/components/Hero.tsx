import { MessageCircle, ArrowRight, ShieldCheck, CalendarCheck, Sparkles, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: (message?: string) => void;
  onExplorePackages: () => void;
}

export default function Hero({ onOpenWhatsApp, onExplorePackages }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Clean Sub-header kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-3">
              <span>Wedding Organizer & Event Planner</span>
              <span aria-hidden="true">·</span>
              <span>Jakarta & Indonesia</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1A] font-semibold tracking-tight leading-[1.15] text-balance mb-6">
              Mewujudkan Momen Sakral & Resepsi Agung dengan Sentuhan Paripurna.
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed mb-8 max-w-xl">
              Dari pakem agung Adat Jawa, Sunda, & Minang hingga keanggunan Modern Ballroom, Kalyana Atelier mendampingi setiap detik persiapan Anda dengan transparansi biaya penuh dan ketenangan batin.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExplorePackages}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#9A7B56] rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Lihat Paket & Rincian Harga</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWhatsApp('Halo Kalyana Wedding, saya ingin konsultasi gratis untuk rencana pernikahan saya.')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1A1A1A] bg-[#FFFFFF] hover:bg-[#F3EDE3] border border-[#D5C9B8] rounded-md transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </button>
            </div>

            {/* Fast reassurance points */}
            <div className="flex items-center gap-6 text-xs text-[#736B5E] pt-4 border-t border-[#EAE3D8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9A7B56]" />
                <span>Tanpa Biaya Siluman</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#9A7B56]" />
                <span>Garansi Rundown Tepat Waktu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#DFD6C9] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-[#EAE3D8]">
              <img
                src="images/hero_wedding_indonesian_1791546380551.jpg"
                alt="Pengantin Indonesia dalam balutan busana adat agung di ballroom mewah karya Kalyana Wedding Atelier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              {/* Subtle luxury overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              {/* Image Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                <div className="text-xs text-[#E8DFD3] tracking-wide mb-1">
                  Resepsi Royal Kempinski Jakarta · Adat Jawa Modern
                </div>
                <div className="font-serif-luxury text-lg sm:text-xl font-medium tracking-wide">
                  "Ketenangan sejati di hari terpenting dalam hidup Anda."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Row Below Hero Split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-8 border-t border-[#EAE3D8]">
          <div className="p-4 bg-white/70 border border-[#EBE4D8] rounded-lg">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] tabular-nums">
              520+
            </div>
            <div className="text-xs sm:text-sm text-[#736B5E] mt-1 font-medium">
              Pasangan Telah Menikah
            </div>
          </div>

          <div className="p-4 bg-white/70 border border-[#EBE4D8] rounded-lg">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] tabular-nums">
              10+ Tahun
            </div>
            <div className="text-xs sm:text-sm text-[#736B5E] mt-1 font-medium">
              Pengalaman Wedding Planner
            </div>
          </div>

          <div className="p-4 bg-white/70 border border-[#EBE4D8] rounded-lg">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] tabular-nums">
              4.95 / 5.0
            </div>
            <div className="text-xs sm:text-sm text-[#736B5E] mt-1 font-medium">
              Tingkat Kepuasan Klien
            </div>
          </div>

          <div className="p-4 bg-white/70 border border-[#EBE4D8] rounded-lg">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-[#736B5E] mt-1 font-medium">
              Transparansi Anggaran
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
