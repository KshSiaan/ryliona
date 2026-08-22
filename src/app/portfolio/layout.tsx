import React from "react";
import PortfolioNav from "./portfolio-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PortfolioNav />
      {children}
    </>
  );
}
