"use client";
import { useContext, useEffect } from "react";
import "./style.css";

import { CartaContext } from "@/context/CartaContext";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const { showCarta, handleShowMensaje, loadingCarta } =
    useContext(CartaContext);

  useEffect(() => {
    // Añadir la clase al body al montar el componente
    if (showCarta) {
      document.body.classList.add("flores");
    } else {
      // document.body.classList.remove("flores");
    }
  }, [showCarta]);

  return (
    <div
      className={`${
        loadingCarta ? "opacity-100" : "opacity-100"
      } transition-all duration-300`}
    >
      {showCarta && (
        <section className={`${showCarta ? "" : "bg-light dark:bg-dark "}`}>
          <section className="md:pb-16 w-full">
            <div>
              <div className="night"></div>
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
                {showCarta && (
                  <div
                    id="envelope"
                    className="flex justify-center items-center align-middle"
                  >
                    <div className="hidden md:flex wing right bg-green-200 before:bg-green-300 after:bg-green-300 bottom-[60px]"></div>
                    <div className="hidden md:flex wing left bg-green-300 before:bg-green-300 after:bg-green-300 bottom-[60px]"></div>
                    <div
                      onClick={() => {
                        handleShowMensaje();
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
                )}
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  );
};

export default Page;
