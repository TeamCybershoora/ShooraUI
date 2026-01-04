import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'texts',
      type: 'string[]',
      default: '[]',
      description: 'An array of text strings to be rotated.',
    },
    {
      name: 'rotationInterval',
      type: 'number',
      default: '2000',
      description: 'The interval (in milliseconds) between text rotations.',
    },
    {
      name: 'initial',
      type: 'object',
      default: '{ y: "100%", opacity: 0 }',
      description: 'Initial animation state for each element.',
    },
    {
      name: 'animate',
      type: 'object',
      default: '{ y: 0, opacity: 1 }',
      description: 'Animation state when elements enter.',
    },
    {
      name: 'exit',
      type: 'object',
      default: '{ y: "-120%", opacity: 0 }',
      description: 'Exit animation state for elements.',
    },
    {
      name: 'animatePresenceMode',
      type: 'string',
      default: '"wait"',
      description: 'Mode for AnimatePresence; for example, \'wait\' to finish exit animations before entering.',
    },
    {
      name: 'animatePresenceInitial',
      type: 'boolean',
      default: 'false',
      description: 'Determines whether the AnimatePresence component should run its initial animation.',
    },
    {
      name: 'staggerDuration',
      type: 'number',
      default: '0',
      description: 'Delay between each character\'s animation.',
    },
    {
      name: 'staggerFrom',
      type: 'string',
      default: '"first"',
      description: 'Specifies the order from which the stagger starts.',
    },
    {
      name: 'transition',
      type: 'object',
      default: '-',
      description: 'Transition settings for the animations.',
    },
    {
      name: 'loop',
      type: 'boolean',
      default: 'true',
      description: 'Determines if the rotation should loop back to the first text after the last one.',
    },
    {
      name: 'auto',
      type: 'boolean',
      default: 'true',
      description: 'If true, the text rotation starts automatically.',
    },
    {
      name: 'splitBy',
      type: 'string',
      default: '"characters"',
      description: 'Determines how the text is split into animatable elements (e.g., by characters, words, or lines).',
    },
    {
      name: 'onNext',
      type: 'function',
      default: 'undefined',
      description: 'Callback function invoked when the text rotates to the next item.',
    },
    {
      name: 'mainClassName',
      type: 'string',
      default: '""',
      description: 'Additional class names for the main container element.',
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
      {/* <div className="mt-8">
        <h3 className="text-xl font-medium text-white mb-4">Dependencies</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            gsap
          </span>
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            @gsap/react
          </span>
        </div>
      </div> */}
      <div className="mt-8 pt-6 border-t border-purple-300/20 pb-16">
        <p className="text-lg text-gray-400 text-center">
          Created with ❤️ by Cybershoora
        </p>
      </div>
    </>
  );
}