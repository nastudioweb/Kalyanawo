import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, Check } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  onOpenWhatsApp: (message?: string) => void;
}

export default function WhatsAppWidget({ phoneNumber = '6281298765432', onOpenWhatsApp }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    {
      title: 'Cek Ketersediaan Tanggal',
      text: 'Halo Kalyana WO, saya ingin menanyakan ketersediaan tanggal untuk resepsi pernikahan kami.',
    },
    {
      title: 'Request Pricelist Lengkap (PDF)',
      text: 'Halo Kalyana WO, bolehkah kami dikirimkan brosur pricelist dan detail paket pernikahan terbaru?',
    },
    {
      title: 'Konsultasi Konsep Adat & Modern',
      text: 'Halo Kalyana WO, kami ingin konsultasi gratis mengenai konsep perpaduan Adat dan Modern.',
    },
  ];

  const handleSendQuick = (text: string) => {
    setIsOpen(false);
    onOpenWhatsApp(text);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    setIsOpen(false);
    onOpenWhatsApp(customMsg);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)]">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#DFD6C9] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#1A1A1A] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Kalyana Wedding Atelier</div>
                <div className="text-[11px] text-[#C5A880] flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>Respon Cepat · 09.00 - 21.00 WIB</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-full"
              aria-label="Tutup obrolan"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF8F5] space-y-3">
            <div className="bg-white p-3 rounded-lg border border-[#EBE4D8] text-xs text-[#4A453E] leading-relaxed shadow-2xs">
              Halo! Selamat datang di Kalyana Wedding Atelier. Silakan pilih topik konsultasi atau ketik pesan Anda:
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold text-[#8C8375] uppercase tracking-wider px-1">
                Topik Cepat:
              </div>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendQuick(q.text)}
                  className="w-full text-left p-2.5 bg-white hover:bg-[#F2ECE3] border border-[#E3DBD0] rounded-lg text-xs font-medium text-[#1A1A1A] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>{q.title}</span>
                  <Send className="w-3 h-3 text-[#9A7B56] shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ketik pertanyaan Anda..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-white border border-[#D5C9B8] rounded-md focus:outline-none focus:border-[#9A7B56]"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white rounded-md transition-colors cursor-pointer"
                  aria-label="Kirim via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs sm:text-sm rounded-full shadow-xl transition-all transform hover:scale-105 cursor-pointer"
        aria-label="Buka bantuan WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Chat WhatsApp Kami</span>
      </button>
    </div>
  );
}
