"use client";

import { useState } from "react";
import { Plasma } from "@cybershoora/shoora-ui"

export default function View() {
  const [color, setColor] = useState('#ff6b35');
  const [speed, setSpeed] = useState(0.6);
  const [direction, setDirection] = useState<'forward' | 'reverse' | 'pingpong'>('forward');
  const [scale, setScale] = useState(1.1);
  const [opacity, setOpacity] = useState(0.8);
  const [mouseInteractive, setMouseInteractive] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Plasma
          color={color}
          speed={speed}
          direction={direction}
          scale={scale}
          opacity={opacity}
          mouseInteractive={mouseInteractive}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Plasma
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Color</label>
            <input
              type="text"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#ff6b35"
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
              max="3"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Direction</label>
            <select
              value={direction}
              onChange={event => setDirection(event.target.value as 'forward' | 'reverse' | 'pingpong')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="forward">Forward</option>
              <option value="reverse">Reverse</option>
              <option value="pingpong">Ping Pong</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale</span>
              <span className="text-purple-300 font-medium">{scale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Opacity</span>
              <span className="text-purple-300 font-medium">{opacity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={opacity}
              onChange={event => setOpacity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={mouseInteractive}
                onChange={event => setMouseInteractive(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Mouse Interactive</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
