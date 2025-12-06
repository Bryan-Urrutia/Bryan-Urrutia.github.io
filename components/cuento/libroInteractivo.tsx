import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { BsSkipBackwardFill } from "react-icons/bs";


type Pagina = [string, string];

interface LibroProps {
	paginas: Pagina[];
	color?: string;
}

const LibroInteractivo = ({ paginas, color = "#000" }: LibroProps) => {
	const btnNextRef = useRef<HTMLButtonElement | null>(null);
	const btnPrevRef = useRef<HTMLButtonElement | null>(null);
	const cardRefs = useRef<HTMLDivElement[]>([]);
	const containerRefs = useRef<HTMLDivElement[]>([]);

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		containerRefs.current.forEach((container, index) => {
			if (container)
				container.style.zIndex = String(containerRefs.current.length - index);
		});
	}, [paginas]);

	const handleNext = () => {
		if (currentIndex < cardRefs.current.length) {
			const btnNext = btnNextRef.current;
			const btnPrev = btnPrevRef.current;
			const cards = cardRefs.current;
			const containers = containerRefs.current;

			if (btnNext) btnNext.disabled = true;
			if (btnPrev) btnPrev.disabled = true;

			cards[currentIndex].classList.add("flipped");
			const thisIndex = currentIndex;

			setTimeout(() => {
				if (containers[thisIndex])
					containers[thisIndex].style.zIndex = String(
						containers.length + thisIndex
					);

				const newIndex = thisIndex + 1;
				setCurrentIndex(newIndex);

				if (btnPrev) btnPrev.disabled = newIndex === 0;
				if (btnNext) btnNext.disabled = newIndex === cards.length;
			}, 200);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			const btnNext = btnNextRef.current;
			const btnPrev = btnPrevRef.current;
			const cards = cardRefs.current;
			const containers = containerRefs.current;

			if (btnNext) btnNext.disabled = true;
			if (btnPrev) btnPrev.disabled = true;

			const thisIndex = currentIndex - 1;
			cards[thisIndex].classList.remove("flipped");


			setTimeout(() => {
				if (containers[thisIndex])
					containers[thisIndex].style.zIndex = String(
						containers.length - thisIndex
					);

				setCurrentIndex(thisIndex);

				// 🔥 Corrección aquí:
				if (btnPrev) btnPrev.disabled = thisIndex === 0;
				if (btnNext) btnNext.disabled = thisIndex === cards.length;
			}, 200);
		}
	};

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") {
				handleNext();
			}
			if (e.key === "ArrowLeft") {
				handlePrev();
			}
		};

		window.addEventListener("keydown", handleKey);

		return () => {
			window.removeEventListener("keydown", handleKey);
		};
	}, [currentIndex]);

	return (
		<article>
			<div className="libro relative select-none">
				<div className="absolute top-[250px] w-[1050px] -left-[505px] z-50 flex justify-between px-8 pointer-events-none">

					<button
						onClick={handlePrev}
						ref={btnPrevRef}
						disabled={currentIndex === 0}
						className="p-2 bg-black pointer-events-auto disabled:bg-gray-400 rounded-2xl transition-all duration-300"
					>
						<RiArrowRightSFill size={40} color="white" />
					</button>

					<button
						onClick={handleNext}
						ref={btnNextRef}
						disabled={currentIndex === paginas.length}
						className="p-2 bg-black pointer-events-auto disabled:bg-gray-400 rounded-2xl transition-all duration-300"
					>
						<RiArrowLeftSFill color="white" size={40} />
					</button>

				</div>
				{paginas.map(([front, back], i) => (
					<div
						className="maincontainer absolute"
						key={`libro-pagina-${i}`}
						ref={(el) => {
							if (el) containerRefs.current[i] = el;
						}}
					>
						<div
							className="thecard h-[600px] w-[420px] "
							ref={(el) => {
								if (el) cardRefs.current[i] = el;
							}}
						>
							<div
								className="thefront"
								style={{ "--portada_color": i === 0 ? color : "#fff" } as any}
							>
								{i === 0 ? (
									<>
										<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative">
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
									<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative">
										<CardContent
											className="bg-white border-2 h-full border-pink-300 rounded-lg pointer-events-none text-justify p-1"
										>
											<p className="text-base font-semibold px-4 py-2">{front}</p>
										</CardContent>
									</Card>
								)}
							</div>

							<div
								className="theback"
								style={{
									"--portada_color":
										i === paginas.length - 1 ? color : "#fff",
								} as any}
							>
								{i === paginas.length - 1 ? (
									<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative">
										<div className="absolute inset-4 border-2 border-pink-300 rounded-lg pointer-events-none"></div>
									</Card>
								) : (
									<Card className="h-[550px] w-[420px] border-4 bg-pink-50 border-pink-200 rounded-lg flex flex-col items-center p-6 relative">
										<CardContent
											className="bg-white border-2 h-full border-pink-300 rounded-lg pointer-events-none text-justify p-1"
										>
											<p className="text-base font-semibold px-4 py-2">{back}</p>
										</CardContent>
									</Card>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</article>
	);
};

export default LibroInteractivo;
