/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import BudgetCalculator from './components/BudgetCalculator';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string>('');

  const WHATSAPP_PHONE_NUMBER = '6281298765432';

  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg = 'Halo Kalyana Wedding Atelier, saya ingin berkonsultasi mengenai paket dan perencanaan pernikahan.';
    const textToSend = customMessage || defaultMsg;
    const url = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackageForBooking(packageName);
  };

  const handleExplorePackages = () => {
    const el = document.getElementById('paket');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1A1A]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenWhatsApp={handleOpenWhatsApp}
        onSelectBookingPackage={handleSelectPackage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenWhatsApp={handleOpenWhatsApp}
          onExplorePackages={handleExplorePackages}
        />

        {/* 2. Pilihan Paket & Rincian Harga Transparan */}
        <PackagesSection
          onSelectPackage={handleSelectPackage}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 3. Simulasi Estimasi Biaya Pernikahan Interaktif */}
        <BudgetCalculator
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 4. Galeri Foto & Karya Dokumentasi */}
        <GallerySection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 5. Bagian Testimoni Pelanggan */}
        <TestimonialsSection />

        {/* 6. Tips Perencanaan Pernikahan & Blog */}
        <BlogSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 7. Pertanyaan Umum (FAQ) */}
        <FaqSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 8. Formulir Pemesanan & Konsultasi */}
        <BookingForm
          selectedPackageName={selectedPackageForBooking}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget
        phoneNumber={WHATSAPP_PHONE_NUMBER}
        onOpenWhatsApp={handleOpenWhatsApp}
      />
    </div>
  );
}
