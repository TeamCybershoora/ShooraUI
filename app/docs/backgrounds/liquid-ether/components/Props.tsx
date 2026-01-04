import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'colors',
      type: 'string[]',
      default: "['#5227FF', '#FF9FFC', '#B19EEF']",
      description: 'Array of color hex values for the liquid effect'
    },
    {
      name: 'mouseForce',
      type: 'number',
      default: '20',
      description: 'Force applied by mouse interaction'
    },
    {
      name: 'cursorSize',
      type: 'number',
      default: '100',
      description: 'Size of the cursor interaction area in pixels'
    },
    {
      name: 'isViscous',
      type: 'boolean',
      default: 'false',
      description: 'Enable viscous fluid simulation'
    },
    {
      name: 'viscous',
      type: 'number',
      default: '30',
      description: 'Viscosity strength when isViscous is true'
    },
    {
      name: 'iterationsViscous',
      type: 'number',
      default: '32',
      description: 'Number of iterations for viscous simulation'
    },
    {
      name: 'iterationsPoisson',
      type: 'number',
      default: '32',
      description: 'Number of iterations for Poisson solver'
    },
    {
      name: 'resolution',
      type: 'number',
      default: '0.5',
      description: 'Simulation resolution (0.1 to 1)'
    },
    {
      name: 'isBounce',
      type: 'boolean',
      default: 'false',
      description: 'Enable bounce effect at boundaries'
    },
    {
      name: 'autoDemo',
      type: 'boolean',
      default: 'true',
      description: 'Enable automatic demo animation'
    },
    {
      name: 'autoSpeed',
      type: 'number',
      default: '0.5',
      description: 'Speed of automatic demo animation'
    },
    {
      name: 'autoIntensity',
      type: 'number',
      default: '2.2',
      description: 'Intensity of automatic demo animation'
    },
    {
      name: 'takeoverDuration',
      type: 'number',
      default: '0.25',
      description: 'Duration of takeover effect in seconds'
    },
    {
      name: 'autoResumeDelay',
      type: 'number',
      default: '3000',
      description: 'Delay before resuming auto demo in milliseconds'
    },
    {
      name: 'autoRampDuration',
      type: 'number',
      default: '0.6',
      description: 'Duration of ramp up/down in seconds'
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