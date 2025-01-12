"use client";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { SkipForward, StepBack } from "lucide-react";
import { useEffect, useState } from "react";
import { RiSkipRightFill } from "react-icons/ri";
import {
  BsSkipBackwardBtnFill,
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from "react-icons/bs";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const songs = [
  { src: "/assets/Solo_dia.mp3", autor: "Morat", titulo: "En un solo día" },
  { src: "/assets/Amapolas.mp3", autor: "Leo Rizzi", titulo: "Amapolas" },
  { src: "/assets/Besame.mp3", autor: "Camila", titulo: "Bésame" },

  {
    src: "/assets/Coleccionista.mp3",
    autor: "Camila",
    titulo: "Coleccionista de Canciones",
  },
  { src: "/assets/Solo_para_ti.mp3", autor: "Camila", titulo: "Solo para ti" },
  {
    src: "/assets/Caminar_Mano.mp3",
    autor: " Rio Roma ft. Fonseca",
    titulo: "Caminar de tú mano",
  },
  {
    src: "/assets/Colgando.mp3",
    autor: "Carlos Baute",
    titulo: " Colgando en Tus Manos",
  },
  {
    src: "/assets/Bonita.mp3",
    autor: "Canción Bonita",
    titulo: "Canción Bonita",
  },
  {
    src: "/assets/Casate.mp3",
    autor: "Silvestre Dangond",
    titulo: "Cásate Conmigo",
  },

  { src: "/assets/Enamore.mp3", autor: "Chayanne", titulo: "Me Enamoré De Ti" },
  {
    src: "/assets/Esclavo.mp3",
    autor: "David Bisbal",
    titulo: "Esclavo De Sus Besos",
  },
  {
    src: "/assets/Enamoro.mp3",
    autor: "Enrique Iglesias",
    titulo: "Cuando Me Enamoro",
  },

  { src: "/assets/Enamora.mp3", autor: "Juanes", titulo: "Me Enamora" },
  { src: "/assets/Muero.mp3", autor: "La Quinta Estación", titulo: "Me Muero" },
  {
    src: "/assets/Destino.mp3",
    autor: "Melendi",
    titulo: "Destino o Casualidad",
  },
  { src: "/assets/Desde.mp3", autor: "Natalino", titulo: "Desde que te vi" },
  {
    src: "/assets/Cambiaste.mp3",
    autor: "Río Roma",
    titulo: "Tú me cambiaste la vida",
  },
  { src: "/assets/Miedo.mp3", autor: "Alex Ubago", titulo: "Sin miedo a nada" },
];

const Music = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomIndex);
  }, []);

  return (
    <div className="fixed w-full bg-gradient-to-r from-tertiary2/70 to-primary2/10 backdrop-blur-[5px] bottom-0 left-0">
      <div className="flex justify-center items-center w-full">
        <div className="hidden w-[300px] xl:flex items-center gap-x-4">
          <div className="relative w-16 h-16">
            {/* <Image src={"/assets/player/avatar.png"} fill alt="" priority /> */}
          </div>
          <div className="leading-none">
            <div className="text-lg font-medium">
              {songs[currentSongIndex]?.autor}
            </div>
            <div className="text-sm font-light">
              {songs[currentSongIndex]?.titulo}
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl items-center flex">
          <div className="flex justify-between gap-5 mr-2">
            <BsSkipBackwardFill
              size={32}
              onClick={prevSong}
              className="cursor-pointer hover:text-red duration-300 transition-all"
            />
            <BsSkipForwardFill
              size={32}
              onClick={nextSong}
              className="cursor-pointer hover:text-red duration-300 transition-all"
            />
          </div>
          <AudioPlayer
            loop
            autoPlay
            width={"100%"}
            color="#fff"
            volume={5}
            volumePlacement="top"
            src={songs[currentSongIndex]?.src}
            style={{
              background: "transparent",
              boxShadow: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
