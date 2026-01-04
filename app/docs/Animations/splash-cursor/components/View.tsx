"use client";

import { useState } from "react";
import { SplashCursor } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [SIM_RESOLUTION, setSIM_RESOLUTION] = useState(128);
  const [DYE_RESOLUTION, setDYE_RESOLUTION] = useState(1440);
  const [SPLAT_RADIUS, setSPLAT_RADIUS] = useState(0.2);
  const [SPLAT_FORCE, setSPLAT_FORCE] = useState(6000);
  const [SHADING, setSHADING] = useState(true);
  const [TRANSPARENT, setTRANSPARENT] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Splash Cursor"
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
          <SplashCursor
            SIM_RESOLUTION={SIM_RESOLUTION}
            DYE_RESOLUTION={DYE_RESOLUTION}
            SPLAT_RADIUS={SPLAT_RADIUS}
            SPLAT_FORCE={SPLAT_FORCE}
            SHADING={SHADING}
            TRANSPARENT={TRANSPARENT}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Splash Cursor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Simulation Resolution</span>
              <span className="text-purple-300 font-medium">{SIM_RESOLUTION}</span>
            </div>
            <input
              type="range"
              min="32"
              max="256"
              step="32"
              value={SIM_RESOLUTION}
              onChange={event => setSIM_RESOLUTION(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Dye Resolution</span>
              <span className="text-purple-300 font-medium">{DYE_RESOLUTION}</span>
            </div>
            <input
              type="range"
              min="512"
              max="2048"
              step="128"
              value={DYE_RESOLUTION}
              onChange={event => setDYE_RESOLUTION(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Splat Radius</span>
              <span className="text-purple-300 font-medium">{SPLAT_RADIUS.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.05"
              value={SPLAT_RADIUS}
              onChange={event => setSPLAT_RADIUS(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Splat Force</span>
              <span className="text-purple-300 font-medium">{SPLAT_FORCE}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={SPLAT_FORCE}
              onChange={event => setSPLAT_FORCE(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-3 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={SHADING}
                onChange={event => setSHADING(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span>Enable Shading</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-3 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={TRANSPARENT}
                onChange={event => setTRANSPARENT(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span>Transparent Background</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
