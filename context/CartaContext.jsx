"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
export const CartaContext = createContext();

export const CartaContextProvider = ({ children }) => {
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [update, setUpdate] = useState(0);
  const [carta, setCarta] = useState(null);
  const [estilo, setEstilo] = useState(null);

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
    {
      id: 3,
      tipo: "Claudia",
      left_side: "#00AAE4",
      right_side: "#00AAE4",
      up_side: "#51D1F6",
      down_side: "#51D1F6",
      left_wing: "#F2F2F2",
      right_wing: "#F2F2F2",
      heart: "#ff4757",
    },
      {
        id: 4,
        tipo: "Navidad",
        left_side: "#2E7D32",     // verde navideño
        right_side: "#2E7D32",    // verde navideño
        up_side: "#C62828",       // rojo navideño
        down_side: "#C62828",     // rojo navideño
        left_wing: "#D4AF37",     // blanco nieve
        right_wing: "#D4AF37",    // blanco nieve
        heart: "#D4AF37",         // dorado brillante
    }
  ]);


  const handleSetCarta = () => {
    setCarta({
      para: "",
      de: "",
      izquierda: "",
      derecha: "",
      desactivado: false,
      song: "",
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

  useEffect(() => {
    getAllCarta()
      .then((res) => {
        setCartas(_.get(res, "data", []));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  // useEffect(() => {
  //   if (addModal) {
  //     handleSetCarta();
  //   }
  // }, [addModal]);

  const getByIdCarta = async (cartaId) => {
    // setLoadingUpdate(true);

    getCarta(cartaId)
      .then((res) => {
        setCarta(_.get(res, "data", []));
        handleChangeSong(_.get(res, "data.song", []));
        setTimeout(() => {
          // setLoadingUpdate(false);
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

  // const putCarta = async (newCarta) => {
  //   console.log("New carta", newCarta.id);

  //   axios.put(
  //     `https://678054ff85151f714b067e87.mockapi.io/carta/${newCarta.id}`,
  //     JSON.stringify(newCarta),
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // };

  const handleUpdate = (event) => {
    event.preventDefault();
    putCarta(carta)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCarta = async (cartaId) =>
    axios.delete(
      `https://678054ff85151f714b067e87.mockapi.io/carta/${cartaId}`
    );

  const handleDelete = (e, cartaId) => {
    e.preventDefault();
    deleteCarta(cartaId)
      .then((res) => {
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const [songs, setSongs] = useState([
    { src: "/assets/Sabes.mp3", autor: "Reik", titulo: "Sabes" },
    { src: "/assets/Solo_dia.mp3", autor: "Morat", titulo: "En un solo día" },
    { src: "/assets/Amapolas.mp3", autor: "Leo Rizzi", titulo: "Amapolas" },
    { src: "/assets/Besame.mp3", autor: "Camila", titulo: "Bésame" },

    {
      src: "/assets/Coleccionista.mp3",
      autor: "Camila",
      titulo: "Coleccionista de Canciones",
    },
    {
      src: "/assets/Solo_para_ti.mp3",
      autor: "Camila",
      titulo: "Solo para ti",
    },
    {
      src: "/assets/Caminar_Mano.mp3",
      autor: " Rio Roma ft. Fonseca",
      titulo: "Caminar de tú mano",
    },
    {
      src: "/assets/Colgando.mp3",
      autor: "Carlos Baute",
      titulo: "Colgando en Tus Manos",
    },
    {
      src: "/assets/Bonita.mp3",
      autor: "Carlos Vives",
      titulo: "Canción Bonita",
    },
    {
      src: "/assets/Casate.mp3",
      autor: "Silvestre Dangond",
      titulo: "Cásate Conmigo",
    },

    {
      src: "/assets/Enamore.mp3",
      autor: "Chayanne",
      titulo: "Me Enamoré De Ti",
    },
    {
      src: "/assets/Esclavo.mp3",
      autor: "David Bisbal",
      titulo: "Esclavo De Sus Besos",
    },
    {
      src: "/assets/Enamoro.mp3",
      autor: "Enrique Iglesias",
      titulo: "Cuando Me Enamoro",
    },

    { src: "/assets/Enamora.mp3", autor: "Juanes", titulo: "Me Enamora" },
    {
      src: "/assets/Muero.mp3",
      autor: "La Quinta Estación",
      titulo: "Me Muero",
    },
    {
      src: "/assets/Destino.mp3",
      autor: "Melendi",
      titulo: "Destino o Casualidad",
    },
    { src: "/assets/Desde.mp3", autor: "Natalino", titulo: "Desde que te vi" },
    {
      src: "/assets/Cambiaste.mp3",
      autor: "Río Roma",
      titulo: "Tú me cambiaste la vida",
    },
    {
      src: "/assets/Miedo.mp3",
      autor: "Alex Ubago",
      titulo: "Sin miedo a nada",
    },
    {
      src: "/assets/Chk_Chk_Boom.mp3",
      autor: "Stray Kids",
      titulo: "Chk Chk Boom",
    },
    {
      src: "/assets/StrayKids.mp3",
      autor: "Stray Kids",
      titulo: "Stray Kids",
    },
    {
      src: "/assets/llegaste_tu.mp3",
      autor: "Sin bandera",
      titulo: "Y llegaste tú",
    },
        {
      src: "/assets/Navidad.mp3",
      autor: "Santa",
      titulo: "Feliz Navidad",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(1);

  useEffect(() => {
    setSongs((prevSongs) =>
      [...prevSongs].sort((a, b) => a.titulo.localeCompare(b.titulo))
    );
  }, []);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomIndex);
  }, []);

  const obtenerCancionPorNombre = (titulo) => {
    const cancionEncontrada = songs.find(
      (cancion) => cancion.titulo === titulo
    );
    return cancionEncontrada ? cancionEncontrada : null;
  };

  const handleSong = (titulo) => {
    const cancion = obtenerCancionPorNombre(titulo);
    handleChangeSong(titulo);
    setCarta({ ...carta, song: cancion.titulo });
  };

  const handleChangeSong = (titulo) => {
    const idCancion = songs.findIndex((song) => song.titulo === titulo);
    setCurrentSongIndex(idCancion);
  };

  return (
    <CartaContext.Provider
      value={{
        handleSetCarta,
        cartas,
        carta,
        setCarta,
        getByIdCarta,
        loadingCarta,
        loadingMain,
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
        deleteModal,
        setDeleteModal,
        handleDelete,
        handleRefresh,
        colores,
        songs,
        currentSongIndex,
        nextSong,
        prevSong,
        handleSong,
        handleChangeSong,
      }}
    >
      {children}
    </CartaContext.Provider>
  );
};
