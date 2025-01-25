import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { CuentoContext } from "@/context/CuentoContext";

const ListCuentos = () => {
  const { cuentos, getByIdCuento, showMain, handleShowCuento } =
    useContext(CuentoContext);
  return (
    <>
      {showMain && (
        <article className="container mx-auto my-4 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-y-4 gap-x-8 md:align-middle">
          {cuentos.map((cuento, index) => (
            <Card
              onClick={() => {
                getByIdCuento(cuento.id);
                handleShowCuento();
              }}
              key={index}
              className="flex group aspect-video h-[220px] w-full relative items-center justify-center bg-transparent mt-0 border-none overflow-hidden cursor-pointer"
            >
              <Image
                className="transition-all duration-700 absolute opacity-100 group-hover:opacity-0"
                src="/cuentos/portada.jpg"
                alt={index}
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
              <Image
                src={cuento?.portada}
                alt={"cuento" + index}
                priority={true}
                width={0}
                height={0}
                className="transition-all duration-700 opacity-0 group-hover:opacity-100 "
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </Card>
          ))}
        </article>
      )}
    </>
  );
};

export default ListCuentos;
