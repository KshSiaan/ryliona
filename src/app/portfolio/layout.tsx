import React from "react";
import PortfolioNav from "./portfolio-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <PortfolioNav />
      {children}
    </main>
  );
}
