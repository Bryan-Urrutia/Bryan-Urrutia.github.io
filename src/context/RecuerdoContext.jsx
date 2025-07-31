"use client";
import axios from "axios";
import _ from "lodash";
import { createContext, useEffect, useState } from "react";
export const RecuerdoContext = createContext();

export const RecuerdoContextProvider = ({ children }) => {
  const [showRecuerdo, setShowRecuerdo] = useState(false);
  const [update, setUpdate] = useState(0);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [recuerdo, setRecuerdo] = useState({
    tipo: "",
    title: "",
    recuerdo: "",
    imagen: "",
    color: "#ffffff",
    dot_color: "#ffffff",
  });
  const [recuerdos, setRecuerdos] = useState([null]);

  const handleShowRecuerdo = () => {
    setShowRecuerdo(true);
  };

  const postRecuerdo = async (newRecuerdo) => {
    return axios.post(
      `https://678054ff85151f714b067e87.mockapi.io/recuerdo`,
      JSON.stringify(newRecuerdo),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const getAllRecuerdo = async () =>
    axios.get(`https://678054ff85151f714b067e87.mockapi.io/recuerdo/`);

  useEffect(() => {
    getAllRecuerdo()
      .then((res) => {
        setRecuerdos(_.get(res, "data", []));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const getRecuerdo = async (recuerdoId) =>
    axios.get(
      `https://678054ff85151f714b067e87.mockapi.io/recuerdo/${recuerdoId}`
    );

  const getByIdRecuerdo = async (recuerdoId) => {
    setLoadingUpdate(true);

    getRecuerdo(recuerdoId)
      .then((res) => {
        setRecuerdo(res.data);
        handleChangeSong(_.get(res, "data.song", []));
        setTimeout(() => {
          setLoadingUpdate(false);
        }, 100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postRecuerdo(recuerdo); // ✅ Espera a que termine
      setUpdate((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    setUpdate((prev) => prev + 1);
  };

  const putRecuerdo = async (newRecuerdo) => {
    return axios.put(
      `https://678054ff85151f714b067e87.mockapi.io/recuerdo/${newRecuerdo.id}`,
      JSON.stringify(newRecuerdo),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const res = await putRecuerdo(recuerdo); // ✅ Espera a que termine
      setRecuerdo(_.get(res, "data", []));
      setUpdate((prev) => prev + 1);
      setLoadingUpdate(false);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteRecuerdo = async (recuerdoId) =>
    axios.delete(
      `https://678054ff85151f714b067e87.mockapi.io/recuerdo/${recuerdoId}`
    );

  const handleDelete = (e, recuerdoId) => {
    e.preventDefault();
    deleteRecuerdo(recuerdoId)
      .then((res) => {
        setUpdate((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) =>
    setRecuerdo({ ...recuerdo, [e.target.name]: e.target.value });

  const handleChangeforName = (name, e) =>
    setRecuerdo({ ...recuerdo, [name]: e });

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
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

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
    setRecuerdo({ ...recuerdo, song: cancion.titulo });
  };

  const handleChangeSong = (titulo) => {
    const idCancion = songs.findIndex((song) => song.titulo === titulo);
    setCurrentSongIndex(idCancion);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");

        // 🔧 Ajusta tamaño deseado (ej: 300px de ancho)
        const MAX_WIDTH = 300;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 📦 Convierte a base64 (JPEG más liviano que PNG)
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7); // calidad entre 0 y 1

        handleChangeforName("imagen", compressedBase64);
        console.log("Compressed Base64:", compressedBase64);
      };
    };

    reader.readAsDataURL(file);
  };

  const [selectedFlorId, setSelectedFlorId] = useState(null); // null = mostrar todas

  const handleFlorClick = (id) => {
    setSelectedFlorId((prevId) => {
      const newId = prevId === id ? null : id;

      setTimeout(() => {
        // Quitar la clase del anterior (si existía)
        if (prevId !== null) {
          const prevElemLeft = document.getElementById(
            `recuerdo-left-${prevId}`
          );
          if (prevElemLeft) {
            prevElemLeft.classList.remove("visible");
          }
          const prevElemRight = document.getElementById(
            `recuerdo-right-${prevId}`
          );
          if (prevElemRight) {
            prevElemRight.classList.remove("visible");
          }
        }

        // Agregar clase al nuevo (si hay uno nuevo)
        if (newId !== null) {
          const newElemLeft = document.getElementById(`recuerdo-left-${newId}`);
          if (newElemLeft) {
            newElemLeft.classList.add("visible");
          }
          const newElemRight = document.getElementById(
            `recuerdo-right-${newId}`
          );
          if (newElemRight) {
            newElemRight.classList.add("visible");
          }
        }
      }, 100);

      return newId;
    });
  };

  return (
    <RecuerdoContext.Provider
      value={{
        showRecuerdo,
        handleShowRecuerdo,
        recuerdo,
        recuerdos,
        handleChange,
        handleChangeforName,
        handleSubmit,
        getByIdRecuerdo,
        loadingUpdate,
        songs,
        currentSongIndex,
        nextSong,
        prevSong,
        handleSong,
        handleChangeSong,
        handleUpdate,
        handleImageUpload,
        handleFlorClick,
        selectedFlorId,
      }}
    >
      {children}
    </RecuerdoContext.Provider>
  );
};
