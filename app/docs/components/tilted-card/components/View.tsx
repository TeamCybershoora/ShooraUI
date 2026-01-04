"use client";

import { useState } from "react";
import { TiltedCard } from "@cybershoora/shoora-ui"

export default function View() {
  const [imageSrc, setImageSrc] = useState("https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58");
  const [altText, setAltText] = useState("Kendrick Lamar - GNX Album Cover");
  const [captionText, setCaptionText] = useState("Kendrick Lamar - GNX");
  const [containerHeight, setContainerHeight] = useState("300px");
  const [containerWidth, setContainerWidth] = useState("300px");
  const [imageHeight, setImageHeight] = useState("300px");
  const [imageWidth, setImageWidth] = useState("300px");
  const [rotateAmplitude, setRotateAmplitude] = useState(12);
  const [scaleOnHover, setScaleOnHover] = useState(1.2);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [displayOverlayContent, setDisplayOverlayContent] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '500px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <TiltedCard
          imageSrc={imageSrc}
          altText={altText}
          captionText={captionText}
          containerHeight={containerHeight}
          containerWidth={containerWidth}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          rotateAmplitude={rotateAmplitude}
          scaleOnHover={scaleOnHover}
          showMobileWarning={showMobileWarning}
          showTooltip={showTooltip}
          displayOverlayContent={displayOverlayContent}
          overlayContent={
            <p className="tilted-card-demo-text">
              {captionText}
            </p>
          } 
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize TiltedCard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Image URL</label>
            <input
              type="text"
              value={imageSrc}
              onChange={event => setImageSrc(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Alt Text</label>
            <input
              type="text"
              value={altText}
              onChange={event => setAltText(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Image description"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Caption Text</label>
            <input
              type="text"
              value={captionText}
              onChange={event => setCaptionText(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Caption text"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Container Height</label>
            <input
              type="text"
              value={containerHeight}
              onChange={event => setContainerHeight(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="300px"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Container Width</label>
            <input
              type="text"
              value={containerWidth}
              onChange={event => setContainerWidth(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="300px"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Image Height</label>
            <input
              type="text"
              value={imageHeight}
              onChange={event => setImageHeight(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="300px"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Image Width</label>
            <input
              type="text"
              value={imageWidth}
              onChange={event => setImageWidth(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="300px"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Rotate Amplitude</span>
              <span className="text-purple-300 font-medium">{rotateAmplitude}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={rotateAmplitude}
              onChange={event => setRotateAmplitude(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale on Hover</span>
              <span className="text-purple-300 font-medium">{scaleOnHover}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="2"
              step="0.1"
              value={scaleOnHover}
              onChange={event => setScaleOnHover(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={showMobileWarning}
                onChange={event => setShowMobileWarning(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Show Mobile Warning</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={showTooltip}
                onChange={event => setShowTooltip(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Show Tooltip</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={displayOverlayContent}
                onChange={event => setDisplayOverlayContent(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Display Overlay Content</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
