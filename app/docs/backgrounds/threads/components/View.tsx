"use client";

import { useState } from "react";
import { Threads } from "@cybershoora/shoora-ui"

export default function View() {
  const [amplitude, setAmplitude] = useState(1);
  const [distance, setDistance] = useState(0);
  const [enableMouseInteraction, setEnableMouseInteraction] = useState(true);
  const [color, setColor] = useState('#ffffff');

  const hexToRgb = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255
        ]
      : [1, 1, 1];
  };

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Threads
          amplitude={amplitude}
          distance={distance}
          enableMouseInteraction={enableMouseInteraction}
          color={hexToRgb(color)}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Threads
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Amplitude</span>
              <span className="text-purple-300 font-medium">{amplitude.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={amplitude}
              onChange={event => setAmplitude(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Distance</span>
              <span className="text-purple-300 font-medium">{distance.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={distance}
              onChange={event => setDistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableMouseInteraction}
                onChange={event => setEnableMouseInteraction(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Mouse Interaction</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Color</label>
            <input
              type="color"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-30 h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
