"use client";

import { useState } from "react";
import { PixelBlast } from "@cybershoora/shoora-ui"

export default function View() {
  const [variant, setVariant] = useState<'square' | 'circle' | 'triangle' | 'diamond'>('circle');
  const [pixelSize, setPixelSize] = useState(6);
  const [color, setColor] = useState('#B19EEF');
  const [patternScale, setPatternScale] = useState(3);
  const [patternDensity, setPatternDensity] = useState(1.2);
  const [pixelSizeJitter, setPixelSizeJitter] = useState(0.5);
  const [enableRipples, setEnableRipples] = useState(true);
  const [rippleSpeed, setRippleSpeed] = useState(0.4);
  const [rippleThickness, setRippleThickness] = useState(0.12);
  const [rippleIntensityScale, setRippleIntensityScale] = useState(1.5);
  const [liquid, setLiquid] = useState(true);
  const [liquidStrength, setLiquidStrength] = useState(0.12);
  const [liquidRadius, setLiquidRadius] = useState(1.2);
  const [liquidWobbleSpeed, setLiquidWobbleSpeed] = useState(5);
  const [speed, setSpeed] = useState(0.6);
  const [edgeFade, setEdgeFade] = useState(0.25);
  const [transparent, setTransparent] = useState(true);
  const [antialias, setAntialias] = useState(true);
  const [noiseAmount, setNoiseAmount] = useState(0);

  return (
    <div className="p-0">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300">
        <PixelBlast
          variant={variant}
          pixelSize={pixelSize}
          color={color}
          patternScale={patternScale}
          patternDensity={patternDensity}
          pixelSizeJitter={pixelSizeJitter}
          enableRipples={enableRipples}
          rippleSpeed={rippleSpeed}
          rippleThickness={rippleThickness}
          rippleIntensityScale={rippleIntensityScale}
          liquid={liquid}
          liquidStrength={liquidStrength}
          liquidRadius={liquidRadius}
          liquidWobbleSpeed={liquidWobbleSpeed}
          speed={speed}
          edgeFade={edgeFade}
          transparent={transparent}
          antialias={antialias}
          noiseAmount={noiseAmount}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize PixelBlast
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Variant</label>
            <select
              value={variant}
              onChange={event => setVariant(event.target.value as 'square' | 'circle' | 'triangle' | 'diamond')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="square">Square</option>
              <option value="circle">Circle</option>
              <option value="triangle">Triangle</option>
              <option value="diamond">Diamond</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Color</label>
            <input
              type="color"
              value={color}
              onChange={event => setColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Pixel Size</span>
              <span className="text-purple-300 font-medium">{pixelSize}px</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={pixelSize}
              onChange={event => setPixelSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Pattern Scale</span>
              <span className="text-purple-300 font-medium">{patternScale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={patternScale}
              onChange={event => setPatternScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Pattern Density</span>
              <span className="text-purple-300 font-medium">{patternDensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={patternDensity}
              onChange={event => setPatternDensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Pixel Size Jitter</span>
              <span className="text-purple-300 font-medium">{pixelSizeJitter.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pixelSizeJitter}
              onChange={event => setPixelSizeJitter(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableRipples}
                onChange={event => setEnableRipples(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Ripples</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ripple Speed</span>
              <span className="text-purple-300 font-medium">{rippleSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.05"
              value={rippleSpeed}
              onChange={event => setRippleSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ripple Thickness</span>
              <span className="text-purple-300 font-medium">{rippleThickness.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.5"
              step="0.01"
              value={rippleThickness}
              onChange={event => setRippleThickness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ripple Intensity Scale</span>
              <span className="text-purple-300 font-medium">{rippleIntensityScale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={rippleIntensityScale}
              onChange={event => setRippleIntensityScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={liquid}
                onChange={event => setLiquid(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Liquid</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Liquid Strength</span>
              <span className="text-purple-300 font-medium">{liquidStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.5"
              step="0.01"
              value={liquidStrength}
              onChange={event => setLiquidStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Liquid Radius</span>
              <span className="text-purple-300 font-medium">{liquidRadius.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={liquidRadius}
              onChange={event => setLiquidRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Liquid Wobble Speed</span>
              <span className="text-purple-300 font-medium">{liquidWobbleSpeed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={liquidWobbleSpeed}
              onChange={event => setLiquidWobbleSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
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
            <div className="flex justify-between text-sm text-gray-300">
              <span>Edge Fade</span>
              <span className="text-purple-300 font-medium">{edgeFade.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={edgeFade}
              onChange={event => setEdgeFade(Number(event.target.value))}
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

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={antialias}
                onChange={event => setAntialias(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Antialias</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise Amount</span>
              <span className="text-purple-300 font-medium">{noiseAmount.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.01"
              value={noiseAmount}
              onChange={event => setNoiseAmount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
