"use client";

import { useState } from "react";
import { SpotlightCard } from "@cybershoora/shoora-ui";

export default function View() {
  const [className, setClassName] = useState("custom-spotlight-card");
  const [spotlightColor, setSpotlightColor] = useState<`rgba(${number}, ${number}, ${number}, ${number})`>("rgba(0, 229, 255, 0.2)");
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(229);
  const [blueValue, setBlueValue] = useState(255);
  const [alphaValue, setAlphaValue] = useState(0.2);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <SpotlightCard className={className} spotlightColor={spotlightColor}>
          <div style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Spotlight Card</h3>
            <p style={{ fontSize: '16px', margin: '0 0 24px 0', opacity: 0.8 }}>Hover over this card to see the spotlight effect follow your cursor</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ padding: '12px 20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>Feature</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Interactive</div>
              </div>
              <div style={{ padding: '12px 20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>Effect</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Spotlight</div>
              </div>
              <div style={{ padding: '12px 20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>Style</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Modern</div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Spotlight Card
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">CSS Class</label>
            <input
              type="text"
              value={className}
              onChange={event => setClassName(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="custom-spotlight-card"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Spotlight Color</label>
            <div className="flex space-x-2">
              <input
                type="color"
                value={`rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`}
                onChange={event => {
                  const hex = event.target.value;
                  const r = parseInt(hex.slice(1, 3), 16);
                  const g = parseInt(hex.slice(3, 5), 16);
                  const b = parseInt(hex.slice(5, 7), 16);
                  setRedValue(r);
                  setGreenValue(g);
                  setBlueValue(b);
                }}
                className="h-10 w-20 bg-gray-800 border border-gray-600 rounded cursor-pointer"
              />
              <input
                type="text"
                value={spotlightColor}
                onChange={event => {
                  const value = event.target.value;
                  // Validate RGBA format before setting state
                  const rgbaRegex = /^rgba\(\d+, \d+, \d+, [\d.]+\)$/;
                  if (rgbaRegex.test(value)) {
                    setSpotlightColor(value as `rgba(${number}, ${number}, ${number}, ${number})`);
                  }
                }}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="rgba(0, 229, 255, 0.2)"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Red</span>
              <span className="text-purple-300 font-medium">{redValue}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              step="1"
              value={redValue}
              onChange={event => {
                const value = Number(event.target.value);
                setRedValue(value);
                setSpotlightColor(`rgba(${value}, ${greenValue}, ${blueValue}, ${alphaValue})`);
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Green</span>
              <span className="text-purple-300 font-medium">{greenValue}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              step="1"
              value={greenValue}
              onChange={event => {
                const value = Number(event.target.value);
                setGreenValue(value);
                setSpotlightColor(`rgba(${redValue}, ${value}, ${blueValue}, ${alphaValue})`);
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Blue</span>
              <span className="text-purple-300 font-medium">{blueValue}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              step="1"
              value={blueValue}
              onChange={event => {
                const value = Number(event.target.value);
                setBlueValue(value);
                setSpotlightColor(`rgba(${redValue}, ${greenValue}, ${value}, ${alphaValue})`);
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Alpha (Opacity)</span>
              <span className="text-purple-300 font-medium">{alphaValue}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={alphaValue}
              onChange={event => {
                const value = Number(event.target.value);
                setAlphaValue(value);
                setSpotlightColor(`rgba(${redValue}, ${greenValue}, ${blueValue}, ${value})`);
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Preview Color</span>
                <span className="text-xs text-purple-300 font-mono">{spotlightColor}</span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  height: '60px', 
                  borderRadius: '8px', 
                  background: spotlightColor,
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
