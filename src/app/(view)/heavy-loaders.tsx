"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const MotionImage = motion(Image);

export default function HeavyLoaders() {
  return (
    <>
      <MotionImage
        height={664}
        width={664}
        priority
        src="/raven.svg"
        alt="Raven"
        className="w-lg absolute left-18"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionImage
        height={664}
        width={664}
        priority
        src="/liha.svg"
        alt="Liha"
        className="w-lg absolute right-24 bottom-0"
        animate={{
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
