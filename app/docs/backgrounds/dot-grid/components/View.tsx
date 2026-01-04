"use client";

import { useState } from "react";
import { DotGrid } from "@cybershoora/shoora-ui"

export default function View() {
  const [dotSize, setDotSize] = useState(10);
  const [gap, setGap] = useState(15);
  const [baseColor, setBaseColor] = useState("#3ea2b6");
  const [activeColor, setActiveColor] = useState("#5227FF");
  const [proximity, setProximity] = useState(120);
  const [shockRadius, setShockRadius] = useState(250);
  const [shockStrength, setShockStrength] = useState(5);
  const [resistance, setResistance] = useState(750);
  const [returnDuration, setReturnDuration] = useState(1.5);
  const [speedTrigger, setSpeedTrigger] = useState(100);
  const [maxSpeed, setMaxSpeed] = useState(5000);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <DotGrid
          dotSize={dotSize}
          gap={gap}
          baseColor={baseColor}
          activeColor={activeColor}
          proximity={proximity}
          shockRadius={shockRadius}
          shockStrength={shockStrength}
          resistance={resistance}
          returnDuration={returnDuration}
          speedTrigger={speedTrigger}
          maxSpeed={maxSpeed}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Dot Grid
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Base Color</label>
            <input
              type="color"
              value={baseColor}
              onChange={event => setBaseColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Active Color</label>
            <input
              type="color"
              value={activeColor}
              onChange={event => setActiveColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Dot Size</span>
              <span className="text-purple-300 font-medium">{dotSize}px</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={dotSize}
              onChange={event => setDotSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Gap</span>
              <span className="text-purple-300 font-medium">{gap}px</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              value={gap}
              onChange={event => setGap(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Proximity</span>
              <span className="text-purple-300 font-medium">{proximity}px</span>
            </div>
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={proximity}
              onChange={event => setProximity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed Trigger</span>
              <span className="text-purple-300 font-medium">{speedTrigger}</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={speedTrigger}
              onChange={event => setSpeedTrigger(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shock Radius</span>
              <span className="text-purple-300 font-medium">{shockRadius}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={shockRadius}
              onChange={event => setShockRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shock Strength</span>
              <span className="text-purple-300 font-medium">{shockStrength}</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={shockStrength}
              onChange={event => setShockStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Max Speed</span>
              <span className="text-purple-300 font-medium">{maxSpeed}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="100"
              value={maxSpeed}
              onChange={event => setMaxSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Resistance</span>
              <span className="text-purple-300 font-medium">{resistance}</span>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={resistance}
              onChange={event => setResistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Return Duration</span>
              <span className="text-purple-300 font-medium">{returnDuration.toFixed(1)}s</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={returnDuration}
              onChange={event => setReturnDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
