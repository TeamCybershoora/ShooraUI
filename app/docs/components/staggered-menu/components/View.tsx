"use client";

import { useState } from "react";
import { StaggeredMenu } from "@cybershoora/shoora-ui"

export default function View() {
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const [colors, setColors] = useState(['#B19EEF', '#5227FF']);
  const [displaySocials, setDisplaySocials] = useState(true);
  const [displayItemNumbering, setDisplayItemNumbering] = useState(true);
  const [menuButtonColor, setMenuButtonColor] = useState('#fff');
  const [openMenuButtonColor, setOpenMenuButtonColor] = useState('#fff');
  const [changeMenuColorOnOpen, setChangeMenuColorOnOpen] = useState(true);
  const [accentColor, setAccentColor] = useState('#ff6b6b');
  const [isFixed, setIsFixed] = useState(false);
  
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '500px', position: 'relative', background: '#1a1a1a' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <StaggeredMenu
          position={position}
          items={menuItems}
          socialItems={socialItems}
          displaySocials={displaySocials}
          displayItemNumbering={displayItemNumbering}
          menuButtonColor={menuButtonColor}
          openMenuButtonColor={openMenuButtonColor}
          changeMenuColorOnOpen={changeMenuColorOnOpen}
          colors={colors}
          accentColor={accentColor}
          isFixed={isFixed}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize StaggeredMenu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Position</label>
            <select
              value={position}
              onChange={event => setPosition(event.target.value as 'left' | 'right')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="right">Right</option>
              <option value="left">Left</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Colors (comma-separated)</label>
            <input
              type="text"
              value={colors.join(',')}
              onChange={event => setColors(event.target.value.split(',').map(c => c.trim()))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#B19EEF,#5227FF"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Menu Button Color</label>
            <input
              type="color"
              value={menuButtonColor}
              onChange={event => setMenuButtonColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Open Menu Button Color</label>
            <input
              type="color"
              value={openMenuButtonColor}
              onChange={event => setOpenMenuButtonColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Accent Color</label>
            <input
              type="color"
              value={accentColor}
              onChange={event => setAccentColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={displaySocials}
                onChange={event => setDisplaySocials(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Display Socials</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={displayItemNumbering}
                onChange={event => setDisplayItemNumbering(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Display Item Numbering</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={changeMenuColorOnOpen}
                onChange={event => setChangeMenuColorOnOpen(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Change Menu Color on Open</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={isFixed}
                onChange={event => setIsFixed(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Fixed Position</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
