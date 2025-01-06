"use client";
import { useEffect } from "react";
import "./style.css"; // Asegúrate de importar el archivo CSS correctamente

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  useEffect(() => {
    // Asegurarnos de que los elementos están disponibles
    const leftCurtain = document.querySelector(".left-curtain");
    const rightCurtain = document.querySelector(".right-curtain");
    const valentinesDay = document.querySelector(".valentines-day");
    const envelope = document.querySelector(".envelope");
    const card = document.querySelector("#card");

    // Verificamos si los elementos existen antes de modificarlos
    if (leftCurtain && rightCurtain) {
      leftCurtain.style.width = "0%";
      rightCurtain.style.width = "0%";
    }

    if (valentinesDay) {
      valentinesDay.addEventListener("click", () => {
        if (envelope) {
          envelope.style.animation = "fall 3s linear 1";
        }

        setTimeout(() => {
          // Verificamos si los elementos existen antes de ocultarlos
          const heart = document.querySelector(".valentines-day .heart");
          const text = document.querySelector(".valentines-day .text");
          const front = document.querySelector(".valentines-day .front");

          if (heart && text && front) {
            heart.style.display = "none";
            text.style.display = "none";
            front.style.display = "none";
          }

          // Ocultar el contenedor de valentinesDay
          if (valentinesDay) {
            valentinesDay.style.display = "none"; // O puedes usar `visibility: hidden;`
          }

          // Hacer visible la carta con una animación ondulante
          if (card) {
            card.style.visibility = "visible";
            card.style.opacity = 0;
            card.style.transform = "scale(0.1)";

            let startTime;
            const animateCard = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const scale = 1 + Math.sin((progress * Math.PI) / 1000) * 0.1; // Calculamos la escala basada en el tiempo
              card.style.transform = `scale(${scale})`;
              card.style.opacity = progress / 1000; // Animación de desvanecimiento

              if (progress < 1000) {
                requestAnimationFrame(animateCard);
              }
            };
            requestAnimationFrame(animateCard);
          }
        }, 800);
      });
    }

    // Limpiar el evento al desmontar el componente
    return () => {
      if (valentinesDay) {
        valentinesDay.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <section className="bg-light dark:bg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full carta">
      <div className="valentines-day">
        <div className="envelope"></div>
        <div className="heart"></div>
        <div className="text">
          PARA: <br />
          LIDIA CANO
        </div>
        <div className="front"></div>
      </div>

      <div id="card">
        <div className="side one">
          <h2 className="text-primary ">Para mi lady</h2>
          <Link
            href="/flores"
            className="capitalize relative hover:text-primary transition-all"
          >
            <motion.span
              initial={{ y: "-180%" }}
              animate={{ y: 0 }}
              transition={{ type: "twenn" }}
              layoutId="underline"
              className="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            Flores
          </Link>
        </div>
        <div className="side two">
          <h2 className="text-primary">Para mi lady</h2>
          <p className="text-primary">
            Querida Lidia quiero qué sepas desde el día qué te conocí me has
            hecho el hombre más feliz, los días qué hemos compartido
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
