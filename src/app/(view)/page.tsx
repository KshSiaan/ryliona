"use client";
import GradientWaves from "@/components/GradientWaves";

import { Suspense } from "react";
import HeavyLoaders from "./heavy-loaders";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-dvh p-2 bg-foreground!">
      <header className="h-full w-full">
        <div className="relative h-full w-full bg-background rounded-2xl overflow-hidden">
          <GradientWaves
            className="z-10 absolute"
            horizonColor="#5227FF"
            waveColor="#FF9FFC"
            crestColor="#FFFFFF"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={0.5}
            height={5.5}
            fogDepth={10}
            detail="low"
            brightness={1}
            opacity={1}
            mouseInteraction
            parallaxStrength={0.5}
            grain
            grainIntensity={0.05}
          />
          <div className="z-20 h-full w-full absolute top-0 left-0 flex flex-col justify-around items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-center">
                What’s the biggest challenge standing between <br />
                You and your next milestone? <br />
              </h1>
              <p className="text-xl font-bold text-center">Let us Help You</p>
            </div>
            <div className="">
              <Button>See us in Action</Button>
            </div>

            <Suspense fallback={null}>
              <HeavyLoaders />
            </Suspense>
          </div>
        </div>
      </header>
    </div>
  );
}
