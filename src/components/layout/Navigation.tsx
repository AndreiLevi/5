"use client";
/* eslint-disable import/no-unresolved */
// @ts-ignore
import * as React from 'react';

function Navigation() {
  return (
    <nav className="p-4">
      <ul className="space-y-2">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/auth/signin">Auth</a></li>
      </ul>
    </nav>
  );
}

export default Navigation; 