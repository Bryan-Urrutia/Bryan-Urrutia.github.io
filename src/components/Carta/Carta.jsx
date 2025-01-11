"use client";
import { useContext, useEffect } from "react";
import "./style.css";

import { CartaContext } from "@/context/CartaContext";
import Mensaje from "./Mensaje";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const {
    showCarta,
    showVolver,
    handleShowMensaje,
    loadingCarta,
    showMensaje,
    carta,
    loadingMensaje,
    handleShowMain,
    loadingVolver,
  } = useContext(CartaContext);

  useEffect(() => {
    // Añadir la clase al body al montar el componente
    if (showVolver) {
      document.body.classList.add("flores");
    } else {
      document.body.classList.remove("flores");
    }
  }, [showVolver]);

  return (
    <>
      <div
        className={`${
          loadingCarta ? "opacity-100" : "opacity-100"
        } transition-all duration-300`}
      >
        <div className="night"></div>
        {loadingVolver && (
          <div
            id="cloud"
            className="cursor-pointer"
            onClick={() => {
              handleShowMain();
            }}
            style={{ position: "absolute", top: "60px", left: "10px" }}
          >
            <p className="relative text-secondary z-50 text-4xl font-medium">
              Volver
            </p>
            <span className="shadow"></span>
          </div>
        )}
        {(showCarta || showMensaje) && (
          <section className={`${showCarta ? "" : "bg-light dark:bg-dark "}`}>
            <section className="md:pb-16 w-full">
              <div>
                <div className="grid grid-cols-2">
                  <div className="flowers -left-[530px]">
                    <div className="flower flower--1">
                      <div className="flower__leafs flower__leafs--1">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                      </div>
                      <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                        <div className="flower__line__leaf flower__line__leaf--5"></div>
                        <div className="flower__line__leaf flower__line__leaf--6"></div>
                      </div>
                    </div>

                    <div className="flower flower--2">
                      <div className="flower__leafs flower__leafs--2">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                      </div>
                      <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                      </div>
                    </div>

                    <div className="flower flower--3">
                      <div className="flower__leafs flower__leafs--3">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                      </div>
                      <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "1.2s" }}>
                      <div className="flower__g-long">
                        <div className="flower__g-long__top"></div>
                        <div className="flower__g-long__bottom"></div>
                      </div>
                    </div>

                    <div className="growing-grass">
                      <div className="flower__grass flower__grass--1">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                      </div>
                    </div>

                    <div className="growing-grass">
                      <div className="flower__grass flower__grass--2">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.4s" }}>
                      <div className="flower__g-right flower__g-right--1">
                        <div className="leaf"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.8s" }}>
                      <div className="flower__g-right flower__g-right--2">
                        <div className="leaf"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.8s" }}>
                      <div className="flower__g-front">
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__line"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "3.2s" }}>
                      <div className="flower__g-fr">
                        <div className="leaf"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--0">
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "2.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.4s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--1">
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.8s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--2">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.4s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--3">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--4">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--5">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--6">
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.4s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.6s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.8s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--7">
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.5s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flowers left-[550px]">
                    <div className="flower flower--1">
                      <div className="flower__leafs flower__leafs--1">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                      </div>
                      <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                        <div className="flower__line__leaf flower__line__leaf--5"></div>
                        <div className="flower__line__leaf flower__line__leaf--6"></div>
                      </div>
                    </div>

                    <div className="flower flower--2">
                      <div className="flower__leafs flower__leafs--2">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                      </div>
                      <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                      </div>
                    </div>

                    <div className="flower flower--3">
                      <div className="flower__leafs flower__leafs--3">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                      </div>
                      <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "1.2s" }}>
                      <div className="flower__g-long">
                        <div className="flower__g-long__top"></div>
                        <div className="flower__g-long__bottom"></div>
                      </div>
                    </div>

                    <div className="growing-grass">
                      <div className="flower__grass flower__grass--1">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                      </div>
                    </div>

                    <div className="growing-grass">
                      <div className="flower__grass flower__grass--2">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.4s" }}>
                      <div className="flower__g-right flower__g-right--1">
                        <div className="leaf"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.8s" }}>
                      <div className="flower__g-right flower__g-right--2">
                        <div className="leaf"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.8s" }}>
                      <div className="flower__g-front">
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                          <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__line"></div>
                      </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "3.2s" }}>
                      <div className="flower__g-fr">
                        <div className="leaf"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--0">
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "2.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.4s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--1">
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.8s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--2">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.4s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--3">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--4">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--5">
                      <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--6">
                      <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.4s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.6s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "4.8s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>

                    <div className="long-g long-g--7">
                      <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--0"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.2s" }}>
                        <div className="leaf leaf--1"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.5s" }}>
                        <div className="leaf leaf--2"></div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center align-middle">
                  <div
                    className={`${
                      loadingCarta ? "opacity-100" : "opacity-0"
                    } transition-all duration-300`}
                  >
                    {showCarta && (
                      <div
                        id="envelope"
                        className="flex justify-center items-center align-middle"
                      >
                        <div
                          className="hidden md:flex wing right bottom-[60px]"
                          style={{
                            "--right_wing_color": carta?.color?.right_wing,
                          }}
                        ></div>
                        <div
                          className="hidden md:flex wing left bottom-[60px]"
                          style={{
                            "--left_wing_color": carta?.color?.left_wing,
                          }}
                        ></div>
                        <div
                          onClick={() => {
                            handleShowMensaje();
                          }}
                          className="cursor-pointer"
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
                              <p className="absolute rotate-45 text-center left-[35px] top-[20px] z-20">
                                {carta?.id}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className={`${
                      loadingMensaje ? "opacity-100" : "opacity-0"
                    } transition-all duration-300`}
                  >
                    <Mensaje />
                    {/* {showMensaje && (
                      <section className="">
                        <div id="card">
                          <div className="side one">
                            <h2 className="text-primary select-none">
                              {carta.para}
                            </h2>
                            <p className="text-primary pt-4 select-none">
                              {carta.izquierda}
                            </p>
                          </div>
                          <div className="side two">
                            <p className="text-primary py-4 select-none">
                              {carta.derecha}
                            </p>
                            <p className="flex justify-end select-none">
                              {carta.de}
                            </p>
                          </div>
                        </div>
                      </section>
                    )} */}
                  </div>
                </div>
              </div>
            </section>
          </section>
        )}
      </div>
    </>
  );
};

export default Page;
