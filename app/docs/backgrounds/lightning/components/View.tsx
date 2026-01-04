"use client";

import { useState } from "react";
import { Lightning } from "@cybershoora/shoora-ui"

export default function View() {
  const [hue, setHue] = useState(220);
  const [xOffset, setXOffset] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [intensity, setIntensity] = useState(1);
  const [size, setSize] = useState(1);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Lightning
          hue={hue}
          xOffset={xOffset}
          speed={speed}
          intensity={intensity}
          size={size}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Lightning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hue</span>
              <span className="text-purple-300 font-medium">{hue}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={hue}
              onChange={event => setHue(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>X Offset</span>
              <span className="text-purple-300 font-medium">{xOffset.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.01"
              value={xOffset}
              onChange={event => setXOffset(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Intensity</span>
              <span className="text-purple-300 font-medium">{intensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={intensity}
              onChange={event => setIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Size</span>
              <span className="text-purple-300 font-medium">{size.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={size}
              onChange={event => setSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          {/* Empty div to complete the 3-column grid */}
          <div className="space-y-2"></div>
        </div>
      </div>
    </div>
  );
}
