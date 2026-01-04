import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'text',
      type: 'string | string[]',
      default: '""',
      description: 'Text content to be typed. Can be a string or array of strings for multiple lines',
    },
    {
      name: 'typingSpeed',
      type: 'number',
      default: '75',
      description: 'Speed of typing in milliseconds',
    },
    {
      name: 'pauseDuration',
      type: 'number',
      default: '1500',
      description: 'Duration to pause between lines in milliseconds',
    },
    {
      name: 'showCursor',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show the blinking cursor',
    },
    {
      name: 'cursorCharacter',
      type: 'string',
      default: '"|"',
      description: 'Character to use as the cursor',
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes to apply to the container',
    },
    {
      name: 'onComplete',
      type: '() => void',
      default: 'undefined',
      description: 'Callback function called when typing animation completes',
    },
    {
      name: 'onLineComplete',
      type: '(lineIndex: number) => void',
      default: 'undefined',
      description: 'Callback function called when a line completes typing',
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
            gsap
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