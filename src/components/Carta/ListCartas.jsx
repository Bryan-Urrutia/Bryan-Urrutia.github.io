import { CartaContext } from "@/context/CartaContext";
import React, { useContext } from "react";
import "./style.css";
import AddCarta from "./AddCarta";
import UpdateCarta from "./UpdateCarta";
import DeleteCarta from "./DeleteCarta";

const ListCartas = () => {
  const {
    carta,
    cartas,
    showMain,
    handleShowCarta,
    getByIdCarta,
    setUpdateModal,
    setDeleteModal,
    handleRefresh,
  } = useContext(CartaContext);

  return (
    <>
      {showMain && (
        <section className="bg-light dark:bg-dark flex flex-row gap-x-4  min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
          <article className="container mx-auto py-10">
            <div className="min-h-screen md:pb-16 w-full">
              <AddCarta />
              <UpdateCarta />
              <DeleteCarta />
              <div
                id="cloud"
                className="cursor-pointer"
                onClick={(e) => {
                  handleRefresh(e);
                }}
                style={{ position: "fixed", top: "60px", right: "60px" }}
              >
                <p className="relative text-secondary z-50 text-4xl font-medium select-none">
                  Recargar
                </p>
                <span className="shadow"></span>
              </div>
              <div className="lg:grid flex flex-col lg:grid-cols-2">
                {cartas.map((carta, index) => {
                  return (
                    <div
                      id="envelope"
                      className="relative flex justify-center items-center align-middle"
                      key={index}
                    >
                      <div
                        className="hidden md:flex wing left bottom-[60px] cursor-pointer"
                        onClick={() => {
                          setUpdateModal(true);
                          getByIdCarta(carta.id);
                        }}
                        style={{
                          "--left_wing_color": carta?.color?.left_wing,
                        }}
                      ></div>
                      <div
                        className="hidden md:flex wing right bottom-[60px]"
                        onClick={() => {
                          setDeleteModal(true);
                          getByIdCarta(carta.id);
                        }}
                        style={{
                          "--right_wing_color": carta?.color?.right_wing,
                        }}
                      ></div>
                      {/* <div
                        className="hidden md:flex wing left bottom-[60px]"
                        style={{ "--left_wing_color": carta?.color?.left_wing }}
                      ></div> */}
                      <div
                        className="cursor-pointer"
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
                            "--left_side": carta?.color?.left_side,
                            "--right_side": carta?.color?.right_side,
                            "--up_side": carta?.color?.up_side,
                            "--down_side": carta?.color?.down_side,
                          }}
                        >
                          <div
                            className="heart"
                            style={{
                              boxShadow: "-10px 10px 90px #ff4757",
                              "--heart": carta?.color?.heart,
                            }}
                          >
                            <p className="absolute rotate-45 text-center left-[35px] top-[20px] z-20 select-none">
                              {carta?.id}
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
