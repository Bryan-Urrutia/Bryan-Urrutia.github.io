"use client";

import supabase from "@/config/supabaseClient";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // si lo usas

export interface Recuerdo {
	tipo: string,
	song: string,
	color: string,
	autor: string,
	title: string,
	recuerdo: string,
	imagen: string,
	dot_color: string,
	fecha: string,
	id: string
}

interface PreviewType {
	flor: string;
	color: string;
	dot_color: string;
	autor: string;
	titulo: string;
	recuerdo: string;
	foto: File | null;
}

interface RecuerdoContextType {
	recuerdos: Recuerdo[],
	showModal: boolean,
	setShowModal: (estado: boolean) => void,
	setColor: React.Dispatch<React.SetStateAction<string>>;
	setDotColor: React.Dispatch<React.SetStateAction<string>>;
	setFlor: React.Dispatch<React.SetStateAction<string>>;
	setRecuerdo: React.Dispatch<React.SetStateAction<string>>;
	setTitulo: React.Dispatch<React.SetStateAction<string>>;
	setAutor: React.Dispatch<React.SetStateAction<string>>;
	postFile: (foto: File) => Promise<string | { error: any }>,
	postRecuerdo: (newRecuerdo: Recuerdo) => void,
	preview: PreviewType;
	setPreview: React.Dispatch<React.SetStateAction<PreviewType>>;
}

export const RecuerdoContext = createContext<RecuerdoContextType | null>(null);

export const RecuerdoContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false);
	const [color, setColor] = useState('#fff');
	const [dotColor, setDotColor] = useState('#fff');
	const [flor, setFlor] = useState('flor1');
	const [recuerdo, setRecuerdo] = useState('Recuerdo');
	const [titulo, setTitulo] = useState('Titulo');
	const [autor, setAutor] = useState('Autor');
	const [fotos, setFotos] = useState([]);

	const [recuerdos, setRecuerdos] = useState<Recuerdo[]>([]);
	const [update, setUpdate] = useState(0);

	const [preview, setPreview] = useState<PreviewType>({
		flor: "",
		color: "",
		dot_color: "",
		autor: "",
		titulo: "",
		recuerdo: "",
		foto: null,
	});

	useEffect(() => {
		const getAllCarta = async () => {
			const { data, error } = await supabase
				.from('Recuerdo')
				.select()

			if (data) {
				setRecuerdos(data);
			}
		}

		getAllCarta()
	}, [update]);

	// useEffect(() => {
	// 	const getAllFotos = async () => {
	// 		const { data, error } =  supabase
	// 			.storage.from('nido')
	// 		;
	// 		if (data) {
	// 			setRecuerdos(data);
	// 		}
	// 	}

	// 	getAllFotos()
	// }, [update]);

	/*
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

				// handleChangeforName("imagen", compressedBase64);
				console.log("Compressed Base64:", compressedBase64);
			};
		};

		reader.readAsDataURL(file);
	};
	*/


	const postFile = async (foto: File) => {
		const fileName = `${uuidv4()}-${foto.name}`;

		const { data, error } = await supabase.storage
			.from("nido")
			.upload(fileName, foto);

		if (error) return { error };

		return data.fullPath;
	};

	const postRecuerdo = async (recuerdo: Recuerdo) => {
		const { data, error } = await supabase
			.from("Recuerdo")
			.insert([
				{
					tipo: recuerdo.tipo,
					song: recuerdo.song,
					color: recuerdo.color,
					autor: recuerdo.autor,
					title: recuerdo.title,
					recuerdo: recuerdo.recuerdo,
					imagen: recuerdo.imagen,
					dot_color: recuerdo.dot_color,
				},
			]);

		if (error) {
			console.error("Error insertando recuerdo:", error);
			return { error };
		}
		setUpdate((prev) => prev + 1);
		return { data };
	};

	return (
		<RecuerdoContext.Provider
			value={{
				recuerdos,
				showModal,
				setShowModal,
				setColor,
				setDotColor,
				setFlor,
				setAutor,
				setTitulo,
				setRecuerdo,
				postFile,
				postRecuerdo,
				preview,
				setPreview
			}}
		>
			{children}
		</RecuerdoContext.Provider>
	);
};
