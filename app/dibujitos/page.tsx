import VideoCardDrive from "@/components/cancion/videoCard";
import Dibujo from "@/components/dibujo/dibujo";


export default function Home() {
	return (
		<main className="min-h-screen flex-1 flex-col gap-10 w-full items-center justify-center px-0 sm:px-16 sm:items-start">
			<h1 className="
						text-7xl md:text-8xl font-extrabold text-center pt-4
						bg-gradient-to-r from-rose-400 via-pink-500 to-violet-600
						bg-clip-text text-transparent 
						drop-shadow-[0_0_25px_rgba(255,105,180,0.4)]
						animate-gradient 
						font-sacramento
					"
			>
				Dibujitos ❤
			</h1>
			<Dibujo />
			{/* <VideoCardDrive /> */}
		</main>
	);
}
