"use client";

import { useState } from "react";
import { CardNav } from "@cybershoora/shoora-ui"
import logo from './logos.svg';

export default function View() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#ff0000ff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#" },
        { label: "Careers", ariaLabel: "About Careers", href: "#" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#ff0000ff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#ff0000ff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
      ]
    }
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Custom CardNav Demo */}
      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Custom CardNav Demo</h3>
        <div className="bg-black/50 rounded-lg p-4 border border-gray-600">
          <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#6c8576ff"
            ease="power3.out"
          />
        </div>
      </div>
    </div>
  );
}
