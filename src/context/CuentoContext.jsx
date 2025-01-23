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
  const [loadingMensaje, setLoadingMensaje] = useState(false);
  const [loadingVolver, setLoadingVolver] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [update, setUpdate] = useState(0);
  const [cuento, setCuento] = useState(null);

  const handleShowMain = () => {
    setShowMain(true);
    setShowCuento(false);
  };

  const handleShowCuento = () => {
    setShowCuento(true);
    setShowMain(false);
  };

  const getCuento = async (cuentoId) =>
    axios.get(`https://678054ff85151f714b067e87.mockapi.io/cuento/${cuentoId}`);

  const getByIdCuento = async (cuentoId) => {
    setLoadingUpdate(true);

    getCuento(cuentoId)
      .then((res) => {
        // console.log(res.data);
        setCuento(_.get(res, "data", []));
        setTimeout(() => {
          setLoadingUpdate(false);
        }, 100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CuentoContext.Provider
      value={{
        handleShowCuento,
        handleShowMain,
        showMain,
        showCuento,
        cuento,
        getByIdCuento,
      }}
    >
      {children}
    </CuentoContext.Provider>
  );
};
