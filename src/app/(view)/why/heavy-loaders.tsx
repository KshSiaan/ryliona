import GradientWaves from "@/components/GradientWaves";
import Image from "next/image";
import React, { Suspense } from "react";

export default function HeavyLoaders() {
  return (
    <>
      <Image
        src="/astro.svg"
        priority
        loading="eager"
        height={600}
        width={600}
        className="absolute -bottom-8 left-1/2 h-2/3 z-20 -translate-x-1/2 select-none pointer-events-none"
        alt="plot_image"
      />
      <h4 className="absolute text-[300px] z-10 font-blade bottom-1/8 left-1/2 -translate-x-1/2">
        RYLIONA
      </h4>
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
    </>
  );
}
