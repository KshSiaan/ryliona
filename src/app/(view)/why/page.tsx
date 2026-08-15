import React, { Suspense } from "react";
import HeavyLoaders from "./heavy-loaders";

export default function Page() {
  return (
    <div className="h-dvh p-2 bg-foreground! relative!  overflow-hidden">
      <main className="h-full w-full bg-background rounded-2xl overflow-hidden pt-18">
        <Suspense fallback={null}>
          <HeavyLoaders />
        </Suspense>
        <h1 className="text-xl font-bold text-center ">
          Our Mission is simply to bring technology to everyone, make your life
          simpler and only focus on what matters most to you.
        </h1>
        <p className="text-center text-muted-foreground">
          We believe that technology should be accessible to everyone, and we
          are committed to making it easy for you to use.
        </p>
      </main>
    </div>
  );
}
