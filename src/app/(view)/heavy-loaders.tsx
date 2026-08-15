"use client";
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const MotionImage = motion.create(Image);

export default function HeavyLoaders() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Raven */}
      <MotionImage
        src="/raven.svg"
        alt=""
        width={664}
        height={664}
        priority
        draggable={false}
        className="
          absolute
          left-1/2
          bottom-28
          size-[18rem]
          -translate-x-1/2
          opacity-10
          object-contain
          select-none

          sm:left-6
          sm:top-1/2
          sm:size-72
          sm:-translate-y-1/2
          sm:translate-x-0
          sm:opacity-100

          lg:left-10
          lg:size-80

          xl:left-14
          xl:size-96

          2xl:left-20
          2xl:size-[31rem]
        "
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Liha */}
      <MotionImage
        src="/liha.svg"
        alt=""
        width={664}
        height={664}
        priority
        draggable={false}
        className="
          absolute
          bottom-0
          right-1/2
          size-[18rem]
          translate-x-1/2
          -scale-x-100
          opacity-30
          object-contain
          select-none

          sm:right-6
          sm:size-72
          sm:translate-x-0
          sm:opacity-100

          lg:right-10
          lg:size-80

          xl:right-14
          xl:size-96

          2xl:right-20
          2xl:size-[31rem]
        "
        animate={{
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
