"use client";

import { useState } from "react";
import { ClickSpark } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [sparkColor, setSparkColor] = useState('#fff');
  const [sparkSize, setSparkSize] = useState(10);
  const [sparkRadius, setSparkRadius] = useState(15);
  const [sparkCount, setSparkCount] = useState(8);
  const [duration, setDuration] = useState(400);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize ClickSpark"
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
          <ClickSpark
            sparkColor={sparkColor}
            sparkSize={sparkSize}
            sparkRadius={sparkRadius}
            sparkCount={sparkCount}
            duration={duration}
          >
            <button className="px-8 py-4 text-white font-semibold border-2 border-purple-300 bg-transparent hover:bg-purple-300/10 transition-colors justify-center rounded-lg ml-100">
              Click  for Sparks!
            </button>
          </ClickSpark>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize ClickSpark
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Spark Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={sparkColor}
                onChange={event => setSparkColor(event.target.value)}
                className="w-12 h-12 bg-gray-800 border border-gray-600 rounded cursor-pointer"
              />
              <input
                type="text"
                value={sparkColor}
                onChange={event => setSparkColor(event.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="#fff"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spark Size</span>
              <span className="text-purple-300 font-medium">{sparkSize}px</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={sparkSize}
              onChange={event => setSparkSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spark Radius</span>
              <span className="text-purple-300 font-medium">{sparkRadius}px</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={sparkRadius}
              onChange={event => setSparkRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spark Count</span>
              <span className="text-purple-300 font-medium">{sparkCount}</span>
            </div>
            <input
              type="range"
              min="3"
              max="20"
              step="1"
              value={sparkCount}
              onChange={event => setSparkCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Duration</span>
              <span className="text-purple-300 font-medium">{duration}ms</span>
            </div>
            <input
              type="range"
              min="200"
              max="1000"
              step="50"
              value={duration}
              onChange={event => setDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
