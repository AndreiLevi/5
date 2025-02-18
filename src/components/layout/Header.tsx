"use client";
/* eslint-disable import/no-unresolved */
// @ts-ignore
import * as React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="font-bold text-xl">Logo</div>
      <div className="hidden md:flex space-x-4">
        <a href="/">Menu</a>
        <input type="text" placeholder="Search" className="border p-1" />
        <a href="/auth/signin">Sign In</a>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Get Started</button>
      </div>
      <div className="md:hidden">
        <button>Menu</button>
      </div>
    </div>
  );
}

export default Header; 