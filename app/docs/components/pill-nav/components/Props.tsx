import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'colors',
      type: 'string[]',
      default: "['#ff9346', '#7cff67', '#ffee51', '#5227FF']",
      description: 'Array of colors for the ribbons.',
    },
    {
      name: 'baseSpring',
      type: 'number',
      default: '0.03',
      description: 'Spring constant for ribbon physics.',
    },
    {
      name: 'baseFriction',
      type: 'number',
      default: '0.9',
      description: 'Friction coefficient for ribbon movement.',
    },
    {
      name: 'baseThickness',
      type: 'number',
      default: '30',
      description: 'Base thickness of the ribbons.',
    },
    {
      name: 'offsetFactor',
      type: 'number',
      default: '0.05',
      description: 'Factor controlling ribbon offset.',
    },
    {
      name: 'maxAge',
      type: 'number',
      default: '500',
      description: 'Maximum age of ribbon points before removal.',
    },
    {
      name: 'pointCount',
      type: 'number',
      default: '50',
      description: 'Number of points per ribbon.',
    },
    {
      name: 'speedMultiplier',
      type: 'number',
      default: '0.6',
      description: 'Multiplier for animation speed.',
    },
    {
      name: 'enableFade',
      type: 'boolean',
      default: 'false',
      description: 'Enable fading effect for ribbons.',
    },
    {
      name: 'enableShaderEffect',
      type: 'boolean',
      default: 'false',
      description: 'Enable shader effects for ribbons.',
    },
    {
      name: 'effectAmplitude',
      type: 'number',
      default: '2',
      description: 'Amplitude of shader effects.',
    },
    {
      name: 'backgroundColor',
      type: 'number[]',
      default: '[0, 0, 0, 0]',
      description: 'Background color as RGBA array.',
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