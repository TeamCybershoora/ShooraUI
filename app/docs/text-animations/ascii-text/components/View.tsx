"use client";

import { useState } from "react";
import { ASCIIText } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Shoora UI");
  const [asciiFontSize, setAsciiFontSize] = useState(8);
  const [textFontSize, setTextFontSize] = useState(200);
  const [textColor, setTextColor] = useState("#fdf9f3");
  const [planeBaseHeight, setPlaneBaseHeight] = useState(8);
  const [enableWaves, setEnableWaves] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize ASCII effect"
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

        <div key={key} className="relative w-full h-full min-h-[18rem]">
          <ASCIIText
            text={text}
            asciiFontSize={asciiFontSize}
            textFontSize={textFontSize}
            textColor={textColor}
            planeBaseHeight={planeBaseHeight}
            enableWaves={enableWaves}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize ASCII Text
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Custom Text</label>
            <input
              type="text"
              value={text}
              onChange={event => setText(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Type your text here..."
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>ASCII Font Size</span>
              <span className="text-purple-300 font-medium">{asciiFontSize}px</span>
            </div>
            <input
              type="range"
              min="4"
              max="16"
              step="1"
              value={asciiFontSize}
              onChange={event => setAsciiFontSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Text Font Size</span>
              <span className="text-purple-300 font-medium">{textFontSize}px</span>
            </div>
            <input
              type="range"
              min="120"
              max="320"
              step="10"
              value={textFontSize}
              onChange={event => setTextFontSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Text Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={textColor}
                onChange={event => setTextColor(event.target.value)}
                className="h-10 w-10 rounded-md border border-gray-600 bg-gray-800 p-1"
              />
              <input
                type="text"
                value={textColor}
                onChange={event => setTextColor(event.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Plane Base Height</span>
              <span className="text-purple-300 font-medium">{planeBaseHeight.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="4"
              max="14"
              step="0.5"
              value={planeBaseHeight}
              onChange={event => setPlaneBaseHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <span className="block text-sm font-medium text-gray-300">Enable Waves</span>
            <label className="inline-flex items-center gap-2 text-sm text-gray-200">
              <input
                type="checkbox"
                checked={enableWaves}
                onChange={event => setEnableWaves(event.target.checked)}
                className="h-4 w-4 rounded border border-gray-600 bg-gray-800 accent-purple-500"
              />
              {enableWaves ? "Enabled" : "Disabled"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
