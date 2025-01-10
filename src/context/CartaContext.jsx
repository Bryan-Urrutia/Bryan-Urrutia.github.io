"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
export const CartaContext = createContext();

export const CartaContextProvider = ({ children }) => {
  const [showMain, setShowMain] = useState(true);
  const [showCarta, setShowCarta] = useState(false);
  const [showMensaje, setShowMensaje] = useState(false);
  const [loadingCarta, setLoadingCarta] = useState(false);
  const [loadingMensaje, setLoadingMensaje] = useState(false);
  const [update, setUpdate] = useState(0);

  const handleShowMain = () => {
    setShowMain(true);
    setShowMensaje(false);
    setShowCarta(false);
  };

  const handleShowCarta = () => {
    setShowCarta(true);
    setShowMain(false);
    setShowMensaje(false);

    setTimeout(() => {
      setLoadingCarta(true);
    }, 100);
  };

  const handleShowMensaje = () => {
    setShowMensaje(true);
    setShowCarta(false);
    setShowMain(false);

    setTimeout(() => {
      setLoadingMensaje(true);
    }, 100);
  };

  const [carta, setCarta] = useState({
    para: "Test1",
    de: "Test2",
    izquierda: "mensaje",
    derecha: "",
    fecha: "2025-08-01",
    desactivado: true,
  });

  const [cartas, setCartas] = useState([null]);

  const getByIdCarta = async (cartaId) => {
    setCarta(cartas[cartaId]);
  };

  const postCarta = async (newCarta) =>
    axios.post(
      `https://678054ff85151f714b067e87.mockapi.io/carta`,
      JSON.stringify(newCarta),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const getAllCarta = async () =>
    axios.get(`https://678054ff85151f714b067e87.mockapi.io/carta/`);

  const getCarta = async (cartaId, subformId) =>
    axios.get(`https://678054ff85151f714b067e87.mockapi.io/carta/${cartaId}`);

  const putCarta = async (newCarta) =>
    axios.put(
      `https://678054ff85151f714b067e87.mockapi.io/carta/${newCarta._id}`,
      JSON.stringify(newCarta),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const deleteCarta = async (cartaId) =>
    axios.delete(
      `https://678054ff85151f714b067e87.mockapi.io/carta/${cartaId}`
    );

  useEffect(() => {
    getAllCarta()
      .then((res) => {
        // console.log(res.data);
        setCartas(_.get(res, "data", []));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  return (
    <CartaContext.Provider
      value={{
        handleShowCarta,
        handleShowMain,
        handleShowMensaje,
        showMain,
        showCarta,
        showMensaje,
        cartas,
        carta,
        setCarta,
        getByIdCarta,
        loadingCarta,
        loadingMensaje,
      }}
    >
      {children}
    </CartaContext.Provider>
  );
};
