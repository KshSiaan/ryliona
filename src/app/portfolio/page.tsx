"use client";
import { CloudShader } from "@/components/ui/cloud-shader";

export default function Page() {
  return (
    <>
      <header className="relative min-h-dvh *:bg-gradient-to-b">
        <CloudShader className="h-dvh" />
      </header>
      <main className="relative min-h-dvh *:bg-gradient-to-b "></main>
    </>
  );
}
