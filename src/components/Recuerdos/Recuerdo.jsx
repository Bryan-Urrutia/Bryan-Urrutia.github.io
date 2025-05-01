"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RecuerdoContext } from "@/context/RecuerdoContext";
import Image from "next/image";
import { useContext } from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const { showRecuerdo, handleShowRecuerdo } = useContext(RecuerdoContext);
  return (
    <>
      <section className="flex flex-row gap-x-4 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
        <article className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 h-screen items-center place-items-center">
          <div
            id="recuerdo"
            className={`${
              showRecuerdo ? "opacity-100 inline-block" : "opacity-0 hidden"
            } side one transition-all duration-500`}
          >
            <h2 className="text-secondary select-none">Recuerdo 1</h2>
            <p className="text-secondary pt-[0.1rem] select-none">Textot</p>
          </div>
          <div className="h-96 pb-40 flex justify-center items-center">
            <div className="flower" onClick={handleShowRecuerdo}>
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
              </div>
            </div>
          </div>
          <div
            id="recuerdo"
            className={`${
              showRecuerdo ? "opacity-100 inline-block" : "opacity-0 hidden"
            } side two transition-all duration-500`}
          >
            <h2 className="text-secondary select-none">Imagen</h2>
            <p className="text-secondary pt-[0.1rem] select-none">Imagen</p>
          </div>
          <div
            className={`${
              showRecuerdo ? "opacity-100 inline-block" : "opacity-0 hidden"
            } side one transition-all duration-500`}
          >
            <h2 className="text-primary select-none">Hola</h2>
            <p className="text-primary pt-[0.1rem] select-none">Textot</p>
          </div>
          <div className="h-96 pb-40 flex justify-center items-center">
            <div className="flower" onClick={handleShowRecuerdo}>
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
              <div className="stem">
                <div className="stemleaf leaf-0"></div>
                <div className="stemleaf leaf-1"></div>
              </div>
            </div>
          </div>
          <div
            id="recuerdo"
            className={`${
              showRecuerdo ? "opacity-100 inline-block" : "opacity-0 hidden"
            } side two transition-all duration-500`}
          >
            <h2 className="text-secondary select-none">Hola</h2>
            <p className="text-secondary pt-[0.1rem] select-none">Textot</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Page;
