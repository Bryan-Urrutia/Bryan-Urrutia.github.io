





"use client";

import { Button } from "../ui/button";
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

import Flores from "./flores";
import { ScrollArea } from "../ui/scroll-area";
import { useContext } from "react";
import { CartaContext } from "@/context/CartaContext";
import { MusicContext } from "@/context/MusicaContext";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import UpdateCartaForm from "../shadcn-studio/form/UpdateCarta";

const ListCartas = () => {
	const carta = useContext(CartaContext);

	if (!carta) return null;
	const {
		cartas,
		getCarta,
		setEstilo,
		setColor,
		estilo,
		color,
		loadingCarta
	} = carta;

	const music = useContext(MusicContext);

	if (!music) return null;
	const {
		handleChangeSong,
	} = music;

	return (
		<div className="lg:grid flex flex-col lg:grid-cols-2 lg:gap-x-20">
			{cartas
				.sort((a, b) => Number(a.id) - Number(b.id))
				.map((carta, index) => {
					return (
						<div key={index}>
							<div
								id="envelope"
								className="relative flex justify-center items-center align-middle"

							>
								<Dialog>
									<DialogTrigger asChild>
										<div
											className="hidden md:flex wing left bottom-[60px] cursor-pointer"
											onClick={() => {
												getCarta(Number(carta?.id));
												handleChangeSong(carta?.song);
												setColor(carta?.color || {
											id: "",
										tipo: "",
										left_side: "",
										right_side: "",
										up_side: "",
										down_side: "",
										left_wing: "",
										right_wing: "",
										heart: "",
												});
										setEstilo(carta?.color?.tipo || '');
											}}
										style={{
											["--left_wing_color" as any]: carta?.color?.left_wing
										}}
										></div>
								</DialogTrigger>
								<DialogContent className="h-screen min-w-12/12 rel m-0 p-0 bg-gradient-to-b from-[#001737] to-[#0055a3] border-none">

									<DialogTitle className='hidden'></DialogTitle>
									<ScrollArea className='flex max-h-full relative flex-col overflow-hidden w-full'>
										<div className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center px-10 gap-10'>
											<Card className="h-fit col-span-2 border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
												<CardContent
													className="bg-white border-2 h-full w-full border-pink-300 rounded-lg text-justify px-4"
												>
													<h1 className='text-6xl font-bold font-sacramento text-center pt-3'>Editar Carta</h1>
													{loadingCarta && <UpdateCartaForm />}
												</CardContent>
											</Card>
											<Card className="h-[650px] sticky top-0 hidden border-4 bg-pink-50 border-pink-200 rounded-lg lg:flex flex-col items-center p-6  my-10">
												<CardContent
													className="relative border-2 h-full w-full"
												>
													{estilo && <>
														<Image
															src={`/image/carta${estilo.replace(/\s+/g, '')}.webp`}
															alt="test"
															fill
															className="object-cover border-4 border-yellow-500 shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]"
														/>
													</>}
												</CardContent>
												<CardFooter className='pt-0 absolute -bottom-12'>
													<div
														id="envelope"
														className="relative flex justify-center items-center align-middle scale-50"
													>
														<div
															className="hidden md:flex wing left bottom-[60px] cursor-pointer h-10"
															style={{
																["--left_wing_color" as any]: color.left_wing
															}}
														></div>
														<div
															className="hidden md:flex wing right bottom-[60px] cursor-pointer"
															style={{
																["--right_wing_color" as any]: color.right_wing,
															}}
														></div>
														<div
															className="cursor-pointer"
														>
															<div className=""></div>
															<div
																className="sides"
																style={{
																	boxShadow: "-10px 10px 90px #ff4757",
																	["--left_side" as any]: color.left_side,
																	["--right_side" as any]: color.right_side,
																	["--up_side" as any]: color.up_side,
																	["--down_side" as any]: color.down_side,
																}}
															>
																<div
																	className="heart2"
																	style={{
																		boxShadow: "-10px 10px 90px #ff4757",
																		["--heart" as any]: color.heart
																	}}
																>
																</div>
															</div>
														</div>
													</div>
												</CardFooter>
											</Card>
										</div>
									</ScrollArea>
								</DialogContent>
							</Dialog>
							<div
								className="hidden md:flex wing right bottom-[60px] cursor-pointer"
								onClick={() => {
									// setDeleteModal(true);
									// getByIdCarta(carta.id);
								}}
								style={{
									["--right_wing_color" as any]: carta?.color?.right_wing,
								}}
							></div>
							<Dialog key={index}>
								<DialogTrigger asChild>
									<div
										className="cursor-pointer"
										onClick={() => { handleChangeSong(carta.song) }}
									>
										<div className="top"></div>
										<div
											className="sides"
											style={{
												boxShadow: "-10px 10px 90px #ff4757",
												["--left_side" as any]: carta?.color?.left_side,
												["--right_side" as any]: carta?.color?.right_side,
												["--up_side" as any]: carta?.color?.up_side,
												["--down_side" as any]: carta?.color?.down_side,
											}}
										>
											<div
												className="heart2"
												style={{
													boxShadow: "-10px 10px 90px #ff4757",
													["--heart" as any]: carta?.color?.heart
												}}
											>
											</div>
										</div>
									</div>
								</DialogTrigger>

								<DialogContent className="h-screen min-w-12/12 rel m-0 p-0 bg-gradient-to-b from-[#001737] to-[#0055a3] border-none">
									<ScrollArea className='flex max-h-full relative flex-col overflow-hidden w-full'>
										<DialogHeader>
											<DialogTitle></DialogTitle>
										</DialogHeader>

										<Popover >
											<PopoverTrigger asChild>
												<div className="sticky lg:absolute left-[35%] lg:left-[40%] flex items-center justify-center w-40 h-40 z-50">
													<div className="absolute w-60 h-60 rounded-full bg-white/40 blur-2xl"></div>
													<div className="w-40 h-40 rounded-full bg-white shadow-[0_0_40px_20px_rgba(255,255,255,0.8)]"></div>
												</div>
											</PopoverTrigger>
											<PopoverContent className='z-50 data-[state=open]:!zoom-in-0 data-[state=closed]:!zoom-out-0 origin-top duration-400 h-[500px] w-96 border-4 bg-pink-50 border-pink-200 rounded-lg lg:flex flex-col items-center p-6 relative my-10'>
												<CardContent
													className="relative border-2 h-full w-full"
												>
													<Image
														src={`/image/carta${carta?.color?.tipo}.webp`}
														alt="test"
														fill
														className="object-cover border-4 border-yellow-500 shadow-[0_0_15px_3px_rgba(255,215,0,0.8)]"
													/>

												</CardContent>
											</PopoverContent>
										</Popover>

										<div className="absolute inset-0 z-0 pointer-events-none">
											{Array.from({ length: 100 }).map((_, i) => {
												const top = Math.random() * 900
												const left = Math.random() * 1500
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
										<div className="grid grid-cols-1 py-7 lg:pt-10 lg:grid-cols-4 justify-evenly items-center w-full relative scroll-auto z-40">
											<Flores />
											<div className="flex-col gap-y-10 lg:gap-y-0 lg:flex-row h-fit lg:h-[500px] w-full col-span-2 my-5 mx-auto items-center lg:items-stretch flex relative mt-0 lg:mt-20">
												<div className="bg-[#eee] p-3 rounded-tr-2xl h-fit lg:h-full w-[420px] rounded-bl-2xl transform-none lg:[transform:skew(10deg,20deg)] lg:w-[360px]">
													<h2 className="select-none text-4xl text-pink-300 text-center font-sacramento font-bold">{carta.de}</h2>
													<p className="pt-[0.1rem] select-none text-3xl text-justify text-primary dark:text-black px-2 font-sacramento">
														{carta.izquierda}
													</p>
												</div>
												<div className="bg-[#eee] p-3 rounded-tl-2xl h-fit lg:h-full rounded-br-2xl transform-none lg:[transform:skew(10deg,-15deg)] w-[420px] -right-4 top-[9px] lg:absolute mb-10 lg:mt-0">
													<p className="py-3 select-none text-3xl text-justify dark:text-black text-primary px-2 font-sacramento">
														{carta.derecha}
													</p>
													<p className="flex justify-end select-none text-4xl text-pink-300 text-center font-sacramento font-bold">{carta.para}</p>
												</div>
											</div>
											<Flores />
										</div>
									</ScrollArea>
								</DialogContent>
							</Dialog>
						</div>
						</div>
	);
})}

		</div >
	)
}

export default ListCartas;