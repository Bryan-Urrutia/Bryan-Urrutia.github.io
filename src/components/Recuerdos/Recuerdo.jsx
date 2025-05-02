"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RecuerdoContext } from "@/context/RecuerdoContext";
import Image from "next/image";
import React, { useContext } from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const { flores, showRecuerdo, handleShowRecuerdo } =
    useContext(RecuerdoContext);
  return (
    <>
      <section className="flex flex-row gap-x-4 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
        <article className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 h-screen items-center place-items-center">
          {flores.map((flor, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  id="recuerdo"
                  className={`${
                    showRecuerdo
                      ? "opacity-100 inline-block"
                      : "opacity-0 hidden"
                  } side one transition-all duration-500`}
                >
                  <h2 className="text-secondary select-none">{flor.titulo}</h2>
                  <p className="text-secondary pt-[0.1rem] select-none">
                    {flor.recuerdo}
                  </p>
                </div>
                {flor.tipo == "flor1" && (
                  <div className="h-96 pb-40 flex justify-center items-center">
                    <div className="flower" onClick={handleShowRecuerdo}>
                      <div
                        className="girasol leaf leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-4"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-5"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-6"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-7"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-8"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-9"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-10"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-11"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-12"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-13"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-14"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol leaf leaf-15"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="girasol dot"
                        style={{ "--dot_color": flor.dot_color }}
                      ></div>
                      <div className="stem">
                        <div className="stemleaf leaf-0"></div>
                        <div className="stemleaf leaf-1"></div>
                      </div>
                      <div className="glass-group">
                        <div className="glass glass-1"></div>
                        <div className="glass glass-2"></div>
                        <div className="glass glass-3"></div>
                        <div className="glass glass-4"></div>
                        <div className="glass glass-5"></div>
                        <div className="glass glass-6"></div>
                      </div>
                    </div>
                  </div>
                )}
                {flor.tipo == "flor2" && (
                  <div className="h-96 pb-40 flex justify-center items-center">
                    <div className="flower" onClick={handleShowRecuerdo}>
                      <div
                        className="tulipan leaf leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf leaf-4"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf leaf-5"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf leaf-6"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-7"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-8"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-9"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-10"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-11"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-12"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="tulipan leaf2 leaf-13"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div className="stem">
                        <div className="stemleaf leaf-0"></div>
                        <div className="stemleaf leaf-1"></div>
                      </div>
                      <div className="glass-group">
                        <div className="glass glass-1"></div>
                        <div className="glass glass-2"></div>
                        <div className="glass glass-3"></div>
                        <div className="glass glass-4"></div>
                        <div className="glass glass-5"></div>
                        <div className="glass glass-6"></div>
                      </div>
                    </div>
                  </div>
                )}
                {flor.tipo == "flor3" && (
                  <div className="h-96 pb-40 flex justify-center items-center">
                    <div className="flower" onClick={handleShowRecuerdo}>
                      <div
                        className="flor3 leaf leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-4"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-5"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-6"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-7"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-8"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-9"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-10"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-11"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-12"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-13"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-14"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 leaf leaf-15"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor3 dot"
                        style={{ "--dot_color": flor.dot_color }}
                      ></div>
                      <div className="stem">
                        <div className="stemleaf leaf-0"></div>
                        <div className="stemleaf leaf-1"></div>
                      </div>
                      <div className="glass-group">
                        <div className="glass glass-1"></div>
                        <div className="glass glass-2"></div>
                        <div className="glass glass-3"></div>
                        <div className="glass glass-4"></div>
                        <div className="glass glass-5"></div>
                        <div className="glass glass-6"></div>
                      </div>
                    </div>
                  </div>
                )}
                {flor.tipo == "flor4" && (
                  <div className="h-96 pb-40 flex justify-center items-center">
                    <div className="flower" onClick={handleShowRecuerdo}>
                      <div
                        className="flor4 leaf leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf leaf-4"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf leaf-5"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf2 leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf2 leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf2 leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf2 leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf2 leaf-4"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 leaf2 leaf-5"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor4 dot"
                        style={{ "--dot_color": flor.dot_color }}
                      ></div>
                      <div className="stem">
                        <div className="stemleaf leaf-0"></div>
                        <div className="stemleaf leaf-1"></div>
                      </div>
                      <div className="glass-group">
                        <div className="glass glass-1"></div>
                        <div className="glass glass-2"></div>
                        <div className="glass glass-3"></div>
                        <div className="glass glass-4"></div>
                        <div className="glass glass-5"></div>
                        <div className="glass glass-6"></div>
                      </div>
                    </div>
                  </div>
                )}
                {flor.tipo == "flor5" && (
                  <div className="h-96 pb-40 flex justify-center items-center">
                    <div className="flower" onClick={handleShowRecuerdo}>
                      <div
                        className="heart leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="heart leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="heart leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="heart leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor5 dot"
                        style={{ "--dot_color": flor.dot_color }}
                      ></div>
                      <div className="flor5 stem">
                        <div className="stemleaf leaf-0"></div>
                        <div className="stemleaf leaf-1"></div>
                      </div>
                      <div className="glass-group">
                        <div className="glass glass-1"></div>
                        <div className="glass glass-2"></div>
                        <div className="glass glass-3"></div>
                        <div className="glass glass-4"></div>
                        <div className="glass glass-5"></div>
                        <div className="glass glass-6"></div>
                      </div>
                    </div>
                  </div>
                )}
                {flor.tipo == "flor6" && (
                  <div className="h-96 pb-40 flex justify-center items-center">
                    <div className="flower" onClick={handleShowRecuerdo}>
                      <div
                        className="flor6 leaf leaf-0"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-1"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-2"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-3"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-4"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-5"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-6"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-7"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-8"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-9"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-10"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-11"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-12"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-13"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-14"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor6 leaf leaf-15"
                        style={{ "--leaf_color": flor.color }}
                      ></div>
                      <div
                        className="flor5 dot"
                        style={{ "--dot_color": flor.dot_color }}
                      ></div>
                      <div className="flor5 stem">
                        <div className="stemleaf leaf-0"></div>
                        <div className="stemleaf leaf-1"></div>
                      </div>
                      <div className="glass-group">
                        <div className="glass glass-1"></div>
                        <div className="glass glass-2"></div>
                        <div className="glass glass-3"></div>
                        <div className="glass glass-4"></div>
                        <div className="glass glass-5"></div>
                        <div className="glass glass-6"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div
                  id="recuerdo"
                  className={`${
                    showRecuerdo
                      ? "opacity-100 inline-block"
                      : "opacity-0 hidden"
                  } side two transition-all duration-500 w-full flex flex-col gap-2 justify-start items-center overflow-hidden`}
                >
                  <h2 className="text-secondary select-none">Imagen</h2>
                  <div>
                    <img
                      src={flor.imagen
                        .replace(
                          "https://drive.google.com/file/d/",
                          "https://drive.google.com/thumbnail?id="
                        )
                        .replace("/view?usp=drive_link", "")}
                      alt={"Recuerdo"}
                      width={0}
                      height={0}
                      style={{
                        width: "300px",
                        height: "90%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Page;
