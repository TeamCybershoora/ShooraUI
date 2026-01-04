"use client";

import { useState } from "react";
import { ScrollFloat } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Shoora UI");
  const [animationDuration, setAnimationDuration] = useState(1);
  const [ease, setEase] = useState('back.inOut(2)');
  const [scrollStart, setScrollStart] = useState('center bottom+=50%');
  const [scrollEnd, setScrollEnd] = useState('bottom bottom-=40%');
  const [stagger, setStagger] = useState(0.03);

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
          <ScrollFloat
            animationDuration={animationDuration}
            ease={ease}
            scrollStart={scrollStart}
            scrollEnd={scrollEnd}
            stagger={stagger}
          >
            {text}
          </ScrollFloat>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Scroll Float
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
            <label className="block text-sm font-medium text-gray-300">Easing</label>
            <input
              type="text"
              value={ease}
              onChange={event => setEase(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="back.inOut(2)"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Scroll Start</label>
            <input
              type="text"
              value={scrollStart}
              onChange={event => setScrollStart(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="center bottom+=50%"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Scroll End</label>
            <input
              type="text"
              value={scrollEnd}
              onChange={event => setScrollEnd(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="bottom bottom-=40%"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Duration</span>
              <span className="text-purple-300 font-medium">{animationDuration}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={animationDuration}
              onChange={event => setAnimationDuration(Number(event.target.value))}
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
              max="0.1"
              step="0.005"
              value={stagger}
              onChange={event => setStagger(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
