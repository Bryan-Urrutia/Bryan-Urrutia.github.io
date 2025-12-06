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
import { CartaContext } from '@/context/CartaContext'
import { useContext } from 'react'
import { MusicContext } from '@/context/MusicaContext'
import type { Carta } from "@/context/CartaContext";

const AddCartaForm = () => {
	const FormSchema = z.object({
		estilo: z.string(),
		song: z.string(),
		de: z.string(),
		para: z.string(),
		izquierda: z.string(),
		derecha: z.string(),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			estilo: "",
			song: "",
			de: "",
			para: "",
			izquierda: "",
			derecha: "",
		}
	});

	const cartaContext = useContext(CartaContext);
	const music = useContext(MusicContext);

	if (!cartaContext) return null;
	const {
		carta,
		colores,
		setCarta,
		obtenerColoresPorTipo,
		postCarta,
		setShowModal,
		setUpdate,
		handleChange,
		setEstilo,
	} = cartaContext;

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

	const handleSong = (titulo = '') => {
		const cancion = obtenerCancionPorNombre(titulo);
		handleChangeSong(titulo);
		setCarta({ ...carta, song: cancion?.titulo ?? '' });
	};


	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		const color = obtenerColoresPorTipo(data.estilo) ?? {
			id: "default",
			tipo: "default",
			left_side: "",
			right_side: "",
			up_side: "",
			down_side: "",
			left_wing: "",
			right_wing: "",
			heart: "",
		};

		const nuevaCarta: Carta = {
			id: "",
			desactivado: false,
			color,
			...data,
		};


		postCarta(nuevaCarta);

		setShowModal(false);
		setUpdate((prev: number) => prev + 1);
		toast.success("Carta creada correctamente");
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='grid grid-cols-1 md:grid-cols-2 p-2 gap-x-10 gap-y-2'>
					<FormField
						name='estilo'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Estilo</FormLabel>
								<Select onValueChange={(e) => { setEstilo(e); }} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder="Selecciona un estilo" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Personas</SelectLabel>
											<SelectItem value="Bryan">Bryan</SelectItem>
											<SelectItem value="Claudia">Claudia</SelectItem>
											<SelectItem value="Lidia">Lidia</SelectItem>
										</SelectGroup>

										<SelectGroup>
											<SelectLabel>Cumpleaños</SelectLabel>
											<SelectItem value="Cumpleaños Bryan">Cumpleaños Bryan</SelectItem>
											<SelectItem value="Cumpleaños Claudia">Cumpleaños Claudia</SelectItem>
											<SelectItem value="Cumpleaños Lidia">Cumpleaños Lidia</SelectItem>
										</SelectGroup>

										<SelectGroup>
											<SelectLabel>Festividades</SelectLabel>
											<SelectItem value="SanValentin">San Valentín</SelectItem>
											<SelectItem value="Fiestas Patrias">Fiestas Patrias</SelectItem>
											<SelectItem value="Halloween">Halloween</SelectItem>
											<SelectItem value="Navidad">Navidad</SelectItem>
											<SelectItem value="Año nuevo">Año Nuevo</SelectItem>
										</SelectGroup>
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
								<Select onValueChange={(e) => { handleSong(e); }} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder="Selecciona una canción" />
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
						name='de'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Autor</FormLabel>
								<FormControl>
									<Input placeholder='Autor' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='para'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Para</FormLabel>
								<FormControl>
									<Input placeholder='Para' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-col p-2 justify-center gap-y-2'>
					<FormField
						control={form.control}
						name='izquierda'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Carta Izquierda</FormLabel>
								<FormControl>
									<Textarea placeholder='' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='derecha'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Carta Derecha</FormLabel>
								<FormControl>
									<Textarea placeholder='' {...field} />
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

export default AddCartaForm
