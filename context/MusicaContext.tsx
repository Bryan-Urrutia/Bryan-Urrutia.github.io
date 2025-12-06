"use client";

import { createContext, useEffect, useRef, useState } from "react";

interface Song {
  src: string;
  autor: string;
  titulo: string;
}

interface MusicContextType {
  songs: Song[];
  currentSongIndex: number;
  currentSong: Song;
  isPlaying: boolean;
  nextSong: () => void;
  prevSong: () => void;
  handleChangeSong: (titulo: string) => void;
}

export const MusicContext = createContext<MusicContextType | null>(null);

export const MusicContextProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [songs, setSongs] = useState<Song[]>([
    { src: "/cancion/Sabes.mp3", autor: "Reik", titulo: "Sabes" },
    { src: "/cancion/Solo_dia.mp3", autor: "Morat", titulo: "En un solo día" },
    { src: "/cancion/Amapolas.mp3", autor: "Leo Rizzi", titulo: "Amapolas" },
    { src: "/cancion/Besame.mp3", autor: "Camila", titulo: "Bésame" },
    { src: "/cancion/Coleccionista.mp3", autor: "Camila", titulo: "Coleccionista de Canciones" },
    { src: "/cancion/Solo_para_ti.mp3", autor: "Camila", titulo: "Solo para ti" },
    { src: "/cancion/Caminar_Mano.mp3", autor: "Rio Roma ft. Fonseca", titulo: "Caminar de tú mano" },
    { src: "/cancion/Colgando.mp3", autor: "Carlos Baute", titulo: "Colgando en Tus Manos" },
    { src: "/cancion/Bonita.mp3", autor: "Carlos Vives", titulo: "Canción Bonita" },
    { src: "/cancion/Casate.mp3", autor: "Silvestre Dangond", titulo: "Cásate Conmigo" },
    { src: "/cancion/Enamore.mp3", autor: "Chayanne", titulo: "Me Enamoré De Ti" },
    { src: "/cancion/Esclavo.mp3", autor: "David Bisbal", titulo: "Esclavo De Sus Besos" },
    { src: "/cancion/Enamoro.mp3", autor: "Enrique Iglesias", titulo: "Cuando Me Enamoro" },
    { src: "/cancion/Enamora.mp3", autor: "Juanes", titulo: "Me Enamora" },
    { src: "/cancion/Muero.mp3", autor: "La Quinta Estación", titulo: "Me Muero" },
    { src: "/cancion/Destino.mp3", autor: "Melendi", titulo: "Destino o Casualidad" },
    { src: "/cancion/Desde.mp3", autor: "Natalino", titulo: "Desde que te vi" },
    { src: "/cancion/Cambiaste.mp3", autor: "Río Roma", titulo: "Tú me cambiaste la vida" },
    { src: "/cancion/Miedo.mp3", autor: "Alex Ubago", titulo: "Sin miedo a nada" },
    { src: "/cancion/Chk_Chk_Boom.mp3", autor: "Stray Kids", titulo: "Chk Chk Boom" },
    { src: "/cancion/StrayKids.mp3", autor: "Stray Kids", titulo: "Stray Kids" },
    { src: "/cancion/llegaste_tu.mp3", autor: "Sin bandera", titulo: "Y llegaste tú" },
    { src: "/cancion/Navidad.mp3", autor: "Santa", titulo: "Feliz Navidad" },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Ordenar canciones al principio
  useEffect(() => {
    setSongs((prev) => [...prev].sort((a, b) => a.titulo.localeCompare(b.titulo)));
  }, []);

  // Song actual
  const currentSong = songs[currentSongIndex];

  // Cambia la canción cuando cambia el índice
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = currentSong.src;
    if (isPlaying) audioRef.current.play();
  }, [currentSongIndex]);

  // Siguiente
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  // Anterior
  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  // Cambia canción por título
  const handleChangeSong = (titulo: string) => {
    const index = songs.findIndex((s) => s.titulo === titulo);
    if (index !== -1) {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        songs,
        currentSongIndex,
        currentSong,
        isPlaying,
        nextSong,
        prevSong,
        handleChangeSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
