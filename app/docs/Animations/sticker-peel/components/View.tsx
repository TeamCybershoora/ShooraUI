"use client";

import { useState } from "react";
import { StickerPeel } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [width, setWidth] = useState(200);
  const [rotate, setRotate] = useState(30);
  const [peelBackHoverPct, setPeelBackHoverPct] = useState(20);
  const [peelBackActivePct, setPeelBackActivePct] = useState(40);
  const [shadowIntensity, setShadowIntensity] = useState(0.6);
  const [lightingIntensity, setLightingIntensity] = useState(0.1);
  const [initialX, setInitialX] = useState(-100);
  const [initialY, setInitialY] = useState(100);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize StickerPeel"
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
        <div key={key} className="relative flex items-start justify-center w-full h-full min-h-[25rem] -mt-12">
          <StickerPeel
            imageSrc="https://picsum.photos/seed/sticker/200/200.jpg"
            width={width}
            rotate={rotate}
            peelBackHoverPct={peelBackHoverPct}
            peelBackActivePct={peelBackActivePct}
            shadowIntensity={shadowIntensity}
            lightingIntensity={lightingIntensity}
            initialPosition={{ x: initialX, y: initialY }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize StickerPeel
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Width</span>
              <span className="text-purple-300 font-medium">{width}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="300"
              step="10"
              value={width}
              onChange={event => setWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotate</span>
              <span className="text-purple-300 font-medium">{rotate}°</span>
            </div>
            <input
              type="range"
              min="-45"
              max="45"
              step="5"
              value={rotate}
              onChange={event => setRotate(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Peel Back Hover %</span>
              <span className="text-purple-300 font-medium">{peelBackHoverPct}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={peelBackHoverPct}
              onChange={event => setPeelBackHoverPct(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Peel Back Active %</span>
              <span className="text-purple-300 font-medium">{peelBackActivePct}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={peelBackActivePct}
              onChange={event => setPeelBackActivePct(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shadow Intensity</span>
              <span className="text-purple-300 font-medium">{shadowIntensity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={shadowIntensity}
              onChange={event => setShadowIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Lighting Intensity</span>
              <span className="text-purple-300 font-medium">{lightingIntensity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={lightingIntensity}
              onChange={event => setLightingIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Initial X Position</span>
              <span className="text-purple-300 font-medium">{initialX}</span>
            </div>
            <input
              type="range"
              min="-200"
              max="200"
              step="10"
              value={initialX}
              onChange={event => setInitialX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Initial Y Position</span>
              <span className="text-purple-300 font-medium">{initialY}</span>
            </div>
            <input
              type="range"
              min="-200"
              max="200"
              step="10"
              value={initialY}
              onChange={event => setInitialY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
