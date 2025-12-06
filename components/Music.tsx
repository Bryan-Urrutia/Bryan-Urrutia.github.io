"use client";

import { AudioPlayer } from "react-audio-play";
import { useContext } from "react";
import {
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from "react-icons/bs";
import { MusicContext } from "@/context/MusicaContext";

const Music = () => {
  const music = useContext(MusicContext);

  if (!music) return null;

  const {
    songs,
    currentSongIndex,
    nextSong,
    prevSong,
  } = music;

  return (
    <div className="fixed w-full bg-gradient-to-r from-tertiary2/70 to-primary2/10 backdrop-blur-[5px] bottom-0 left-0 z-40">
      <div className="flex justify-center items-center w-full">
        <div className="hidden w-[300px] h-20 xl:flex items-center gap-x-4 p-2">
          {/* <div className="relative w-16 h-16 rounded-xl bg-white/20"></div> */}

          <div className="leading-none">
            <div className="text-3xl font-sacramento font-bold text-primary">
              {songs[currentSongIndex]?.autor}
            </div>
            <div className="text-2xl font-sacramento">
              {songs[currentSongIndex]?.titulo}
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl items-center flex">
          <div className="flex justify-between gap-5 mr-2">
            <BsSkipBackwardFill
              size={32}
              onClick={prevSong}
              className="cursor-pointer hover:text-red-500 text-white duration-300 transition-all"
            />
            <BsSkipForwardFill
              size={32}
              onClick={nextSong}
              className="cursor-pointer hover:text-red-500 text-white duration-300 transition-all"
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
