"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  return (
    <>
      <section className="flex flex-row gap-x-4 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
        <article className="container mx-auto">
          <Carousel className="w-[80%] sm:w-[70%] md:w-[80%] xl:w-[100%]">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-video items-center justify-center pt-80">
                  <div
                    class="bucket"
                    style={{
                      "--color-claro": "#58c1d8",
                      "--color-base": "#38a9b7",
                      "--color-interior": "#d8b37c",
                    }}
                  ></div>
                  <div class="flower__wrapper">
                    <div class="flower">
                      <Image
                        className="imagen"
                        src={"/recuerdos/girasol.png"}
                        alt={"girasol"}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
      </section>
    </>
  );
};

export default Page;
