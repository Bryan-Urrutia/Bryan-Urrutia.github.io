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
          <Carousel className="">
            <CarouselContent>
              <CarouselItem>
                <div className="flex h-screen items-start pt-52 justify-center bg-green-300">
                  <div className="flower">
                    <div className="girasol leaf leaf-0"></div>
                    <div className="girasol leaf leaf-1"></div>
                    <div className="girasol leaf leaf-2"></div>
                    <div className="girasol leaf leaf-3"></div>
                    <div className="girasol leaf leaf-4"></div>
                    <div className="girasol leaf leaf-5"></div>
                    <div className="girasol leaf leaf-6"></div>
                    <div className="girasol leaf leaf-7"></div>
                    <div className="girasol leaf leaf-8"></div>
                    <div className="girasol leaf leaf-9"></div>
                    <div className="girasol leaf leaf-10"></div>
                    <div className="girasol leaf leaf-11"></div>
                    <div className="girasol leaf leaf-12"></div>
                    <div className="girasol leaf leaf-13"></div>
                    <div className="girasol leaf leaf-14"></div>
                    <div className="girasol leaf leaf-15"></div>
                    <div className="girasol dot"></div>
                    <div className="stem">
                      <div className="stemleaf leaf-0"></div>
                      <div className="stemleaf leaf-1"></div>
                      <div className="stemleaf leaf-2"></div>
                      <div className="stemleaf leaf-3"></div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex h-screen items-start pt-52 justify-center bg-green-300">
                  <div className="flower">
                    <div className="tulipan leaf leaf-0"></div>
                    <div className="tulipan leaf leaf-1"></div>
                    <div className="tulipan leaf leaf-2"></div>
                    <div className="tulipan leaf leaf-3"></div>
                    <div className="tulipan leaf leaf-4"></div>
                    <div className="tulipan leaf leaf-5"></div>
                    <div className="tulipan leaf leaf-6"></div>
                    <div className="tulipan leaf2 leaf-7"></div>
                    <div className="tulipan leaf2 leaf-8"></div>
                    <div className="tulipan leaf2 leaf-9"></div>
                    <div className="tulipan leaf2 leaf-10"></div>
                    <div className="tulipan leaf2 leaf-11"></div>
                    <div className="tulipan leaf2 leaf-12"></div>
                    <div className="tulipan leaf2 leaf-13"></div>
                    {/* <div className="dot"></div> */}
                    <div className="stem">
                      <div className="stemleaf leaf-0"></div>
                      <div className="stemleaf leaf-1"></div>
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
      {/* <section className="flex flex-row gap-x-4 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
        <article className="container mx-auto">
          <Carousel className="w-[80%] sm:w-[70%] md:w-[80%] xl:w-[100%]">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-video items-center justify-center pt-80">
                  e
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
      </section> */}
    </>
  );
};

export default Page;
