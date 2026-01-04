"use client";

import { useState } from "react";
import { TextPressure } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Hello!");
  const [flex, setFlex] = useState(true);
  const [alpha, setAlpha] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [width, setWidth] = useState(true);
  const [weight, setWeight] = useState(true);
  const [italic, setItalic] = useState(true);
  const [textColor, setTextColor] = useState("#ffffff");
  const [strokeColor, setStrokeColor] = useState("#ff0000");
  const [minFontSize, setMinFontSize] = useState(36);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8">
          {/* Preview Section */}
            <button
              onClick={() => setKey(prev => prev + 1)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
              aria-label="Re-initialize Text Pressure"
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
            
            <div className="w-full h-full flex items-center justify-center p-8">
              <TextPressure
                text={text}
                flex={flex}
                alpha={alpha}
                stroke={stroke}
                width={width}
                weight={weight}
                italic={italic}
                textColor={textColor}
                strokeColor={strokeColor}
                minFontSize={minFontSize}
              />
            </div>
          
          
        </div>
         {/* Controls Section */}
          <div className="w-full lg:w-80 space-y-6 p-4 bg-gray-800/30 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          Customize Text Pressure
        </h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Text</label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Min Font Size: {minFontSize}px</label>
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={minFontSize}
                  onChange={(e) => setMinFontSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Text Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-10 h-10 rounded border border-gray-600 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300">{textColor}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Stroke Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className="w-10 h-10 rounded border border-gray-600 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300">{strokeColor}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Flex</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={flex}
                    onChange={() => setFlex(!flex)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Alpha</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={alpha}
                    onChange={() => setAlpha(!alpha)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Stroke</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={stroke}
                    onChange={() => setStroke(!stroke)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Width</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={width}
                    onChange={() => setWidth(!width)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Weight</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={weight}
                    onChange={() => setWeight(!weight)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Italic</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={italic}
                    onChange={() => setItalic(!italic)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>
      </div>
  );
}
