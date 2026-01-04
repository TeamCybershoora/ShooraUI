'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// 🚫 SSR OFF for interactive components
const View = dynamic(() => import('./components/View'), { ssr: false });
const Props = dynamic(() => import('./components/Props'), { ssr: false });
const Install = dynamic(() => import('./components/Install'), { ssr: false });
const Usage = dynamic(() => import('./components/Usage'), { ssr: false });
const Code = dynamic(() => import('./components/code'), { ssr: false });
const Css = dynamic(() => import('./components/Css'), { ssr: false });

export default function AsciiTextPage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="w-full max-w-full px-0 mx-0 space-y-8">
      {/* Heading */}
      <div className="py-8">
        <h1 className="text-8xl font-bold text-white">
          Scrambled Text
        </h1>
      </div>

      {/* Toggle */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setActiveTab('preview')}>Preview</button>
        <button onClick={() => setActiveTab('code')}>Code</button>
      </div>

      {/* Content */}
      <div className="w-full space-y-8">
        {activeTab === 'preview' ? (
          <>
            <View />
            <Props />
          </>
        ) : (
          <>
            <Install />
            <Usage />
            <Code />
            <Css />
          </>
        )}
      </div>
    </div>
  );
}
