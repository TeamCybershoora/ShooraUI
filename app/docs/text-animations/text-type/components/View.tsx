"use client";

import { useState } from "react";
import { TextType } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Hello, World!");
  const [typingSpeed, setTypingSpeed] = useState(75);
  const [pauseDuration, setPauseDuration] = useState(1500);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorCharacter, setCursorCharacter] = useState("|");
  const [textLines, setTextLines] = useState([
    "Text typing effect",
    "for your websites",
    "Happy coding!"
  ].join("\n"));

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
          <TextType 
            text={textLines.split('\n').filter(line => line.trim() !== '')}
            typingSpeed={typingSpeed}
            pauseDuration={pauseDuration}
            showCursor={showCursor}
            cursorCharacter={cursorCharacter}
            className="text-4xl font-bold text-white"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          Customize Text Type
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Text Content (one per line)</label>
            <textarea
              value={textLines}
              onChange={event => setTextLines(event.target.value)}
              className="w-full h-32 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your text here, one line per text..."
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Typing Speed</span>
              <span className="text-purple-300 font-medium">{typingSpeed}ms</span>
            </div>
            <input
              type="range"
              min="20"
              max="200"
              step="5"
              value={typingSpeed}
              onChange={event => setTypingSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Pause Duration</span>
              <span className="text-purple-300 font-medium">{pauseDuration}ms</span>
            </div>
            <input
              type="range"
              min="500"
              max="3000"
              step="100"
              value={pauseDuration}
              onChange={event => setPauseDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Cursor Character</label>
            <input
              type="text"
              maxLength={1}
              value={cursorCharacter}
              onChange={event => setCursorCharacter(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="|"
            />
          </div>

          <div className="space-y-2 flex items-center">
            <input
              type="checkbox"
              id="showCursor"
              checked={showCursor}
              onChange={() => setShowCursor(!showCursor)}
              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <label htmlFor="showCursor" className="ml-2 block text-sm font-medium text-gray-300">
              Show Cursor
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
