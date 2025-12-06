

'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'

import { CuentoContext } from "@/context/CuentoContext";
import Image from "next/image";
import { useContext } from "react";
import { ScrollArea } from "../ui/scroll-area";
import LibroInteractivo from "./libroInteractivo";


export default function ListCuentos() {
	const cuento = useContext(CuentoContext);

	if (!cuento) return null;

	const {
		cuentos
	} = cuento;

	return (
		<div className="flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-x-20 gap-y-10">
			{cuentos
				.filter(c => c.paginas?.[0]) // solo cuentos con página 0
				.map((c, i) => {
					const [front, back] = c.paginas[0];

					return (
						<Dialog key={i}>
							<DialogTrigger asChild>
								<Card
									key={i}
									className="h-[550px] w-[420px] select-none shadow-xl border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative"
								>
									<div className="absolute inset-4 border-2 border-pink-300 rounded-lg pointer-events-none"></div>

									<CardTitle className="text-center text-5xl font-sacramento font-bold mt-2 mb-4">
										{front}
									</CardTitle>

									<CardContent className="relative w-4/5 h-64 bg-pink-50 border border-pink-200 rounded-xl overflow-hidden shadow-inner">
										<Image
											alt="Portada"
											src="/image/nosotros1.webp"
											fill
											className="object-cover"
										/>
									</CardContent>

									<div className="mt-3 text-pink-300 text-lg tracking-widest">
										⭐⭐⭐⭐⭐
									</div>

									<CardFooter className="text-2xl font-sacramento font-bold mt-2">
										Escrito por: Bryan Urrutia
									</CardFooter>
								</Card>

							</DialogTrigger>

							<DialogContent className="h-screen min-w-12/12 m-0 p-0 bg-[url('/image/mesa.webp')]">
								<ScrollArea className='flex h-full flex-col overflow-hidden w-full'>

									<DialogHeader>
										<DialogTitle></DialogTitle>
									</DialogHeader>
									<div className="hidden xl:flex h-full w-full justify-center items-start relative">
										<div className="h-[88%] w-full relative overflow-hidden">
											<img
												src={'/image/mesa.webp'}
												alt={'mesa'}
												className="aspect-video h-full w-full object-fill"
											/>
										</div>
										<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
											{/* <LibroInteractivo paginas={c.paginas} color={c?.color} /> */}
										</div>
									</div>
									<div className="flex flex-col justify-center items-center xl:hidden">
										{c.paginas.map(([front, back], i) => (
											<div key={i} className="px-10">
												<div
												>
													{i === 0 ? (
														<>
															<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
																<div className="absolute inset-4 border-2 border-pink-300 rounded-lg pointer-events-none"></div>
																<CardTitle className="text-center text-5xl font-sacramento font-bold mt-2 mb-4">
																	{front}
																</CardTitle>
																<CardContent className="relative w-4/5 h-96 bg-pink-50 border border-pink-200 rounded-xl overflow-hidden shadow-inner">
																	<Image
																		alt="Portada"
																		src="/image/nosotros1.webp"
																		fill
																		className="object-cover"
																	/>
																</CardContent>
																<div className="mt-3 text-pink-300 text-lg tracking-widest">
																	⭐⭐⭐⭐⭐
																</div>
																<CardFooter className="text-2xl font-sacramento font-bold mt-2">
																	Escrito por: Bryan Urrutia
																</CardFooter>
															</Card>
														</>
													) : (
														<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
															<CardContent
																className="bg-white border-2 h-full border-pink-300 rounded-lg pointer-events-none text-justify p-1"
															>
																<p className="text-base font-semibold px-4 py-2">{front}</p>
															</CardContent>
														</Card>
													)}
												</div>

												<div
												>
													{i === c.paginas.length - 1 ? (
														<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
															<div className="absolute inset-4 border-2 border-pink-300 rounded-lg pointer-events-none"></div>
														</Card>
													) : (
														<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
															<CardContent
																className="bg-white border-2 h-full border-pink-300 rounded-lg pointer-events-none text-justify p-1"
															>
																<p className="text-base font-semibold px-4 py-2">{back}</p>
															</CardContent>
														</Card>
													)}
												</div>
											</div>
										))}
									</div>
								</ScrollArea>
							</DialogContent>
						</Dialog>
					);
				})}
		</div>
	);
}


