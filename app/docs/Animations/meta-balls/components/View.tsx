"use client";

import { useState } from "react";
import { MetaBalls } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [cursorBallColor, setCursorBallColor] = useState("#ffffff");
  const [cursorBallSize, setCursorBallSize] = useState(2);
  const [ballCount, setBallCount] = useState(15);
  const [animationSize, setAnimationSize] = useState(30);
  const [enableMouseInteraction, setEnableMouseInteraction] = useState(true);
  const [enableTransparency, setEnableTransparency] = useState(true);
  const [hoverSmoothness, setHoverSmoothness] = useState(0.05);
  const [clumpFactor, setClumpFactor] = useState(1);
  const [speed, setSpeed] = useState(0.3);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Meta Balls"
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
        <div key={key} className="relative w-full h-full min-h-[10rem] overflow-hidden rounded-lg">
          <MetaBalls
            color={color}
            cursorBallColor={cursorBallColor}
            cursorBallSize={cursorBallSize}
            ballCount={ballCount}
            animationSize={animationSize}
            enableMouseInteraction={enableMouseInteraction}
            enableTransparency={enableTransparency}
            hoverSmoothness={hoverSmoothness}
            clumpFactor={clumpFactor}
            speed={speed}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Meta Balls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Blob Color</label>
            <input
              type="color"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Cursor Blob Color</label>
            <input
              type="color"
              value={cursorBallColor}
              onChange={event => setCursorBallColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Cursor Blob Size</span>
              <span className="text-purple-300 font-medium">{cursorBallSize.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="8"
              step="0.5"
              value={cursorBallSize}
              onChange={event => setCursorBallSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ball Count</span>
              <span className="text-purple-300 font-medium">{ballCount}</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={ballCount}
              onChange={event => setBallCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Size</span>
              <span className="text-purple-300 font-medium">{animationSize}</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="1"
              value={animationSize}
              onChange={event => setAnimationSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hover Smoothness</span>
              <span className="text-purple-300 font-medium">{hoverSmoothness.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={hoverSmoothness}
              onChange={event => setHoverSmoothness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Clump Factor</span>
              <span className="text-purple-300 font-medium">{clumpFactor.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={clumpFactor}
              onChange={event => setClumpFactor(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-between rounded-md bg-gray-800/60 border border-gray-700 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-200">Enable Mouse Interaction</p>
              <p className="text-xs text-gray-400">Let the metaballs react to cursor movement.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableMouseInteraction}
                onChange={event => setEnableMouseInteraction(event.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:bg-purple-500 transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>

          <div className="md:col-span-2 flex items-center justify-between rounded-md bg-gray-800/60 border border-gray-700 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-200">Enable Transparency</p>
              <p className="text-xs text-gray-400">Make the canvas blend with the background instead of solid fill.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableTransparency}
                onChange={event => setEnableTransparency(event.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:bg-purple-500 transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
