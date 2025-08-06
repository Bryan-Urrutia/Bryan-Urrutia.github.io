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

  const [cuentosWeb, setCuentosWeb] = useState([]);
  const [cuentos, setCuentos] = useState([]);

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

  const getAllCuento = async () =>
    axios.get(`https://689153cc447ff4f11fbc4784.mockapi.io/cuento/`);

  // 🔁 Dividir cuentos en páginas dobles (2 textos por "hoja")
  const dividirCuento = (texto, titulo = "Portada", palabrasPorParte = 130) => {
    const palabras = texto.split(" ");
    const partes = [];

    // Página 0: Portada con título en lado A y primer bloque de texto en lado B
    const ladoB_portada = palabras.slice(0, palabrasPorParte).join(" ");
    partes.push([titulo, ladoB_portada]);

    // Empezamos el índice desde la palabra siguiente a las usadas en lado B de portada
    let index = palabrasPorParte;

    // A partir de aquí llenamos páginas normales (lado A y lado B)
    while (index < palabras.length) {
      const lado1 = palabras.slice(index, index + palabrasPorParte).join(" ");
      const lado2 = palabras
        .slice(index + palabrasPorParte, index + palabrasPorParte * 2)
        .join(" ");
      partes.push([lado1, lado2]);
      index += palabrasPorParte * 2;
    }

    // Aseguramos que la última página tenga "Fin" en el lado derecho
    const ultima = partes[partes.length - 1];
    if (!ultima[1] || ultima[1].trim() === "") {
      ultima[1] = "Fin";
    } else {
      partes.push(["Fin"]);
    }

    return partes;
  };
  useEffect(() => {
    getAllCuento()
      .then((res) => {
        const data = _.get(res, "data", []);
        setCuentosWeb(data);

        const formateados = data.map((c) => ({
          id: c.id,
          titulo: c.titulo,
          color: c.color,
          paginas: dividirCuento(c.cuento, c.titulo),
        }));

        setCuentos(formateados);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  console.log(cuentos);

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
