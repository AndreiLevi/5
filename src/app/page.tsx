import React from 'react';
import Hero from '@/components/features/Hero';
import FeatureGrid from '@/components/features/FeatureGrid';
import ContentBlock from '@/components/features/ContentBlock';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <FeatureGrid />
      <ContentBlock />
    </div>
  );
} 