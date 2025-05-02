"use client";
import { createContext, useEffect, useState } from "react";
export const RecuerdoContext = createContext();

export const RecuerdoContextProvider = ({ children }) => {
  const [showRecuerdo, setShowRecuerdo] = useState(false);
  const [flores, setFlores] = useState([
    {
      id: 1,
      tipo: "flor3",
      titulo: "Recuerdo 1",
      recuerdo: "Había una vez que...",
      imagen:
        "https://drive.google.com/file/d/1BKbFk-A3Od9fUnh0Qd7nT9T9wVAeNMNm/view?usp=drive_link",
      color: "#f39c12",
      dot_color: "#ffffff",
    },
    {
      id: 2,
      tipo: "flor1",
      titulo: "Recuerdo 2",
      recuerdo: "Risas en el campo...",
      imagen:
        "https://drive.google.com/file/d/1ziwEXbxC1A3YgnJjCVbRzyjrKxPi450V/view?usp=drive_link",
      color: "#4496ea",
      dot_color: "#ffffff",
    },
    {
      id: 3,
      tipo: "flor5",
      titulo: "Recuerdo 3",
      recuerdo: "El cielo se pintó de rosa...",
      imagen:
        "https://drive.google.com/file/d/1P6e6MQQ5BbBqn_BbzKnaiFb5aX6BCV-t/view?usp=drive_link",
      color: "#2ecc71",
      dot_color: "#ffffff",
    },
    {
      id: 4,
      tipo: "flor2",
      titulo: "Recuerdo 4",
      recuerdo: "Canciones junto al fuego...",
      imagen:
        "https://drive.google.com/file/d/1xmvDFWFCek81WMJ1FULuqE2MMf1T6LLV/view?usp=drive_link",
      color: "#ffec02",
      dot_color: "#000000",
    },
    {
      id: 5,
      tipo: "flor6",
      titulo: "Recuerdo 5",
      recuerdo: "Un secreto entre amigos...",
      imagen:
        "https://drive.google.com/file/d/1Ce8j6tiAPQxanT7tmjQ-nzH8ZsMK8YST/view?usp=drive_link",
      color: "#d35400",
      dot_color: "#ffffff",
    },
    {
      id: 6,
      tipo: "flor4",
      titulo: "Recuerdo 6",
      recuerdo: "Dibujos en la arena...",
      imagen: "/cuentos/cuento1/6.jpg",
      color: "#6a0572",
      dot_color: "#6a0572",
    },
    {
      id: 7,
      tipo: "flor1",
      titulo: "Recuerdo 7",
      recuerdo: "Historias bajo las estrellas...",
      imagen: "/cuentos/cuento1/7.jpg",
      color: "#9b59b6",
      dot_color: "#ffffff",
    },
    {
      id: 8,
      tipo: "flor3",
      titulo: "Recuerdo 8",
      recuerdo: "La brisa del mar nos abrazaba...",
      imagen: "/cuentos/cuento1/8.jpg",
      color: "#1abc9c",
      dot_color: "#ffffff",
    },
    {
      id: 9,
      tipo: "flor2",
      titulo: "Recuerdo 9",
      recuerdo: "Un abrazo cálido en invierno...",
      imagen: "/cuentos/cuento1/9.jpg",
      color: "#34495e",
      dot_color: "#f1c40f",
    },
    {
      id: 10,
      tipo: "flor6",
      titulo: "Recuerdo 10",
      recuerdo: "Los cuentos del abuelo...",
      imagen: "/cuentos/cuento1/10.jpg",
      color: "#e84393",
      dot_color: "#ffffff",
    },
    {
      id: 11,
      tipo: "flor5",
      titulo: "Recuerdo 11",
      recuerdo: "Una tarde en bicicleta...",
      imagen: "/cuentos/cuento1/11.jpg",
      color: "#2980b9",
      dot_color: "#ffffff",
    },
    {
      id: 12,
      tipo: "flor3",
      titulo: "Recuerdo 12",
      recuerdo: "Nieve por primera vez...",
      imagen: "/cuentos/cuento1/12.jpg",
      color: "#c0392b",
      dot_color: "#ffffff",
    },
    {
      id: 13,
      tipo: "flor4",
      titulo: "Recuerdo 13",
      recuerdo: "Tardes de lluvia y chocolate...",
      imagen: "/cuentos/cuento1/13.jpg",
      color: "#8e44ad",
      dot_color: "#8e44ad",
    },
    {
      id: 14,
      tipo: "flor6",
      titulo: "Recuerdo 14",
      recuerdo: "Juegos en el parque...",
      imagen: "/cuentos/cuento1/14.jpg",
      color: "#e67e22",
      dot_color: "#ffffff",
    },
    {
      id: 15,
      tipo: "flor1",
      titulo: "Recuerdo 15",
      recuerdo: "Dibujos en la pared de la escuela...",
      imagen: "/cuentos/cuento1/15.jpg",
      color: "#7f8c8d",
      dot_color: "#ffffff",
    },
    {
      id: 16,
      tipo: "flor2",
      titulo: "Recuerdo 16",
      recuerdo: "La primera vez que vi el mar...",
      imagen: "/cuentos/cuento1/16.jpg",
      color: "#16a085",
      dot_color: "#ffffff",
    },
    {
      id: 17,
      tipo: "flor5",
      titulo: "Recuerdo 17",
      recuerdo: "Un paseo por el bosque...",
      imagen: "/cuentos/cuento1/17.jpg",
      color: "#27ae60",
      dot_color: "#ffffff",
    },
    {
      id: 18,
      tipo: "flor4",
      titulo: "Recuerdo 18",
      recuerdo: "La canción que siempre cantábamos...",
      imagen: "/cuentos/cuento1/18.jpg",
      color: "#f8c291",
      dot_color: "#f8c291",
    },
    {
      id: 19,
      tipo: "flor3",
      titulo: "Recuerdo 19",
      recuerdo: "Una carta escrita a mano...",
      imagen: "/cuentos/cuento1/19.jpg",
      color: "#00cec9",
      dot_color: "#ffffff",
    },
    {
      id: 20,
      tipo: "flor6",
      titulo: "Recuerdo 20",
      recuerdo: "Las luces de la feria brillaban tanto...",
      imagen: "/cuentos/cuento1/20.jpg",
      color: "#fd79a8",
      dot_color: "#ffffff",
    },
    {
      id: 21,
      tipo: "flor2",
      titulo: "Recuerdo 21",
      recuerdo: "Saltando charcos después de la lluvia...",
      imagen: "/cuentos/cuento1/21.jpg",
      color: "#f1c40f",
      dot_color: "#000000",
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
