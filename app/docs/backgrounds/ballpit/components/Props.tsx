import React from 'react';

export default function Props() {
  const props = [
    {
      name: "count",
      type: "number",
      default: 200,
      description: "Number of balls in the ballpit"
    },
    {
      name: "gravity",
      type: "number",
      default: 0.7,
      description: "Gravity strength affecting ball movement (0-2)"
    },
    {
      name: "friction",
      type: "number",
      default: 0.8,
      description: "Friction coefficient for ball movement (0.5-1)"
    },
    {
      name: "wallBounce",
      type: "number",
      default: 0.95,
      description: "Bounce factor when balls hit walls (0.5-1)"
    },
    {
      name: "followCursor",
      type: "boolean",
      default: true,
      description: "Enable balls to follow mouse cursor movement"
    },
    {
      name: "maxVelocity",
      type: "number",
      default: 0.15,
      description: "Maximum velocity for ball movement (0.05-0.5)"
    },
    {
      name: "minSize",
      type: "number",
      default: 0.5,
      description: "Minimum size of balls (0.1-2)"
    },
    {
      name: "maxSize",
      type: "number",
      default: 1,
      description: "Maximum size of balls (0.5-3)"
    },
    {
      name: "size0",
      type: "number",
      default: 1,
      description: "Control ball size multiplier (0.5-3)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-ballpit",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the ballpit container"
    },
    {
      name: "height",
      type: "string",
      default: "500px",
      description: "Height of the ballpit container"
    },
    {
      name: "enableCollision",
      type: "boolean",
      default: true,
      description: "Enable or disable ball collision detection"
    },
    {
      name: "ballColor",
      type: "string",
      default: "random",
      description: "Color of balls - 'random' or specific hex color"
    },
    {
      name: "animationSpeed",
      type: "number",
      default: 1,
      description: "Animation speed multiplier (0.1-3)"
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
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-300">
                    {prop.type}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 border-r border-purple-300">
                  <code className="bg-gray-800 px-2 py-1 rounded text-xs text-purple-300">
                    {prop.default}
                  </code>
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