'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useContext } from 'react'
import { MusicContext } from '@/context/MusicaContext'
import { RecuerdoContext } from '@/context/RecuerdoContext'
import type { Recuerdo } from "@/context/RecuerdoContext";

const AddRecuerdoForm = () => {
	const FormSchema = z.object({
		flor: z.string(),
		color: z.hex(),
		dot_color: z.hex(),
		foto: z.file(),
		recuerdo: z.string(),
		autor: z.string(),
		titulo: z.string(),
		estilo: z.string(),
		song: z.string(),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			flor: "",
			color: "",
			dot_color: "",
			foto: undefined,
			recuerdo: "",
			autor: "",
			titulo: "",
			estilo: "",
			song: "",
		}
	});

	const recuerdoContext = useContext(RecuerdoContext);
	const music = useContext(MusicContext);

	if (!recuerdoContext) return null;
	const {
		setFlor,
		setColor,
		setDotColor,
		setFoto,
		setAutor,
		setTitulo,
		setRecuerdo,
		postFile,
		postRecuerdo
	} = recuerdoContext;

	if (!music) return null;
	const {
		songs,
		handleChangeSong,
	} = music;

	const obtenerCancionPorNombre = (titulo = '') => {
		const cancionEncontrada = songs.find(
			(cancion) => cancion.titulo === titulo
		);
		return cancionEncontrada ? cancionEncontrada : null;
	};

	// const handleSong = (titulo = '') => {
	//     const cancion = obtenerCancionPorNombre(titulo);
	//     handleChangeSong(titulo);
	//     setCarta({ ...carta, song: cancion?.titulo ?? '' });
	// };


const onSubmit = async (data: z.infer<typeof FormSchema>) => {
	const result = await postFile(data.foto);

	if (typeof result !== "string") {
		toast.error("Error al subir la imagen");
		console.error(result.error);
		return;
	}

	const url = result;
	
	const nuevoRecuerdo: Recuerdo = {
		id: "",
		tipo: data.flor,
		autor: data.autor,
		color: data.color,
		dot_color: data.dot_color,
		imagen: url,
		recuerdo: data.recuerdo,
		title: data.titulo,
		fecha: "",
		song: data.song
	};

	postRecuerdo(nuevoRecuerdo);

	toast.success("Carta creada correctamente");
};


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
				<div className='flex flex-col px-2 pb-2 justify-center gap-y-2'>
					<div className='grid grid-cols-1 md:grid-cols-2 p-2 gap-x-10 gap-y-2'>

						<FormField
							name='flor'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tipo de flor</FormLabel>
									<Select onValueChange={(e) => { setFlor(e) }} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger className='w-full'>
												<SelectValue placeholder="" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="flor1">Flor 1</SelectItem>
											<SelectItem value="flor2">Flor 2</SelectItem>
											<SelectItem value="flor3">Flor 3</SelectItem>
											<SelectItem value="flor4">Flor 4</SelectItem>
											<SelectItem value="flor5">Flor 5</SelectItem>
											<SelectItem value="flor6">Flor 6</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='song'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Canción</FormLabel>
									<Select onValueChange={(e) => { }} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger className='w-full'>
												<SelectValue placeholder="" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{songs.map((s, index) => (
												<SelectItem key={index} value={s.titulo}>
													{s.titulo}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 p-2 gap-x-10 gap-y-2'>
						<FormField
							name="color"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Petalos</FormLabel>
									<FormControl>
										<Input
											type="color"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												setColor(e.target.value);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name="dot_color"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Centro</FormLabel>
									<FormControl>
										<Input
											type="color"
											{...field}
											onChange={(e) => {
												field.onChange(e);
												setDotColor(e.target.value);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						name='autor'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Autor</FormLabel>
								<FormControl>
									<Input placeholder='Autor' {...field} onChange={(e) => {
										field.onChange(e);
										setAutor(e.target.value);
									}} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='titulo'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Titulo recuerdo</FormLabel>
								<FormControl>
									<Input placeholder='Titulo' {...field} onChange={(e) => {
										field.onChange(e);
										setTitulo(e.target.value);
									}} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='foto'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Imagen</FormLabel>
								<FormControl>
									<FormControl>
										<Input
											type="file"
											accept="image/*"
											onChange={(e) => {
												const file = e.target.files?.[0] || null;
												setFoto(file);
												field.onChange(file);
											}}
										/>
									</FormControl>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='recuerdo'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Recuerdo</FormLabel>
								<FormControl>
									<Textarea placeholder='' {...field} onChange={(e) => {
										field.onChange(e);
										setRecuerdo(e.target.value);
									}} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='h-10 w-full flex justify-center p-5 mb-10'>
					<Button variant='destructive' type='submit' className='animate-heartbeat h-12 w-full dark:bg-destructive/100 text-3xl font-sacramento sm:text-4xl font-semibold'>
						Crear cartita
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default AddRecuerdoForm
