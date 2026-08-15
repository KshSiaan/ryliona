import GradientWaves from "@/components/GradientWaves";

import { Suspense } from "react";
import HeavyLoaders from "./heavy-loaders";
import { Button } from "@/components/ui/button";
import { LiquidMetalButton } from "@/components/core/cta";
import SplitText from "@/components/SplitText";
import { Highlighter } from "@/components/ui/highlighter";
export default function Home() {
  return (
    <div className="h-dvh p-2 bg-foreground!">
      <header className="h-full w-full ">
        <div className="relative h-full w-full bg-background rounded-2xl overflow-hidden">
          <Suspense fallback={null}>
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
          </Suspense>
          <div className="z-20 h-full w-full absolute top-0 left-0 flex flex-col justify-around items-center">
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex flex-col gap-4">
                <SplitText
                  text="Where could your business go"
                  className="text-4xl font-semibold text-center "
                  delay={50}
                  tag="h1"
                  duration={1.25}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
                <h1 className="text-4xl font-semibold text-center px-4 leading-tight">
                  if Technology worked for you?
                </h1>
              </div>
              <Highlighter action="underline">
                <p className="text-xl font-bold text-center">
                  Let's make that possible
                </p>
              </Highlighter>
            </div>
            <div className="flex items-center gap-8 mb-6">
              <LiquidMetalButton label="See us in Action" />
              <Button
                size="lg"
                className=" h-11 px-8 rounded-full bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background transition-all duration-300"
                variant="outline"
              >
                Lets Work
              </Button>
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
