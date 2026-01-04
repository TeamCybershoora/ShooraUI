import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'style',
      type: 'object',
      default: '{}',
      description: 'Inline styles applied to the wrapper element.',
    },
    {
      name: 'shuffleDirection',
      type: '"left" | "right"',
      default: '"right"',
      description: 'Direction the per-letter strip slides to reveal the final character.',
    },
    {
      name: 'maxDelay',
      type: 'number',
      default: '0',
      description: 'Max random delay per strip when animationMode = "random".',
    },
    {
      name: 'threshold',
      type: 'number',
      default: '0.1',
      description: 'Portion of the element that must enter view before starting.',
    },
    {
      name: 'rootMargin',
      type: 'string',
      default: '"-100px"',
      description: 'ScrollTrigger start offset (px, %, etc.).',
    },
    {
      name: 'tag',
      type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"',
      default: '"p"',
      description: 'HTML tag to render for the text container.',
    },
    {
      name: 'textAlign',
      type: 'string',
      default: '"center"',
      description: 'Text alignment applied via inline style.',
    },
    {
      name: 'onShuffleComplete',
      type: '() => void',
      default: 'undefined',
      description: 'Called after a full run completes (and on each loop repeat).',
    },
    {
      name: 'text',
      type: 'string',
      default: '""',
      description: 'The text content to shuffle.',
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Optional CSS class for the wrapper element.',
    },
    {
      name: 'duration',
      type: 'number',
      default: '0.35',
      description: 'Duration (s) of the strip slide per letter.',
    },
    {
      name: 'ease',
      type: 'string | Function',
      default: '"power3.out"',
      description: 'GSAP ease for sliding and color tween.',
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
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            @gsap/react
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