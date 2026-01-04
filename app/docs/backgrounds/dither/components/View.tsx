"use client";

import { useState } from "react";
import { Dither } from "@cybershoora/shoora-ui"

export default function View() {
  const [waveColor, setWaveColor] = useState<[number, number, number]>([0.5, 0.5, 0.5]);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [enableMouseInteraction, setEnableMouseInteraction] = useState(true);
  const [mouseRadius, setMouseRadius] = useState(0.3);
  const [colorNum, setColorNum] = useState(4);
  const [waveAmplitude, setWaveAmplitude] = useState(0.3);
  const [waveFrequency, setWaveFrequency] = useState(3);
  const [waveSpeed, setWaveSpeed] = useState(0.05);
  const [pixelSize, setPixelSize] = useState(2);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Dither
          waveColor={waveColor}
          disableAnimation={disableAnimation}
          enableMouseInteraction={enableMouseInteraction}
          mouseRadius={mouseRadius}
          colorNum={colorNum}
          waveAmplitude={waveAmplitude}
          waveFrequency={waveFrequency}
          waveSpeed={waveSpeed}
          pixelSize={pixelSize}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Dither
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-3">
            <label className="block text-sm font-medium text-gray-300">Wave Color</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={`#${Math.round(waveColor[0] * 255).toString(16).padStart(2, '0')}${Math.round(waveColor[1] * 255).toString(16).padStart(2, '0')}${Math.round(waveColor[2] * 255).toString(16).padStart(2, '0')}`}
                onChange={event => {
                  const hex = event.target.value;
                  const r = parseInt(hex.slice(1, 3), 16) / 255;
                  const g = parseInt(hex.slice(3, 5), 16) / 255;
                  const b = parseInt(hex.slice(5, 7), 16) / 255;
                  setWaveColor([r, g, b]);
                }}
                className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
              />
              <input
                type="text"
                value={`#${Math.round(waveColor[0] * 255).toString(16).padStart(2, '0')}${Math.round(waveColor[1] * 255).toString(16).padStart(2, '0')}${Math.round(waveColor[2] * 255).toString(16).padStart(2, '0')}`}
                onChange={event => {
                  const hex = event.target.value;
                  if (hex.match(/^#[0-9A-Fa-f]{6}$/)) {
                    const r = parseInt(hex.slice(1, 3), 16) / 255;
                    const g = parseInt(hex.slice(3, 5), 16) / 255;
                    const b = parseInt(hex.slice(5, 7), 16) / 255;
                    setWaveColor([r, g, b]);
                  }
                }}
                className="w-24 px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="#808080"
              />
              <span className="text-xs text-gray-400">
                RGB: ({waveColor[0].toFixed(2)}, {waveColor[1].toFixed(2)}, {waveColor[2].toFixed(2)})
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Amplitude</span>
              <span className="text-purple-300 font-medium">{waveAmplitude.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={waveAmplitude}
              onChange={event => setWaveAmplitude(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Frequency</span>
              <span className="text-purple-300 font-medium">{waveFrequency.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={waveFrequency}
              onChange={event => setWaveFrequency(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Speed</span>
              <span className="text-purple-300 font-medium">{waveSpeed.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.001"
              value={waveSpeed}
              onChange={event => setWaveSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Color Num</span>
              <span className="text-purple-300 font-medium">{colorNum}</span>
            </div>
            <input
              type="range"
              min="2"
              max="16"
              step="1"
              value={colorNum}
              onChange={event => setColorNum(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Pixel Size</span>
              <span className="text-purple-300 font-medium">{pixelSize}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={pixelSize}
              onChange={event => setPixelSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Radius</span>
              <span className="text-purple-300 font-medium">{mouseRadius.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={mouseRadius}
              onChange={event => setMouseRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={disableAnimation}
                onChange={event => setDisableAnimation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Disable Animation</span>
            </label>
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
        </div>
      </div>
    </div>
  );
}
