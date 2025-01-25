"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
export const CuentoContext = createContext();

export const CuentoContextProvider = ({ children }) => {
  const [showMain, setShowMain] = useState(true);
  const [showCuento, setShowCuento] = useState(false);
  const [showVolver, setShowVolver] = useState(false);
  const [loadingMain, setLoadingMain] = useState(true);
  const [loadingCuento, setLoadingCuento] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [update, setUpdate] = useState(0);
  const [cuento, setCuento] = useState(null);

  const [cuentos, setCuentos] = useState([
    {
      id: 1,
      portada: "/cuentos/cuento1/chanchitos1.jpg",
      imagenes: ["/cuentos/cuento1/1.jpg", "/cuentos/cuento1/2.jpg"],
    },
    {
      id: 2,
      portada: "/cuentos/cuento2/chanchitos2.jpg",
      imagenes: [],
    },
  ]);

  const handleShowMain = () => {
    setShowMain(true);
    setShowCuento(false);
  };

  const handleShowCuento = () => {
    setShowCuento(true);
    setShowMain(false);
  };

  const obtenerCuentoPorId = (cuentoId) => {
    const cuentoEncontrado = cuentos.find((cuento) => cuento.id === cuentoId);
    return cuentoEncontrado ? cuentoEncontrado : null;
  };

  const getByIdCuento = (cuentoId) => {
    const cuento = obtenerCuentoPorId(cuentoId);
    setCuento(cuento);
  };

  console.log(cuento);

  return (
    <CuentoContext.Provider
      value={{
        handleShowCuento,
        handleShowMain,
        showMain,
        showCuento,
        cuentos,
        cuento,
        getByIdCuento,
        loadingMain,
        loadingCuento,
        setLoadingMain,
        setLoadingCuento,
      }}
    >
      {children}
    </CuentoContext.Provider>
  );
};
