"use client";

import { useState } from "react";
import { GlassSurface } from "@cybershoora/shoora-ui";

export default function View() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [borderRadius, setBorderRadius] = useState(24);
  const [displace, setDisplace] = useState(15);
  const [distortionScale, setDistortionScale] = useState(-150);
  const [redOffset, setRedOffset] = useState(5);
  const [greenOffset, setGreenOffset] = useState(15);
  const [blueOffset, setBlueOffset] = useState(25);
  const [brightness, setBrightness] = useState(60);
  const [opacity, setOpacity] = useState(0.8);
  const [mixBlendMode, setMixBlendMode] = useState('screen');
  const [customClass, setCustomClass] = useState('my-custom-class');

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <GlassSurface 
          width={width} 
          height={height}
          borderRadius={borderRadius}
          displace={displace}
          distortionScale={distortionScale}
          redOffset={redOffset}
          greenOffset={greenOffset}
          blueOffset={blueOffset}
          brightness={brightness}
          opacity={opacity}
          mixBlendMode={mixBlendMode as any}
          className={customClass}
        >
          <div className="text-center p-4">
            <h2 className="text-xl font-bold text-white mb-2">Glass Surface Content</h2>
            <p className="text-gray-300">Advanced Glass Distortion Effect</p>
          </div>
        </GlassSurface>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Glass Surface
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Width</span>
              <span className="text-purple-300 font-medium">{width}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={width}
              onChange={event => setWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Height</span>
              <span className="text-purple-300 font-medium">{height}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="400"
              step="10"
              value={height}
              onChange={event => setHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Border Radius</span>
              <span className="text-purple-300 font-medium">{borderRadius}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="2"
              value={borderRadius}
              onChange={event => setBorderRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Displace</span>
              <span className="text-purple-300 font-medium">{displace}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={displace}
              onChange={event => setDisplace(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Distortion Scale</span>
              <span className="text-purple-300 font-medium">{distortionScale}</span>
            </div>
            <input
              type="range"
              min="-200"
              max="200"
              step="10"
              value={distortionScale}
              onChange={event => setDistortionScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Brightness</span>
              <span className="text-purple-300 font-medium">{brightness}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={brightness}
              onChange={event => setBrightness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Opacity</span>
              <span className="text-purple-300 font-medium">{opacity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity}
              onChange={event => setOpacity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
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
              <option value="hue">Hue</option>
              <option value="saturation">Saturation</option>
              <option value="color">Color</option>
              <option value="luminosity">Luminosity</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Custom Class</label>
            <input
              type="text"
              value={customClass}
              onChange={event => setCustomClass(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="my-custom-class"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Red Offset</span>
              <span className="text-purple-300 font-medium">{redOffset}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={redOffset}
              onChange={event => setRedOffset(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Green Offset</span>
              <span className="text-purple-300 font-medium">{greenOffset}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={greenOffset}
              onChange={event => setGreenOffset(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Blue Offset</span>
              <span className="text-purple-300 font-medium">{blueOffset}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={blueOffset}
              onChange={event => setBlueOffset(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
