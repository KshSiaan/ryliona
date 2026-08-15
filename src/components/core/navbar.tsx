"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { PowerGlitch } from "powerglitch";
import { Backlight } from "../ui/backlight";
import { Button } from "../ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Chat01Icon,
  Home09Icon,
  Image03Icon,
  InformationCircleIcon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
export default function Navbar() {
  return (
    <>
      {" "}
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
      <nav className="fixed bottom-0 z-40 w-full bg-foreground p-2 h-14 flex justify-around items-center">
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-background hover:bg-transparent! hover:text-background"
        >
          <HugeiconsIcon icon={InformationCircleIcon} className="size-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-background hover:bg-transparent! hover:text-background"
        >
          <HugeiconsIcon icon={Image03Icon} className="size-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-background hover:bg-transparent! hover:text-background"
        >
          <HugeiconsIcon icon={Home09Icon} className="size-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-background hover:bg-transparent! hover:text-background"
        >
          <HugeiconsIcon icon={UserGroup02Icon} className="size-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-background hover:bg-transparent! hover:text-background"
        >
          <HugeiconsIcon icon={Chat01Icon} className="size-6" />
        </Button>
      </nav>
    </>
  );
}
