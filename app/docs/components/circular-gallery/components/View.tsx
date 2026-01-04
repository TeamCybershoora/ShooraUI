"use client";

import { useState } from "react";
import { CircularGallery } from "@cybershoora/shoora-ui"

const items = [
  {
    image: "https://picsum.photos/seed/gallery1/800/600",
    text: "Mountain Vista"
  },
  {
    image: "https://picsum.photos/seed/gallery2/800/600", 
    text: "Ocean Waves"
  },
  {
    image: "https://picsum.photos/seed/gallery3/800/600",
    text: "Forest Path"
  },
  {
    image: "https://picsum.photos/seed/gallery4/800/600",
    text: "City Lights"
  }
];

export default function View() {
  const [key, setKey] = useState(0);
  
  // Ribbons state
  const [baseThickness, setBaseThickness] = useState(30);
  const [colors, setColors] = useState(['#5227FF']);
  const [speedMultiplier, setSpeedMultiplier] = useState(0.5);
  const [maxAge, setMaxAge] = useState(500);
  const [enableFade, setEnableFade] = useState(false);
  const [enableShaderEffect, setEnableShaderEffect] = useState(true);
  
  // CircularGallery state
  const [bend, setBend] = useState(3);
  const [textColor, setTextColor] = useState("#ffffff");
  const [borderRadius, setBorderRadius] = useState(0.05);
  const [scrollEase, setScrollEase] = useState(0.02);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Components"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
            <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
          </svg>
        </button>
        <div key={key} className="relative w-full h-full">
          <div className="absolute inset-0">
            <CircularGallery 
              items={items}
              bend={bend}
              textColor={textColor}
              borderRadius={borderRadius}
              scrollEase={scrollEase}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Components
        </h2>
          {/* CircularGallery Controls */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">CircularGallery Settings</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Bend</span>
                  <span className="text-purple-300 font-medium">{bend}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={bend}
                  onChange={event => setBend(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Text Color</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={event => setTextColor(event.target.value)}
                  className="w-20 h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Border Radius</span>
                  <span className="text-purple-300 font-medium">{borderRadius}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={borderRadius}
                  onChange={event => setBorderRadius(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Scroll Ease</span>
                  <span className="text-purple-300 font-medium">{scrollEase}</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="0.2"
                  step="0.01"
                  value={scrollEase}
                  onChange={event => setScrollEase(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
