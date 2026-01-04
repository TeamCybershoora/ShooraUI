import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'items',
      type: '{ image: string; text: string }[]',
      default: 'defaultItems',
      description: 'Array of gallery items with image URL and text.',
    },
    {
      name: 'bend',
      type: 'number',
      default: '3',
      description: 'Amount of bend in the gallery layout (0 = flat, higher = more curved).',
    },
    {
      name: 'textColor',
      type: 'string',
      default: '"#ffffff"',
      description: 'Color of the text overlay on gallery items.',
    },
    {
      name: 'borderRadius',
      type: 'number',
      default: '0.05',
      description: 'Border radius for gallery items (0 = sharp corners, higher = more rounded).',
    },
    {
      name: 'font',
      type: 'string',
      default: '"bold 30px Figtree"',
      description: 'Font family and size for the text overlay.',
    },
    {
      name: 'scrollSpeed',
      type: 'number',
      default: '2',
      description: 'Speed of scrolling when using mouse wheel or touch.',
    },
    {
      name: 'scrollEase',
      type: 'number',
      default: '0.05',
      description: 'Easing factor for scroll animations (lower = smoother, higher = snappier).',
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
            ogl
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