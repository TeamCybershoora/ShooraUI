"use client";

import { useState } from "react";
import { LiquidChrome } from "@cybershoora/shoora-ui"

export default function View() {
  const [colors, setColors] = useState(['#5227FF', '#FF9FFC', '#B19EEF']);
  const [speed, setSpeed] = useState(1);
  const [amplitude, setAmplitude] = useState(0.6);
  const [frequencyX, setFrequencyX] = useState(3);
  const [frequencyY, setFrequencyY] = useState(2);
  const [interactive, setInteractive] = useState(true);

  // Convert hex to RGB numbers
  const hexToRgb = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ] : [0.1, 0.1, 0.1];
  };

  const baseColor = hexToRgb(colors[0]);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <LiquidChrome
          baseColor={baseColor}
          speed={speed}
          amplitude={amplitude}
          frequencyX={frequencyX}
          frequencyY={frequencyY}
          interactive={interactive}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize LiquidChrome
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Colors</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="color"
                value={colors[0] || '#5227FF'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[0] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={colors[1] || '#FF9FFC'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[1] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={colors[2] || '#B19EEF'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[2] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
            </div>
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
            <div className="flex justify-between text-sm text-gray-300">
              <span>Amplitude</span>
              <span className="text-purple-300 font-medium">{amplitude.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={amplitude}
              onChange={event => setAmplitude(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Frequency X</span>
              <span className="text-purple-300 font-medium">{frequencyX.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={frequencyX}
              onChange={event => setFrequencyX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Frequency Y</span>
              <span className="text-purple-300 font-medium">{frequencyY.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={frequencyY}
              onChange={event => setFrequencyY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={interactive}
                onChange={event => setInteractive(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Interactive</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
