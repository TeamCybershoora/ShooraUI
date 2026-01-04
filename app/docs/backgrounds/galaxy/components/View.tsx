"use client";

import { useState } from "react";
import { Galaxy } from "@cybershoora/shoora-ui"

export default function View() {
  const [mouseRepulsion, setMouseRepulsion] = useState(true);
  const [mouseInteraction, setMouseInteraction] = useState(true);
  const [density, setDensity] = useState(1.5);
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [saturation, setSaturation] = useState(0.8);
  const [hueShift, setHueShift] = useState(240);
  const [starSpeed, setStarSpeed] = useState(0.5);
  const [speed, setSpeed] = useState(1.0);
  const [twinkleIntensity, setTwinkleIntensity] = useState(0.3);
  const [rotationSpeed, setRotationSpeed] = useState(0.1);
  const [repulsionStrength, setRepulsionStrength] = useState(2);
  const [autoCenterRepulsion, setAutoCenterRepulsion] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [focalX, setFocalX] = useState(0.5);
  const [focalY, setFocalY] = useState(0.5);
  const [rotationX, setRotationX] = useState(1.0);
  const [rotationY, setRotationY] = useState(0.0);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Galaxy 
          mouseRepulsion={mouseRepulsion}
          mouseInteraction={mouseInteraction}
          density={density}
          glowIntensity={glowIntensity}
          saturation={saturation}
          hueShift={hueShift}
          starSpeed={starSpeed}
          speed={speed}
          twinkleIntensity={twinkleIntensity}
          rotationSpeed={rotationSpeed}
          repulsionStrength={repulsionStrength}
          autoCenterRepulsion={autoCenterRepulsion}
          transparent={transparent}
          disableAnimation={disableAnimation}
          focal={[focalX, focalY]}
          rotation={[rotationX, rotationY]}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Galaxy
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Density</span>
              <span className="text-purple-300 font-medium">{density.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={density}
              onChange={event => setDensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Glow Intensity</span>
              <span className="text-purple-300 font-medium">{glowIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={glowIntensity}
              onChange={event => setGlowIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Saturation</span>
              <span className="text-purple-300 font-medium">{saturation.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={saturation}
              onChange={event => setSaturation(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

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
              <span>Star Speed</span>
              <span className="text-purple-300 font-medium">{starSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={starSpeed}
              onChange={event => setStarSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Twinkle Intensity</span>
              <span className="text-purple-300 font-medium">{twinkleIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={twinkleIntensity}
              onChange={event => setTwinkleIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotation Speed</span>
              <span className="text-purple-300 font-medium">{rotationSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.01"
              value={rotationSpeed}
              onChange={event => setRotationSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Repulsion Strength</span>
              <span className="text-purple-300 font-medium">{repulsionStrength.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={repulsionStrength}
              onChange={event => setRepulsionStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Auto Center Repulsion</span>
              <span className="text-purple-300 font-medium">{autoCenterRepulsion.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={autoCenterRepulsion}
              onChange={event => setAutoCenterRepulsion(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Focal X</span>
              <span className="text-purple-300 font-medium">{focalX.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={focalX}
              onChange={event => setFocalX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Focal Y</span>
              <span className="text-purple-300 font-medium">{focalY.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={focalY}
              onChange={event => setFocalY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotation X</span>
              <span className="text-purple-300 font-medium">{rotationX.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={rotationX}
              onChange={event => setRotationX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotation Y</span>
              <span className="text-purple-300 font-medium">{rotationY.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={rotationY}
              onChange={event => setRotationY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={mouseRepulsion}
                onChange={event => setMouseRepulsion(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Mouse Repulsion</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={mouseInteraction}
                onChange={event => setMouseInteraction(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Mouse Interaction</span>
            </label>
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
        </div>
      </div>
    </div>
  );
}
