"use client";

import { useState } from "react";
import { GridDistortion } from "@cybershoora/shoora-ui"

export default function View() {
  const [imageSrc, setImageSrc] = useState("https://picsum.photos/1920/1080?grayscale");
  const [grid, setGrid] = useState(10);
  const [mouse, setMouse] = useState(0.1);
  const [strength, setStrength] = useState(0.15);
  const [relaxation, setRelaxation] = useState(0.9);
  const [className, setClassName] = useState("custom-class");

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <GridDistortion
          imageSrc={imageSrc}
          grid={grid}
          mouse={mouse}
          strength={strength}
          relaxation={relaxation}
          className={className}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Grid Distortion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Image URL</label>
            <input
              type="text"
              value={imageSrc}
              onChange={event => setImageSrc(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://picsum.photos/1920/1080?grayscale"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid</span>
              <span className="text-purple-300 font-medium">{grid}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={grid}
              onChange={event => setGrid(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse</span>
              <span className="text-purple-300 font-medium">{mouse.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={mouse}
              onChange={event => setMouse(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Strength</span>
              <span className="text-purple-300 font-medium">{strength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={strength}
              onChange={event => setStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Relaxation</span>
              <span className="text-purple-300 font-medium">{relaxation.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={relaxation}
              onChange={event => setRelaxation(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
