"use client";
import { CloudShader } from "@/components/ui/cloud-shader";

export default function Page() {
  return (
    <>
      <header className="relative min-h-dvh w-dvw *:bg-gradient-to-b">
        <CloudShader />
      </header>
      <main className="relative min-h-dvh w-dvw *:bg-gradient-to-b "></main>
    </>
  );
}
