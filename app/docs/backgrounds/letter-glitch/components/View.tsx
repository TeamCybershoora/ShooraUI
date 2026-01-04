"use client";

import { useState } from "react";
import { LetterGlitch } from "@cybershoora/shoora-ui"

export default function View() {
  const [glitchSpeed, setGlitchSpeed] = useState(50);
  const [centerVignette, setCenterVignette] = useState(true);
  const [outerVignette, setOuterVignette] = useState(false);
  const [smooth, setSmooth] = useState(true);
  const [glitchColors, setGlitchColors] = useState(['#2b4539', '#61dca3', '#61b3dc']);
  const [characters, setCharacters] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789');

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <LetterGlitch
          glitchSpeed={glitchSpeed}
          centerVignette={centerVignette}
          outerVignette={outerVignette}
          smooth={smooth}
          glitchColors={glitchColors}
          characters={characters}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize LetterGlitch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Glitch Colors</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="color"
                value={glitchColors[0] || '#2b4539'}
                onChange={event => {
                  const newColors = [...glitchColors];
                  newColors[0] = event.target.value;
                  setGlitchColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={glitchColors[1] || '#61dca3'}
                onChange={event => {
                  const newColors = [...glitchColors];
                  newColors[1] = event.target.value;
                  setGlitchColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={glitchColors[2] || '#61b3dc'}
                onChange={event => {
                  const newColors = [...glitchColors];
                  newColors[2] = event.target.value;
                  setGlitchColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Glitch Speed</span>
              <span className="text-purple-300 font-medium">{glitchSpeed}ms</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={glitchSpeed}
              onChange={event => setGlitchSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={centerVignette}
                onChange={event => setCenterVignette(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Center Vignette</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={outerVignette}
                onChange={event => setOuterVignette(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Outer Vignette</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={smooth}
                onChange={event => setSmooth(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Smooth Transitions</span>
            </label>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Characters</label>
            <textarea
              value={characters}
              onChange={event => setCharacters(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={3}
              placeholder="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
