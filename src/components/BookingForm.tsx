import { useState, useEffect } from 'react';
import { WEDDING_PACKAGES } from '../data/weddingData';
import { Send, CheckCircle2, MessageCircle, Calendar, Users, MapPin, Sparkles, Copy, Check } from 'lucide-react';

interface BookingFormProps {
  selectedPackageName?: string;
  onOpenWhatsApp: (message?: string) => void;
}

export default function BookingForm({ selectedPackageName, onOpenWhatsApp }: BookingFormProps) {
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [locationCity, setLocationCity] = useState('Jakarta Selatan');
  const [guestCount, setGuestCount] = useState('300 - 500 Tamu');
  const [chosenPackage, setChosenPackage] = useState(selectedPackageName || 'Paket Grand Adat Nusantara');
  const [weddingConcept, setWeddingConcept] = useState('Adat Tradisional (Jawa / Sunda / Minang)');
  const [budgetRange, setBudgetRange] = useState('Rp 100.000.000 - Rp 150.000.000');
  const [notes, setNotes] = useState('');

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedPackageName) {
      setChosenPackage(selectedPackageName);
    }
  }, [selectedPackageName]);

  const generateWhatsAppMessage = () => {
    return `*FORMULIR KONSULTASI PERNIKAHAN - KALYANA WEDDING ATELIER*
---------------------------------------------
👰 *Nama Mempelai:* ${brideName || '-'} & ${groomName || '-'}
📱 *No. WhatsApp:* ${phone || '-'}
✉️ *Email:* ${email || '-'}
🗓️ *Rencana Tanggal:* ${weddingDate || 'Belum pasti'}
📍 *Lokasi/Kota:* ${locationCity}
👥 *Estimasi Tamu:* ${guestCount}
🎁 *Pilihan Paket:* ${chosenPackage}
✨ *Konsep Acara:* ${weddingConcept}
💰 *Alokasi Anggaran:* ${budgetRange}
📝 *Catatan Khusus:* ${notes || 'Tidak ada catatan tambahan'}
---------------------------------------------
Mohon informasi ketersediaan jadwal tanggal dan proposal detailnya. Terima kasih.`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    onOpenWhatsApp(msg);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brideName || !phone) {
      alert('Mohon lengkapi minimal Nama Mempelai dan Nomor WhatsApp.');
      return;
    }
    const ref = `KLY-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingReference(ref);
    setBookingConfirmed(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pemesanan" className="py-20 bg-[#FAF8F5] border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
            Konsultasi & Reservasi Jadwal
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
            Formulir Rencana Pernikahan
          </h2>
          <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed">
            Ceritakan rencana hari bahagia Anda. Konsultan senior kami akan menyusunkan simulasi konsep, rekomendasi venue, dan jadwal temu ramah.
          </p>
        </div>

        {/* 2-Column Form & Real-time WA Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#DFD6C9] shadow-xs">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Couple Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Nama Calon Mempelai Wanita <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Amanda Larasati"
                    value={brideName}
                    onChange={(e) => setBrideName(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Nama Calon Mempelai Pria <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rangga Soedibyo"
                    value={groomName}
                    onChange={(e) => setGroomName(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812 xxxx xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Alamat Email (Untuk Pengiriman Proposal)
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Rencana Tanggal Pernikahan
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Kota / Wilayah Acara
                  </label>
                  <select
                    value={locationCity}
                    onChange={(e) => setLocationCity(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  >
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                    <option value="Bogor / Puncak">Bogor / Puncak</option>
                    <option value="Depok">Depok</option>
                    <option value="Tangerang / BSD / Alam Sutera">Tangerang / BSD</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Bali (Destination Wedding)">Bali (Destination Wedding)</option>
                    <option value="Lainnya">Kota Lainnya di Indonesia</option>
                  </select>
                </div>
              </div>

              {/* Package & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Pilihan Paket Layanan
                  </label>
                  <select
                    value={chosenPackage}
                    onChange={(e) => setChosenPackage(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  >
                    {WEDDING_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} ({pkg.formattedPrice})
                      </option>
                    ))}
                    <option value="Paket Kustom (Sesuai Anggaran)">Paket Kustom (Sesuai Anggaran)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Estimasi Jumlah Undangan
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  >
                    <option value="50 - 100 Tamu (Very Intimate)">50 - 100 Tamu (Very Intimate)</option>
                    <option value="100 - 200 Tamu (Intimate Wedding)">100 - 200 Tamu (Intimate Wedding)</option>
                    <option value="300 - 500 Tamu (Standard Gedung)">300 - 500 Tamu (Standard Gedung)</option>
                    <option value="500 - 800 Tamu (Large Ballroom)">500 - 800 Tamu (Large Ballroom)</option>
                    <option value="1.000+ Tamu (Grand Royal Wedding)">1.000+ Tamu (Grand Royal Wedding)</option>
                  </select>
                </div>
              </div>

              {/* Concept & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Konsep Pernikahan yang Diinginkan
                  </label>
                  <select
                    value={weddingConcept}
                    onChange={(e) => setWeddingConcept(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  >
                    <option value="Adat Jawa (Solo / Jogja Paes)">Adat Jawa (Solo / Jogja Paes)</option>
                    <option value="Adat Sunda (Siger Sunda)">Adat Sunda (Siger Sunda)</option>
                    <option value="Adat Minang (Suntiang)">Adat Minang (Suntiang)</option>
                    <option value="Modern International Glamour">Modern International Glamour</option>
                    <option value="Intimate Outdoor Rustic / Garden">Intimate Outdoor Rustic / Garden</option>
                    <option value="Akad / Pemberkatan Khidmat Saja">Akad / Pemberkatan Khidmat Saja</option>
                    <option value="Kombinasi Tradisi & Modern">Kombinasi Tradisi & Modern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Perkiraan Total Alokasi Anggaran
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                  >
                    <option value="Di bawah Rp 50.000.000">Di bawah Rp 50.000.000</option>
                    <option value="Rp 50.000.000 - Rp 100.000.000">Rp 50.000.000 - Rp 100.000.000</option>
                    <option value="Rp 100.000.000 - Rp 150.000.000">Rp 100.000.000 - Rp 150.000.000</option>
                    <option value="Rp 150.000.000 - Rp 250.000.000">Rp 150.000.000 - Rp 250.000.000</option>
                    <option value="Di atas Rp 250.000.000">Di atas Rp 250.000.000 (Luxury Tier)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                  Catatan Tambahan atau Pertanyaan Tertentu
                </label>
                <textarea
                  rows={3}
                  placeholder="Misal: Sudah ada vendor foto sendiri, butuh bantuan pemilihan venue di Jakarta Selatan, atau prosesi siraman H-1..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56] focus:bg-white transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 bg-[#1A1A1A] hover:bg-[#9A7B56] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir & Buat Nomor Antrean</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim via WhatsApp Sekarang</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Live Message Preview & Direct Consultant Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live WhatsApp Preview Box */}
            <div className="bg-[#EFEAE2] p-6 rounded-xl border border-[#DFD6C9] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#736B5E] flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Pratinjau Pesan WhatsApp Otomatis</span>
                </div>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="text-[11px] font-medium text-[#9A7B56] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
                </button>
              </div>

              <div className="bg-white p-4 rounded-lg border border-[#E3DBD0] text-xs font-mono text-[#3A352F] whitespace-pre-wrap leading-relaxed max-h-[340px] overflow-y-auto">
                {generateWhatsAppMessage()}
              </div>

              <div className="mt-4 pt-3 border-t border-[#DFD6C9] text-[11px] text-[#736B5E] leading-normal">
                Pesan ini dapat dikirimkan langsung ke nomor resmi Kalyana Wedding Atelier untuk respon prioritas dalam 15 menit.
              </div>
            </div>

            {/* Response Commitment Box */}
            <div className="bg-white p-6 rounded-xl border border-[#DFD6C9]">
              <h4 className="font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-3">
                Komitmen Layanan Kalyana Atelier:
              </h4>
              <ul className="space-y-2.5 text-xs text-[#5A534A]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                  <span><strong>Konsultasi Awal Bebas Biaya:</strong> Diskusi konsep dan kalkulasi bujet 100% gratis tanpa paksaan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                  <span><strong>Pricelist Terperinci:</strong> Proposal resmi dalam format PDF mencakup breakdown vendor, portofolio, dan jadwal termin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                  <span><strong>Kerahasiaan Data Klien:</strong> Nomor kontak dan informasi acara Anda dijaga kerahasiaannya dengan aman.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* Booking Voucher / Confirmation Modal */}
      {bookingConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] w-full max-w-lg rounded-xl shadow-2xl border border-[#DFD6C9] p-6 sm:p-8 text-center relative">
            <div className="w-14 h-14 bg-[#E8F8EE] text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#BCE8CA]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-1">
              Reservasi Berhasil Diajukan
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
              Terima Kasih, {brideName} & {groomName}!
            </h3>
            <p className="text-xs sm:text-sm text-[#5A534A] leading-relaxed mb-6">
              Permohonan konsultasi pernikahan Anda telah tercatat dalam sistem kami.
            </p>

            <div className="p-4 bg-white border border-[#DFD6C9] rounded-lg text-left mb-6 space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#F0EAE1]">
                <span className="text-[#736B5E]">Nomor Referensi:</span>
                <span className="font-mono font-bold text-[#9A7B56] text-sm">{bookingReference}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#736B5E]">Paket yang Dipilih:</span>
                <span className="font-semibold text-[#1A1A1A]">{chosenPackage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#736B5E]">Kota Acara:</span>
                <span className="font-medium text-[#1A1A1A]">{locationCity}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#736B5E]">Nomor Kontak:</span>
                <span className="font-mono text-[#1A1A1A]">{phone}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setBookingConfirmed(false);
                  const msg = `Halo Kalyana Wedding Atelier, saya baru saja mengisi formulir pemesanan dengan Nomor Referensi *${bookingReference}* atas nama ${brideName} & ${groomName}. Mohon konfirmasi jadwal konsultasinya.`;
                  onOpenWhatsApp(msg);
                }}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Lanjutkan Konfirmasi Cepat via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingConfirmed(false)}
                className="w-full py-2.5 text-xs text-[#5A534A] hover:text-[#1A1A1A]"
              >
                Tutup & Kembali ke Website
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
