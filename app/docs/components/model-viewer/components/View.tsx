"use client";

import { useState } from "react";
import { ModelViewer } from "@cybershoora/shoora-ui";

export default function View() {
  const [url, setUrl] = useState("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb");
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(1000);
  const [modelXOffset, setModelXOffset] = useState(0);
  const [modelYOffset, setModelYOffset] = useState(0);
  const [defaultRotationX, setDefaultRotationX] = useState(0);
  const [defaultRotationY, setDefaultRotationY] = useState(0);
  const [defaultZoom, setDefaultZoom] = useState(1);
  const [minZoomDistance, setMinZoomDistance] = useState(1);
  const [maxZoomDistance, setMaxZoomDistance] = useState(10);
  const [enableMouseParallax, setEnableMouseParallax] = useState(true);
  const [enableManualRotation, setEnableManualRotation] = useState(true);
  const [enableHoverRotation, setEnableHoverRotation] = useState(false);
  const [enableManualZoom, setEnableManualZoom] = useState(true);
  const [ambientIntensity, setAmbientIntensity] = useState(0.5);
  const [keyLightIntensity, setKeyLightIntensity] = useState(1);
  const [fillLightIntensity, setFillLightIntensity] = useState(0.5);
  const [rimLightIntensity, setRimLightIntensity] = useState(0.5);
  const [environmentPreset, setEnvironmentPreset] = useState<'city' | 'sunset' | 'night' | 'dawn' | 'studio' | 'apartment' | 'forest' | 'park' | 'none'>('studio');
  const [autoFrame, setAutoFrame] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(1);
  const [showScreenshotButton, setShowScreenshotButton] = useState(false);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <ModelViewer
          url={url}
          width={width}
          height={height}
          modelXOffset={modelXOffset}
          modelYOffset={modelYOffset}
          defaultRotationX={defaultRotationX}
          defaultRotationY={defaultRotationY}
          defaultZoom={defaultZoom}
          minZoomDistance={minZoomDistance}
          maxZoomDistance={maxZoomDistance}
          enableMouseParallax={enableMouseParallax}
          enableManualRotation={enableManualRotation}
          enableHoverRotation={enableHoverRotation}
          enableManualZoom={enableManualZoom}
          ambientIntensity={ambientIntensity}
          keyLightIntensity={keyLightIntensity}
          fillLightIntensity={fillLightIntensity}
          rimLightIntensity={rimLightIntensity}
          environmentPreset={environmentPreset}
          autoFrame={autoFrame}
          fadeIn={fadeIn}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
          showScreenshotButton={showScreenshotButton}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Model Viewer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Model URL</label>
            <input
              type="text"
              value={url}
              onChange={event => setUrl(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://example.com/model.glb"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Width</span>
              <span className="text-purple-300 font-medium">{width}px</span>
            </div>
            <input
              type="range"
              min="200"
              max="800"
              step="50"
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
              min="1000"
              max="2000"
              step="50"
              value={height}
              onChange={event => setHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Model X Offset</span>
              <span className="text-purple-300 font-medium">{modelXOffset}</span>
            </div>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={modelXOffset}
              onChange={event => setModelXOffset(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Model Y Offset</span>
              <span className="text-purple-300 font-medium">{modelYOffset}</span>
            </div>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={modelYOffset}
              onChange={event => setModelYOffset(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Default Rotation X</span>
              <span className="text-purple-300 font-medium">{defaultRotationX}°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="15"
              value={defaultRotationX}
              onChange={event => setDefaultRotationX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Default Rotation Y</span>
              <span className="text-purple-300 font-medium">{defaultRotationY}°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="15"
              value={defaultRotationY}
              onChange={event => setDefaultRotationY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Default Zoom</span>
              <span className="text-purple-300 font-medium">{defaultZoom}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={defaultZoom}
              onChange={event => setDefaultZoom(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableMouseParallax}
                onChange={event => setEnableMouseParallax(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Mouse Parallax</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableManualRotation}
                onChange={event => setEnableManualRotation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Manual Rotation</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableHoverRotation}
                onChange={event => setEnableHoverRotation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Hover Rotation</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableManualZoom}
                onChange={event => setEnableManualZoom(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Manual Zoom</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoRotate}
                onChange={event => setAutoRotate(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Auto Rotate</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Auto Rotate Speed</span>
              <span className="text-purple-300 font-medium">{autoRotateSpeed}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={autoRotateSpeed}
              onChange={event => setAutoRotateSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Environment Preset</label>
            <select
              value={environmentPreset}
              onChange={event => setEnvironmentPreset(event.target.value as any)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="city">City</option>
              <option value="sunset">Sunset</option>
              <option value="night">Night</option>
              <option value="dawn">Dawn</option>
              <option value="studio">Studio</option>
              <option value="apartment">Apartment</option>
              <option value="forest">Forest</option>
              <option value="park">Park</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ambient Intensity</span>
              <span className="text-purple-300 font-medium">{ambientIntensity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={ambientIntensity}
              onChange={event => setAmbientIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Key Light Intensity</span>
              <span className="text-purple-300 font-medium">{keyLightIntensity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={keyLightIntensity}
              onChange={event => setKeyLightIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fill Light Intensity</span>
              <span className="text-purple-300 font-medium">{fillLightIntensity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={fillLightIntensity}
              onChange={event => setFillLightIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rim Light Intensity</span>
              <span className="text-purple-300 font-medium">{rimLightIntensity}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={rimLightIntensity}
              onChange={event => setRimLightIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoFrame}
                onChange={event => setAutoFrame(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Auto Frame</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={fadeIn}
                onChange={event => setFadeIn(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Fade In</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={showScreenshotButton}
                onChange={event => setShowScreenshotButton(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Show Screenshot Button</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
