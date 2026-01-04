import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'SIM_RESOLUTION',
      type: 'number',
      default: '128',
      description: 'The resolution of the fluid simulation grid. Higher values provide more detailed simulation but affect performance.',
    },
    {
      name: 'DYE_RESOLUTION',
      type: 'number',
      default: '1440',
      description: 'The resolution of the dye/render texture. Higher values provide more detailed visuals.',
    },
    {
      name: 'CAPTURE_RESOLUTION',
      type: 'number',
      default: '512',
      description: 'The resolution for capturing mouse interactions.',
    },
    {
      name: 'DENSITY_DISSIPATION',
      type: 'number',
      default: '3.5',
      description: 'How quickly the dye density dissipates over time.',
    },
    {
      name: 'VELOCITY_DISSIPATION',
      type: 'number',
      default: '2',
      description: 'How quickly the fluid velocity dissipates over time.',
    },
    {
      name: 'PRESSURE',
      type: 'number',
      default: '0.1',
      description: 'The pressure coefficient in the fluid simulation.',
    },
    {
      name: 'PRESSURE_ITERATIONS',
      type: 'number',
      default: '20',
      description: 'Number of iterations for pressure calculation in the fluid solver.',
    },
    {
      name: 'CURL',
      type: 'number',
      default: '3',
      description: 'The curl/vorticity factor that adds swirling motion to the fluid.',
    },
    {
      name: 'SPLAT_RADIUS',
      type: 'number',
      default: '0.2',
      description: 'The radius of the splash effect when clicking or moving the mouse.',
    },
    {
      name: 'SPLAT_FORCE',
      type: 'number',
      default: '6000',
      description: 'The force applied to the fluid when creating splashes.',
    },
    {
      name: 'SHADING',
      type: 'boolean',
      default: 'true',
      description: 'Enables or disables shading effects on the fluid simulation.',
    },
    {
      name: 'COLOR_UPDATE_SPEED',
      type: 'number',
      default: '10',
      description: 'How quickly the colors update during the animation.',
    },
    {
      name: 'BACK_COLOR',
      type: 'ColorRGB',
      default: '{ r: 0.5, g: 0, b: 0 }',
      description: 'The background color of the simulation.',
    },
    {
      name: 'TRANSPARENT',
      type: 'boolean',
      default: 'true',
      description: 'Whether the background should be transparent.',
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
            WebGL
          </span>
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            WebGL2
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