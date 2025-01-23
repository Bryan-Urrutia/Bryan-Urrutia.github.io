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
    getByIdCuento,
    cuento,
  } = useContext(CuentoContext);

  useEffect(() => {
    getByIdCuento(1);
  }, []);

  console.log(cuento);

  return (
    <>
      <div
        className={`${
          loadingCuento ? "opacity-100" : "opacity-100"
        } transition-all duration-300 w-full flex justify-center items-center h-screen`}
      >
        {/* {cuento?.imagenes.map((ruta, index) => {
          return <img key={index} src={ruta}></img>;
        })} */}

        <Carousel className="w-[90%] sm:w-[80%] xl:w-[70%]">
          <CarouselContent>
            {cuento?.imagenes.map((ruta, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="flex aspect-video items-center justify-center">
                    <Image
                      src={ruta}
                      width={0}
                      height={0}
                      alt={ruta}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }} // optional
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
    </>
  );
};

export default Page;
