import { TESTIMONIALS } from '../data/weddingData';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 bg-[#F4EFEA] border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
            Kisah & Kepuasan Klien
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
            Kepercayaan dari Ratusan Pasangan Bahagia
          </h2>
          <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed">
            Mendengar rasa syukur dari kedua mempelai dan keluarga besar adalah kehormatan tertinggi bagi seluruh tim Kalyana Wedding Atelier.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-xl border border-[#DFD6C9] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#C5A880]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#C5A880]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#F0EAE1]">
                <div className="font-serif-luxury text-lg font-bold text-[#1A1A1A]">
                  {item.couple}
                </div>
                
                {/* Unboxed metadata */}
                <div className="flex flex-col gap-1 text-[11px] text-[#736B5E] mt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9A7B56] shrink-0" />
                    <span>{item.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8C8375]">
                    <span>{item.weddingDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#4A453E]">{item.packageTaken}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
