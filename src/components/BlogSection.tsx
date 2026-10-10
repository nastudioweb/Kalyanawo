import { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/weddingData';
import { BookOpen, Clock, Calendar, ArrowRight, X, Share2, MessageCircle } from 'lucide-react';

interface BlogSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export default function BlogSection({ onOpenWhatsApp }: BlogSectionProps) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const handleShareToWhatsApp = (post: BlogPost) => {
    const text = `Simak tips pernikahan menarik dari Kalyana Wedding Atelier: "${post.title}" - Baca selengkapnya untuk persiapan pernikahan impian!`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="tips" className="py-20 bg-[#FAF8F5] border-b border-[#EAE3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#9A7B56] mb-2">
              Jurnal & Panduan Calon Pengantin
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
              Tips & Inspirasi Perencanaan Pernikahan
            </h2>
            <p className="text-base text-[#5A534A]">
              Wawasan praktis seputar alokasi anggaran, tata cara adat Nusantara, serta panduan timeline terstruktur agar hari bahagia Anda terlaksana tanpa stres.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#736B5E]">
            <BookOpen className="w-4 h-4 text-[#9A7B56]" />
            <span>Diperbarui Secara Berkala</span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white border border-[#DFD6C9] rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#EAE3D8] relative">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-[#736B5E] mb-3">
                    <span className="font-semibold text-[#9A7B56]">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.publishedDate}</span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A1A1A] group-hover:text-[#9A7B56] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A534A] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                  <span className="text-xs text-[#8C8375] font-medium">
                    Oleh {post.author}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] hover:text-[#9A7B56] transition-colors cursor-pointer"
                  >
                    <span>Baca Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-[#DFD6C9] p-6 sm:p-10 relative">
            
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 text-[#736B5E] hover:text-[#1A1A1A] hover:bg-[#EAE3D8] rounded-full transition-colors"
              aria-label="Tutup artikel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-[#736B5E] mb-2 font-medium">
                <span className="text-[#9A7B56] font-semibold">{activePost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activePost.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span>{activePost.readTime}</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
                {activePost.title}
              </h2>
              <div className="text-xs text-[#8C8375]">
                Ditulis oleh <strong>{activePost.author}</strong>
              </div>
            </div>

            {/* Article Image */}
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-[#EAE3D8]">
              <img
                src={activePost.image}
                alt={activePost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose max-w-none space-y-4 text-sm sm:text-base text-[#4A453E] leading-relaxed">
              {activePost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Reader Footer Actions */}
            <div className="mt-8 pt-6 border-t border-[#EAE3D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleShareToWhatsApp(activePost)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1A1A1A] bg-[#FFFFFF] border border-[#D5C9B8] hover:bg-[#F3EDE3] rounded-md transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Bagikan Tips Ini via WhatsApp</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    const postTitle = activePost.title;
                    setActivePost(null);
                    onOpenWhatsApp(`Halo Kalyana WO, saya baru membaca artikel "${postTitle}" dan ingin mendiskusikan penerapannya untuk acara kami.`);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#9A7B56] rounded-md transition-colors cursor-pointer"
                >
                  Konsultasikan dengan Planner
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
