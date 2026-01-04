"use client";

import { useState } from "react";
import { Squares } from "@cybershoora/shoora-ui"

export default function View() {
  const [speed, setSpeed] = useState(0.5);
  const [squareSize, setSquareSize] = useState(40);
  const [direction, setDirection] = useState<'diagonal' | 'up' | 'right' | 'down' | 'left'>('diagonal');
  const [borderColor, setBorderColor] = useState('#fff');
  const [hoverFillColor, setHoverFillColor] = useState('#222');

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Squares
          speed={speed}
          squareSize={squareSize}
          direction={direction}
          borderColor={borderColor}
          hoverFillColor={hoverFillColor}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Squares
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Square Size</span>
              <span className="text-purple-300 font-medium">{squareSize}px</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={squareSize}
              onChange={event => setSquareSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Direction</label>
            <select
              value={direction}
              onChange={event => setDirection(event.target.value as 'diagonal' | 'up' | 'right' | 'down' | 'left')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="diagonal">Diagonal</option>
              <option value="up">Up</option>
              <option value="right">Right</option>
              <option value="down">Down</option>
              <option value="left">Left</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Border Color</label>
            <input
              type="text"
              value={borderColor}
              onChange={event => setBorderColor(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#ffffff"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Hover Fill Color</label>
            <input
              type="text"
              value={hoverFillColor}
              onChange={event => setHoverFillColor(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#222222"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
