import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/weddingData';
import { Camera, MapPin, Calendar, MessageCircle, X, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export default function GallerySection({ onOpenWhatsApp }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Portofolio' },
    { id: 'adat', label: 'Adat Tradisional' },
    { id: 'modern', label: 'Modern Ballroom' },
    { id: 'outdoor', label: 'Intimate & Outdoor' },
    { id: 'akad', label: 'Akad & Pemberkatan' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleInquirePhoto = (item: GalleryItem) => {
    const text = `Halo Kalyana Wedding, saya sangat terinspirasi dengan konsep pernikahan *${item.title}* (${item.couple}) di ${item.venue}. Bisakah kami berdiskusi mengenai kemungkinan membuat konsep serupa untuk pernikahan kami?`;
    onOpenWhatsApp(text);
  };

  return (
    <section id="galeri" className="py-20 bg-[#FAF8F5] border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
              Galeri Dokumentasi & Karya
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
              Momen Abadi yang Terukir Indah
            </h2>
            <p className="text-base text-[#5A534A]">
              Setiap pernikahan adalah mahakarya unik. Saksikan keanggunan busana adat, kemegahan tata artistik pelaminan, dan kehangatan tawa keluarga dalam portofolio kami.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFE9DF] rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#1A1A1A] shadow-xs'
                    : 'text-[#6B6357] hover:text-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isLarge = index === 0;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-xl overflow-hidden bg-white border border-[#DFD6C9] shadow-xs hover:shadow-lg transition-all cursor-pointer ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`overflow-hidden relative ${isLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.couple}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                    <div className="flex items-center gap-2 text-xs text-[#E8DFD3] mb-1 font-medium">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.city}</span>
                    </div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-white/80 mt-1">
                      <span>{item.couple}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Subtitle / Inquire Strip */}
        <div className="mt-12 text-center text-xs text-[#736B5E]">
          Ingin melihat lebih banyak dokumentasi video cinematic dan album cetak fisik?{' '}
          <button
            type="button"
            onClick={() => onOpenWhatsApp('Halo Kalyana WO, bolehkah kami dikirimkan link full album dokumentasi dan video pernikahan terbaru?')}
            className="text-[#9A7B56] hover:underline font-semibold cursor-pointer"
          >
            Hubungi kami via WhatsApp untuk akses arsip eksklusif
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl shadow-2xl border border-[#DFD6C9] relative flex flex-col md:flex-row overflow-hidden">
            
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
              aria-label="Tutup jendela galeri"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media side */}
            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-h-[60vh] md:max-h-[90vh]"
              />
            </div>

            {/* Information side */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
                  <span>{activeItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeItem.city}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
                  {activeItem.title}
                </h3>
                <div className="text-sm font-semibold text-[#4A453E] mb-4">
                  Mempelai: {activeItem.couple}
                </div>

                <p className="text-xs sm:text-sm text-[#5A534A] leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                <div className="space-y-2.5 text-xs text-[#736B5E] border-t border-[#EAE3D8] pt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9A7B56] shrink-0" />
                    <span>Venue: <strong>{activeItem.venue}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#9A7B56] shrink-0" />
                    <span>Tanggal: <strong>{activeItem.date}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#9A7B56] shrink-0" />
                    <span>Dokumentasi: <strong>{activeItem.photographer}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE3D8] space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    const item = activeItem;
                    setActiveItem(null);
                    handleInquirePhoto(item);
                  }}
                  className="w-full py-3 px-4 bg-[#1A1A1A] hover:bg-[#9A7B56] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Konsultasikan Konsep Ini via WA</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="w-full py-2 text-center text-xs text-[#736B5E] hover:text-[#1A1A1A]"
                >
                  Tutup Galeri
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
