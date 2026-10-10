import { useState } from 'react';
import { FAQS } from '../data/weddingData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export default function FaqSection({ onOpenWhatsApp }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#EAE3D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
            Pertanyaan Umum (FAQ)
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
            Hal yang Sering Ditanyakan Calon Pengantin
          </h2>
          <p className="text-sm sm:text-base text-[#5A534A]">
            Informasi lengkap mengenai proses kerja sama, sistem termin pembayaran, dan fleksibilitas penyesuaian vendor bersama Kalyana Wedding Atelier.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#DFD6C9] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-luxury text-lg sm:text-xl font-bold text-[#1A1A1A] hover:text-[#9A7B56] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9A7B56] shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A534A] leading-relaxed border-t border-[#F0EAE1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WA Prompt */}
        <div className="mt-10 p-6 bg-[#FAF6F0] rounded-xl border border-[#DFD6C9] text-center">
          <p className="text-xs sm:text-sm text-[#4A453E] mb-3">
            Punya pertanyaan spesifik mengenai tanggal pernikahan atau venue pilihan Anda?
          </p>
          <button
            type="button"
            onClick={() => onOpenWhatsApp('Halo Kalyana WO, saya ingin menanyakan hal lain terkait rencana pernikahan kami.')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#9A7B56] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Tanyakan Langsung ke Tim Planner Kami</span>
          </button>
        </div>

      </div>
    </section>
  );
}
