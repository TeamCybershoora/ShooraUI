import React from 'react';

export default function Props() {
  const props = [
    {
      name: "colorStops",
      type: "array",
      default: '["#3A29FF", "#FF94B4", "#FF3232"]',
      description: "Array of color stops for the aurora gradient effect"
    },
    {
      name: "amplitude",
      type: "number",
      default: 1.0,
      description: "Amplitude of the aurora wave animation"
    },
    {
      name: "blend",
      type: "number",
      default: 0.5,
      description: "Blend factor for color mixing (0-1)"
    },
    {
      name: "speed",
      type: "number",
      default: 0.5,
      description: "Speed of the aurora animation"
    },
    {
      name: "className",
      type: "string",
      default: "custom-aurora",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the aurora component"
    },
    {
      name: "height",
      type: "string",
      default: "100%",
      description: "Height of the aurora component"
    },
    {
      name: "opacity",
      type: "number",
      default: 0.8,
      description: "Opacity of the aurora effect (0-1)"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable aurora animation"
    },
    {
      name: "animationType",
      type: "string",
      default: "wave",
      description: "Type of animation - 'wave', 'pulse', or 'flow'"
    },
    {
      name: "gradientType",
      type: "string",
      default: "linear",
      description: "Gradient type - 'linear' or 'radial'"
    },
    {
      name: "direction",
      type: "string",
      default: "horizontal",
      description: "Direction of the aurora effect - 'horizontal' or 'vertical'"
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