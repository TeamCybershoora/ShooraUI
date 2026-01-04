"use client";

import { useState } from "react";
import { AnimatedContent } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [content, setContent] = useState("Content to Animate");
  const [distance, setDistance] = useState(150);
  const [direction, setDirection] = useState<"vertical" | "horizontal">("horizontal");
  const [reverse, setReverse] = useState(false);
  const [duration, setDuration] = useState(1.2);
  const [ease, setEase] = useState("bounce.out");
  const [initialOpacity, setInitialOpacity] = useState(0.2);
  const [animateOpacity, setAnimateOpacity] = useState(true);
  const [scale, setScale] = useState(1.1);
  const [threshold, setThreshold] = useState(0.2);
  const [delay, setDelay] = useState(0.3);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Animated Content"
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
          <AnimatedContent
            distance={distance}
            direction={direction}
            reverse={reverse}
            duration={duration}
            ease={ease}
            initialOpacity={initialOpacity}
            animateOpacity={animateOpacity}
            scale={scale}
            threshold={threshold}
            delay={delay}
          >
            <div className="text-2xl font-bold text-white p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              {content}
            </div>
          </AnimatedContent>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Animated Content
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Content Text</label>
            <input
              type="text"
              value={content}
              onChange={event => setContent(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Content to Animate"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Direction</label>
            <select
              value={direction}
              onChange={event => setDirection(event.target.value as "vertical" | "horizontal")}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Easing Function</label>
            <select
              value={ease}
              onChange={event => setEase(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="bounce.out">Bounce Out</option>
              <option value="power1.inOut">Power1 InOut</option>
              <option value="power2.inOut">Power2 InOut</option>
              <option value="power3.inOut">Power3 InOut</option>
              <option value="power4.inOut">Power4 InOut</option>
              <option value="back.out">Back Out</option>
              <option value="elastic.out">Elastic Out</option>
              <option value="sine.inOut">Sine InOut</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Distance</span>
              <span className="text-purple-300 font-medium">{distance}px</span>
            </div>
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={distance}
              onChange={event => setDistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Duration</span>
              <span className="text-purple-300 font-medium">{duration}s</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={duration}
              onChange={event => setDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale</span>
              <span className="text-purple-300 font-medium">{scale}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Initial Opacity</span>
              <span className="text-purple-300 font-medium">{initialOpacity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={initialOpacity}
              onChange={event => setInitialOpacity(Number(event.target.value))}
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

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Delay</span>
              <span className="text-purple-300 font-medium">{delay}s</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={delay}
              onChange={event => setDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={reverse}
                onChange={event => setReverse(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
              />
              <span>Reverse Animation</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={animateOpacity}
                onChange={event => setAnimateOpacity(event.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
              />
              <span>Animate Opacity</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
