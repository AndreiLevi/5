"use client";
/* eslint-disable import/no-unresolved */
// @ts-ignore
import * as React from 'react';

export default function ContentBlock() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Discover Amazing Listings</h2>
        <p className="text-gray-700 mb-4">
          Explore a wide variety of properties that fit your style and budget. Our platform offers a seamless experience to find your dream home.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Explore Now</button>
      </div>
      <div className="flex-1">
        <img src="https://picsum.photos/600/400" alt="Real Estate" className="rounded shadow" />
      </div>
    </div>
  );
} 