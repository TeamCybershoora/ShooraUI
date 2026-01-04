import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'text',
      type: 'string',
      default: '""',
      description: 'The text to be displayed and animated',
    },
    {
      name: 'flex',
      type: 'boolean',
      default: 'true',
      description: 'Enable flex layout for the text container',
    },
    {
      name: 'alpha',
      type: 'boolean',
      default: 'false',
      description: 'Enable alpha channel animation',
    },
    {
      name: 'stroke',
      type: 'boolean',
      default: 'false',
      description: 'Enable stroke effect',
    },
    {
      name: 'width',
      type: 'boolean',
      default: 'true',
      description: 'Enable width animation',
    },
    {
      name: 'weight',
      type: 'boolean',
      default: 'true',
      description: 'Enable font weight animation',
    },
    {
      name: 'italic',
      type: 'boolean',
      default: 'true',
      description: 'Enable italic style animation',
    },
    {
      name: 'textColor',
      type: 'string',
      default: '"#000000"',
      description: 'Base color of the text',
    },
    {
      name: 'strokeColor',
      type: 'string',
      default: '"#ff0000"',
      description: 'Color of the text stroke',
    },
    {
      name: 'minFontSize',
      type: 'number',
      default: '12',
      description: 'Minimum font size in pixels',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS class name for the container',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      default: '{}',
      description: 'Inline styles for the container',
    },
    {
      name: 'ease',
      type: 'string',
      default: '"power3.out"',
      description: 'GSAP easing function',
    },
    {
      name: 'splitType',
      type: 'string',
      default: '"chars"',
      description: 'Split type ("chars", "words", "lines", or "words, chars")',
    },
    {
      name: 'from',
      type: 'object',
      default: '{ opacity: 0, y: 40 }',
      description: 'Initial GSAP properties',
    },
    {
      name: 'to',
      type: 'object',
      default: '{ opacity: 1, y: 0 }',
      description: 'Target GSAP properties',
    },
    {
      name: 'threshold',
      type: 'number',
      default: '0.1',
      description: 'Intersection threshold for ScrollTrigger',
    },
    {
      name: 'rootMargin',
      type: 'string',
      default: '"-100px"',
      description: 'Root margin for ScrollTrigger',
    },
    {
      name: 'textAlign',
      type: 'string',
      default: '"center"',
      description: 'Text alignment',
    },
    {
      name: 'onLetterAnimationComplete',
      type: 'function',
      default: 'undefined',
      description: 'Callback when all animations complete',
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