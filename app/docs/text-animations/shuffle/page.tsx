'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Import components with dynamic imports for better performance
const View = dynamic(() => import('./components/View'));
const Props = dynamic(() => import('./components/Props'));
const Install = dynamic(() => import('./components/Install'));
const Usage = dynamic(() => import('./components/Usage'));
const Code = dynamic(() => import('./components/code'));
const Css = dynamic(() => import('./components/Css'));

export default function AsciiTextPage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="w-full max-w-full px-0 mx-0 space-y-8">
      {/* Large Split Text Heading */}
      <div className="py-8">
        <h1 className="text-8xl font-bold text-white">
           Shuffle
        </h1>
      </div>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
            activeTab === 'preview'
              ? 'bg-purple-600/10 border-purple-600 text-white backdrop-blur-lg'
              : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>Preview</span>
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
            activeTab === 'code'
              ? 'bg-purple-600/10 border-purple-600 text-white backdrop-blur-lg'
              : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>Code</span>
        </button>
      </div>

      {/* Content Area */}
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