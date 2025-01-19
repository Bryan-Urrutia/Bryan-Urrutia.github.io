"use client";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { SkipForward, StepBack } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { RiSkipRightFill } from "react-icons/ri";
import {
  BsSkipBackwardBtnFill,
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from "react-icons/bs";
import { CartaContext } from "@/context/CartaContext";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Music = () => {
  const { songs, currentSongIndex, nextSong, prevSong } =
    useContext(CartaContext);

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
