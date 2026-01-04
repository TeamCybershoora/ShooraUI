import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: '-',
      description: 'The content to be animated.',
    },
    {
      name: 'blur',
      type: 'boolean',
      default: 'false',
      description: 'Enables a blur effect during the animation.',
    },
    {
      name: 'duration',
      type: 'number',
      default: '-',
      description: 'Specifies the duration of the fade animation in seconds.',
    },
    {
      name: 'delay',
      type: 'number',
      default: '0',
      description: 'Adds a delay in seconds before triggering the animation.',
    },
    {
      name: 'ease',
      type: 'string',
      default: 'power2.out',
      description: 'GSAP easing function for the fade animation.',
    },
    {
      name: 'threshold',
      type: 'number',
      default: '-',
      description: 'IntersectionObserver threshold for triggering the fade animation.',
    },
    {
      name: 'initialOpacity',
      type: 'number',
      default: '-',
      description: 'The starting opacity of the component before it enters the viewport.',
    },
    {
      name: 'className',
      type: 'string',
      default: '-',
      description: 'Custom class(es) to be added to the container.',
    },
    {
      name: 'disappearAfter',
      type: 'number',
      default: '-',
      description: 'Time in seconds after which the content will start to disappear. Disables if set to 0.',
    },
    {
      name: 'disappearDuration',
      type: 'number',
      default: '-',
      description: 'Duration of the disappearance animation in seconds.',
    },
    {
      name: 'disappearEase',
      type: 'string',
      default: 'power2.in',
      description: 'GSAP easing function for the disappearance animation.',
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
      
      {/* Dependencies Section
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
      </div> */}
    </>
  );
}