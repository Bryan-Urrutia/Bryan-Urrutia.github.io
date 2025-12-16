'use client'
import { useRef, useState, useEffect } from "react";


type Mode = "draw" | "move" | "erase" | "shape";
type ShapeType = "star" | "heart" | "flower" | "butterfly";

export default function Dibujo() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const isDrawing = useRef(false);
	const isMoving = useRef(false);
	const lastPos = useRef({ x: 0, y: 0 });

	const [mode, setMode] = useState<Mode>("draw");
	const [shapeType, setShapeType] = useState<ShapeType>("star");
	const [brushColor, setBrushColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#ffffff");
	const [lineWidth, setLineWidth] = useState(4);

	const [canvasWidth, setCanvasWidth] = useState(400);
	const [canvasHeight, setCanvasHeight] = useState(400);

	const getCtx = () =>
		canvasRef.current?.getContext("2d") ?? null;

	/* ===============================
	   Fondo real
	   =============================== */
	const fillBackground = (ctx: CanvasRenderingContext2D) => {
		ctx.save();
		ctx.globalCompositeOperation = "destination-over";
		ctx.fillStyle = bgColor;
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		ctx.restore();
	};

	/* ===============================
	   Figuras
	   =============================== */
	const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
		const spikes = 5;
		let rot = Math.PI / 2 * 3;
		const step = Math.PI / spikes;

		ctx.beginPath();
		ctx.moveTo(x, y - size);

		for (let i = 0; i < spikes; i++) {
			ctx.lineTo(x + Math.cos(rot) * size, y + Math.sin(rot) * size);
			rot += step;
			ctx.lineTo(x + Math.cos(rot) * size / 2, y + Math.sin(rot) * size / 2);
			rot += step;
		}

		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	};

	const drawHeart = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		size: number,
		color: string
	) => {
		const s = size;

		ctx.beginPath();

		// Punto inicial arriba
		ctx.moveTo(x, y - s / 4);

		// Lóbulo izquierdo
		ctx.bezierCurveTo(
			x - s, y - s,
			x - s * 1.5, y + s / 3,
			x, y + s
		);

		// Lóbulo derecho
		ctx.bezierCurveTo(
			x + s * 1.5, y + s / 3,
			x + s, y - s,
			x, y - s / 4
		);

		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	};

	const drawFlower = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
		ctx.fillStyle = color;
		for (let i = 0; i < 8; i++) {
			const angle = (Math.PI * 2 / 8) * i;
			ctx.beginPath();
			ctx.arc(
				x + Math.cos(angle) * size / 2,
				y + Math.sin(angle) * size / 2,
				size / 3,
				0,
				Math.PI * 2
			);
			ctx.fill();
		}
		ctx.beginPath();
		ctx.arc(x, y, size / 3, 0, Math.PI * 2);
		ctx.fillStyle = "#ffd700";
		ctx.fill();
	};

