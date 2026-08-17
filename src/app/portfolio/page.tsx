"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import AccordionGallery from "@/components/AccordionGallery";

export default function Page() {
  const h = window.innerHeight;
  const items = [
    {
      image: "https://picsum.photos/id/1015/900/1200",
      label: "Canyon",
      link: "#",
    },
    {
      image: "https://picsum.photos/id/1018/900/1200",
      label: "Ridgeline",
      link: "#",
    },
    {
      image: "https://picsum.photos/id/1039/900/1200",
      label: "Falls",
      link: "#",
    },
  ];
  return (
    <section className="sm:h-dvh relative! flex justify-center items-center ">
      <div className="w-full h-full flex justify-center items-center text-center"></div>
    </section>
  );
}
