// "use client";

// import { useState } from "react";
// import { PillNav, type PillNavItem } from "@cybershoora/shoora-ui";

// export default function View() {
//   const [logo, setLogo] = useState("/path/to/logo.svg");
//   const [logoAlt, setLogoAlt] = useState("Company Logo");
//   const [items, setItems] = useState<PillNavItem[]>([
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Services', href: '#services' },
//     { label: 'Contact', href: '#contact' }
//   ]);
//   const [activeHref, setActiveHref] = useState("#home");
//   const [className, setClassName] = useState("custom-nav");
//   const [ease, setEase] = useState("power2.easeOut");
//   const [baseColor, setBaseColor] = useState("#000000");
//   const [pillColor, setPillColor] = useState("#ffffff");
//   const [hoveredPillTextColor, setHoveredPillTextColor] = useState("#ffffff");
//   const [pillTextColor, setPillTextColor] = useState("#000000");
//   const [initialLoadAnimation, setInitialLoadAnimation] = useState(true);

//   return (
//     <div className="space-y-8 p-4">
//       <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-start justify-center pt-8">
//         <PillNav
//           logo={logo}
//           logoAlt={logoAlt}
//           items={items}
//           activeHref={activeHref}
//           className={className}
//           ease={ease}
//           baseColor={baseColor}
//           pillColor={pillColor}
//           hoveredPillTextColor={hoveredPillTextColor}
//           pillTextColor={pillTextColor}
//           initialLoadAnimation={initialLoadAnimation}
//         />
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
//           </svg>
//           Customize Pill Nav
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Logo Path</label>
//             <input
//               type="text"
//               value={logo}
//               onChange={event => setLogo(event.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               placeholder="/path/to/logo.svg"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Logo Alt Text</label>
//             <input
//               type="text"
//               value={logoAlt}
//               onChange={event => setLogoAlt(event.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               placeholder="Company Logo"
//             />
//           </div>

//           <div className="space-y-2 md:col-span-2">
//             <label className="block text-sm font-medium text-gray-300">Nav Items (JSON format)</label>
//             <textarea
//               value={JSON.stringify(items, null, 2)}
//               onChange={event => {
//                 try {
//                   const parsed = JSON.parse(event.target.value);
//                   if (Array.isArray(parsed)) {
//                     setItems(parsed);
//                   }
//                 } catch (e) {
//                   // Invalid JSON, don't update
//                 }
//               }}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
//               rows={6}
//               placeholder='[{"label": "Home", "href": "/"}]'
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Active Href</label>
//             <input
//               type="text"
//               value={activeHref}
//               onChange={event => setActiveHref(event.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               placeholder="/"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">CSS Class</label>
//             <input
//               type="text"
//               value={className}
//               onChange={event => setClassName(event.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               placeholder="custom-nav"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Animation Ease</label>
//             <select
//               value={ease}
//               onChange={event => setEase(event.target.value)}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             >
//               <option value="power2.easeOut">Power2 Ease Out</option>
//               <option value="power3.easeOut">Power3 Ease Out</option>
//               <option value="power4.easeOut">Power4 Ease Out</option>
//               <option value="back.easeOut">Back Ease Out</option>
//               <option value="elastic.easeOut">Elastic Ease Out</option>
//               <option value="bounce.easeOut">Bounce Ease Out</option>
//               <option value="none">None</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Base Color</label>
//             <div className="flex space-x-2">
//               <input
//                 type="color"
//                 value={baseColor}
//                 onChange={event => setBaseColor(event.target.value)}
//                 className="h-10 w-20 bg-gray-800 border border-gray-600 rounded cursor-pointer"
//               />
//               <input
//                 type="text"
//                 value={baseColor}
//                 onChange={event => setBaseColor(event.target.value)}
//                 className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="#000000"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Pill Color</label>
//             <div className="flex space-x-2">
//               <input
//                 type="color"
//                 value={pillColor}
//                 onChange={event => setPillColor(event.target.value)}
//                 className="h-10 w-20 bg-gray-800 border border-gray-600 rounded cursor-pointer"
//               />
//               <input
//                 type="text"
//                 value={pillColor}
//                 onChange={event => setPillColor(event.target.value)}
//                 className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="#ffffff"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Hovered Pill Text Color</label>
//             <div className="flex space-x-2">
//               <input
//                 type="color"
//                 value={hoveredPillTextColor}
//                 onChange={event => setHoveredPillTextColor(event.target.value)}
//                 className="h-10 w-20 bg-gray-800 border border-gray-600 rounded cursor-pointer"
//               />
//               <input
//                 type="text"
//                 value={hoveredPillTextColor}
//                 onChange={event => setHoveredPillTextColor(event.target.value)}
//                 className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="#ffffff"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Pill Text Color</label>
//             <div className="flex space-x-2">
//               <input
//                 type="color"
//                 value={pillTextColor}
//                 onChange={event => setPillTextColor(event.target.value)}
//                 className="h-10 w-20 bg-gray-800 border border-gray-600 rounded cursor-pointer"
//               />
//               <input
//                 type="text"
//                 value={pillTextColor}
//                 onChange={event => setPillTextColor(event.target.value)}
//                 className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 placeholder="#000000"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="flex items-center space-x-2 text-sm text-gray-300">
//               <input
//                 type="checkbox"
//                 checked={initialLoadAnimation}
//                 onChange={event => setInitialLoadAnimation(event.target.checked)}
//                 className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
//               />
//               <span>Initial Load Animation</span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
