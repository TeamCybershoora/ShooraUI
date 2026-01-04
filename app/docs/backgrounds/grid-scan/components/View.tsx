"use client";

import { useState } from "react";
import { GridScan } from "@cybershoora/shoora-ui"

export default function View() {
  const [sensitivity, setSensitivity] = useState(0.55);
  const [lineThickness, setLineThickness] = useState(1);
  const [linesColor, setLinesColor] = useState('#392e4e');
  const [gridScale, setGridScale] = useState(0.1);
  const [scanColor, setScanColor] = useState('#FF9FFC');
  const [scanOpacity, setScanOpacity] = useState(0.4);
  const [enablePost, setEnablePost] = useState(true);
  const [bloomIntensity, setBloomIntensity] = useState(0.6);
  const [chromaticAberration, setChromaticAberration] = useState(0.002);
  const [noiseIntensity, setNoiseIntensity] = useState(0.01);
  const [lineStyle, setLineStyle] = useState<'solid' | 'dashed' | 'dotted'>('solid');
  const [lineJitter, setLineJitter] = useState(0.1);
  const [scanDirection, setScanDirection] = useState<'forward' | 'backward' | 'pingpong'>('pingpong');
  const [scanGlow, setScanGlow] = useState(0.5);
  const [scanSoftness, setScanSoftness] = useState(2);
  const [scanPhaseTaper, setScanPhaseTaper] = useState(0.9);
  const [scanDuration, setScanDuration] = useState(2.0);
  const [scanDelay, setScanDelay] = useState(2.0);
  const [bloomThreshold, setBloomThreshold] = useState(0);
  const [bloomSmoothing, setBloomSmoothing] = useState(0);
  const [enableWebcam, setEnableWebcam] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [enableGyro, setEnableGyro] = useState(false);
  const [scanOnClick, setScanOnClick] = useState(false);
  const [snapBackDelay, setSnapBackDelay] = useState(250);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <GridScan
          sensitivity={sensitivity}
          lineThickness={lineThickness}
          linesColor={linesColor}
          gridScale={gridScale}
          scanColor={scanColor}
          scanOpacity={scanOpacity}
          enablePost={enablePost}
          bloomIntensity={bloomIntensity}
          chromaticAberration={chromaticAberration}
          noiseIntensity={noiseIntensity}
          lineStyle={lineStyle}
          lineJitter={lineJitter}
          scanDirection={scanDirection}
          scanGlow={scanGlow}
          scanSoftness={scanSoftness}
          scanPhaseTaper={scanPhaseTaper}
          scanDuration={scanDuration}
          scanDelay={scanDelay}
          bloomThreshold={bloomThreshold}
          bloomSmoothing={bloomSmoothing}
          enableWebcam={enableWebcam}
          showPreview={showPreview}
          enableGyro={enableGyro}
          scanOnClick={scanOnClick}
          snapBackDelay={snapBackDelay}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Grid Scan
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Sensitivity</span>
              <span className="text-purple-300 font-medium">{sensitivity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={sensitivity}
              onChange={event => setSensitivity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Line Thickness</span>
              <span className="text-purple-300 font-medium">{lineThickness}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={lineThickness}
              onChange={event => setLineThickness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Lines Color</label>
            <input
              type="color"
              value={linesColor}
              onChange={event => setLinesColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Scale</span>
              <span className="text-purple-300 font-medium">{gridScale.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="1"
              step="0.01"
              value={gridScale}
              onChange={event => setGridScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Scan Color</label>
            <input
              type="color"
              value={scanColor}
              onChange={event => setScanColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scan Opacity</span>
              <span className="text-purple-300 font-medium">{scanOpacity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={scanOpacity}
              onChange={event => setScanOpacity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enablePost}
                onChange={event => setEnablePost(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Post Processing</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom Intensity</span>
              <span className="text-purple-300 font-medium">{bloomIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.01"
              value={bloomIntensity}
              onChange={event => setBloomIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Chromatic Aberration</span>
              <span className="text-purple-300 font-medium">{chromaticAberration.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.01"
              step="0.001"
              value={chromaticAberration}
              onChange={event => setChromaticAberration(Number(event.target.value))}
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
            <label className="block text-sm font-medium text-gray-300">Line Style</label>
            <select
              value={lineStyle}
              onChange={event => setLineStyle(event.target.value as 'solid' | 'dashed' | 'dotted')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Line Jitter</span>
              <span className="text-purple-300 font-medium">{lineJitter.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={lineJitter}
              onChange={event => setLineJitter(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Scan Direction</label>
            <select
              value={scanDirection}
              onChange={event => setScanDirection(event.target.value as 'forward' | 'backward' | 'pingpong')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="forward">Forward</option>
              <option value="backward">Backward</option>
              <option value="pingpong">Ping Pong</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scan Glow</span>
              <span className="text-purple-300 font-medium">{scanGlow.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={scanGlow}
              onChange={event => setScanGlow(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scan Softness</span>
              <span className="text-purple-300 font-medium">{scanSoftness.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={scanSoftness}
              onChange={event => setScanSoftness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scan Phase Taper</span>
              <span className="text-purple-300 font-medium">{scanPhaseTaper.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.49"
              step="0.01"
              value={scanPhaseTaper}
              onChange={event => setScanPhaseTaper(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scan Duration</span>
              <span className="text-purple-300 font-medium">{scanDuration.toFixed(1)}s</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="5"
              step="0.1"
              value={scanDuration}
              onChange={event => setScanDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scan Delay</span>
              <span className="text-purple-300 font-medium">{scanDelay.toFixed(1)}s</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={scanDelay}
              onChange={event => setScanDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom Threshold</span>
              <span className="text-purple-300 font-medium">{bloomThreshold.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={bloomThreshold}
              onChange={event => setBloomThreshold(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom Smoothing</span>
              <span className="text-purple-300 font-medium">{bloomSmoothing.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={bloomSmoothing}
              onChange={event => setBloomSmoothing(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableWebcam}
                onChange={event => setEnableWebcam(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Webcam</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={showPreview}
                onChange={event => setShowPreview(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Show Preview</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableGyro}
                onChange={event => setEnableGyro(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Gyro</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={scanOnClick}
                onChange={event => setScanOnClick(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Scan on Click</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Snap Back Delay</span>
              <span className="text-purple-300 font-medium">{snapBackDelay}ms</span>
            </div>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={snapBackDelay}
              onChange={event => setSnapBackDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
