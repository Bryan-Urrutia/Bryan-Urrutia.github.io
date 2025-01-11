"use client";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Music = () => {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.4, duration: 0.4 }}
        className="bg-gradient-to-r from-tertiary2/70 to-primary2/10 backdrop-blur-[5px] flex items-center z-40 sticky bottom-0 w-full"
      >
        <div className="flex justify-center w-full">
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            <div className="relative w-16 h-16">
              {/* <Image src={"/assets/player/avatar.png"} fill alt="" priority /> */}
            </div>
            <div className="leading-none">
              <div className="text-lg font-medium">Morat</div>
              <div className="text-sm font-light">En un sólo día</div>
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              autoPlay
              width={"100%"}
              color="#fff"
              volume={10}
              volumePlacement="top"
              src="/assets/solo_dia.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Music;
