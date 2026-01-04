"use client";

import { useState } from "react";
import { RotatingText } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [texts, setTexts] = useState(['Shoora UI',  'Is', 'Cool!']);
  const [mainClassName, setMainClassName] = useState("px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg");
  const [staggerFrom, setStaggerFrom] = useState<"first" | "last" | "center" | "random">("last");
  const [staggerDuration, setStaggerDuration] = useState(0.025);
  const [rotationInterval, setRotationInterval] = useState(2000);
  const [damping, setDamping] = useState(30);
  const [stiffness, setStiffness] = useState(400);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Rotating Text"
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
          <RotatingText
            texts={texts}
            mainClassName={mainClassName}
            staggerFrom={staggerFrom}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={staggerDuration}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: damping, stiffness: stiffness }}
            rotationInterval={rotationInterval}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Rotating Text
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Texts (comma-separated)</label>
            <input
              type="text"
              value={texts.join(', ')}
              onChange={event => setTexts(event.target.value.split(',').map(text => text.trim()))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter texts separated by commas..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Main ClassName</label>
            <input
              type="text"
              value={mainClassName}
              onChange={event => setMainClassName(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Stagger From</label>
            <select
              value={staggerFrom}
              onChange={event => setStaggerFrom(event.target.value as "first" | "last" | "center" | "random")}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="first">First</option>
              <option value="last">Last</option>
              <option value="center">Center</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Stagger Duration</span>
              <span className="text-purple-300 font-medium">{staggerDuration}s</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.1"
              step="0.005"
              value={staggerDuration}
              onChange={event => setStaggerDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotation Interval</span>
              <span className="text-purple-300 font-medium">{rotationInterval}ms</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={rotationInterval}
              onChange={event => setRotationInterval(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Damping</span>
              <span className="text-purple-300 font-medium">{damping}</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={damping}
              onChange={event => setDamping(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Stiffness</span>
              <span className="text-purple-300 font-medium">{stiffness}</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={stiffness}
              onChange={event => setStiffness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
