"use client";

import { useState } from "react";
import { PixelCard } from "@cybershoora/shoora-ui";

export default function View() {
  const [variant, setVariant] = useState<'default' | 'blue' | 'yellow' | 'pink'>('pink');
  const [gap, setGap] = useState(2);
  const [speed, setSpeed] = useState(0.5);
  const [color1, setColor1] = useState('#ff006e');
  const [color2, setColor2] = useState('#fb5607');
  const [color3, setColor3] = useState('#ffbe0b');
  const [color4, setColor4] = useState('#8338ec');
  const [noFocus, setNoFocus] = useState(false);
  const [className, setClassName] = useState('custom-pixel-card');

  const colors = `${color1},${color2},${color3},${color4}`;

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <PixelCard 
          variant={variant}
          gap={gap}
          speed={speed}
          colors={colors}
          noFocus={noFocus}
          className={className}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Pixel Card</h3>
            <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>Interactive pixel art effect</p>
          </div>
        </PixelCard>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Pixel Card
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Colors */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white mb-4">Colors</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-300 w-16">Color 1</label>
                <input
                  type="color"
                  value={color1}
                  onChange={event => setColor1(event.target.value)}
                  className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={color1}
                  onChange={event => setColor1(event.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm"
                />
              </div>

              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-300 w-16">Color 2</label>
                <input
                  type="color"
                  value={color2}
                  onChange={event => setColor2(event.target.value)}
                  className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={color2}
                  onChange={event => setColor2(event.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm"
                />
              </div>

              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-300 w-16">Color 3</label>
                <input
                  type="color"
                  value={color3}
                  onChange={event => setColor3(event.target.value)}
                  className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={color3}
                  onChange={event => setColor3(event.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm"
                />
              </div>

              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-300 w-16">Color 4</label>
                <input
                  type="color"
                  value={color4}
                  onChange={event => setColor4(event.target.value)}
                  className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={color4}
                  onChange={event => setColor4(event.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Other Controls */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white mb-4">Controls</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Variant</label>
                <select
                  value={variant}
                  onChange={event => setVariant(event.target.value as any)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="default">Default</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                  <option value="pink">Pink</option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Gap</span>
                  <span className="text-purple-300 font-medium">{gap}px</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={gap}
                  onChange={event => setGap(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Speed</span>
                  <span className="text-purple-300 font-medium">{speed}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={speed}
                  onChange={event => setSpeed(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="noFocus"
                  checked={noFocus}
                  onChange={() => setNoFocus(!noFocus)}
                  className="h-4 w-4 text-purple-500 rounded border-gray-600 focus:ring-purple-500"
                />
                <label htmlFor="noFocus" className="text-sm font-medium text-gray-300">
                  No Focus Effect
                </label>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">CSS Class</label>
                <input
                  type="text"
                  value={className}
                  onChange={event => setClassName(event.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="custom-pixel-card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
