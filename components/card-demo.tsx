import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const CardMenu = ({
	p_imagen = "/image/default.png",
	p_nosotros = '/image/default.png',
	p_titulo = 'Titulo',
	p_descripcion = 'Descripción',
	p_ruta = '/'
}) => {
	return (
		<div className="relative flex flex-col justify-center mt-64">
			<img
				src={p_nosotros}
				alt={p_nosotros}
				className="
					-top-10 left-1/2 absolute
					-translate-x-1/2 -translate-y-1/2
					aspect-square rounded-full object-cover -z-10
					border-4 border-yellow-500
					shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]"
			/>

			<Card className="max-w-md pt-0 relative z-10 mt-20 border-yellow-500 shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]">
				<CardContent className="px-0 flex items-center justify-center">
					<img
						src={p_imagen}
						alt={p_imagen}
						className="aspect-square h-56 rounded-t-xl object-cover hover:h-56 transition-all duration-200"
					/>
				</CardContent>
				<CardHeader>
					<CardTitle className="text-pink-500 text-4xl flex justify-between font-sacramento">{p_titulo}</CardTitle>
					<CardDescription className="font-sacramento text-4xl text-primary">
						{p_descripcion}
					</CardDescription>
				</CardHeader>

				<CardFooter className="justify-center px-0">
					<Link href={p_ruta}>
						<Button variant='destructive' className='font-sacramento text-3xl cursor-pointer animate-heartbeat dark:bg-destructive/100 px-9 py-5 w-full font-bold'>
							Ingresar
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>

	)
}

export default CardMenu