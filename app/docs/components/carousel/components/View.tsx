"use client";

import { useState } from "react";
import { Carousel } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [baseWidth, setBaseWidth] = useState(300);
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayDelay, setAutoplayDelay] = useState(3000);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [loop, setLoop] = useState(true);
  const [round, setRound] = useState(false);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Carousel"
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
        <div key={key} className="relative">
          <Carousel
            baseWidth={baseWidth}
            autoplay={autoplay}
            autoplayDelay={autoplayDelay}
            pauseOnHover={pauseOnHover}
            loop={loop}
            round={round}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Carousel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Base Width</span>
              <span className="text-purple-300 font-medium">{baseWidth}px</span>
            </div>
            <input
              type="range"
              min="200"
              max="500"
              step="50"
              value={baseWidth}
              onChange={event => setBaseWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Autoplay Delay</span>
              <span className="text-purple-300 font-medium">{autoplayDelay}ms</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={autoplayDelay}
              onChange={event => setAutoplayDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoplay}
                onChange={event => setAutoplay(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Autoplay</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={pauseOnHover}
                onChange={event => setPauseOnHover(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Pause on Hover</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={loop}
                onChange={event => setLoop(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Loop</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={round}
                onChange={event => setRound(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Round Style</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
