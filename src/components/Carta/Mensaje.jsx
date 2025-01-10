"use client";
import { useContext, useEffect } from "react";
import "./style.css";

import Link from "next/link";
import { CartaContext } from "@/context/CartaContext";

const Mensaje = () => {
  const { showMensaje, carta, loadingMensaje } = useContext(CartaContext);
  return (
    <div
      className={`${
        loadingMensaje ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      {showMensaje && (
        <section className="">
          <div id="card">
            <div className="side one">
              <h2 className="text-primary ">{carta.para}</h2>
              <p className="text-primary pt-4">{carta.izquierda}</p>
            </div>
            <div className="side two">
              <p className="text-primary py-4">{carta.derecha}</p>
              <p className="flex justify-end">{carta.de}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Mensaje;
