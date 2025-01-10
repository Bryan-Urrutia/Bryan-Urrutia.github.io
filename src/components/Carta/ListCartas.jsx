import { CartaContext } from "@/context/CartaContext";
import React, { useContext } from "react";
import "./style.css";

const ListCartas = () => {
  const { cartas, showMain, handleShowCarta, getByIdCarta } =
    useContext(CartaContext);
  return (
    <>
      {showMain && (
        <section className="bg-light dark:bg-dark flex flex-row gap-x-4  min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
          <article className="container mx-auto py-10">
            <div className="min-h-screen md:pb-16 w-full">
              <div className="lg:grid flex flex-col lg:grid-cols-2">
                {cartas.map((carta, index) => {
                  return (
                    <div
                      id="envelope"
                      className="relative flex justify-center items-center align-middle"
                      key={index}
                    >
                      <div className="hidden md:flex wing right bg-green-200 before:bg-green-300 after:bg-green-300 bottom-[60px]"></div>
                      <div className="hidden md:flex wing left bg-green-300 before:bg-green-300 after:bg-green-300 bottom-[60px]"></div>
                      <div
                        onClick={() => {
                          handleShowCarta();
                          getByIdCarta(carta.id);
                        }}
                      >
                        <div className="top"></div>
                        <div
                          className="sides"
                          style={{
                            boxShadow: "-10px 10px 90px #ff4757",
                            borderColor: "#ff4757 #000000 #f7f7f7 #6a0b0b",
                          }}
                        >
                          <div
                            className="heart"
                            style={{ boxShadow: "-10px 10px 90px #ff4757" }}
                          >
                            <p className="absolute rotate-45 text-center left-[35px] top-[20px] z-20">
                              1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default ListCartas;
