"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function View() {
  const [key, setKey] = useState(0);
  const [customText, setCustomText] = useState("Hello Shoora UI");
  const [animationSettings, setAnimationSettings] = useState({
    duration: 0.8,
    delay: 0.05
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleRepeat = () => {
    setKey(prevKey => prevKey + 1);
  };

  const handleSettingChange = (setting: string, value: number) => {
    setAnimationSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");
    
    // Initial state
    gsap.set(chars, {
      opacity: 0,
      y: 60,
      display: "inline-block"
    });

    // Animation
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: animationSettings.duration,
      ease: "back.out(1.7)",
      stagger: animationSettings.delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
    });

  }, { scope: containerRef, dependencies: [key, animationSettings] });

  // Split text into characters
  const renderText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char" style={{ opacity: 0 }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="space-y-8 p-4">


      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={handleRepeat}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Repeat animation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
        <div 
          key={key} 
          ref={containerRef}
          className="h-full flex items-center justify-center w-full"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {renderText(customText || " ")}
          </h1>
        </div>
      </div>
      <div >
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          Customize Animation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grid content will go here */}
        </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Custom Text
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Type your text here..."
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Duration: {animationSettings.duration.toFixed(1)}s</span>
              <span className="text-purple-300 font-medium">{animationSettings.duration.toFixed(1)}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={animationSettings.duration}
              onChange={(e) => handleSettingChange('duration', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Delay: {animationSettings.delay.toFixed(2)}s</span>
              <span className="text-purple-300 font-medium">{animationSettings.delay.toFixed(2)}s</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.2"
              step="0.01"
              value={animationSettings.delay}
              onChange={(e) => handleSettingChange('delay', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
  );
}
