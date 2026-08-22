import { Button, GlassFilter, LiquidButton } from "@/components/glass";
import React from "react";

export default function PortFolioNav() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-1/2 h-12 rounded-full! overflow-hidden "></nav>
  );
}
