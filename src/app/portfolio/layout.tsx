import React from "react";
import PortfolioNav from "./portfolio-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen bg-red-50">
      <PortfolioNav />
      {children}
    </main>
  );
}
