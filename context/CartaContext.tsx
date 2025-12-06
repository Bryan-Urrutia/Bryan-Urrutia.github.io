"use client";
import { createContext, useEffect, useState } from "react";
import supabase from '../config/supabaseClient';
import axios from "axios";
import _ from "lodash";

interface Colores {
	id: string,
	tipo: string,
	left_side: string,
	right_side: string,
	up_side: string,
	down_side: string,
	left_wing: string,
	right_wing: string,
	heart: string,
}

export interface Carta {
	id: string,
	para: string,
	de: string,
	izquierda: string,
	derecha: string,
	desactivado: boolean,
	song: string,
	color: Colores | null;
}

interface CartaContextType {
	cartas: Carta[];
	carta: Carta;
	colores: Colores[];
	setCarta: React.Dispatch<React.SetStateAction<Carta>>;
	loadingCarta: boolean;
	// handleSubmit: (event: any) => void;
	handleChange: (e: any) => void
	obtenerColoresPorTipo: (tipo: string) => Colores | null;
	postCarta: (newCarta: Carta) => void,
	putCarta: (newCarta: Carta) => void,
	getCarta: (cartaId: number) => void,
	showModal: boolean,
	setShowModal: (estado: boolean) => void,
	setUpdate: React.Dispatch<React.SetStateAction<number>>;
	estilo: string;
	color: Colores;
	setColor: React.Dispatch<React.SetStateAction<Colores>>;
	setEstilo: React.Dispatch<React.SetStateAction<string>>;
}
export const CartaContext = createContext<CartaContextType | null>(null);

