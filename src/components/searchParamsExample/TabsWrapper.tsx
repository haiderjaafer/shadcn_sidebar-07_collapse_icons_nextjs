'use client';

import dynamic from 'next/dynamic';

// Dynamically import TabsSection
const TabsSection = dynamic(() => import('./TabsSection'));

export default function TabsWrapper() {
  return <TabsSection />;
}
