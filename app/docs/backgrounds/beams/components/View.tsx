"use client";

import { useState } from "react";
import { Beams } from "@cybershoora/shoora-ui"

export default function View() {
  const [beamWidth, setBeamWidth] = useState(2);
  const [beamHeight, setBeamHeight] = useState(15);
  const [beamNumber, setBeamNumber] = useState(12);
  const [lightColor, setLightColor] = useState('#ffffff');
  const [speed, setSpeed] = useState(2);
  const [noiseIntensity, setNoiseIntensity] = useState(1.75);
  const [scale, setScale] = useState(0.2);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="space-y-8 p-4">
      <div style={{  height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Beams
          beamWidth={beamWidth}
          beamHeight={beamHeight}
          beamNumber={beamNumber}
          lightColor={lightColor}
          speed={speed}
          noiseIntensity={noiseIntensity}
          scale={scale}
          rotation={rotation}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Beams
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Beam Width</span>
              <span className="text-purple-300 font-medium">{beamWidth}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={beamWidth}
              onChange={event => setBeamWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Beam Height</span>
              <span className="text-purple-300 font-medium">{beamHeight}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={beamHeight}
              onChange={event => setBeamHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Beam Number</span>
              <span className="text-purple-300 font-medium">{beamNumber}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={beamNumber}
              onChange={event => setBeamNumber(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Light Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={lightColor}
                onChange={event => setLightColor(event.target.value)}
                className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
              />
              <input
                type="text"
                value={lightColor}
                onChange={event => setLightColor(event.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="#ffffff"
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
              max="10"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise Intensity</span>
              <span className="text-purple-300 font-medium">{noiseIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.05"
              value={noiseIntensity}
              onChange={event => setNoiseIntensity(Number(event.target.value))}
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
              min="0.01"
              max="2"
              step="0.01"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
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
        </div>
      </div>
    </div>
  );
}
