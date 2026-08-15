"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { PowerGlitch } from "powerglitch";
import { Backlight } from "../ui/backlight";
import { Button } from "../ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowExpandIcon,
  Chat01Icon,
  Home09Icon,
  Image03Icon,
  Info,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import { usePathname } from "next/navigation";
import { useFullscreen } from "react-haiku";
const navItems = [
  { label: "Overview", icon: Info },
  { label: "Media", icon: Image03Icon },
  { label: "Home", icon: Home09Icon },
  { label: "Community", icon: UserGroup02Icon },
  { label: "Messages", icon: Chat01Icon },
];
export default function Navbar() {
  const currentRoute = usePathname();
  const documentRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = React.useState<string | null>(null);
  useEffect(() => {
    documentRef.current = document.documentElement;
  }, []);
  const { toggleFullscreen } = useFullscreen(documentRef);
  return (
    <>
      <nav className="flex corner-b-squircle z-40 rounded-b-full h-16 w-min fixed top-0 left-1/2 -translate-x-1/2 items-center justify-between gap-8 px-8 mx-auto bg-foreground overflow-hidden">
        <div className="sm:flex gap-8 hidden">
          <Link href="/" className="text-background text-nowrap text-sm">
            Who are we?
          </Link>
          <Link href="/" className="text-background text-nowrap text-sm">
            Portfolio
          </Link>
        </div>

        <h1
          className={cn("text-4xl font-nerik text-primary")}
          ref={(el) => {
            if (el) {
              PowerGlitch.glitch(el, {
                playMode: "always",
                createContainers: true,
                hideOverflow: true,
                timing: {
                  duration: 6000,
                  iterations: Infinity,
                  easing: "ease-in-out",
                },
                glitchTimeSpan: { start: 0.4, end: 0.5 },
                shake: { velocity: 0, amplitudeX: 0.2, amplitudeY: 0.2 },
                slice: {
                  count: 1,
                  velocity: 50,
                  minHeight: 0.02,
                  maxHeight: 0.15,
                  hueRotate: true,
                },
              });
            }
          }}
        >
          RYLIONA
        </h1>

        <div className="sm:flex gap-8 hidden">
          <Link href="/" className="text-background text-nowrap text-sm">
            Who are we?
          </Link>
          <Link href="/" className="text-background text-nowrap text-sm">
            Lets Talk
          </Link>
        </div>
      </nav>
      <Button
        size="icon"
        variant="link"
        className="fixed z-40 top-4 right-4 sm:hidden"
        onClick={toggleFullscreen}
      >
        <HugeiconsIcon icon={ArrowExpandIcon} />
      </Button>
      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
      >
        <div className="mx-auto flex h-[4.5rem] max-w-lg items-center justify-between rounded-[1.75rem] border border-border/80 bg-foreground px-2 shadow-2xl shadow-foreground/20 lg:max-w-xl lg:px-3">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            const isHome = label === "Home";

            return (
              <button
                key={label}
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActive(label)}
                className={`group relative flex min-w-14 flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 text-[10px] font-medium transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "text-background"
                    : "text-background/50 hover:text-background/85"
                }`}
              >
                {isHome && (
                  <span
                    aria-hidden="true"
                    className={`absolute -top-7 grid size-14 place-items-center rounded-full border-[5px] border-muted/40 bg-background text-foreground shadow-lg transition-transform duration-200 ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                  >
                    <HugeiconsIcon
                      icon={Icon}
                      className="size-6"
                      strokeWidth={2.25}
                    />
                  </span>
                )}
                <HugeiconsIcon
                  icon={Icon}
                  className={`size-[19px] transition-transform duration-200 ${isHome ? "invisible" : isActive ? "-translate-y-0.5" : ""}`}
                  strokeWidth={isActive ? 2.25 : 1.8}
                  aria-hidden="true"
                />
                <span className={isHome ? "mt-0.5" : ""}>{label}</span>
                {isActive && !isHome && (
                  <span className="absolute bottom-1 size-1 rounded-full bg-background" />
                )}
              </button>
            );
          })}
          {/* <button
            type="button"
            aria-label="Create new"
            className="ml-1 grid size-11 shrink-0 place-items-center rounded-2xl bg-background text-foreground shadow-sm transition hover:bg-background/90 active:scale-95"
          >
            <Plus className="size-5" strokeWidth={2.25} aria-hidden="true" />
          </button> */}
        </div>
      </nav>
    </>
  );
}
