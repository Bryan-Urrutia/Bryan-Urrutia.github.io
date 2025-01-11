"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
export const CartaContext = createContext();

export const CartaContextProvider = ({ children }) => {
  const [showMain, setShowMain] = useState(true);
  const [showCarta, setShowCarta] = useState(false);
  const [showMensaje, setShowMensaje] = useState(false);
  const [showVolver, setShowVolver] = useState(false);
  const [loadingCarta, setLoadingCarta] = useState(false);
  const [loadingMensaje, setLoadingMensaje] = useState(false);
  const [loadingVolver, setLoadingVolver] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [update, setUpdate] = useState(0);

  const [colores, setColores] = useState([
    {
      id: 1,
      tipo: "Lidia",
      left_side: "#E0CEF2",
      right_side: "#E0CEF2",
      up_side: "#D7ADFF",
      down_side: "#D7ADFF",
      left_wing: "#F2F2F2",
      right_wing: "#F2F2F2",
      heart: "#ff4757",
    },
    {
      id: 2,
      tipo: "Bryan",
      left_side: "#eecd7b",
      right_side: "#eecd7b",
      up_side: "#d4a733",
      down_side: "#d4a733",
      left_wing: "#F2F2F2",
      right_wing: "#F2F2F2",
      heart: "#4496ea",
    },
  ]);

  const handleShowMain = () => {
    setShowMain(true);
    setShowMensaje(false);
    setShowCarta(false);
    setShowVolver(false);
    setLoadingMensaje(false);
    setLoadingCarta(false);
    setLoadingVolver(false);
  };

  const handleShowCarta = () => {
    setShowCarta(true);
    setShowMain(false);
    setShowMensaje(false);
    setShowVolver(true);

    setTimeout(() => {
      setLoadingCarta(true);
      setLoadingVolver(true);
    }, 5000);
  };

  const handleShowMensaje = () => {
    setShowMensaje(true);
    setShowCarta(false);
    setShowMain(false);
    setShowVolver(true);

    setTimeout(() => {
      setLoadingMensaje(true);
      setLoadingVolver(true);
    }, 100);
  };

  const [carta, setCarta] = useState(null);

  const handleSetCarta = () => {
    setCarta({
      para: "",
      de: "",
      izquierda: "",
      derecha: "",
      desactivado: false,
    });
  };

  const [cartas, setCartas] = useState([null]);

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

  const getCarta = async (cartaId) =>
    axios.get(`https://678054ff85151f714b067e87.mockapi.io/carta/${cartaId}`);

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

  useEffect(() => {
    if (addModal) {
      handleSetCarta();
    }
  }, [addModal]);

  const getByIdCarta = async (cartaId) => {
    setLoadingUpdate(true);

    getCarta(cartaId)
      .then((res) => {
        // console.log(res.data);
        setCarta(_.get(res, "data", []));
        setTimeout(() => {
          setLoadingUpdate(false);
        }, 100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCarta(carta)
      .then((res) => {
        setUpdate((prev) => prev + 1);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setAddModal(false);
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    setUpdate((prev) => prev + 1);
  };

  const putCarta = async (newCarta) => {
    console.log("New carta", newCarta.id);

    axios.put(
      `https://678054ff85151f714b067e87.mockapi.io/carta/${newCarta.id}`,
      JSON.stringify(newCarta),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("handleUpdate " + carta.id);

    putCarta(carta)
      .then((res) => {
        console.log(res);
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
    setUpdateModal(false);
  };

  const handleChange = (e) =>
    setCarta({ ...carta, [e.target.name]: e.target.value });

  const obtenerColoresPorTipo = (tipo) => {
    const colorEncontrado = colores.find((color) => color.tipo === tipo);
    return colorEncontrado ? colorEncontrado : null;
  };

  const handleStyle = (tipo) => {
    const coloresLidia = obtenerColoresPorTipo(tipo);
    setCarta({ ...carta, color: coloresLidia });
  };

  return (
    <CartaContext.Provider
      value={{
        handleShowCarta,
        handleShowMain,
        handleShowMensaje,
        handleSetCarta,
        showMain,
        showCarta,
        showMensaje,
        showVolver,
        cartas,
        carta,
        setCarta,
        getByIdCarta,
        loadingCarta,
        loadingMensaje,
        loadingVolver,
        addModal,
        setAddModal,
        updateModal,
        setUpdateModal,
        setCarta,
        handleSubmit,
        handleChange,
        handleStyle,
        handleUpdate,
        loadingUpdate,
      }}
    >
      {children}
    </CartaContext.Provider>
  );
};
