"use client";

import { useState } from "react";
import {CountUp} from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1000);
  const [duration, setDuration] = useState(2.5);
  const [separator, setSeparator] = useState(",");

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[15rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
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

        <div key={key} className="text-center">
          <div className="flex items-center justify-center">
            <CountUp
              from={start}
              to={end}
              duration={duration}
              separator={separator}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Count Up
        </h2>

        <div className="space-y-4">
          {/* Range Values */}
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-300">Start Value</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="1000"
                    value={start}
                    onChange={e => setStart(Math.min(1000, Math.max(0, Number(e.target.value) || 0)))}
                    className="w-20 px-2 py-1 text-sm bg-gray-800 border border-gray-600 rounded text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                step="1"
                value={start}
                onChange={e => setStart(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-300">End Value</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="1000"
                    value={end}
                    onChange={e => setEnd(Math.min(1000, Math.max(0, Number(e.target.value) || 0)))}
                    className="w-20 px-2 py-1 text-sm bg-gray-800 border border-gray-600 rounded text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                step="1"
                value={end}
                onChange={e => setEnd(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Duration</span>
              <span className="text-purple-300 font-mono">{duration}s</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={duration}
              onChange={e => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-400"
            />
          </div>

          {/* Separator Control */}
          <div className="pt-2">
            <div className="text-xs text-gray-400 mb-1">Thousand Separator</div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSeparator(",")}
                className={`px-3 py-1.5 text-sm rounded-md ${separator === "," ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Comma (,)
              </button>
              <button
                onClick={() => setSeparator(".")}
                className={`px-3 py-1.5 text-sm rounded-md ${separator === "." ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Period (.)
              </button>
              <button
                onClick={() => setSeparator(" ")}
                className={`px-3 py-1.5 text-sm rounded-md ${separator === " " ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Space ( )
              </button>
              <button
                onClick={() => setSeparator("")}
                className={`px-3 py-1.5 text-sm rounded-md ${separator === "" ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                None
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}