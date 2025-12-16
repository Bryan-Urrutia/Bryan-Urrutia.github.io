import CardMenu from "@/components/card-demo"
export default function Home() {
	return (
		<main className="min-h-screen flex-1 flex-col gap-10 w-full items-center justify-center px-16 pb-5 sm:items-start">
			<h1 className="
					text-7xl md:text-8xl font-extrabold text-center pt-4
					bg-gradient-to-r from-rose-400 via-pink-500 to-violet-600
					bg-clip-text text-transparent 
					drop-shadow-[0_0_25px_rgba(255,105,180,0.4)]
					animate-gradient 
					font-sacramento
				"
			>
				Nuestro nidito de amor ❤
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
				<CardMenu
					p_imagen="/image/Letter.webp"
					p_nosotros="/image/nosotros1.webp"
					p_titulo="Cartitas"
					p_descripcion="Mensajitos especiales para dedicar a esa persona que hace latir tu corazón."
					p_ruta="/cartitas"
				/>
				<CardMenu
					p_imagen="/image/Book.webp"
					p_nosotros="/image/nosotros2.webp"
					p_titulo="Cuentitos"
					p_descripcion="Crea historias únicas para compartir momentos mágicos juntos."
					p_ruta="/cuentitos"
				/>
				<CardMenu
					p_imagen="/image/Polaroid.webp"
					p_nosotros="/image/nosotros3.webp"
					p_titulo="Recuerditos"
					p_descripcion="Instantes guardados con cariño, para volver a enamorarnos cada vez."
					p_ruta="/recuerditos"
				/>
				<CardMenu
					p_imagen="/image/Cancion.webp"
					p_nosotros="/image/nosotros4.webp"
					p_titulo="Cancioncitas"
					p_descripcion="Instantes guardados con cariño, para volver a enamorarnos cada vez."
					p_ruta="/cancioncitas"
				/>
				<CardMenu
					p_imagen="/image/Cancion.webp"
					p_nosotros="/image/nosotros4.webp"
					p_titulo="Dibujitos"
					p_descripcion="Instantes guardados con cariño, para volver a enamorarnos cada vez."
					p_ruta="/dibujitos"
				/>
			</div>
		</main>
	);
}
