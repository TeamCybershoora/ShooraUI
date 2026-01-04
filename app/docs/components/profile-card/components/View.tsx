"use client";

import { useState } from "react";
import { ProfileCard } from "@cybershoora/shoora-ui";

export default function View() {
  const [name, setName] = useState("Tushar Kumar");
  const [title, setTitle] = useState("Software Engineer");
  const [handle, setHandle] = useState("javicodes");
  const [status, setStatus] = useState("Online");
  const [contactText, setContactText] = useState("Contact Me");
  const [avatarUrl, setAvatarUrl] = useState("./tk2.pic.jpg");
  const [iconUrl, setIconUrl] = useState("");
  const [grainUrl, setGrainUrl] = useState("");
  const [innerGradient, setInnerGradient] = useState("linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)");
  const [behindGlowEnabled, setBehindGlowEnabled] = useState(true);
  const [behindGlowColor, setBehindGlowColor] = useState("rgba(125, 190, 255, 0.67)");
  const [behindGlowSize, setBehindGlowSize] = useState("25%");
  const [className, setClassName] = useState("custom-profile-card");
  const [enableTilt, setEnableTilt] = useState(true);
  const [enableMobileTilt, setEnableMobileTilt] = useState(false);
  const [mobileTiltSensitivity, setMobileTiltSensitivity] = useState(0.5);
  const [miniAvatarUrl, setMiniAvatarUrl] = useState("");
  const [showUserInfo, setShowUserInfo] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <ProfileCard
          name={name}
          title={title}
          handle={handle}
          status={status}
          contactText={contactText}
          avatarUrl={avatarUrl}
          iconUrl={iconUrl}
          grainUrl={grainUrl}
          innerGradient={innerGradient}
          behindGlowEnabled={behindGlowEnabled}
          behindGlowColor={behindGlowColor}
          behindGlowSize={behindGlowSize}
          className={className}
          enableTilt={enableTilt}
          enableMobileTilt={enableMobileTilt}
          mobileTiltSensitivity={mobileTiltSensitivity}
          miniAvatarUrl={miniAvatarUrl}
          showUserInfo={showUserInfo}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Profile Card
        </h2>

        {/* Row 1: Basic Info */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Tushar Kumar"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Software Engineer"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Handle</label>
            <input
              type="text"
              value={handle}
              onChange={event => setHandle(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="javicodes"
            />
          </div>
        </div>

        {/* Row 2: Status & Contact */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Status</label>
            <input
              type="text"
              value={status}
              onChange={event => setStatus(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Online"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Contact Text</label>
            <input
              type="text"
              value={contactText}
              onChange={event => setContactText(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Contact Me"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Avatar URL</label>
            <input
              type="text"
              value={avatarUrl}
              onChange={event => setAvatarUrl(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="./tk2.pic.jpg"
            />
          </div>
        </div>

        {/* Row 3: URLs & Images */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Icon URL</label>
            <input
              type="text"
              value={iconUrl}
              onChange={event => setIconUrl(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Optional icon URL"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Grain URL</label>
            <input
              type="text"
              value={grainUrl}
              onChange={event => setGrainUrl(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Optional grain texture URL"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Mini Avatar URL</label>
            <input
              type="text"
              value={miniAvatarUrl}
              onChange={event => setMiniAvatarUrl(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Optional mini avatar URL"
            />
          </div>
        </div>

        {/* Row 4: Styling & Effects */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Inner Gradient</label>
            <textarea
              value={innerGradient}
              onChange={event => setInnerGradient(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
              rows={2}
              placeholder="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Behind Glow Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={behindGlowColor.includes('rgba') ? '#7dbeff' : behindGlowColor}
                onChange={event => setBehindGlowColor(event.target.value)}
                className="h-10 w-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
              />
              <input
                type="text"
                value={behindGlowColor}
                onChange={event => setBehindGlowColor(event.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="rgba(125, 190, 255, 0.67)"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Behind Glow Size</label>
            <input
              type="text"
              value={behindGlowSize}
              onChange={event => setBehindGlowSize(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="25%"
            />
          </div>
        </div>

        {/* Row 5: Toggles & Settings */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={behindGlowEnabled}
                onChange={event => setBehindGlowEnabled(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Behind Glow Enabled</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableTilt}
                onChange={event => setEnableTilt(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Tilt</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableMobileTilt}
                onChange={event => setEnableMobileTilt(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Mobile Tilt</span>
            </label>
          </div>
        </div>

        {/* Row 6: Final Settings */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mobile Tilt Sensitivity</span>
              <span className="text-purple-300 font-medium">{mobileTiltSensitivity}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={mobileTiltSensitivity}
              onChange={event => setMobileTiltSensitivity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={showUserInfo}
                onChange={event => setShowUserInfo(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Show User Info</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">CSS Class</label>
            <input
              type="text"
              value={className}
              onChange={event => setClassName(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="custom-profile-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
