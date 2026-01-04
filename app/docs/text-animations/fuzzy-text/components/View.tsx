"use client";

import { useState } from "react";
import { FuzzyText } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("404");
  const [baseIntensity, setBaseIntensity] = useState(0.2);
  const [hoverIntensity, setHoverIntensity] = useState(0.5);
  const [enableHover, setEnableHover] = useState(true);
  const [fontSize, setFontSize] = useState("8rem");
  const [fontWeight, setFontWeight] = useState("900");
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
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
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
          </svg>
        </button>

        <div key={key} className="w-full text-center">
          <div className="w-full h-full flex items-center justify-center">
            <FuzzyText
              baseIntensity={baseIntensity}
              hoverIntensity={hoverIntensity}
              enableHover={enableHover}
              fontSize={fontSize}
              fontWeight={fontWeight}
              color={color}
            >
              {text}
            </FuzzyText>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-purple-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          Customize Fuzzy Text
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Text
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter text to display"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Base</span>
                  <span className="text-purple-300">{baseIntensity.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={baseIntensity}
                  onChange={(e) => setBaseIntensity(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Hover</span>
                  <span className="text-pink-300">{hoverIntensity.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={hoverIntensity}
                  onChange={(e) => setHoverIntensity(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Font Size
                </label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full text-sm px-2 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:ring-1 focus:ring-purple-500/50 focus:border-transparent"
                >
                  <option value="4rem">Small</option>
                  <option value="6rem">Medium</option>
                  <option value="8rem">Large</option>
                  <option value="10rem">X-Large</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Weight
                </label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="w-full text-sm px-2 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:ring-1 focus:ring-purple-500/50 focus:border-transparent"
                >
                  <option value="400">Normal</option>
                  <option value="700">Bold</option>
                  <option value="900">Black</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Text Color
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-10 w-16 cursor-pointer rounded border border-gray-600"
                />
                <span className="text-sm text-gray-400">{color}</span>
              </div>
            </div>

            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                id="enableHover"
                checked={enableHover}
                onChange={(e) => setEnableHover(e.target.checked)}
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
              />
              <label
                htmlFor="enableHover"
                className="ml-2 text-sm text-gray-300"
              >
                Enable Hover Effect
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}