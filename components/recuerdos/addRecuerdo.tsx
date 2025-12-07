
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
import { Button } from '../ui/button';
import { RecuerdoContext } from '@/context/RecuerdoContext';
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';
import AddRecuerdoForm from '../forms/addFRecuerdo';
import Flores from './flores';

const AddRecuerdo = () => {
	const recuerdoContext = useContext(RecuerdoContext);

	if (!recuerdoContext) return null;
	const {
		setShowModal,
		showModal,
		preview,
	} = recuerdoContext;

	const imagenURL = preview.foto ? URL.createObjectURL(preview.foto) : null;

	return (
		<>
			<MagneticButton
				onClick={() => { setShowModal(true); }}
				className='hover:bg-transparent w-64 bg-transparent relative'
			>
				<img
					src={'/image/nube.webp'}
					alt={'addRecuerdoNube'}
					className="object-cover"
				/>
				<h2 className='absolute top-1/2 font-sacramento text-4xl text-primary'>
					Crear recuerdos
				</h2>
			</MagneticButton>

			<Dialog open={showModal} onOpenChange={() => { setShowModal(false); }}>
				<DialogContent className="h-screen min-w-12/12 rel m-0 p-0 bg-gradient-to-b from-[#001737] to-[#0055a3] border-none">
					<ScrollArea className='flex max-h-full relative flex-col overflow-hidden w-full'>
						<DialogTitle className='hidden'></DialogTitle>
						<div className='w-full flex flex-col h-full lg:grid lg:grid-cols-3 items-center lg:pt-5 mb-10 justify-center px-10 gap-10'>
							<Card
								className="hidden w-full h-[32rem] col-span-1 bg-white shadow-xl rounded-none lg:flex flex-col p-4 mx-5"
							>
								<CardContent className="w-full h-8/12 bg-gray-400 rounded-none overflow-hidden relative">
									{imagenURL && (
										<Image
											src={imagenURL}
											alt="foto subida"
											fill
											className="object-cover"
											unoptimized
										/>
									)}
								</CardContent>
								<CardFooter className="grid grid-rows-2 relative">
									<p className="text-center font-bold font-sacramento text-5xl">{preview.titulo}</p>
									<p className="text-4xl text-pink-300 font-bold text-end px-4 py-2 font-sacramento">{preview.autor}</p>
									<div className="absolute scale-[35%] left-1/2 right-1/2 -top-[130px]">
										<Flores flor={preview.flor} color={preview.color} dot_color={preview.dot_color} />
									</div>
								</CardFooter>
							</Card>
							<Card className="h-fit w-full justify-center col-span-1 border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center px-6">
								<CardContent
									className="bg-white border-2 h-full w-full border-pink-300 rounded-lg text-justify px-4"
								>
									<h1 className='text-6xl font-bold font-sacramento text-center pt-3'>Nuevo Recuerdo</h1>
									<AddRecuerdoForm />
								</CardContent>
							</Card>
							<Card className="hidden h-fit w-96 lg:w-[420px] col-span-1 border-4 bg-pink-50 border-pink-200 rounded-lg lg:flex flex-col items-center p-6 relative my-10">
								<CardTitle>
									<p className="text-center font-bold font-sacramento text-5xl">{preview.titulo}</p>
								</CardTitle>
								<CardContent
									className="bg-white border-2 h-full border-pink-300 rounded-lg pointer-events-none text-justify p-1"
								>
									<p className="text-2xl text-justify font-semibold px-4 py-2 font-sacramento">{preview.recuerdo}</p>
									<p className="text-4xl text-pink-300 font-bold text-end px-4 py-2 font-sacramento">{preview.autor}</p>
								</CardContent>
							</Card>
						</div>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default AddRecuerdo;

