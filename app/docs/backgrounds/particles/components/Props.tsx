import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'particleColors',
      type: 'string[]',
      default: "['#ffffff', '#ffffff', '#ffffff']",
      description: 'Array of color hex values for particles'
    },
    {
      name: 'particleCount',
      type: 'number',
      default: '200',
      description: 'Number of particles to render'
    },
    {
      name: 'particleSpread',
      type: 'number',
      default: '10',
      description: 'Spread distance of particles'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.1',
      description: 'Animation speed of particles'
    },
    {
      name: 'particleBaseSize',
      type: 'number',
      default: '100',
      description: 'Base size of particles in pixels'
    },
    {
      name: 'moveParticlesOnHover',
      type: 'boolean',
      default: 'true',
      description: 'Enable particle movement on hover'
    },
    {
      name: 'alphaParticles',
      type: 'boolean',
      default: 'false',
      description: 'Enable alpha transparency for particles'
    },
    {
      name: 'disableRotation',
      type: 'boolean',
      default: 'false',
      description: 'Disable particle rotation'
    },
    {
      name: 'particleHoverFactor',
      type: 'number',
      default: '1',
      description: 'Hover effect intensity multiplier'
    },
    {
      name: 'sizeRandomness',
      type: 'number',
      default: '1',
      description: 'Randomness factor for particle sizes'
    },
    {
      name: 'cameraDistance',
      type: 'number',
      default: '20',
      description: 'Camera distance from particles'
    }
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