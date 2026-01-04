"use client";

import { useState } from "react";
import { FallingText } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Shoora UI is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.");
  const [highlightWords, setHighlightWords] = useState<string[]>(["React", "Bits", "animated", "components", "simplify"]);
  const [trigger, setTrigger] = useState<"hover" | "click">("hover");
  const [gravity, setGravity] = useState(0.56);
  const [fontSize, setFontSize] = useState("2rem");
  const [stiffness, setStiffness] = useState(0.9);

  return (
    <div className="space-y-8 p-4">
      <div className="relative h-80 w-full bg-gray-900/30 rounded-lg p-4 border-2 border-purple-300 mt-8 flex items-center justify-center overflow-hidden">
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

        <div key={key} className="w-full text-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden px-4">
            <div className="max-w-4xl w-full">
              <FallingText
                key={key}
                text={text}
                highlightWords={highlightWords}
                highlightClass="text-purple-400 font-bold"
                trigger={trigger}
                backgroundColor="transparent"
                wireframes={false}
                gravity={gravity}
                fontSize={fontSize}
                mouseConstraintStiffness={stiffness}
                className="text-2xl md:text-4xl font-medium leading-relaxed text-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Falling Text
        </h2>

        <div className="space-y-4">
          {/* Text Input */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Text Content</span>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-32 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your text here"
            />
          </div>

          {/* Highlight Words */}
          <div>
            <div className="text-sm text-gray-300 mb-1">Highlight Words (comma separated)</div>
            <input
              type="text"
              value={highlightWords.join(", ")}
              onChange={(e) => setHighlightWords(e.target.value.split(",").map(w => w.trim()).filter(Boolean))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="word1, word2, word3"
            />
          </div>

          {/* Trigger Type */}
          <div className="pt-2">
            <div className="text-sm text-gray-300 mb-1">Trigger Type</div>
            <div className="flex space-x-2">
              <button
                onClick={() => setTrigger("hover")}
                className={`px-3 py-1.5 text-sm rounded-md ${trigger === "hover" ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Hover
              </button>
              <button
                onClick={() => setTrigger("click")}
                className={`px-3 py-1.5 text-sm rounded-md ${trigger === "click" ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Click
              </button>
            </div>
          </div>

          {/* Gravity Control */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Gravity</span>
              <span className="text-purple-300 font-mono">{gravity}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={gravity}
              onChange={e => setGravity(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          {/* Font Size */}
          <div>
            <div className="text-sm text-gray-300 mb-1">Font Size</div>
            <div className="flex space-x-2">
              {['1rem', '1.25rem', '1.5rem', '2rem', '2.5rem'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1.5 text-sm rounded-md ${fontSize === size ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stiffness Control */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Mouse Constraint Stiffness</span>
              <span className="text-purple-300 font-mono">{stiffness}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={stiffness}
              onChange={e => setStiffness(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}