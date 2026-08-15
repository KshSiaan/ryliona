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
        className="absolute bottom-[-10%] left-1/2 h-2/3 z-30 size-125 -translate-x-1/2 select-none pointer-events-none"
        alt="plot_image"
      />
      <h4 className="absolute text-[300px] z-20 font-blade bottom-1/8 left-1/2 -translate-x-1/2">
        RYLIONA
      </h4>
      <Suspense fallback={null}>
        <GradientWaves
          className="z-10 absolute scale-80 left-1/2 -bottom-6 -translate-x-1/2 flex justify-center items-center"
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={0.4}
          zoom={0.4}
          height={5}
          fogDepth={20}
          detail="low"
          brightness={1}
          opacity={1}
          parallaxStrength={0.9}
          grain
          grainIntensity={0.05}
        />
      </Suspense>
    </>
  );
}
