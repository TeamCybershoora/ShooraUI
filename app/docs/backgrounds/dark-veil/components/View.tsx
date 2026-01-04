"use client";

import { useState } from "react";
import { DarkVeil } from "@cybershoora/shoora-ui"

export default function View() {
  const [hueShift, setHueShift] = useState(0);
  const [noiseIntensity, setNoiseIntensity] = useState(0);
  const [scanlineIntensity, setScanlineIntensity] = useState(0);
  const [speed, setSpeed] = useState(0.5);
  const [scanlineFrequency, setScanlineFrequency] = useState(0);
  const [warpAmount, setWarpAmount] = useState(0);
  const [resolutionScale, setResolutionScale] = useState(1);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <DarkVeil
          hueShift={hueShift}
          noiseIntensity={noiseIntensity}
          scanlineIntensity={scanlineIntensity}
          speed={speed}
          scanlineFrequency={scanlineFrequency}
          warpAmount={warpAmount}
          resolutionScale={resolutionScale}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Dark Veil
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hue Shift</span>
              <span className="text-purple-300 font-medium">{hueShift}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={hueShift}
              onChange={event => setHueShift(Number(event.target.value))}
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
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise Intensity</span>
              <span className="text-purple-300 font-medium">{noiseIntensity.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.001"
              value={noiseIntensity}
              onChange={event => setNoiseIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scanline Intensity</span>
              <span className="text-purple-300 font-medium">{scanlineIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={scanlineIntensity}
              onChange={event => setScanlineIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scanline Frequency</span>
              <span className="text-purple-300 font-medium">{scanlineFrequency.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={scanlineFrequency}
              onChange={event => setScanlineFrequency(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Warp Amount</span>
              <span className="text-purple-300 font-medium">{warpAmount.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={warpAmount}
              onChange={event => setWarpAmount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Resolution Scale</span>
              <span className="text-purple-300 font-medium">{resolutionScale.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={resolutionScale}
              onChange={event => setResolutionScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
