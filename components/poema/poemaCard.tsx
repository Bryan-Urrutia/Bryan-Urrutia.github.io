"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function PoemaCard() {
	return (
		<Card className="w-full max-w-md bg-white rounded-tl-none rounded-br-none shadow-xl">
			<CardContent className="pt-2 flex flex-col gap-3">
				<div className="flex items-center justify-center gap-4 text-[#c6a75e]">
					<span className="text-2xl text-pink-500">❀</span>
					<div className="h-px w-full bg-pink-400" />
					<span className="text-2xl text-pink-500">❀</span>
					<div className="h-px w-full bg-pink-400" />
					<span className="text-2xl text-pink-500">❀</span>
				</div>
				<h2 className="text-5xl font-sacramento text-center text-pink-300">
					Poema de ejemplo
				</h2>
				<p className="font-sacramento text-3xl leading-normal text-pink-300 text-center">
					Como tinta lenta sobre el papel,
					<br />
					se escribe el tiempo sin permiso.
					<br />
					Late el silencio,
					<br />
					y en su pulso
					<br />
					aprendo a quedarme.
				</p>
				<span className="self-end font-sacramento text-3xl italic text-pink-300">
					— anónimo
				</span>
				<div className="flex items-center justify-center gap-4 text-[#c6a75e]">
					<span className="text-2xl text-pink-500">❀</span>
					<div className="h-px w-full bg-pink-400" />
					<span className="text-2xl text-pink-500">❀</span>
					<div className="h-px w-full bg-pink-400" />
					<span className="text-2xl text-pink-500">❀</span>
				</div>
			</CardContent>
		</Card>
	);
}
