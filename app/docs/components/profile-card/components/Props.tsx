import React from 'react';

export default function Props() {
  const props = [
    {
      name: "name",
      type: "string",
      default: "Tushar Kumar",
      description: "The name displayed on the profile card"
    },
    {
      name: "title", 
      type: "string",
      default: "Software Engineer",
      description: "The professional title or role displayed"
    },
    {
      name: "handle",
      type: "string", 
      default: "javicodes",
      description: "The social media handle or username"
    },
    {
      name: "status",
      type: "string",
      default: "Online", 
      description: "The current status indicator"
    },
    {
      name: "contactText",
      type: "string",
      default: "Contact Me",
      description: "Text displayed on the contact button"
    },
    {
      name: "avatarUrl",
      type: "string",
      default: "./tk2.pic.jpg",
      description: "URL of the profile avatar image"
    },
    {
      name: "iconUrl",
      type: "string",
      default: "",
      description: "Optional URL for additional icon image"
    },
    {
      name: "grainUrl", 
      type: "string",
      default: "",
      description: "Optional URL for grain texture overlay"
    },
    {
      name: "innerGradient",
      type: "string",
      default: "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
      description: "CSS gradient for the inner card background"
    },
    {
      name: "behindGlowEnabled",
      type: "boolean",
      default: true,
      description: "Enable or disable the behind glow effect"
    },
    {
      name: "behindGlowColor",
      type: "string",
      default: "rgba(125, 190, 255, 0.67)",
      description: "Color of the behind glow effect"
    },
    {
      name: "behindGlowSize",
      type: "string", 
      default: "25%",
      description: "Size of the behind glow effect"
    },
    {
      name: "className",
      type: "string",
      default: "custom-profile-card",
      description: "Additional CSS class names for styling"
    },
    {
      name: "enableTilt",
      type: "boolean",
      default: true,
      description: "Enable 3D tilt effect on hover"
    },
    {
      name: "enableMobileTilt",
      type: "boolean",
      default: false,
      description: "Enable tilt effect on mobile devices"
    },
    {
      name: "mobileTiltSensitivity",
      type: "number",
      default: 0.5,
      description: "Sensitivity of mobile tilt effect (0.1 - 1.0)"
    },
    {
      name: "miniAvatarUrl",
      type: "string",
      default: "",
      description: "Optional URL for mini avatar image"
    },
    {
      name: "showUserInfo",
      type: "boolean",
      default: true,
      description: "Show or hide user information section"
    },
    {
      name: "onContactClick",
      type: "function",
      default: "() => {}",
      description: "Callback function when contact button is clicked"
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