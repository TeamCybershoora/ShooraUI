"use client";

import { useState } from "react";
import { ColorBends } from "@cybershoora/shoora-ui"

export default function View() {
  const [colors, setColors] = useState(["#ff5c7a", "#8a5cff", "#00ffd1"]);
  const [rotation, setRotation] = useState(30);
  const [speed, setSpeed] = useState(0.3);
  const [scale, setScale] = useState(1.2);
  const [frequency, setFrequency] = useState(2.8);
  const [warpStrength, setWarpStrength] = useState(1.2);
  const [mouseInfluence, setMouseInfluence] = useState(0.8);
  const [parallax, setParallax] = useState(0.6);
  const [noise, setNoise] = useState(0.08);
  const [transparent, setTransparent] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <ColorBends
          colors={colors}
          rotation={rotation}
          speed={speed}
          scale={scale}
          frequency={frequency}
          warpStrength={warpStrength}
          mouseInfluence={mouseInfluence}
          parallax={parallax}
          noise={noise}
          transparent={transparent}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Color Bends
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-3">
            <label className="block text-sm font-medium text-gray-300">Colors</label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={color}
                    onChange={event => {
                      const newColors = [...colors];
                      newColors[index] = event.target.value;
                      setColors(newColors);
                    }}
                    className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={event => {
                      const newColors = [...colors];
                      newColors[index] = event.target.value;
                      setColors(newColors);
                    }}
                    className="w-20 px-2 py-1 bg-gray-800 border border-gray-600 rounded-md text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="#000000"
                  />
                  {colors.length > 1 && (
                    <button
                      onClick={() => {
                        const newColors = colors.filter((_, i) => i !== index);
                        setColors(newColors);
                      }}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      title="Remove color"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
              {colors.length < 8 && (
                <button
                  onClick={() => {
                    setColors([...colors, '#ffffff']);
                  }}
                  className="p-2 text-green-400 hover:text-green-300 transition-colors border border-green-600 rounded hover:bg-green-900/20"
                  title="Add color"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
            <p className="text-xs text-gray-400">Add up to 8 colors for the gradient effect</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotation</span>
              <span className="text-purple-300 font-medium">{rotation}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={rotation}
              onChange={event => setRotation(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.01"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale</span>
              <span className="text-purple-300 font-medium">{scale.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Frequency</span>
              <span className="text-purple-300 font-medium">{frequency.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={frequency}
              onChange={event => setFrequency(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Warp Strength</span>
              <span className="text-purple-300 font-medium">{warpStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={warpStrength}
              onChange={event => setWarpStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Influence</span>
              <span className="text-purple-300 font-medium">{mouseInfluence.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={mouseInfluence}
              onChange={event => setMouseInfluence(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Parallax</span>
              <span className="text-purple-300 font-medium">{parallax.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={parallax}
              onChange={event => setParallax(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise</span>
              <span className="text-purple-300 font-medium">{noise.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.01"
              value={noise}
              onChange={event => setNoise(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={transparent}
                onChange={event => setTransparent(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Transparent</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
