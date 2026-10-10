import { useState, useMemo } from 'react';
import { Calculator, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface BudgetCalculatorProps {
  onOpenWhatsApp: (message?: string) => void;
}

export default function BudgetCalculator({ onOpenWhatsApp }: BudgetCalculatorProps) {
  const [guests, setGuests] = useState<number>(300);
  const [venueType, setVenueType] = useState<'hotel' | 'gedung' | 'garden' | 'home'>('gedung');
  const [decorTier, setDecorTier] = useState<'minimalist' | 'traditional' | 'royal'>('traditional');
  const [attireTier, setAttireTier] = useState<'standard' | 'complete' | 'luxury'>('complete');
  const [includeDrone, setIncludeDrone] = useState<boolean>(true);
  const [includePhotobooth, setIncludePhotobooth] = useState<boolean>(true);
  const [includeOrchestra, setIncludeOrchestra] = useState<boolean>(false);
  const [includeWO, setIncludeWO] = useState<boolean>(true);

  const venueRates: Record<string, { label: string; ratePerPax: number }> = {
    hotel: { label: 'Ballroom Hotel Bintang 5 (Katering + Venue)', ratePerPax: 550000 },
    gedung: { label: 'Gedung Resepsi / Convention Hall', ratePerPax: 320000 },
    garden: { label: 'Outdoor Garden / Private Villa', ratePerPax: 280000 },
    home: { label: 'Pendopo / Rumah Keluarga', ratePerPax: 180000 },
  };

  const decorRates: Record<string, { label: string; price: number }> = {
    minimalist: { label: 'Modern Minimalist / Chic Rustic (6-8m)', price: 25000000 },
    traditional: { label: 'Grand Traditional Adat Floral (12-14m)', price: 45000000 },
    royal: { label: 'Royal Splendor 3D Architecture & Plafon Bunga (18-22m)', price: 85000000 },
  };

  const attireRates: Record<string, { label: string; price: number }> = {
    standard: { label: 'Akad Saja (Pengantin & 2 Ibu)', price: 8000000 },
    complete: { label: 'Akad + Resepsi Lengkap + Orang Tua + Pagar Ayu', price: 18000000 },
    luxury: { label: 'Top Tier MUA + Busana Adat Custom Couture Lengkap', price: 35000000 },
  };

  const calculation = useMemo(() => {
    const venueCost = guests * venueRates[venueType].ratePerPax;
    const decorCost = decorRates[decorTier].price;
    const attireCost = attireRates[attireTier].price;
    
    let addOnsCost = 0;
    if (includeDrone) addOnsCost += 6000000;
    if (includePhotobooth) addOnsCost += 4500000;
    if (includeOrchestra) addOnsCost += 8500000;
    if (includeWO) addOnsCost += 19500000;

    const total = venueCost + decorCost + attireCost + addOnsCost;
    const costPerPax = Math.round(total / guests);

    return {
      venueCost,
      decorCost,
      attireCost,
      addOnsCost,
      total,
      costPerPax,
    };
  }, [guests, venueType, decorTier, attireTier, includeDrone, includePhotobooth, includeOrchestra, includeWO]);

  const formatIDR = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleSendToWhatsApp = () => {
    const text = `Halo Kalyana Wedding Atelier, saya sudah mencoba Simulasi Estimasi Biaya di website dengan rincian:
- Estimasi Tamu: ${guests} Undangan
- Pilihan Venue: ${venueRates[venueType].label}
- Dekorasi: ${decorRates[decorTier].label}
- Rias & Busana: ${attireRates[attireTier].label}
- Layanan Tambahan: ${[
      includeWO ? 'WO Full Day' : null,
      includeDrone ? 'Drone 4K SDE' : null,
      includePhotobooth ? 'Photobooth 360' : null,
      includeOrchestra ? 'Live Orchestra / Band' : null,
    ].filter(Boolean).join(', ')}
- *Total Estimasi Anggaran:* ${formatIDR(calculation.total)} (Sekitar ${formatIDR(calculation.costPerPax)} / Pax)

Bisakah saya jadwalkan sesi konsultasi untuk membahas kecocokan anggaran ini dengan tanggal rencana kami?`;

    onOpenWhatsApp(text);
  };

  return (
    <section id="simulasi" className="py-20 bg-[#F4EFEA] border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
            <Calculator className="w-4 h-4" />
            <span>Kalkulator Interaktif</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
            Simulasi Estimasi Biaya Pernikahan
          </h2>
          <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed">
            Sesuaikan jumlah tamu, venue, dan gaya dekorasi impian Anda untuk mendapatkan gambaran estimasi anggaran riil di pasar Indonesia 2026.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#DFD6C9] shadow-xs space-y-7">
            
            {/* 1. Tamu Undangan */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
                  1. Jumlah Tamu Undangan
                </label>
                <span className="font-serif-luxury text-2xl font-bold text-[#9A7B56] tabular-nums">
                  {guests} Undangan ({guests * 2} Pax)
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1200"
                step="50"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-[#9A7B56] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#8C8375] mt-1 font-mono">
                <span>100 Undangan (Intimate)</span>
                <span>500 (Gedung Standard)</span>
                <span>1.200 (Grand Ballroom)</span>
              </div>
            </div>

            {/* 2. Jenis Venue & Katering */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wide mb-3">
                2. Jenis Venue & Katering
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(venueRates) as Array<'hotel' | 'gedung' | 'garden' | 'home'>).map((key) => {
                  const isSelected = venueType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setVenueType(key)}
                      className={`p-3.5 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#9A7B56] bg-[#FAF6F0] font-semibold text-[#1A1A1A] shadow-xs ring-1 ring-[#9A7B56]'
                          : 'border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] text-[#5A534A]'
                      }`}
                    >
                      <div className="font-bold">{venueRates[key].label}</div>
                      <div className="text-[11px] text-[#8C8375] mt-1 tabular-nums">
                        Estimasi {formatIDR(venueRates[key].ratePerPax)} / pax
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Tingkat Dekorasi Pelaminan */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wide mb-3">
                3. Tingkat Dekorasi Pelaminan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(decorRates) as Array<'minimalist' | 'traditional' | 'royal'>).map((key) => {
                  const isSelected = decorTier === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setDecorTier(key)}
                      className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#9A7B56] bg-[#FAF6F0] font-semibold text-[#1A1A1A] shadow-xs ring-1 ring-[#9A7B56]'
                          : 'border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] text-[#5A534A]'
                      }`}
                    >
                      <div className="font-bold">{decorRates[key].label}</div>
                      <div className="text-[11px] text-[#8C8375] mt-1 tabular-nums">
                        {formatIDR(decorRates[key].price)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Rias MUA & Busana */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wide mb-3">
                4. Rias Pengantin & Busana Keluarga
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(attireRates) as Array<'standard' | 'complete' | 'luxury'>).map((key) => {
                  const isSelected = attireTier === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setAttireTier(key)}
                      className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#9A7B56] bg-[#FAF6F0] font-semibold text-[#1A1A1A] shadow-xs ring-1 ring-[#9A7B56]'
                          : 'border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] text-[#5A534A]'
                      }`}
                    >
                      <div className="font-bold">{attireRates[key].label}</div>
                      <div className="text-[11px] text-[#8C8375] mt-1 tabular-nums">
                        {formatIDR(attireRates[key].price)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Layanan Pendukung Tambahan */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wide mb-3">
                5. Fasilitas Tambahan (Opsional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeWO}
                    onChange={(e) => setIncludeWO(e.target.checked)}
                    className="accent-[#9A7B56] w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-[#1A1A1A]">Wedding Organizer Tim (8 Kru)</span>
                    <span className="block text-[11px] text-[#8C8375] tabular-nums">+Rp 19.500.000</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDrone}
                    onChange={(e) => setIncludeDrone(e.target.checked)}
                    className="accent-[#9A7B56] w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-[#1A1A1A]">Drone 4K & Same Day Edit Cinema</span>
                    <span className="block text-[11px] text-[#8C8375] tabular-nums">+Rp 6.000.000</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includePhotobooth}
                    onChange={(e) => setIncludePhotobooth(e.target.checked)}
                    className="accent-[#9A7B56] w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-[#1A1A1A]">Photobooth 360 Spin Unlimited</span>
                    <span className="block text-[11px] text-[#8C8375] tabular-nums">+Rp 4.500.000</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#E5DDD0] bg-white hover:bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeOrchestra}
                    onChange={(e) => setIncludeOrchestra(e.target.checked)}
                    className="accent-[#9A7B56] w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-[#1A1A1A]">Live Chamber Acoustic Orchestra</span>
                    <span className="block text-[11px] text-[#8C8375] tabular-nums">+Rp 8.500.000</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-[#DFD6C9] shadow-lg sticky top-28">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9A7B56] mb-1">
              Hasil Estimasi Anggaran
            </div>
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A1A1A] tabular-nums">
              {formatIDR(calculation.total)}
            </div>
            <div className="text-xs text-[#736B5E] mt-1 mb-6">
              Rata-rata alokasi sekitar <strong className="text-[#1A1A1A] font-mono">{formatIDR(calculation.costPerPax)}</strong> per pax tamu.
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 py-4 border-y border-[#F0EAE1] text-xs">
              <div className="flex justify-between items-center text-[#5A534A]">
                <span>Venue & Katering ({guests} Undangan):</span>
                <span className="font-mono font-medium text-[#1A1A1A]">{formatIDR(calculation.venueCost)}</span>
              </div>
              <div className="flex justify-between items-center text-[#5A534A]">
                <span>Dekorasi Pelaminan:</span>
                <span className="font-mono font-medium text-[#1A1A1A]">{formatIDR(calculation.decorCost)}</span>
              </div>
              <div className="flex justify-between items-center text-[#5A534A]">
                <span>Tata Rias MUA & Busana:</span>
                <span className="font-mono font-medium text-[#1A1A1A]">{formatIDR(calculation.attireCost)}</span>
              </div>
              <div className="flex justify-between items-center text-[#5A534A]">
                <span>Fasilitas & Kru Tambahan:</span>
                <span className="font-mono font-medium text-[#1A1A1A]">{formatIDR(calculation.addOnsCost)}</span>
              </div>
            </div>

            {/* Reassurance note */}
            <div className="my-5 p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EBE4D8] text-[11px] text-[#5A534A] leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-[#1A1A1A] mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B56]" />
                <span>Catatan Konsultasi:</span>
              </div>
              Angka di atas merupakan estimasi standar pasar Jakarta. Biaya riil dapat lebih efisien bila digabungkan dalam paket bundling Kalyana Wedding Atelier.
            </div>

            {/* CTA to WhatsApp with calculated data */}
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-[#9A7B56] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Kirim Rincian Simulasi ke WhatsApp</span>
            </button>
            <p className="text-[10px] text-center text-[#8C8375] mt-2">
              Langsung tersambung ke Senior Wedding Planner kami tanpa komitmen.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
