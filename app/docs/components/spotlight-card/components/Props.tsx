import React from 'react';

export default function Props() {
  const props = [
    {
      name: "title",
      type: "string",
      default: "Spotlight Card",
      description: "The main title displayed on the card"
    },
    {
      name: "description", 
      type: "string",
      default: "An interactive spotlight effect card with smooth animations",
      description: "Description text shown below the title"
    },
    {
      name: "spotlightColor",
      type: "string",
      default: "#60496e",
      description: "Color of the spotlight effect"
    },
    {
      name: "spotlightSize",
      type: "string",
      default: "300px", 
      description: "Size of the spotlight effect"
    },
    {
      name: "spotlightIntensity",
      type: "number",
      default: 0.8,
      description: "Intensity of the spotlight effect (0-1)"
    },
    {
      name: "backgroundColor",
      type: "string",
      default: "#0a0f1e",
      description: "Background color of the card"
    },
    {
      name: "borderColor",
      type: "string",
      default: "#60496e",
      description: "Border color of the card"
    },
    {
      name: "enableGlow",
      type: "boolean",
      default: true,
      description: "Enable or disable the glow effect"
    },
    {
      name: "glowColor",
      type: "string",
      default: "rgba(96, 73, 110, 0.5)",
      description: "Color of the glow effect"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable spotlight animation"
    },
    {
      name: "animationSpeed",
      type: "number",
      default: 2,
      description: "Speed of the spotlight animation in seconds"
    },
    {
      name: "className",
      type: "string",
      default: "custom-spotlight-card",
      description: "Additional CSS class names for styling"
    },
    {
      name: "onSpotlightMove",
      type: "function",
      default: "() => {}",
      description: "Callback function when spotlight moves"
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