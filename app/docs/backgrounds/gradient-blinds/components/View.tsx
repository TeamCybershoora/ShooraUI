"use client";

import { useState } from "react";
import { GradientBlinds } from "@cybershoora/shoora-ui"

export default function View() {
  const [gradientColors, setGradientColors] = useState(['#FF9FFC', '#5227FF']);
  const [angle, setAngle] = useState(0);
  const [noise, setNoise] = useState(0.3);
  const [blindCount, setBlindCount] = useState(12);
  const [blindMinWidth, setBlindMinWidth] = useState(50);
  const [spotlightRadius, setSpotlightRadius] = useState(0.5);
  const [spotlightSoftness, setSpotlightSoftness] = useState(1);
  const [spotlightOpacity, setSpotlightOpacity] = useState(1);
  const [mouseDampening, setMouseDampening] = useState(0.15);
  const [distortAmount, setDistortAmount] = useState(0);
  const [shineDirection, setShineDirection] = useState<'left' | 'right'>('left');
  const [mixBlendMode, setMixBlendMode] = useState('lighten');
  const [mirrorGradient, setMirrorGradient] = useState(false);
  const [paused, setPaused] = useState(false);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <GradientBlinds
          gradientColors={gradientColors}
          angle={angle}
          noise={noise}
          blindCount={blindCount}
          blindMinWidth={blindMinWidth}
          spotlightRadius={spotlightRadius}
          spotlightSoftness={spotlightSoftness}
          spotlightOpacity={spotlightOpacity}
          mouseDampening={mouseDampening}
          distortAmount={distortAmount}
          shineDirection={shineDirection}
          mixBlendMode={mixBlendMode}
          mirrorGradient={mirrorGradient}
          paused={paused}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Gradient Blinds
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Color 1</label>
            <input
              type="color"
              value={gradientColors[0] || '#FF9FFC'}
              onChange={event => {
                const newColors = [...gradientColors];
                newColors[0] = event.target.value;
                setGradientColors(newColors);
              }}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Color 2</label>
            <input
              type="color"
              value={gradientColors[1] || '#5227FF'}
              onChange={event => {
                const newColors = [...gradientColors];
                newColors[1] = event.target.value;
                setGradientColors(newColors);
              }}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Angle</span>
              <span className="text-purple-300 font-medium">{angle}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={angle}
              onChange={event => setAngle(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise</span>
              <span className="text-purple-300 font-medium">{noise.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={noise}
              onChange={event => setNoise(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Blind Count</span>
              <span className="text-purple-300 font-medium">{blindCount}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={blindCount}
              onChange={event => setBlindCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Blind Min Width</span>
              <span className="text-purple-300 font-medium">{blindMinWidth}px</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={blindMinWidth}
              onChange={event => setBlindMinWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spotlight Radius</span>
              <span className="text-purple-300 font-medium">{spotlightRadius.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={spotlightRadius}
              onChange={event => setSpotlightRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spotlight Softness</span>
              <span className="text-purple-300 font-medium">{spotlightSoftness.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={spotlightSoftness}
              onChange={event => setSpotlightSoftness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spotlight Opacity</span>
              <span className="text-purple-300 font-medium">{spotlightOpacity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={spotlightOpacity}
              onChange={event => setSpotlightOpacity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Dampening</span>
              <span className="text-purple-300 font-medium">{mouseDampening.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={mouseDampening}
              onChange={event => setMouseDampening(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Distort Amount</span>
              <span className="text-purple-300 font-medium">{distortAmount.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={distortAmount}
              onChange={event => setDistortAmount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Shine Direction</label>
            <select
              value={shineDirection}
              onChange={event => setShineDirection(event.target.value as 'left' | 'right')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Mix Blend Mode</label>
            <select
              value={mixBlendMode}
              onChange={event => setMixBlendMode(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="normal">Normal</option>
              <option value="multiply">Multiply</option>
              <option value="screen">Screen</option>
              <option value="overlay">Overlay</option>
              <option value="darken">Darken</option>
              <option value="lighten">Lighten</option>
              <option value="color-dodge">Color Dodge</option>
              <option value="color-burn">Color Burn</option>
              <option value="hard-light">Hard Light</option>
              <option value="soft-light">Soft Light</option>
              <option value="difference">Difference</option>
              <option value="exclusion">Exclusion</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={mirrorGradient}
                onChange={event => setMirrorGradient(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Mirror Gradient</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={paused}
                onChange={event => setPaused(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Paused</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
