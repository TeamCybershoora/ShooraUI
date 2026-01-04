"use client";

import { useState } from "react";
import { AnimatedList } from "@cybershoora/shoora-ui"

export default function View() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']);
  const [showGradients, setShowGradients] = useState(true);
  const [enableArrowNavigation, setEnableArrowNavigation] = useState(true);
  const [displayScrollbar, setDisplayScrollbar] = useState(true);
  const [newItemText, setNewItemText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemSelect = (item: string, index: number) => {
    setSelectedIndex(index);
    console.log('Selected:', item, 'at index:', index);
  };

  const addItem = () => {
    if (newItemText.trim()) {
      setItems([...items, newItemText.trim()]);
      setNewItemText('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    if (selectedIndex === index) {
      setSelectedIndex(null);
    }
  };

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex justify-center items-center">
        <AnimatedList
          items={items}
          onItemSelect={handleItemSelect}
          showGradients={showGradients}
          enableArrowNavigation={enableArrowNavigation}
          displayScrollbar={displayScrollbar}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize AnimatedList
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Add New Item</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newItemText}
                onChange={event => setNewItemText(event.target.value)}
                onKeyPress={event => event.key === 'Enter' && addItem()}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter item text"
              />
              <button
                onClick={addItem}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={showGradients}
                onChange={event => setShowGradients(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Show Gradients</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableArrowNavigation}
                onChange={event => setEnableArrowNavigation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Arrow Navigation</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={displayScrollbar}
                onChange={event => setDisplayScrollbar(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Display Scrollbar</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Current Items ({items.length})</label>
            <div className="max-h-32 overflow-y-auto bg-gray-800 rounded-md p-2">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-1 px-2 hover:bg-gray-700 rounded">
                  <span className="text-white text-sm">{item}</span>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedIndex !== null && (
          <div className="mt-4 p-3 bg-purple-900/30 border border-purple-500 rounded-md">
            <p className="text-purple-300 text-sm">
              Selected: "{items[selectedIndex]}" at index {selectedIndex}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
