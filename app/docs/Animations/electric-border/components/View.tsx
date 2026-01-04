"use client";

import { useState } from "react";
import { ElectricBorder } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [color, setColor] = useState("#7df9ff");
  const [speed, setSpeed] = useState(1);
  const [chaos, setChaos] = useState(0.5);
  const [thickness, setThickness] = useState(2);
  const [borderRadius, setBorderRadius] = useState(16);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Electric Border"
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
          <ElectricBorder
            color={color}
            speed={speed}
            chaos={chaos}
            thickness={thickness}
            style={{ borderRadius: borderRadius }}
            className="max-w-sm w-full bg-[#0a1220]/85 text-white px-8 py-10 shadow-[0_0_80px_rgba(125,249,255,0.25)]"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Featured
              </span>
              <div className="space-y-2">
                <h3 className="text-3xl font-semibold">Electric Border</h3>
                <p className="text-white/70 leading-relaxed">
                  Wrap your content in a vibrant, reactive glow that sells the moment your users see it.
                </p>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                  Live
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">
                  v1.0
                </span>
              </div>

              <button className="w-full rounded-full bg-white/90 py-3 text-sm font-semibold text-[#0a1220] shadow-[0_15px_40px_rgba(125,249,255,0.35)] transition hover:bg-white">
                Get Started
              </button>
            </div>
          </ElectricBorder>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Electric Border
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Border Color</label>
            <input
              type="color"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Chaos</span>
              <span className="text-purple-300 font-medium">{chaos}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={chaos}
              onChange={event => setChaos(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Thickness</span>
              <span className="text-purple-300 font-medium">{thickness}px</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={thickness}
              onChange={event => setThickness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Border Radius</span>
              <span className="text-purple-300 font-medium">{borderRadius}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={borderRadius}
              onChange={event => setBorderRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