const drawButterfly = (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	size: number,
	color: string
) => {
	ctx.fillStyle = color;
	ctx.beginPath();

	const w = size;
	const h = size;

	ctx.moveTo(x, y);

	ctx.bezierCurveTo(
		x - w * 0.6, y - h * 0.6,
		x - w,       y - h * 0.1,
		x - w * 0.4, y + h * 0.1
	);

	ctx.bezierCurveTo(
		x - w * 0.9, y + h * 0.6,
		x - w * 0.2, y + h * 0.7,
		x,           y + h * 0.2
	);

	ctx.bezierCurveTo(
		x + w * 0.2, y + h * 0.7,
		x + w * 0.9, y + h * 0.6,
		x + w * 0.4, y + h * 0.1
	);

	ctx.bezierCurveTo(
		x + w,       y - h * 0.1,
		x + w * 0.6, y - h * 0.6,
		x,           y
	);

	ctx.fill();
};



	const drawShape = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
		switch (shapeType) {
			case "star": drawStar(ctx, x, y, 20, brushColor); break;
			case "heart": drawHeart(ctx, x, y, 20, brushColor); break;
			case "flower": drawFlower(ctx, x, y, 24, brushColor); break;
			case "butterfly": drawButterfly(ctx, x, y, 34, brushColor); break;
		}
		fillBackground(ctx);
	};

	/* ===============================
	   Mouse
	   =============================== */
	const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const ctx = getCtx();
		if (!ctx) return;

		const x = e.nativeEvent.offsetX;
		const y = e.nativeEvent.offsetY;
		lastPos.current = { x, y };

		if (mode === "draw" || mode === "erase") {
			ctx.save();
			ctx.lineWidth = lineWidth;
			ctx.lineCap = "round";

			if (mode === "erase") {
				ctx.globalCompositeOperation = "destination-out";
				ctx.strokeStyle = "rgba(0,0,0,1)";
			} else {
				ctx.globalCompositeOperation = "source-over";
				ctx.strokeStyle = brushColor;
			}

			ctx.beginPath();
			ctx.moveTo(x, y);
			isDrawing.current = true;
		}

		if (mode === "move") isMoving.current = true;
		if (mode === "shape") drawShape(ctx, x, y);
	};

	const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		const ctx = getCtx();
		if (!canvas || !ctx) return;

		const x = e.nativeEvent.offsetX;
		const y = e.nativeEvent.offsetY;

		if (isDrawing.current) {
			ctx.lineTo(x, y);
			ctx.stroke();
		}

		if (isMoving.current && mode === "move") {
			const dx = x - lastPos.current.x;
			const dy = y - lastPos.current.y;

			const buffer = document.createElement("canvas");
			buffer.width = canvas.width;
			buffer.height = canvas.height;

			const bctx = buffer.getContext("2d");
			if (!bctx) return;

			bctx.drawImage(canvas, 0, 0);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(buffer, dx, dy);
			fillBackground(ctx);

			lastPos.current = { x, y };
		}
	};

	const onMouseUp = () => {
		const ctx = getCtx();
		if (ctx) {
			ctx.restore();
			fillBackground(ctx);
		}
		isDrawing.current = false;
		isMoving.current = false;
	};

	const clearCanvas = () => {
		const ctx = getCtx();
		if (!ctx) return;
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		fillBackground(ctx);
	};

	const saveDrawing = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const link = document.createElement("a");
		link.download = "dibujo.png";
		link.href = canvas.toDataURL("image/png");
		link.click();
	};

	useEffect(() => {
		const ctx = getCtx();
		if (ctx) fillBackground(ctx);
	}, [bgColor]);

	useEffect(() => {
	const canvas = canvasRef.current;
	if (!canvas) return;

	const lock = () => {
		document.body.style.overflow = "hidden";
		document.body.style.touchAction = "none";
	};

	const unlock = () => {
		document.body.style.overflow = "";
		document.body.style.touchAction = "";
	};

	canvas.addEventListener("mousedown", lock);
	canvas.addEventListener("touchstart", lock, { passive: false });

	window.addEventListener("mouseup", unlock);
	window.addEventListener("touchend", unlock);

	return () => {
		canvas.removeEventListener("mousedown", lock);
		canvas.removeEventListener("touchstart", lock);
		window.removeEventListener("mouseup", unlock);
		window.removeEventListener("touchend", unlock);
	};
}, []);

	return (
		<div className="flex flex-col gap-4 items-center pt-10">
			<div className="flex flex-wrap gap-3 justify-center items-center">
				<button onClick={() => setMode("draw")} className={`px-3 py-1 rounded ${mode === "draw" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>✏️ Dibujar</button>
				<button onClick={() => setMode("erase")} className={`px-3 py-1 rounded ${mode === "erase" ? "bg-orange-500 text-white" : "bg-gray-200"}`}>🧽 Borrar</button>
				<button onClick={() => setMode("move")} className={`px-3 py-1 rounded ${mode === "move" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>✋ Mover</button>

				<div className="flex items-center gap-1">
					<button onClick={() => setMode("shape")} className={`px-3 py-1 rounded ${mode === "shape" ? "bg-pink-600 text-white" : "bg-gray-200"}`}>⭐ Figura</button>
					<select value={shapeType} onChange={e => setShapeType(e.target.value as ShapeType)} className="border rounded px-1">
						<option value="star">Estrella</option>
						<option value="heart">Corazón</option>
						<option value="flower">Flor</option>
						<option value="butterfly">Mariposa</option>
					</select>
				</div>

				<input type="color" value={brushColor} onChange={e => setBrushColor(e.target.value)} />
				<input type="range" min={1} max={20} value={lineWidth} onChange={e => setLineWidth(+e.target.value)} />
				<input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />

				<input type="number" value={canvasWidth} onChange={e => setCanvasWidth(+e.target.value)} />
				<input type="number" value={canvasHeight} onChange={e => setCanvasHeight(+e.target.value)} />

				<button onClick={clearCanvas} className="bg-red-500 text-white px-2 rounded">Limpiar</button>
				<button onClick={saveDrawing} className="bg-green-600 text-white px-2 rounded">Guardar</button>
			</div>

			<canvas
				ref={canvasRef}
				width={canvasWidth}
				height={canvasHeight}
				className="border-2 border-gray-400 rounded"
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseUp={onMouseUp}
				onMouseLeave={onMouseUp}
			/>
		</div>
	);
}