export const CartaContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false);
	const [estilo, setEstilo] = useState('');
	console.log(`/image/carta${estilo.replace(/\s+/g, '')}.webp`);
	
	const [loadingCarta, setLoadingCarta] = useState(false);

	const defaultColor: Colores = {
		id: "",
		tipo: "",
		left_side: "",
		right_side: "",
		up_side: "",
		down_side: "",
		left_wing: "",
		right_wing: "",
		heart: "",
	};

	const [update, setUpdate] = useState(0);
	const [cartas, setCartas] = useState<Carta[]>([]);
	const [color, setColor] = useState<Colores>(defaultColor);
	const [carta, setCarta] = useState<Carta>({
		id: "",
		para: "",
		de: "",
		izquierda: "",
		derecha: "",
		desactivado: false,
		song: "",
		color: defaultColor
	});
	const [colores, setColores] = useState<Colores[]>(
		[
			{
				id: "1",
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
				id: "2",
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
				id: "3",
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
				id: "4",
				tipo: "Navidad",
				left_side: "#2E7D32",     // verde navideño
				right_side: "#2E7D32",    // verde navideño
				up_side: "#C62828",       // rojo navideño
				down_side: "#C62828",     // rojo navideño
				left_wing: "#D4AF37",     // blanco nieve
				right_wing: "#D4AF37",    // blanco nieve
				heart: "#D4AF37",         // dorado brillante
			}, {
				id: "5",
				tipo: "Cumpleaños Bryan",
				left_side: "#FFD56B",
				right_side: "#FFD56B",
				up_side: "#FFC947",
				down_side: "#FFC947",
				left_wing: "#B3D9FF",
				right_wing: "#B3D9FF",
				heart: "#0066CC",
			},
			{
				id: "6",
				tipo: "Cumpleaños Lidia",
				left_side: "#D8B4F8",
				right_side: "#D8B4F8",
				up_side: "#C69CF5",
				down_side: "#C69CF5",
				left_wing: "#F4E7FF",
				right_wing: "#F4E7FF",
				heart: "#A55EEA",
			},
			{
				id: "7",
				tipo: "Fiestas Patrias",
				left_side: "#0033A0",
				right_side: "#0033A0",
				up_side: "#D32F2F",
				down_side: "#D32F2F",
				left_wing: "#FFFFFF",
				right_wing: "#FFFFFF",
				heart: "#C62828",
			},
			{
				id: "8",
				tipo: "Halloween",
				left_side: "#FF7518",
				right_side: "#FF7518",
				up_side: "#3A0E0E",
				down_side: "#3A0E0E",
				left_wing: "#4B0082",
				right_wing: "#4B0082",
				heart: "#FF4500",
			},
			{
				id: "9",
				tipo: "Año nuevo",
				left_side: "#000000",
				right_side: "#000000",
				up_side: "#FFD700",
				down_side: "#FFD700",
				left_wing: "#FFF3B0",
				right_wing: "#FFF3B0",
				heart: "#FFDF00",
			},
			{
				id: "10",
				tipo: "San Valentin",
				left_side: "#FF9EB5",     // rosa suave
				right_side: "#FF9EB5",
				up_side: "#FF6F91",       // rosa intenso
				down_side: "#FF6F91",
				left_wing: "#FFE4EC",     // rosado pastel
				right_wing: "#FFE4EC",
				heart: "#E63946",         // rojo amor
			},
			{
				id: "11",
				tipo: "Cumpleaños Claudia",
				left_side: "#AEE6FF",     // celeste pastel
				right_side: "#AEE6FF",
				up_side: "#F7C8E0",       // rosa pastel suave
				down_side: "#F7C8E0",
				left_wing: "#E9F9FF",     // celeste muy clarito
				right_wing: "#FFEAF4",    // rosa muy claro
				heart: "#FF7BA5",         // rosa vivo estilo celebración
			},

		]);


	// const getAllCarta = async () =>
	//   axios.get(`https://678054ff85151f714b067e87.mockapi.io/carta/`);

	const postCarta = async (carta: Carta) => {
		const { data, error } = await supabase
			.from("Cartahgfz")
			.insert([
				{
					de: carta.de,
					para: carta.para,
					izquierda: carta.izquierda,
					derecha: carta.derecha,
					song: carta.song,
					color: carta.color
				},
			]);

		if (error) {
			console.error("Error insertando carta:", error);
			return { error };
		}
		setUpdate((prev) => prev + 1);
		return { data };
	};

	// const getCarta = async (cartaId: any) =>
	// 	axios.get(`https://678054ff85151f714b067e87.mockapi.io/carta/${cartaId}`);

	const getCarta = async (cartaId: any) => {
		setLoadingCarta(false);
		const { data, error } = await supabase
			.from("Cartahgfz")
			.select()
			.eq("id", cartaId)
			.single()
			;

		if (error) {
			console.log("Error al obtener carta:", error);
			return;
		}

		if (data) {
			setCarta({
				id: data.id,
				para: data.para,
				de: data.de,
				izquierda: data.izquierda,
				derecha: data.derecha,
				desactivado: false,
				song: data.song,
				color: data.color || defaultColor
			});
		}
		setLoadingCarta(true);
		console.log(carta);
	};

	const putCarta = async (carta: Carta) => {
		console.log(carta);

		const { data, error } = await supabase
			.from("Cartahgfz")
			.update([
				{
					de: carta.de,
					para: carta.para,
					izquierda: carta.izquierda,
					derecha: carta.derecha,
					song: carta.song,
					color: carta.color
				},
			])
			.eq('id', carta.id)
			.select()
			;

		if (error) {
			console.error("Error actualizando carta:", error);
			return { error };
		}

		if (data) {
			setUpdate((prev) => prev + 1);
		}

		return { data };
		// axios.put(
		//   `https://678054ff85151f714b067e87.mockapi.io/carta/${carta.id}`,
		//   JSON.stringify(carta),
		//   {
		//     headers: {
		//       "Content-Type": "application/json",
		//     },
		//   }
		// );
	};

	const deleteCarta = async (cartaId: any) =>
		axios.delete(
			`https://678054ff85151f714b067e87.mockapi.io/carta/${cartaId}`
		);

	useEffect(() => {
		const getAllCarta = async () => {
			const { data, error } = await supabase
				.from('Cartahgfz')
				.select()

			if (data) {
				setCartas(data);
			}
		}

		getAllCarta()
	}, [update]);

	// const handleSubmit = (event: { preventDefault: () => void; }) => {
	//   postCarta(carta)
	//     .then((res) => {
	//       setUpdate((prev) => prev + 1);
	//       console.log(res.data);
	//     })
	//     .catch((err) => {
	//       console.log(err);
	//     });
	// };

	const handleChange = (e: { target: { name: any; value: any; }; }) =>
		setCarta({ ...carta, [e.target.name]: e.target.value });

	const obtenerColoresPorTipo = (tipo: string) => {
		return colores.find(c => c.tipo === tipo) ?? colores[0];
	};

	useEffect(() => {
		const colores = obtenerColoresPorTipo(estilo);
		setColor(colores);
	}, [estilo]);

	return (
		<CartaContext.Provider
			value={{
				cartas,
				carta,
				setCarta,
				getCarta,
				// handleSubmit,
				handleChange,
				obtenerColoresPorTipo,
				postCarta,
				colores,
				showModal,
				setUpdate,
				setShowModal,
				estilo,
				setColor,
				loadingCarta,
				color,
				putCarta,
				setEstilo
			}}
		>
			{children}
		</CartaContext.Provider>
	);
};
