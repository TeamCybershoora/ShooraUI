"use client";

import { useState } from "react";
import { Cubes } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [gridSize, setGridSize] = useState(8);
  const [maxAngle, setMaxAngle] = useState(60);
  const [radius, setRadius] = useState(4);
  const [borderStyle, setBorderStyle] = useState("2px dashed #5227FF");
  const [faceColor, setFaceColor] = useState("#1a1a2e");
  const [rippleColor, setRippleColor] = useState("#ff6b6b");
  const [rippleSpeed, setRippleSpeed] = useState(1.5);
  const [autoAnimate, setAutoAnimate] = useState(true);
  const [rippleOnClick, setRippleOnClick] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Cubes"
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
        <div key={key} style={{ height: '600px', position: 'relative' }} className="relative w-full h-full min-h-[18rem]">
          <Cubes 
            gridSize={gridSize}
            maxAngle={maxAngle}
            radius={radius}
            borderStyle={borderStyle}
            faceColor={faceColor}
            rippleColor={rippleColor}
            rippleSpeed={rippleSpeed}
            autoAnimate={autoAnimate}
            rippleOnClick={rippleOnClick}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Cubes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Size</span>
              <span className="text-purple-300 font-medium">{gridSize}</span>
            </div>
            <input
              type="range"
              min="4"
              max="16"
              step="1"
              value={gridSize}
              onChange={event => setGridSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Max Angle</span>
              <span className="text-purple-300 font-medium">{maxAngle}°</span>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="5"
              value={maxAngle}
              onChange={event => setMaxAngle(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Radius</span>
              <span className="text-purple-300 font-medium">{radius}</span>
            </div>
            <input
              type="range"
              min="2"
              max="10"
              step="0.5"
              value={radius}
              onChange={event => setRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ripple Speed</span>
              <span className="text-purple-300 font-medium">{rippleSpeed}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={rippleSpeed}
              onChange={event => setRippleSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Border Style</label>
            <input
              type="text"
              value={borderStyle}
              onChange={event => setBorderStyle(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="2px dashed #5227FF"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Face Color</label>
            <input
              type="color"
              value={faceColor}
              onChange={event => setFaceColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Ripple Color</label>
            <input
              type="color"
              value={rippleColor}
              onChange={event => setRippleColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoAnimate}
                onChange={event => setAutoAnimate(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
              />
              <span>Auto Animate</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={rippleOnClick}
                onChange={event => setRippleOnClick(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
              />
              <span>Ripple on Click</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
