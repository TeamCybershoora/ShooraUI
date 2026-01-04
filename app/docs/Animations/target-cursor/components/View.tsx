"use client";

import { useState } from "react";
import { TargetCursor } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [targetSelector, setTargetSelector] = useState(".cursor-target");
  const [spinDuration, setSpinDuration] = useState(2);
  const [hoverDuration, setHoverDuration] = useState(0.3);
  const [hideDefaultCursor, setHideDefaultCursor] = useState(true);
  const [parallaxOn, setParallaxOn] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 overflow-hidden">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Target Cursor"
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
        <div
          key={key}
          className="relative flex flex-col items-center justify-center w-full h-full min-h-[18rem] gap-10"
        >
          <TargetCursor
            targetSelector={targetSelector}
            spinDuration={spinDuration}
            hideDefaultCursor={hideDefaultCursor}
            hoverDuration={hoverDuration}
            parallaxOn={parallaxOn}
          />

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white text-center">
              Hover over the elements below
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="cursor-target px-6 py-3 bg-purple-500/80 hover:bg-purple-500 text-white font-semibold rounded-full transition-colors">
                Click me!
              </button>
              <div className="cursor-target px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur">
                Hover target
              </div>
              <div className="cursor-target px-10 py-6 bg-gradient-to-r from-slate-900 via-purple-900/80 to-slate-900 rounded-2xl text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-2">Focus</p>
                <p className="font-medium">Try hovering me too</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Target Cursor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Target Selector</label>
            <input
              type="text"
              value={targetSelector}
              onChange={event => setTargetSelector(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder=".cursor-target"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spin Duration</span>
              <span className="text-purple-300 font-medium">{spinDuration.toFixed(1)}s</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={spinDuration}
              onChange={event => setSpinDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hover Activation Duration</span>
              <span className="text-purple-300 font-medium">{hoverDuration.toFixed(2)}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={hoverDuration}
              onChange={event => setHoverDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              id="hide-default-cursor-toggle"
              type="checkbox"
              checked={hideDefaultCursor}
              onChange={event => setHideDefaultCursor(event.target.checked)}
              className="h-4 w-4 text-purple-500 border-gray-600 rounded focus:ring-purple-500"
            />
            <label htmlFor="hide-default-cursor-toggle" className="text-sm font-medium text-gray-300">
              Hide default cursor
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              id="parallax-toggle"
              type="checkbox"
              checked={parallaxOn}
              onChange={event => setParallaxOn(event.target.checked)}
              className="h-4 w-4 text-purple-500 border-gray-600 rounded focus:ring-purple-500"
            />
            <label htmlFor="parallax-toggle" className="text-sm font-medium text-gray-300">
              Enable parallax corners
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
