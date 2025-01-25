"use client";
import { useContext, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CuentoContext } from "@/context/CuentoContext";
import Image from "next/image";
import { Button } from "../ui/button";
// import Music from "./Music";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const {
    showCuento,
    showVolver,
    handleShowMensaje,
    loadingCuento,
    showMensaje,
    Cuento,
    loadingMensaje,
    handleShowMain,
    loadingVolver,
    cuento,
  } = useContext(CuentoContext);

  return (
    <>
      {showCuento && (
        <div>
          <div
            className={`${
              loadingCuento ? "opacity-100" : "opacity-100"
            } transition-all duration-300 w-full flex justify-center items-center h-screen relative`}
          >
            <Button
              variant="destructive"
              className="absolute top-0 left-0 mt-40 ml-4 md:mt-20 xl:mt-5"
              onClick={handleShowMain}
            >
              Volver
            </Button>
            <Carousel className="w-[80%] sm:w-[70%] md:w-[80%] xl:w-[100%]">
              <CarouselContent>
                {cuento?.imagenes.map((ruta, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center">
                        <Image
                          src={ruta}
                          alt={ruta}
                          width={0}
                          height={0}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                          }}
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
