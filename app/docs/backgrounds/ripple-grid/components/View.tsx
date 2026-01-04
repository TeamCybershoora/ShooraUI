"use client";

import { useState } from "react";
import { RippleGrid } from "@cybershoora/shoora-ui"

export default function View() {
  const [enableRainbow, setEnableRainbow] = useState(false);
  const [gridColor, setGridColor] = useState('#ffffff');
  const [rippleIntensity, setRippleIntensity] = useState(0.05);
  const [gridSize, setGridSize] = useState(10);
  const [gridThickness, setGridThickness] = useState(15);
  const [fadeDistance, setFadeDistance] = useState(1.5);
  const [vignetteStrength, setVignetteStrength] = useState(2.0);
  const [glowIntensity, setGlowIntensity] = useState(0.1);
  const [opacity, setOpacity] = useState(0.8);
  const [gridRotation, setGridRotation] = useState(0);
  const [mouseInteraction, setMouseInteraction] = useState(true);
  const [mouseInteractionRadius, setMouseInteractionRadius] = useState(1.2);

  return (
    <div className="space-y-8 p-4">
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <RippleGrid
          enableRainbow={enableRainbow}
          gridColor={gridColor}
          rippleIntensity={rippleIntensity}
          gridSize={gridSize}
          gridThickness={gridThickness}
          fadeDistance={fadeDistance}
          vignetteStrength={vignetteStrength}
          glowIntensity={glowIntensity}
          opacity={opacity}
          gridRotation={gridRotation}
          mouseInteraction={mouseInteraction}
          mouseInteractionRadius={mouseInteractionRadius}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize RippleGrid
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableRainbow}
                onChange={event => setEnableRainbow(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Rainbow</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Grid Color</label>
            <input
              type="text"
              value={gridColor}
              onChange={event => setGridColor(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#ffffff"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ripple Intensity</span>
              <span className="text-purple-300 font-medium">{rippleIntensity.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.005"
              value={rippleIntensity}
              onChange={event => setRippleIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Size</span>
              <span className="text-purple-300 font-medium">{gridSize}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={gridSize}
              onChange={event => setGridSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Thickness</span>
              <span className="text-purple-300 font-medium">{gridThickness}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={gridThickness}
              onChange={event => setGridThickness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fade Distance</span>
              <span className="text-purple-300 font-medium">{fadeDistance.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={fadeDistance}
              onChange={event => setFadeDistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Vignette Strength</span>
              <span className="text-purple-300 font-medium">{vignetteStrength.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={vignetteStrength}
              onChange={event => setVignetteStrength(Number(event.target.value))}
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
              max="1"
              step="0.01"
              value={glowIntensity}
              onChange={event => setGlowIntensity(Number(event.target.value))}
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
              step="0.05"
              value={opacity}
              onChange={event => setOpacity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Rotation</span>
              <span className="text-purple-300 font-medium">{gridRotation}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={gridRotation}
              onChange={event => setGridRotation(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
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
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Interaction Radius</span>
              <span className="text-purple-300 font-medium">{mouseInteractionRadius.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={mouseInteractionRadius}
              onChange={event => setMouseInteractionRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
