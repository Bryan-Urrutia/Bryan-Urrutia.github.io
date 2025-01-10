"use client";
import { useContext, useEffect } from "react";
import "./style.css";

import Link from "next/link";
import { motion } from "framer-motion";
import { CartaContext } from "@/context/CartaContext";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const { showCarta, handleShowMensaje, loadingCarta } =
    useContext(CartaContext);

  return (
    <div
      className={`${
        loadingCarta ? "opacity-100" : "opacity-100"
      } transition-all duration-300`}
    >
      {showCarta && (
        <section>
          <div
            className="valentines-day relative cursor-pointer"
            onClick={() => {
              handleShowMensaje();
            }}
          >
            <div
              className="relative drop-shadow-2xl before:absolute before:w-[254px] before:h-[254px] before:rounded-r-[2px] before:rounded-l-[2px] before:left-[-37px] before:-top-[82px] before:-rotate-45 
                after:content-none after:absolute after:w-[360px] after:h-[225px] after:-left-[90px] top-[0px] before:bg-[#ff9494] after:bg-[#ff9494]"
            ></div>
            <div
              className="heart relative inline-block h-[180px] top-[50px] left-[0px] -rotate-45 w-[180px]
                shadow-lg transition-all duration-500
                
                before:h-[180px] before:w-[180px] before:absolute
                before:-top-[100px] before:left-0 before:rounded-[50%]

                after:h-[180px] after:w-[180px] after:absolute 
                after:top-[0px] after:left-[100px] after:rounded-[50%]
                before:bg-red after:bg-red bg-red"
            ></div>
            <div className="text2 text-4xl">Te quiero</div>
            <div
              className="absolute w-0 h-0 
              border-r-[190px] border-solid
              border-t-[113px] border-t-[transparent]
              border-b-[113px] border-b-[transparent]
              top-[44px] left-[80px] z-10

              before:absolute before:w-0 before:h-0 before:border-solid 
              before:border-l-[190px] 
              before:border-t-[113px] before:border-t-transparent
              before:border-b-[113px] before:border-b-transparent
              before:-top-[113px] before:-left-[170px]

              after:w-0 after:h-0 after:absolute
              after:border-l-[180px] after:border-l-transparent
              after:border-r-[180px] after:border-r-transparent
              after:border-b-[150px]
              after:-top-[36px] after:-left-[170px]
              before:border-l-[#fbd2d2] border-r-[#fbd2d2] after:border-b-[#fce7e9]
            "
            ></div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
