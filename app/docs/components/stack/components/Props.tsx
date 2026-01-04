import React from 'react';

export default function Props() {
  const props = [
    {
      name: "items",
      type: "array",
      default: "[]",
      description: "Array of items to display in the stack"
    },
    {
      name: "direction",
      type: "string",
      default: "vertical",
      description: "Stack direction - 'vertical' or 'horizontal'"
    },
    {
      name: "spacing",
      type: "number",
      default: 16,
      description: "Spacing between stack items in pixels"
    },
    {
      name: "align",
      type: "string",
      default: "start",
      description: "Alignment of stack items - 'start', 'center', or 'end'"
    },
    {
      name: "className",
      type: "string",
      default: "custom-stack",
      description: "Additional CSS class names for styling"
    },
    {
      name: "itemClassName",
      type: "string",
      default: "",
      description: "CSS class name for individual stack items"
    },
    {
      name: "animated",
      type: "boolean",
      default: true,
      description: "Enable or disable stack animations"
    },
    {
      name: "animationType",
      type: "string",
      default: "slide",
      description: "Type of animation - 'slide', 'fade', or 'scale'"
    },
    {
      name: "animationDuration",
      type: "number",
      default: 300,
      description: "Duration of animations in milliseconds"
    },
    {
      name: "gap",
      type: "number",
      default: 8,
      description: "Gap between stack items in pixels"
    },
    {
      name: "wrap",
      type: "boolean",
      default: false,
      description: "Enable or disable wrapping of stack items"
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