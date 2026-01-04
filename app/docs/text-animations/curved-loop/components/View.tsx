"use client";

import { useState } from "react";
import { CurvedLoop } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [marqueeText, setMarqueeText] = useState("Be ✦ Creative ✦ With ✦ Shoora ✦ UI ✦");
  const [speed, setSpeed] = useState(3);
  const [curveAmount, setCurveAmount] = useState(500);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isInteractive, setIsInteractive] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div className="relative h-150 w-full bg-gray-900/30 rounded-lg p-4 border-2 border-purple-300 mt-8 flex items-center justify-center overflow-hidden">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Restart animation"
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

        <div key={key} className="w-full text-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <CurvedLoop 
              key={key}
              marqueeText={marqueeText}
              speed={speed}
              curveAmount={curveAmount}
              direction={direction}
              interactive={isInteractive}
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Curved Loop
        </h2>

        <div className="space-y-4">
          {/* Marquee Text */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Marquee Text</span>
            </div>
            <input
              type="text"
              value={marqueeText}
              onChange={(e) => setMarqueeText(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter text to display"
            />
          </div>

          {/* Speed Control */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Animation Speed</span>
              <span className="text-purple-300 font-mono">{speed}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          {/* Curve Amount */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Curve Amount</span>
              <span className="text-purple-300 font-mono">{curveAmount}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={curveAmount}
              onChange={e => setCurveAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
            />
          </div>

          {/* Direction Control */}
          <div className="pt-2">
            <div className="text-xs text-gray-400 mb-1">Direction</div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDirection("right")}
                className={`px-3 py-1.5 text-sm rounded-md ${direction === "right" ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Right to Left
              </button>
            </div>
          </div>

          {/* Interactive Toggle */}
          <div className="pt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="interactive"
                checked={isInteractive}
                onChange={(e) => setIsInteractive(e.target.checked)}
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
              />
              <label htmlFor="interactive" className="ml-2 text-sm text-gray-300">
                Interactive (hover to pause)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}