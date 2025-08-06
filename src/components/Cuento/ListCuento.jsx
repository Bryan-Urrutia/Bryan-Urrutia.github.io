import React, { useContext, useEffect, useRef, useState } from "react";
import { CuentoContext } from "@/context/CuentoContext";
import LibroInteractivo from "./LibroInteractivo";

const ListCuentos = () => {
  const { showMain, cuentos } = useContext(CuentoContext);

  return (
    <>
      {showMain && (
        <article className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-20 my-5 h-screen items-center place-items-center pt-10 pb-10 md:pt-0 mb-20">
          {cuentos.map((c, index) => (
            <div key={index}>
              <LibroInteractivo paginas={c.paginas} color={c?.color} />
            </div>
          ))}
        </article>
      )}
    </>
  );
};

export default ListCuentos;
