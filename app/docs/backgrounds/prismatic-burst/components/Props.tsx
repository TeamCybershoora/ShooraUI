import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'animationType',
      type: "'rotate' | 'rotate3d' | 'hover'",
      default: "'rotate3d'",
      description: 'Type of animation for the prismatic burst.',
    },
    {
      name: 'intensity',
      type: 'number',
      default: '2',
      description: 'Intensity of the prismatic burst effect.',
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.5',
      description: 'Animation speed.',
    },
    {
      name: 'distort',
      type: 'number',
      default: '1.0',
      description: 'Distortion amount for the burst effect.',
    },
    {
      name: 'paused',
      type: 'boolean',
      default: 'false',
      description: 'Pause the animation.',
    },
    {
      name: 'offset',
      type: '{ x: number; y: number }',
      default: '{ x: 0, y: 0 }',
      description: 'X and Y offset position.',
    },
    {
      name: 'hoverDampness',
      type: 'number',
      default: '0.25',
      description: 'Dampness factor for hover effects.',
    },
    {
      name: 'rayCount',
      type: 'number',
      default: '24',
      description: 'Number of rays in the burst.',
    },
    {
      name: 'mixBlendMode',
      type: "React.CSSProperties['mixBlendMode'] | 'none'",
      default: "'lighten'",
      description: 'CSS mix blend mode for the effect.',
    },
    {
      name: 'colors',
      type: 'string[]',
      default: "['#ff007a', '#4d3dff', '#ffffff']",
      description: 'Array of colors for the prismatic burst.',
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for the component.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      default: '{}',
      description: 'Inline styles for the component.',
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