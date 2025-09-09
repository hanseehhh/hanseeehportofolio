// src/app/page.js
"use client"; // Jika ada interaksi di page.js atau komponen lain yang di-import membutuhkan client-side

import HeroSection from '@/app/component/section/HeroSection'; // Import HeroSection
// import Portfolio from '@/components/sections/Portfolio'; // Jika sudah ada
// import BlogList from '@/components/sections/BlogList'; // Jika sudah ada

export default function HomePage() {
  return (
    <main>
      <HeroSection /> {/* Panggil komponen HeroSection di sini */}
      {/* <Portfolio /> */}
      {/* <BlogList /> */}
    </main>
  );
}