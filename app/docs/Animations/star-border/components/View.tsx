"use client";

import { useState } from "react";
import { StarBorder } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Click Me!");
  const [className, setClassName] = useState("");
  const [color, setColor] = useState("cyan");
  const [speed, setSpeed] = useState("5s");
  const [thickness, setThickness] = useState(1);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Star Border"
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
          <StarBorder
            as="button"
            className={className}
            color={color}
            speed={speed}
            thickness={thickness}
          >
            {text}
          </StarBorder>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Star Border
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Button Text</label>
            <input
              type="text"
              value={text}
              onChange={event => setText(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter button text here..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">CSS Class</label>
            <input
              type="text"
              value={className}
              onChange={event => setClassName(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="custom-class"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Border Color</label>
            <input
              type="text"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="cyan"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Animation Speed</label>
            <select
              value={speed}
              onChange={event => setSpeed(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="2s">2s (Fast)</option>
              <option value="5s">5s (Normal)</option>
              <option value="8s">8s (Slow)</option>
              <option value="10s">10s (Very Slow)</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Border Thickness</span>
              <span className="text-purple-300 font-medium">{thickness}px</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={thickness}
              onChange={event => setThickness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
