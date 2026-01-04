"use client";

import { useState } from "react";
import { Aurora } from "@cybershoora/shoora-ui"

export default function View() {
  const [colorStops, setColorStops] = useState(["#3A29FF", "#FF94B4", "#FF3232"]);
  const [amplitude, setAmplitude] = useState(1.0);
  const [blend, setBlend] = useState(0.5);
  const [speed, setSpeed] = useState(0.5);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Aurora
          colorStops={colorStops}
          blend={blend}
          amplitude={amplitude}
          speed={speed}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Aurora
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Color Stops</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {colorStops.map((color, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={color}
                    onChange={event => {
                      const newColors = [...colorStops];
                      newColors[index] = event.target.value;
                      setColorStops(newColors);
                    }}
                    className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={event => {
                      const newColors = [...colorStops];
                      newColors[index] = event.target.value;
                      setColorStops(newColors);
                    }}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder={`Color ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Amplitude</span>
              <span className="text-purple-300 font-medium">{amplitude.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.1"
              value={amplitude}
              onChange={event => setAmplitude(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Blend</span>
              <span className="text-purple-300 font-medium">{blend.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.1"
              value={blend}
              onChange={event => setBlend(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2.0"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
