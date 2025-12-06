import CardMenu from "@/components/card-demo"
import Flores from "@/components/cartas/flores"
import ListRecuerdos from "@/components/recuerdos/listRecuerdos"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { RecuerdoContextProvider } from "@/context/RecuerdoContext"
import Image from "next/image"

const recuerdosData = [
	{
		tipo: "amor",
		title: "Nuestra primera cita",
		recuerdo: "Ese día caminamos por el parque y todo se sentía perfecto.",
		imagen: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
		color: "#ffb3c6",
		dot_color: "#ff6f91",
	},
	{
		tipo: "familia",
		title: "Cumpleaños de mamá",
		recuerdo: "Celebramos juntos con una torta casera y muchas risas.",
		imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
		color: "#c6e6ff",
		dot_color: "#6fb6ff",
	},
	{
		tipo: "viaje",
		title: "Aventura en la playa",
		recuerdo: "El sonido del mar y el atardecer hicieron ese día inolvidable.",
		imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
		color: "#ffe5b3",
		dot_color: "#ffb86f",
	},
	{
		tipo: "amistad",
		title: "Noche de juegos",
		recuerdo: "Nos reímos hasta no poder más jugando cartas toda la noche.",
		imagen: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=friend",
		color: "#e2d5ff",
		dot_color: "#b79fff",
	},
	{
		tipo: "especial",
		title: "Nuestro aniversario",
		recuerdo: "Un día lleno de detalles, sorpresas y mucho cariño.",
		imagen: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
		color: "#d1ffd6",
		dot_color: "#7fffa0",
	},
]

export default function Home() {
	return (
		<RecuerdoContextProvider>

			<main className="min-h-screen flex-1 flex-col gap-10 w-full items-center justify-center px-0 sm:px-16 sm:items-start">

				<h1
					className="text-8xl font-extrabold text-center pt-2
					bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 
					bg-clip-text text-transparent drop-shadow-sm 
					bg-[length:200%_200%] animate-gradient- font-sacramento"
				>
					Recuerditos
				</h1>
				{/*  
				<Card className="w-[500px] h-[600px] p-0 m-0 gap-0 rounded-t-full bg-black overflow-hidden border-4 border-yellow-500
						shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]">
					<CardContent className="h-full z-20 relative flex-col flex items-center justify-start pt-5">
						<div className="relative flex items-center justify-center w-40 h-40">
							<div className="absolute w-60 h-60 rounded-full bg-white/40 blur-2xl"></div>
							<div className="w-40 h-40 rounded-full bg-white shadow-[0_0_40px_20px_rgba(255,255,255,0.8)]"></div>
						</div>

						<div className=" absolute inset-0 rounded-t-full bg-white/15 pointer-events-none z-10" />

						<div className="absolute inset-0 z-0 pointer-events-none">
							{Array.from({ length: 40 }).map((_, i) => {
								const top = Math.random() * 600
								const left = Math.random() * 500
								const size = Math.random() * 2 + 1
								const opacity = Math.random() * 0.5 + 0.5
								const glow = Math.random() * 6 + 3

								return (
									<div
										key={i}
										className="absolute bg-white rounded-full"
										style={{
											top,
											left,
											width: size,
											height: size,
											opacity,
											boxShadow: `0 0 ${glow}px ${glow / 2}px white`
										}}
									/>
								)
							})}
						</div>
						<div className="absolute bottom-[17.3rem] left-[13.5rem] z-20">
							<Flores />
						</div>
					</CardContent>
				</Card>
				*/}
				<ListRecuerdos />
			</main>
		</RecuerdoContextProvider>
	)
}
