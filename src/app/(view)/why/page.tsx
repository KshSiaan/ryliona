import React, { Suspense } from "react";
import HeavyLoaders from "./heavy-loaders";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-dvh p-2 bg-foreground! relative!  overflow-hidden">
      <main className="h-full w-full bg-background rounded-2xl overflow-hidden pt-18 flex flex-col justify-center items-center">
        {/* <Suspense fallback={null}>
          <HeavyLoaders />
        </Suspense> */}
        <div className="container border p-6 rounded-2xl">
          <h1 className="text-xl font-bold text-center ">
            <span className="text-primary">Think about this</span>, The world is
            changing? are we?
          </h1>
          <p className="text-muted-foreground mt-6">
            <span className="">W</span>e believe that technology should be
            accessible to everyone, and we are committed to making it easy for
            you to use. <br />
            Remember writing paragraphs ? We dont type out paragraphs anymore,
            do we? only when we really care about certain things that needs to
            be said. You know what else has been replaced by technology? The way
            we do business and connect with people.
            <br /> Companies who really want to stay ahead of the curve are
            using AI to automate their processes and stay ahead of the
            competition. We are here to help you do just that. Customer support,
            automated checkout so many more you name it.
            <br />
            Not only that we focus on the trend of the future, The most
            important part of the system development is not always the growth.
            It is the ability to change and adapt. But nowdays. many systems
            arent even built to be changed.
            <br />
            Check our{" "}
            <Link href="/portfolio" className="text-primary hover:underline">
              Portfolio
            </Link>{" "}
            to see what we can do for you.
          </p>
        </div>
      </main>
    </div>
  );
}
