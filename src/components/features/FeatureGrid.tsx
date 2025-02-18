"use client";
/* eslint-disable import/no-unresolved */
// @ts-ignore
import * as React from 'react';
// @ts-ignore
import { HomeIcon } from 'lucide-react';

const features = [
  { title: 'Property Listings', description: 'Access thousands of property listings at your fingertips.' },
  { title: 'Virtual Tours', description: 'Experience properties through immersive virtual tours.' },
  { title: 'Market Analysis', description: 'Get real-time market insights to make informed decisions.' },
  { title: 'Agent Finder', description: 'Connect with trusted real estate agents near you.' },
  { title: 'Mortgage Calculator', description: 'Plan your finances with our easy-to-use calculator.' },
  { title: 'Schedule Visits', description: 'Book property visits at your convenience.' }
];

export default function FeatureGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Features</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
            <div className="mb-2">
              <HomeIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 