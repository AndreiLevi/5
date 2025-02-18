"use client";
/* eslint-disable import/no-unresolved */
// @ts-ignore
import * as React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1200/600)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Home</h1>
        <p className="text-xl md:text-2xl mb-6">Browse our exclusive listings to find the home of your dreams.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Get Started</button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
} 