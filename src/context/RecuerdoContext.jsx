"use client";
import { createContext, useEffect, useState } from "react";
export const RecuerdoContext = createContext();

export const RecuerdoContextProvider = ({ children }) => {
  const [showRecuerdo, setShowRecuerdo] = useState(false);

  const [flores, setFlores] = useState([
    {
      id: 1,
      tipo: "flor1",
      titulo: "Recuerdo 1",
      recuerdo: "Había una vez que...",
      imagen: "/cuentos/cuento1/1.jpg",
      color: "#4496ea",
    },
    {
      id: 2,
      tipo: "flor2",
      titulo: "Recuerdo 2",
      recuerdo: "Risas en el campo...",
      imagen: "/cuentos/cuento1/2.jpg",
      color: "#ffec02",
    },
    {
      id: 3,
      tipo: "flor1",
      titulo: "Recuerdo 3",
      recuerdo: "El cielo se pintó de rosa...",
      imagen: "/cuentos/cuento1/3.jpg",
      color: "#ff6f61",
    },
    {
      id: 4,
      tipo: "flor2",
      titulo: "Recuerdo 4",
      recuerdo: "Canciones junto al fuego...",
      imagen: "/cuentos/cuento1/4.jpg",
      color: "#6a0572",
    },
    {
      id: 5,
      tipo: "flor1",
      titulo: "Recuerdo 5",
      recuerdo: "Un secreto entre amigos...",
      imagen: "/cuentos/cuento1/5.jpg",
      color: "#2ecc71",
    },
    {
      id: 6,
      tipo: "flor2",
      titulo: "Recuerdo 6",
      recuerdo: "Dibujos en la arena...",
      imagen: "/cuentos/cuento1/6.jpg",
      color: "#e67e22",
    },
    {
      id: 7,
      tipo: "flor1",
      titulo: "Recuerdo 7",
      recuerdo: "Historias bajo las estrellas...",
      imagen: "/cuentos/cuento1/7.jpg",
      color: "#9b59b6",
    },
    {
      id: 8,
      tipo: "flor2",
      titulo: "Recuerdo 8",
      recuerdo: "La brisa del mar nos abrazaba...",
      imagen: "/cuentos/cuento1/8.jpg",
      color: "#1abc9c",
    },
    {
      id: 9,
      tipo: "flor1",
      titulo: "Recuerdo 9",
      recuerdo: "Un abrazo cálido en invierno...",
      imagen: "/cuentos/cuento1/9.jpg",
      color: "#34495e",
    },
    {
      id: 10,
      tipo: "flor2",
      titulo: "Recuerdo 10",
      recuerdo: "Los cuentos del abuelo...",
      imagen: "/cuentos/cuento1/10.jpg",
      color: "#f39c12",
    },
    {
      id: 11,
      tipo: "flor1",
      titulo: "Recuerdo 11",
      recuerdo: "Una tarde en bicicleta...",
      imagen: "/cuentos/cuento1/11.jpg",
      color: "#2980b9",
    },
    {
      id: 12,
      tipo: "flor2",
      titulo: "Recuerdo 12",
      recuerdo: "Nieve por primera vez...",
      imagen: "/cuentos/cuento1/12.jpg",
      color: "#d35400",
    },
    {
      id: 13,
      tipo: "flor1",
      titulo: "Recuerdo 13",
      recuerdo: "Tardes de lluvia y chocolate...",
      imagen: "/cuentos/cuento1/13.jpg",
      color: "#c0392b",
    },
    {
      id: 14,
      tipo: "flor2",
      titulo: "Recuerdo 14",
      recuerdo: "Juegos en el parque...",
      imagen: "/cuentos/cuento1/14.jpg",
      color: "#16a085",
    },
    {
      id: 15,
      tipo: "flor1",
      titulo: "Recuerdo 15",
      recuerdo: "Dibujos en la pared de la escuela...",
      imagen: "/cuentos/cuento1/15.jpg",
      color: "#7f8c8d",
    },
    {
      id: 16,
      tipo: "flor2",
      titulo: "Recuerdo 16",
      recuerdo: "La primera vez que vi el mar...",
      imagen: "/cuentos/cuento1/16.jpg",
      color: "#8e44ad",
    },
    {
      id: 17,
      tipo: "flor1",
      titulo: "Recuerdo 17",
      recuerdo: "Un paseo por el bosque...",
      imagen: "/cuentos/cuento1/17.jpg",
      color: "#27ae60",
    },
    {
      id: 18,
      tipo: "flor2",
      titulo: "Recuerdo 18",
      recuerdo: "La canción que siempre cantábamos...",
      imagen: "/cuentos/cuento1/18.jpg",
      color: "#e84393",
    },
    {
      id: 19,
      tipo: "flor1",
      titulo: "Recuerdo 19",
      recuerdo: "Una carta escrita a mano...",
      imagen: "/cuentos/cuento1/19.jpg",
      color: "#00cec9",
    },
    {
      id: 20,
      tipo: "flor2",
      titulo: "Recuerdo 20",
      recuerdo: "Las luces de la feria brillaban tanto...",
      imagen: "/cuentos/cuento1/20.jpg",
      color: "#fd79a8",
    },
  ]);

  const handleShowRecuerdo = () => {
    setShowRecuerdo(true);
  };

  return (
    <RecuerdoContext.Provider
      value={{
        showRecuerdo,
        handleShowRecuerdo,
        flores,
      }}
    >
      {children}
    </RecuerdoContext.Provider>
  );
};
