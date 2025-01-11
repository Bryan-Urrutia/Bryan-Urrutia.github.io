"use client";
import { useContext, useEffect } from "react";
import "./style.css";

import Link from "next/link";
import { CartaContext } from "@/context/CartaContext";

const Mensaje = () => {
  const { showMensaje, carta, loadingMensaje } = useContext(CartaContext);
  return (
    <>
      {showMensaje && (
        <section className="">
          <div id="card">
            <div className="side one">
              <h2 className="text-primary select-none">{carta.para}</h2>
              <p className="text-primary pt-4 select-none">{carta.izquierda}</p>
            </div>
            <div className="side two">
              <p className="text-primary py-4 select-none">{carta.derecha}</p>
              <p className="flex justify-end select-none">{carta.de}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Mensaje;
