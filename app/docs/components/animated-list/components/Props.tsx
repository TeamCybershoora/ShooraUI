import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'items',
      type: 'string[]',
      default: "['Item 1', 'Item 2', 'Item 3', ...]",
      description: 'Array of items to display in the list.',
    },
    {
      name: 'onItemSelect',
      type: '(item: string, index: number) => void',
      default: 'undefined',
      description: 'Callback function when an item is selected.',
    },
    {
      name: 'showGradients',
      type: 'boolean',
      default: 'true',
      description: 'Show gradient overlays at top and bottom of scrollable list.',
    },
    {
      name: 'enableArrowNavigation',
      type: 'boolean',
      default: 'true',
      description: 'Enable keyboard navigation with arrow keys and tab.',
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for the container.',
    },
    {
      name: 'itemClassName',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for individual items.',
    },
    {
      name: 'displayScrollbar',
      type: 'boolean',
      default: 'true',
      description: 'Show or hide the scrollbar.',
    },
    {
      name: 'initialSelectedIndex',
      type: 'number',
      default: '-1',
      description: 'Initial selected item index (-1 for no selection).',
    },
  ];

  return (
    <>
      <h3 className="text-lg font-medium text-white mb-4">Props</h3>
      <div className="overflow-hidden border border-purple-300 rounded-lg bg-transparent">
        <table className="min-w-full divide-y divide-purple-300 bg-transparent">
          <thead className="bg-transparent">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Property
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Default
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-300 bg-transparent">
            {props.map((prop, index) => (
              <tr key={index} className="hover:bg-purple-300/10">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white border-r border-purple-300">
                  {prop.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 border-r border-purple-300">
                  <code className="bg-transparent border border-purple-300 px-2 py-1 rounded text-xs text-purple-300">{prop.type}</code>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 border-r border-purple-300">
                  {prop.default !== 'undefined' ? (
                    <code className="bg-transparent border border-purple-300 px-2 py-1 rounded text-xs text-purple-300">{prop.default}</code>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Dependencies Section */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-white mb-4">Dependencies</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            motion
          </span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-purple-300/20 pb-16">
        <p className="text-lg text-gray-400 text-center">
          Created with ❤️ by Cybershoora
        </p>
      </div>
    </>
  );
}