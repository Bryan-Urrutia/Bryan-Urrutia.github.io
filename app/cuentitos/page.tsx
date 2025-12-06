'use client'
import ListCuentos from "@/components/cuento/listCuento";
 import { CuentoContextProvider } from "@/context/CuentoContext";

export default function Home() {
	return (
		<CuentoContextProvider>
				<main className="min-h-screen flex-1 flex-col gap-10 w-full items-center justify-center px-0 sm:px-16 sm:items-start">
				<h1
					className="text-8xl font-extrabold text-center pt-2
					bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 
					bg-clip-text text-transparent drop-shadow-sm 
					bg-[length:200%_200%] animate-gradient- font-sacramento"
				>
					Cuentitos
				</h1>
				<ListCuentos />
				{/* <div className="w-full flex flex-col justify-center items-center gap-y-40">
					{cuentos.map((c, index) => (
						<div key={index}>
							<LibroInteractivo paginas={c.paginas} color={c?.color} />
						</div>
					))}
				</div> */}
			</main>
		</CuentoContextProvider>
	);
}
