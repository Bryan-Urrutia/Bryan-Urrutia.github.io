

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
import { RecuerdoContext } from "@/context/RecuerdoContext";
import Flores from "./flores";


export default function ListRecuerdos() {
	const recuerdo = useContext(RecuerdoContext);

	if (!recuerdo) return null;

	const {
		recuerdos
	} = recuerdo;

	return (
		<div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-x-20 gap-y-10">
			{recuerdos.map((item, i) => (
				<Dialog key={i}>
					<DialogTrigger asChild>
						<Card
							className="w-96 h-[30rem] bg-white shadow-xl rounded-none flex flex-col p-4 "
						>
							<CardContent className="relative w-full h-8/12 bg-gray-400 rounded-none overflow-hidden">
								<Image
									alt={item.title}
									src={item.imagen}
									fill
									className="object-cover"
								/>
							</CardContent>
							<CardFooter className="grid grid-rows-2">
								<p className="text-center font-bold font-sacramento text-5xl">{item.title}</p>
								<p className="text-4xl text-pink-300 font-bold text-end px-4 py-2 font-sacramento">{item.autor}</p>
							</CardFooter>
						</Card>
					</DialogTrigger>

					<DialogContent className="h-screen min-w-12/12 m-0 p-0 border-none bg-[url('/image/Pared.webp')]">
						<ScrollArea className='flex max-h-full relative flex-col overflow-hidden'>
							<DialogHeader>
								<DialogTitle></DialogTitle>
							</DialogHeader>
							<div className="flex h-full w-full justify-center items-start relative p-0 m-0">
								<div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-3 justify-center items-center p-5 w-full relative scroll-auto">
									<div className="flex flex-col justify-center items-center">
										<Card
											className="w-96 h-[30rem] bg-white shadow-xl rounded-none flex flex-col p-4 "
										>
											<CardContent className="relative w-full h-8/12 bg-gray-400 rounded-none overflow-hidden">
												<Image
													alt={item.title}
													src={item.imagen}
													fill
													className="object-cover"
												/>
											</CardContent>
											<CardFooter className="grid grid-rows-2">
												<p className="text-center font-bold font-sacramento text-5xl">{item.title}</p>
												<p className="text-4xl text-pink-300 font-bold text-end px-4 py-2 font-sacramento">{item.autor}</p>
											</CardFooter>
										</Card>
									</div>
									<Card className="hidden xl:inline w-[500px] h-[600px] p-0 m-0 gap-0 rounded-t-full bg-black overflow-hidden border-4 border-yellow-500 shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]">
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
												<Flores flor={item.tipo} color={item.color} dot_color={item.dot_color} />
											</div>
										</CardContent>
									</Card>
									<div className="flex flex-col justify-center items-center">
										<Card className="h-fit w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
											<CardTitle>
												<p className="text-center font-bold font-sacramento text-5xl">{item.title}</p>
											</CardTitle>
											<CardContent
												className="bg-white border-2 h-full border-pink-300 rounded-lg pointer-events-none text-justify p-1"
											>
												<p className="text-2xl text-justify font-semibold px-4 py-2 font-sacramento">{item.recuerdo}</p>
												<p className="text-4xl text-pink-300 font-bold text-end px-4 py-2 font-sacramento">{item.autor}</p>
											</CardContent>
										</Card>
									</div>

								</div>
							</div>
						</ScrollArea>
					</DialogContent>

				</Dialog>
			))}
		</div>
	);
}


