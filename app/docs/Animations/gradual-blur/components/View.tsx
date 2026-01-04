"use client";

import { useState } from "react";
import { GradualBlur} from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [target, setTarget] = useState<'parent' | 'page'>('parent');
  const [position, setPosition] = useState<'bottom' | 'top' | 'left' | 'right'>('bottom');
  const [height, setHeight] = useState('6rem');
  const [strength, setStrength] = useState(2);
  const [divCount, setDivCount] = useState(5);
  const [curve, setCurve] = useState<'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out'>('bezier');
  const [exponential, setExponential] = useState(true);
  const [opacity, setOpacity] = useState(1);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize GradualBlur"
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
        <div key={key} className="relative flex items-center justify-center w-full h-full min-h-[18rem]">
          <section style={{position: 'relative', height: 400, overflow: 'hidden'}} className="w-full">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }} className="bg-gray-800/50 rounded-lg">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Scrollable Content</h3>
                <p className="text-gray-300">This is a demonstration of the GradualBlur effect. Scroll through this content to see the blur effect at the bottom.</p>
                <div className="space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="p-4 bg-purple-900/30 rounded-lg border border-purple-700">
                      <h4 className="text-lg font-semibold text-purple-300">Section {i + 1}</h4>
                      <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <GradualBlur
              target={target}
              position={position}
              height={height}
              strength={strength}
              divCount={divCount}
              curve={curve}
              exponential={exponential}
              opacity={opacity}
            />
          </section>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize GradualBlur
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Target</label>
            <select
              value={target}
              onChange={event => setTarget(event.target.value as 'parent' | 'page')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="parent">Parent</option>
              <option value="page">Page</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Position</label>
            <select
              value={position}
              onChange={event => setPosition(event.target.value as 'bottom' | 'top' | 'left' | 'right')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="bottom">Bottom</option>
              <option value="top">Top</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Height</label>
            <input
              type="text"
              value={height}
              onChange={event => setHeight(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="6rem"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Strength</span>
              <span className="text-purple-300 font-medium">{strength}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={strength}
              onChange={event => setStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Div Count</span>
              <span className="text-purple-300 font-medium">{divCount}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={divCount}
              onChange={event => setDivCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Curve</label>
            <select
              value={curve}
              onChange={event => setCurve(event.target.value as 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="linear">Linear</option>
              <option value="bezier">Bezier</option>
              <option value="ease-in">Ease In</option>
              <option value="ease-out">Ease Out</option>
              <option value="ease-in-out">Ease In Out</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Opacity</span>
              <span className="text-purple-300 font-medium">{opacity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity}
              onChange={event => setOpacity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={exponential}
                onChange={event => setExponential(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
              />
              <span>Exponential</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
