"use client";

import { useState } from "react";
import { GlassIcons, type GlassIconsItem } from "@cybershoora/shoora-ui";
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from 'react-icons/fi';

export default function View() {
  const [iconColor, setIconColor] = useState('purple-300');
  const [customClass, setCustomClass] = useState('custom-class');
  const [items, setItems] = useState<GlassIconsItem[]>([
    { icon: <FiFileText />, color: 'blue', label: 'Files' },
    { icon: <FiBook />, color: 'purple', label: 'Books' },
    { icon: <FiHeart />, color: 'red', label: 'Health' },
    { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
    { icon: <FiEdit />, color: 'orange', label: 'Notes' },
    { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
  ]);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <GlassIcons items={items} className={customClass}/>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Glass Icons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                {item.label} Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={item.color === 'blue' ? '#3b82f6' : 
                         item.color === 'purple' ? '#a855f7' :
                         item.color === 'red' ? '#ef4444' :
                         item.color === 'indigo' ? '#6366f1' :
                         item.color === 'orange' ? '#f97316' :
                         item.color === 'green' ? '#22c55e' : '#000000'}
                  onChange={event => {
                    const hexColor = event.target.value;
                    const colorMap: Record<string, string> = {
                      '#3b82f6': 'blue',
                      '#a855f7': 'purple',
                      '#ef4444': 'red',
                      '#6366f1': 'indigo',
                      '#f97316': 'orange',
                      '#22c55e': 'green'
                    };
                    const newColor = colorMap[hexColor] || hexColor;
                    const newItems = [...items];
                    newItems[index] = { ...item, color: newColor };
                    setItems(newItems);
                  }}
                  className="w-12 h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
                />
                <select
                  value={item.color}
                  onChange={event => {
                    const newItems = [...items];
                    newItems[index] = { ...item, color: event.target.value };
                    setItems(newItems);
                  }}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="red">Red</option>
                  <option value="indigo">Indigo</option>
                  <option value="orange">Orange</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </div>
          ))}

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Custom Class</label>
            <input
              type="text"
              value={customClass}
              onChange={event => setCustomClass(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="custom-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
