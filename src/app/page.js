"use client";

import Homepage from '@/app/api/section/Homepage';
import Skills from '@/app/api/section/Skills';
import Portofolio from '@/app/api/section/Portofolio';
import BlogList from '@/app/api/section/BlogList';

export default function Page() {
  return (
    <>
      <Homepage />
      <Skills />
      <Portofolio />
      <BlogList />
    </>
  );
}
