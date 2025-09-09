"use client";

import Portfolio from '@/app/component/Portofolio';
import BlogList from '@/app/component/BlogList';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Full-Stack Portfolio</h1>
      <Portfolio />
      <BlogList />
    </main>
  );
}