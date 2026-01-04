import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'lineColor',
      type: 'string',
      default: "'#fff'",
      description: 'Color of the wave lines.',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      default: "'rgba(255, 255, 255, 0.2)'",
      description: 'Background color of the waves.',
    },
    {
      name: 'waveSpeedX',
      type: 'number',
      default: '0.02',
      description: 'Speed of waves in X direction.',
    },
    {
      name: 'waveSpeedY',
      type: 'number',
      default: '0.01',
      description: 'Speed of waves in Y direction.',
    },
    {
      name: 'waveAmpX',
      type: 'number',
      default: '40',
      description: 'Amplitude of waves in X direction.',
    },
    {
      name: 'waveAmpY',
      type: 'number',
      default: '20',
      description: 'Amplitude of waves in Y direction.',
    },
    {
      name: 'friction',
      type: 'number',
      default: '0.9',
      description: 'Friction coefficient for wave movement.',
    },
    {
      name: 'tension',
      type: 'number',
      default: '0.01',
      description: 'Tension of the wave lines.',
    },
    {
      name: 'maxCursorMove',
      type: 'number',
      default: '120',
      description: 'Maximum cursor movement distance.',
    },
    {
      name: 'xGap',
      type: 'number',
      default: '12',
      description: 'Gap between wave lines in X direction.',
    },
    {
      name: 'yGap',
      type: 'number',
      default: '36',
      description: 'Gap between wave lines in Y direction.',
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