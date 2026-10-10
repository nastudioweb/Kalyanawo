export interface WeddingPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  capacity: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  inclusions: {
    category: string;
    items: string[];
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  couple: string;
  category: 'adat' | 'modern' | 'outdoor' | 'akad';
  categoryLabel: string;
  venue: string;
  city: string;
  date: string;
  image: string;
  photographer: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  couple: string;
  weddingDate: string;
  venue: string;
  city: string;
  packageTaken: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  content: string[];
}

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'intimate-bliss',
    name: 'Paket Intimate Bliss',
    tagline: 'Elegan, hangat, dan fokus pada momen sakral bersama keluarga terdekat.',
    price: 48000000,
    formattedPrice: 'Rp 48.000.000',
    capacity: '100 – 150 Undangan',
    idealFor: 'Pernikahan Intimate, Outdoor Garden, atau Private Villa',
    features: [
      'Wedding Planner & 6 Personil WO On-the-Day',
      'Dekorasi Modern Rustic / Minimalist Chic (6–8 Meter)',
      'MUA & Busana Pengantin (Akad + Resepsi, 2 Pasang)',
      'Dokumentasi 1 Fotografer + 1 Videografer Cinematic Teaser',
      'Sound System 3.000 Watt + Master of Ceremony (MC)',
      'Technical Meeting dengan Vendor & Rundown H-30'
    ],
    inclusions: [
      {
        category: 'Manajemen Acara & WO',
        items: [
          'Wedding Planner & Konsultan Konsep Pribadi',
          '6 Personil Crew WO Profesional dengan Uniform Rapi',
          'Rundown acara detail menit per menit',
          'Panduan gladi resik & briefing keluarga'
        ]
      },
      {
        category: 'Dekorasi & Tata Artistik',
        items: [
          'Pelaminan Minimalist Chic / Rustic 6–8 Meter',
          'Fresh Flower arrangement standard intimate',
          'Meja & Kursi Akad Nikah standard hotel/venue',
          'Standing flower jalan 4 unit & Mini gate masuk',
          'Photo booth backdrop & Welcome sign custom akrilik'
        ]
      },
      {
        category: 'Rias & Busana Pengantin',
        items: [
          'MUA Pengantin Wanita untuk Akad & Resepsi (Retouch)',
          'Busana Pengantin 1 Pasang Akad & 1 Pasang Resepsi',
          'Makeup & Hairdo/Hijabdo 2 Ibu Pengantin',
          'Busana 2 Ayah Pengantin (Beskap Nasional)'
        ]
      },
      {
        category: 'Dokumentasi & Entertainment',
        items: [
          '1 Fotografer & 1 Videografer (Full Day coverage)',
          '1 Menit Cinematic Instagram Teaser + 3-5 Menit Highlight',
          'Semua file foto resolusi tinggi dalam Flashdisk Exclusive',
          'MC Resepsi Bilingual & Akustik Band 3 Personel'
        ]
      }
    ]
  },
  {
    id: 'grand-nusantara',
    name: 'Paket Grand Adat Nusantara',
    badge: 'Paling Diminati',
    popular: true,
    tagline: 'Perpaduan megah tradisi Nusantara luhur dengan tata kelola profesional kelas hotel.',
    price: 115000000,
    formattedPrice: 'Rp 115.000.000',
    capacity: '300 – 600 Undangan',
    idealFor: 'Pernikahan Tradisional (Adat Jawa, Sunda, Minang, Bali) di Gedung / Grand Ballroom',
    features: [
      'Full Wedding Organizer & 10 Personil Crew Berseragam',
      'Prosesi Adat Lengkap (Siraman / Midodareni / Panggih / Suntiang)',
      'Dekorasi Pelaminan Megah 12–14 Meter Full Fresh Flowers',
      'MUA Top Tier + Busana Adat Lengkap Pengantin & Keluarga',
      'Dokumentasi Multi-Camera + Video Drone + Album Magazine Eksklusif',
      'Live Acoustic / Orkes Tradisional + MC Adat Berpengalaman'
    ],
    inclusions: [
      {
        category: 'Manajemen Acara & Tim WO',
        items: [
          'Dedicated Wedding Director + 10 Kru Lapangan berseragam batik/jas',
          'Pemandu Adat Senior & Koordinator Ritual Tradisi',
          'Buku Panduan Pernikahan Eksklusif untuk Keluarga Besar',
          'Manajemen VIP & Protokol Tamu Kehormatan',
          'Technical Meeting 3 kali (H-60, H-30, H-7)'
        ]
      },
      {
        category: 'Dekorasi Tradisional & Modern',
        items: [
          'Pelaminan Tradisional Gebyok / Modern Heritage 12–14 Meter',
          'Full Fresh Flowers & Rangkaian Melati Nusantara',
          'Lorong Masuk (Tunnel Decor) dengan Gallery Foto Mewah',
          'Dekorasi Meja VIP Buffet / Round Table 4 Set',
          'Gazebo Masuk / Pergola Bunga & Karpet Jalan Merah/Rose Gold',
          'Photo Gallery Display dengan 8 Frame Bingkai Mewah'
        ]
      },
      {
        category: 'Rias & Busana Adat Lengkap',
        items: [
          'MUA Pengantin Profesional + Paes / Siger / Suntiang Asli',
          '2 Pasang Busana Pengantin Adat Nusantara (Akad & Resepsi)',
          'Makeup & Busana 2 Ibu Pengantin + 2 Ayah Pengantin',
          'Makeup & Busana 4 Orang Among Tamu / Pagar Ayu & Pagar Bagus',
          'Aksesoris, Ronce Melati, & Perhiasan Adat Lengkap'
        ]
      },
      {
        category: 'Dokumentasi, Multimedia & Musik',
        items: [
          '2 Fotografer + 2 Videografer + Pilot Drone Aerial Shots',
          '1 Album Kolase Eksklusif 20 Halaman Kulit Box Kayu',
          'Same Day Edit (SDE) Video Teaser untuk diputar saat resepsi',
          'Master of Ceremony (MC) Adat & MC Nasional Profesional',
          'Band Akustik Modern / Kolaborasi Instrumen Tradisional',
          'Sound System 5.000 Watt + Ambience Lighting Moving Head'
        ]
      }
    ]
  },
  {
    id: 'royal-splendor',
    name: 'Paket Royal Splendor Ballroom',
    tagline: 'Kemewahan paripurna tanpa kompromi untuk perhelatan agung tak terlupakan.',
    price: 225000000,
    formattedPrice: 'Rp 225.000.000',
    capacity: '800 – 1.500+ Undangan',
    idealFor: 'Hotel Bintang 5 & Convention Center Terbesar di Indonesia',
    features: [
      'Full Wedding Director & 16 Personil WO Komprehensif',
      'Dekorasi 3D Grand Floral Architecture 18–22 Meter & Hanging Chandelier',
      'VIP Guest Concierge & Digital RSVP QR Code Check-In',
      'Photo Booth 360 Video Spin + Instant Print Unlimited',
      'Chamber Orchestra / Full Mini Orchestra + Top Tier Guest MC',
      'Dry Ice Effect, Pyro Sparkling Cold Fire, & Full Concert Lighting'
    ],
    inclusions: [
      {
        category: 'Manajemen Acara & VIP Concierge',
        items: [
          'Head Wedding Planner, Show Director, & 16 Kru WO Profesional',
          'Sistem Digital RSVP & QR Code Check-in dengan iPad Kiosk',
          'VIP Usher & Concierge untuk Tamu Pejabat & VVIP',
          'Konsultasi Styling & Vendor Selection tanpa batas pertemuan'
        ]
      },
      {
        category: 'Dekorasi & Efek Panggung Megah',
        items: [
          'Pelaminan 3D Custom Design 18–22 Meter dengan Hanging Chandelier',
          'Plafon Bunga (Floral Ceiling Installation) sepanjang aisle masuk',
          'Dekorasi Panggung Musik & Bar Custom Mewah',
          'Lighting Concert Rigging, Moving Heads, Spotlights & Ambience Par-LED',
          'Efek Panggung: Dry Ice Low Fog saat Masuk, Confetti & Cold Sparkler Fireworks'
        ]
      },
      {
        category: 'MUA Celebrity Tier & Busana',
        items: [
          'MUA Rekanan Celebrity Tier Pengantin Wanita (Akad + Resepsi)',
          'Gaun Pengantin Custom Rental Couture & Jas Groom Savile Row cut',
          'Makeup & Busana 4 Orang Tua & 8 Orang Pagar Ayu/Bagus',
          'Touch-up assistant standby sepanjang acara'
        ]
      },
      {
        category: 'Multimedia, Dokumentasi & Entertainment',
        items: [
          '3 Fotografer Senior + 3 Videografer Cinema Rig + Drone 4K',
          'Live Multi-Cam LED Screen Broadcasting di Ballroom',
          '2 Box Album Eksklusif Fine Art Acrylic + 1 Mini Parent Album',
          'Full Mini Orchestra / Big Band dengan Penyanyi Ternama',
          '360 Video Booth & Photobooth Cetak Otomatis Strip Foto Souvenir'
        ]
      }
    ]
  },
  {
    id: 'dday-coordination',
    name: 'Paket D-Day Wedding Coordination',
    tagline: 'Solusi ketenangan pikiran bagi pengantin yang telah memiliki vendor sendiri.',
    price: 19500000,
    formattedPrice: 'Rp 19.500.000',
    capacity: 'Hingga 500 Undangan',
    idealFor: 'Calon Pengantin Mandiri yang Membutuhkan Eksekusi Hari H Sempurna',
    features: [
      'Handover Koordinasi Vendor sejak H-30 Hari Pelaksanaan',
      'Penyusunan Rundown Detil & Distribusi ke Seluruh Pihak Terkait',
      'Technical Meeting H-14 di Lokasi Acara Bersama Semua Vendor',
      '8 Personil WO Standby Pagi Hingga Selesai Acara',
      'Pendampingan Gladi Resik & Pengawasan Alur Tamu / Katering',
      'Handling Logistik Mahar, Cincin, Souvenir & Angpao Box'
    ],
    inclusions: [
      {
        category: 'Pra-Acara (H-30)',
        items: [
          'Handover seluruh kontrak vendor (Katering, Dekor, MUA, Foto, Venue)',
          'Penyusunan Buku Panduan Acara & Rundown menit demi menit',
          'Memimpin Technical Meeting Akbar di Venue bersama seluruh vendor',
          'Konsultasi via WhatsApp group 24/7'
        ]
      },
      {
        category: 'Hari Pelaksanaan (D-Day)',
        items: [
          '8 Kru WO profesional (Event Director, Bride Assistant, Groom Assistant, F&B Controller, Stage Manager, Usher Lead)',
          'Briefing pagi hari & pengawasan kedatangan vendor',
          'Pendampingan akad nikah / pemberkatan sakral',
          'Pengawasan alur prasmanan & flow makanan katering',
          'Pengamanan kotak angpao & inventarisasi barang seserahan ke keluarga'
        ]
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Keagungan Resepsi Royal Nusantara',
    couple: 'Rangga & Amanda',
    category: 'adat',
    categoryLabel: 'Adat Tradisional',
    venue: 'Grand Ballroom Kempinski',
    city: 'Jakarta Pusat',
    date: '18 Januari 2026',
    image: 'images/hero_wedding_indonesian_1791546380551.jpg',
    photographer: 'The Leonardi & Kalyana Visuals',
    description: 'Resepsi perpaduan Adat Jawa Kraton dengan sentuhan modern kristal chandelier, dihadiri 800 tamu dengan tata kelola alur VIP terpadu.'
  },
  {
    id: 'gal-2',
    title: 'Pesona Anggun Siger Sunda Pusaka',
    couple: 'Farhan & Nabila',
    category: 'adat',
    categoryLabel: 'Adat Tradisional',
    venue: 'The Dharmawangsa',
    city: 'Jakarta Selatan',
    date: '8 Februari 2026',
    image: 'images/gallery_traditional_wedding_1791546394479.jpg',
    photographer: 'Kalyana Heritage Project',
    description: 'Prosesi Akad Nikah dan Saweran adat Sunda klasik. MUA flawless dengan mahkota Siger berlapis emas dan ronce melati wangi semerbak.'
  },
  {
    id: 'gal-3',
    title: 'Symphony of Lights Grand Ballroom',
    couple: 'Kevin & Felicia',
    category: 'modern',
    categoryLabel: 'Modern Ballroom',
    venue: 'The Ritz-Carlton Pacific Place',
    city: 'Jakarta Selatan',
    date: '24 Februari 2026',
    image: 'images/gallery_modern_ballroom_1791546407000.jpg',
    photographer: 'Axioo & Kalyana Cinema',
    description: 'Konsep Modern Glamour dengan centerpieces bunga impor setinggi 2 meter, lilin romantis, serta iringan 12-piece Chamber Orchestra.'
  },
  {
    id: 'gal-4',
    title: 'Sunset Whispers Intimate Garden',
    couple: 'Dimas & Citra',
    category: 'outdoor',
    categoryLabel: 'Intimate & Outdoor',
    venue: 'Plataran Dharmawangsa Garden',
    city: 'Jakarta Selatan',
    date: '2 Maret 2026',
    image: 'images/gallery_outdoor_intimate_1791546418074.jpg',
    photographer: 'SweetEscape & Kalyana Stories',
    description: 'Pernikahan hangat 120 tamu dengan kanopi lampu peri di bawah langit senja. Alur resepsi santai dengan barbecue dining dan live acoustic.'
  },
  {
    id: 'gal-5',
    title: 'Ijab Kabul Sakral Penuh Khidmat',
    couple: 'Arya & Annisa',
    category: 'akad',
    categoryLabel: 'Akad & Pemberkatan',
    venue: 'Masjid Raya Pondok Indah & Pendopo Kemang',
    city: 'Jakarta Selatan',
    date: '15 Maret 2026',
    image: 'images/blog_wedding_planning_1791546427792.jpg',
    photographer: 'Matahari Dokumentasi',
    description: 'Momen sakral pengucapan ijab kabul di hadapan penghulu dan orang tua, dilanjutkan sungkeman haru penuh doa restu.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    couple: 'Rangga & Amanda Soedibyo',
    weddingDate: 'Januari 2026',
    venue: 'Grand Ballroom Hotel Kempinski Jakarta',
    city: 'Jakarta',
    packageTaken: 'Paket Royal Splendor Ballroom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    quote: 'Dari awal konsultasi hingga malam resepsi selesai, tim Kalyana sangat sigap, teratur, dan profesional. Keluarga besar kami yang sangat concern dengan pakem Adat Jawa Kraton merasa sangat puas karena dipandu dengan begitu anggun. Tamu-tamu memuji alur makanan dan tata ruang yang megah tanpa cela.',
    rating: 5
  },
  {
    id: 'test-2',
    couple: 'Kevin Chandra & Felicia Halim',
    weddingDate: 'Februari 2026',
    venue: 'The Ritz-Carlton Pacific Place',
    city: 'Jakarta',
    packageTaken: 'Paket Grand Modern Ballroom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: 'Kami berdua sama-sama sibuk bekerja dan tidak punya waktu luang untuk bolak-balik meeting vendor. Kalyana mengambil alih semua stres perencanaan kami. Transparansi harga, rekomendasi vendor yang akurat, dan tim WO yang super ramah di hari H membuat kami benar-benar bisa menikmati pernikahan impian kami.',
    rating: 5
  },
  {
    id: 'test-3',
    couple: 'Dimas Prasetyo & Citra Larasati',
    weddingDate: 'Maret 2026',
    venue: 'Plataran Dharmawangsa',
    city: 'Jakarta',
    packageTaken: 'Paket Intimate Bliss',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    quote: 'Konsep intimate outdoor impian kami terwujud melebihi ekspektasi! Koordinasi cuaca cadangan, alur seating tamu, hingga handling vendor katering berjalan mulus. Terima kasih Mas Rama & seluruh kru Kalyana Wedding Atelier!',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'timeline-persiapan-pernikahan-12-bulan',
    title: 'Panduan Lengkap Timeline Persiapan Pernikahan 6–12 Bulan Sebelum Hari H',
    excerpt: 'Langkah terstruktur agar calon pengantin tidak kewalahan membagi prioritas booking gedung, pemilihan MUA, hingga fitting busana adat.',
    category: 'Panduan Praktis',
    readTime: '6 menit baca',
    publishedDate: '28 Maret 2026',
    author: 'Kalyana Editorial Team',
    image: 'images/blog_wedding_planning_1791546427792.jpg',
    content: [
      'Merencanakan pernikahan di Indonesia sering kali bukan hanya urusan dua sejoli, melainkan perpaduan harapan dua keluarga besar. Tanpa timeline yang disiplin, stres dan miskomunikasi rentan terjadi.',
      'Fase 12–9 Bulan Sebelum Hari H: Tentukan estimasi total anggaran dan jumlah tamu. Langkah paling krusial di fase ini adalah mengunci tanggal dan mem-booking gedung atau ballroom, karena venue favorit di Jakarta dan kota besar kerap fully booked setahun sebelumnya.',
      'Fase 8–6 Bulan Sebelum Hari H: Kunci rekanan Wedding Organizer utama Anda. Pada tahap ini, tentukan konsep pernikahan (apakah Adat Jawa, Sunda, Minang, atau Modern Glamour). Mulai kurasi fotografer, videografer, dan MUA favorit.',
      'Fase 5–3 Bulan Sebelum Hari H: Selesaikan berkas administrasi KUA atau catatan sipil. Lakukan fitting pertama busana akad dan resepsi, baik untuk pengantin maupun kedua pasang orang tua. Kunci vendor katering dan lakukan food tasting bersama keluarga.',
      'Fase 1 Bulan Sebelum Hari H: Gelar Technical Meeting akbar bersama Wedding Organizer dan seluruh vendor di lokasi acara. Kalyana Wedding Atelier selalu memastikan rundown acara disimulasikan hingga menit terkecil agar tidak terjadi penumpukan tamu atau jeda kosong saat resepsi.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'estimasi-biaya-pernikahan-jakarta-2026',
    title: 'Rincian Estimasi Biaya Pernikahan Jakarta 2026: Cara Alokasi Anggaran Cerdas',
    excerpt: 'Bedah persentase alokasi bujet pernikahan ideal untuk katering 40%, dekorasi 20%, dokumentasi, busana, hingga jasa Wedding Organizer.',
    category: 'Anggaran & Biaya',
    readTime: '8 menit baca',
    publishedDate: '15 Maret 2026',
    author: 'Rama Daniswara, Lead Planner',
    image: 'images/gallery_modern_ballroom_1791546407000.jpg',
    content: [
      'Berapa sebenarnya biaya wajar untuk menggelar pernikahan layak dan berkelas di Jakarta tahun 2026? Jawabannya sangat bergantung pada format acara: Intimate (100–150 pax) atau Grand Reception (500–1.000 pax).',
      'Formula Emas Alokasi Anggaran: Katering & Venue memakan porsi terbesar (40% - 45%). Dekorasi dan pencahayaan (15% - 20%). Busana pengantin dan MUA (10% - 12%). Dokumentasi foto & video (8% - 10%). Wedding Organizer & Hiburan (8% - 10%). Serta Dana Cadangan Kontinjensi (5%).',
      'Tips Efisiensi Anggaran: Hindari menambah gubukan katering yang terlalu bervariasi jika porsi per menu menjadi tipis. Lebih baik pilih 4-5 menu gubukan unggulan dengan rasio porsi melimpah daripada 10 macam menu yang cepat habis.',
      'Pilih Paket All-In yang Transparan: Menggunakan paket Wedding Organizer terintegrasi seperti di Kalyana memangkas biaya mark-up individual vendor hingga 20-30%, sekaligus membebaskan Anda dari biaya tak terduga saat hari H.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'tips-memilih-mua-dan-busana-adat-nusantara',
    title: '5 Kunci Memilih MUA & Busana Adat (Jawa Paes, Siger Sunda, Suntiang Minang)',
    excerpt: 'Pahami perbedaan pakem tata rias tradisional asli dengan modifikasi modern agar tetap anggun, manglingi, dan menghormati leluhur.',
    category: 'Rias & Adat',
    readTime: '5 menit baca',
    publishedDate: '2 Maret 2026',
    author: 'Citra Kirana, Heritage Stylist',
    image: 'images/gallery_traditional_wedding_1791546394479.jpg',
    content: [
      'Pernikahan adat Nusantara memiliki kekayaan filosofis yang luar biasa. Setiap lekukan paes pada adat Jawa atau kilau suntiang Minang melambangkan doa kesucian dan keteguhan bagi sang mempelai.',
      '1. Kenali Pakem vs Modifikasi: Ketahui apakah keluarga besar menginginkan pakem murni (seperti Paes Ageng Yogyakarta atau Solo Basahan) atau Paes Modern yang lebih fleksibel dengan hijab.',
      '2. Uji Ketahanan Makeup (Test Touch): Riasan pengantin adat harus bertahan 6 hingga 10 jam di bawah sorotan lampu pelaminan yang panas. Pastikan MUA menggunakan teknik complexion waterproof yang tidak mudah retak (crack).',
      '3. Kenyamanan Berat Aksesoris: Mahkota Suntiang Minang memiliki berat 3 hingga 5 kilogram. Diskusikan dengan perias untuk struktur bantalan yang tepat agar leher dan kepala mempelai wanita tetap nyaman tersenyum selama resepsi.',
      '4. Tim Kalyana selalu menyediakan Heritage Guide khusus untuk mengawal prosesi Siraman, Midodareni, Dulang Pungkasan, hingga Panggih agar setiap langkah sakral berlangsung dengan khidmat.'
    ]
  }
];

export const FAQS = [
  {
    question: 'Kapan waktu terbaik untuk mulai memesan layanan Kalyana Wedding Organizer?',
    answer: 'Kami menyarankan calon pengantin menghubungi kami 6 hingga 12 bulan sebelum tanggal pernikahan. Namun untuk paket D-Day Coordination, kami juga menerima pesanan minimal H-30 hari sebelum pelaksanaan.'
  },
  {
    question: 'Apakah paket Kalyana bisa dikustomisasi sesuai anggaran dan kebutuhan kami?',
    answer: 'Sangat bisa! Seluruh paket pernikahan kami bersifat modular. Jika Anda sudah memiliki venue atau vendor busana sendiri, kami dapat menyesuaikan rincian paket dan mengompensasikan biayanya.'
  },
  {
    question: 'Apakah Kalyana melayani pernikahan di luar Jakarta (seperti Bandung, Bogor, Bali)?',
    answer: 'Ya, Kalyana Wedding Atelier melayani pernikahan di wilayah Jabodetabek, Bandung, Yogyakarta, Surabaya, serta Destination Wedding di Bali dan Lombok.'
  },
  {
    question: 'Bagaimana sistem pembayaran dan skema termin di Kalyana?',
    answer: 'Pembayaran sangat fleksibel dengan 4 termin: Down Payment (DP) 20% untuk mengunci tanggal, Termin ke-2 sebesar 30% setelah konsep & moodboard disepujui (H-90), Termin ke-3 sebesar 30% setelah Technical Meeting (H-30), dan Pelunasan 20% pada H-7 sebelum hari pelaksanaan.'
  },
  {
    question: 'Bagaimana cara berkonsultasi langsung?',
    answer: 'Anda dapat langsung mengklik tombol WhatsApp di website ini untuk terhubung dengan Senior Wedding Consultant kami, atau mengisi formulir pemesanan untuk mendapatkan proposal penawaran resmi dalam 1x24 jam.'
  }
];
