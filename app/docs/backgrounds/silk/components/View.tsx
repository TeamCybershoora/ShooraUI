"use client";

import { useState } from "react";
import { Silk } from "@cybershoora/shoora-ui"

export default function View() {
  const [speed, setSpeed] = useState(5);
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState('#7B7481');
  const [noiseIntensity, setNoiseIntensity] = useState(1.5);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="p-0">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300">
        <Silk
          speed={speed}
          scale={scale}
          color={color}
          noiseIntensity={noiseIntensity}
          rotation={rotation}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Silk
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="20"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale</span>
              <span className="text-purple-300 font-medium">{scale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Color</label>
            <input
              type="color"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise Intensity</span>
              <span className="text-purple-300 font-medium">{noiseIntensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={noiseIntensity}
              onChange={event => setNoiseIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotation</span>
              <span className="text-purple-300 font-medium">{rotation}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={rotation}
              onChange={event => setRotation(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
