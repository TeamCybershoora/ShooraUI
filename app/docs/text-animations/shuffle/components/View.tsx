"use client";

import { useState } from "react";
import { Shuffle } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Hello World");
  const [shuffleDirection, setShuffleDirection] = useState<"right" | "left">("right");
  const [duration, setDuration] = useState(0.35);
  const [animationMode, setAnimationMode] = useState<"evenodd" | "random">("evenodd");
  const [shuffleTimes, setShuffleTimes] = useState(1);
  const [ease, setEase] = useState("power3.out");
  const [stagger, setStagger] = useState(0.03);
  const [threshold, setThreshold] = useState(0.1);
  const [triggerOnce, setTriggerOnce] = useState(true);
  const [triggerOnHover, setTriggerOnHover] = useState(true);
  const [respectReducedMotion, setRespectReducedMotion] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Scrambled Text"
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
        <div key={key} className="relative flex items-center justify-center w-full h-full min-h-[18rem] text-4xl font-bold">
          <Shuffle
            text={text}
            shuffleDirection={shuffleDirection}
            duration={duration}
            animationMode={animationMode}
            shuffleTimes={shuffleTimes}
            ease={ease}
            stagger={stagger}
            threshold={threshold}
            triggerOnce={triggerOnce}
            triggerOnHover={triggerOnHover}
            respectReducedMotion={respectReducedMotion}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          Customize Shuffle
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Text Content</label>
            <input
              type="text"
              value={text}
              onChange={event => setText(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your text here..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Shuffle Direction</label>
            <select
              value={shuffleDirection}
              onChange={event => setShuffleDirection(event.target.value as "right" | "left")}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Animation Mode</label>
            <select
              value={animationMode}
              onChange={event => setAnimationMode(event.target.value as "evenodd" | "random")}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="evenodd">Even-Odd</option>
              <option value="random">Random</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Ease Function</label>
            <input
              type="text"
              value={ease}
              onChange={event => setEase(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="power3.out"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Duration</span>
              <span className="text-purple-300 font-medium">{duration}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.05"
              value={duration}
              onChange={event => setDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shuffle Times</span>
              <span className="text-purple-300 font-medium">{shuffleTimes}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={shuffleTimes}
              onChange={event => setShuffleTimes(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Stagger</span>
              <span className="text-purple-300 font-medium">{stagger}s</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.2"
              step="0.01"
              value={stagger}
              onChange={event => setStagger(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Threshold</span>
              <span className="text-purple-300 font-medium">{threshold}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={threshold}
              onChange={event => setThreshold(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2 flex items-center">
            <input
              type="checkbox"
              id="triggerOnce"
              checked={triggerOnce}
              onChange={() => setTriggerOnce(!triggerOnce)}
              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <label htmlFor="triggerOnce" className="ml-2 block text-sm font-medium text-gray-300">
              Trigger Once
            </label>
          </div>

          <div className="space-y-2 flex items-center">
            <input
              type="checkbox"
              id="triggerOnHover"
              checked={triggerOnHover}
              onChange={() => setTriggerOnHover(!triggerOnHover)}
              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <label htmlFor="triggerOnHover" className="ml-2 block text-sm font-medium text-gray-300">
              Trigger on Hover
            </label>
          </div>

          <div className="space-y-2 flex items-center">
            <input
              type="checkbox"
              id="respectReducedMotion"
              checked={respectReducedMotion}
              onChange={() => setRespectReducedMotion(!respectReducedMotion)}
              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <label htmlFor="respectReducedMotion" className="ml-2 block text-sm font-medium text-gray-300">
              Respect Reduced Motion
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
