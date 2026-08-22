import { LiquidMetalButton } from "@/components/core/cta";
import { LiquidButton, MetalButton } from "@/components/glass";
import MagicBento from "@/components/MagicBento";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                All in One AI packed E-commerce <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                  KinteHobe
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="/kintehobe1.webp"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <main className="container mx-auto px-6 py-16 md:py-24">
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight text-center">
            Explore the power of AI in e-commerce with KinteHobe
          </h2>
          <p className="text-muted-foreground text-center mt-4">
            Here's the Demo of KinteHobe, an AI-powered e-commerce platform that
            helps you discover products, make decisions, and complete purchases
            with ease.
          </p>
          <div className=""></div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-dvh">
          <div className="space-y-5">
            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Shopping, with an intelligence layer.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Traditional e-commerce expects users to know what to search for.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              KinteHobe is designed around the opposite idea — users can
              describe what they need naturally, and the platform helps them
              discover relevant products, make decisions, and complete the
              purchase.
            </p>
          </div>

          <Image
            src="/kintehobe1.webp"
            alt="KinteHobe product interface showing AI-assisted shopping"
            height={720}
            width={1400}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-auto rounded-2xl object-cover object-left-top shadow-lg"
            draggable={false}
          />
        </section>
        <section className="mt-16 md:mt-24 text-center h-dvh py-12 lg:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            As a seller, You cut your management costs to almost zero
          </h2>
          <p className="text-sm mt-6 text-muted-foreground">
            Here's how you can achieve this with KinteHobe:
          </p>

          <div className="w-full">
            <MagicBento
              textAutoHide={false}
              enableStars={false}
              // enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt
              enableMagnetism
              clickEffect
              spotlightRadius={400}
              // particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
            />
          </div>
        </section>
      </main>
    </>
  );
}
