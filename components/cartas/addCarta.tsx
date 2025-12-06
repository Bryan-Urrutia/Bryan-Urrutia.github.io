
"use client";
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

import { MagneticButton } from '../ui/magnetic-button'
import { useContext, useState } from 'react'
import AddCartaForm from '../shadcn-studio/form/AddCarta';
import { Button } from '../ui/button';
import { CartaContext } from '@/context/CartaContext';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';

const AddCarta = () => {
	const cartaContext = useContext(CartaContext);

	if (!cartaContext) return null;
	const {
		showModal,
		color,
		estilo,
		setShowModal
	} = cartaContext;

	return (
		<>
			<MagneticButton
				onClick={() => { setShowModal(true); }}
				className='hover:bg-transparent w-64 bg-transparent relative'
			>
				<img
					src={'/image/nube.png'}
					alt={'addCartaNube'}
					className="object-cover"
				/>
				<h2 className='absolute top-1/2 font-sacramento text-4xl text-primary'>
					Crear cartita
				</h2>
			</MagneticButton>

			<Dialog open={showModal} onOpenChange={() => { setShowModal(false); }}>
				<DialogContent className="h-screen min-w-12/12 rel m-0 p-0 bg-gradient-to-b from-[#001737] to-[#0055a3] border-none">
					<ScrollArea className='flex max-h-full relative flex-col overflow-hidden w-full'>

						<DialogTitle className='hidden'></DialogTitle>
						<div className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center px-10 gap-10'>
							<Card className="h-fit col-span-2 border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative my-10">
								<CardContent
									className="bg-white border-2 h-full w-full border-pink-300 rounded-lg text-justify px-4"
								>
									<h1 className='text-6xl font-bold font-sacramento text-center pt-3'>Carta nueva</h1>
									<AddCartaForm />
								</CardContent>
							</Card>
							<Card className=" h-[650px] sticky top-0 hidden border-4 bg-pink-50 border-pink-200 rounded-lg lg:flex flex-col items-center p-6  my-10">
								<CardContent
									className="relative border-2 h-full w-full"
								>
									{estilo && <>
										<Image
											src={`/image/carta${estilo}.png`}
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
		</>
	)
}

export default AddCarta;

