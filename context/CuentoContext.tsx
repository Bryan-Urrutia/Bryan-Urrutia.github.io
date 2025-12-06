"use client";

import { createContext, useEffect, useState } from "react";

type Pagina = string[][];

interface Cuento {
	id: string;
	titulo: string;
	color: string;
	cuento: string;
	paginas: Pagina;
}

interface CuentoContextType {
	cuentos: Cuento[]
}

export const CuentoContext = createContext<CuentoContextType | null>(null);

export const CuentoContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cuentos, setCuentos] = useState<Cuento[]>([
		{
			id: "1",
			titulo: "Flipantes aventuras de piratas",
			color: "#D29BFD",
			cuento: "Lidia, la princesa española, era una joven valiente y apasionada por el mar y la libertad. Un día, mientras navegaba sola en su barco en la Costa Brava, conoció a Bryan, un príncipe chileno romántico y soñador y mega perfecto que había llegado a España en uno de sus viajes. Bryan se acercó a Lidia y le dijo a una velocidad impresionante: ¿Por qué el barco nunca se pierde? Porque siempre tiene un buen timonel... como tú, ¿verdad?. Lidia se ríe y sonríe no habia entendido por la velocidad de hablar de Bryan, por lo que tuvo que volver a decirlo mega lento pero al hacerlo se sintió atraído por Lidia por su divertido humor y forma de ser junto con su habilidad en el mar. Lidia comienza a contar historias de piratas y tesoros para presumir con una brújula antigua en la mano. Bryan la escucha embelesado con las historias y experiencias de Lidia, y pronto se encuentran navegando juntos hacia el horizonte, con el sol poniéndose en el mar. De repente, un barco pirata apareció en el horizonte, con una vela negra y una bandera con una calavera. Por lo que tuvieron que prepararse para la batalla, sabiendo que no podían dejar que los piratas los abordaran. La batalla comenzó, y Lidia y Bryan se lanzaron al ataque. Lidia lanzó una cuerda para atrapar a uno de los piratas, pero este se liberó y la atacó con su espada. Bryan apareció de la nada y desvió el golpe, permitiendo que Lidia contraatacara y derribara al pirata. Mientras tanto, otro pirata intentó abordar el barco, pero Bryan lo recibió con un puñetazo en la mandíbula. Lidia aprovechó la distracción para lanzar una granada de pólvora que hizo volar al pirata por los aires. Y Bryan grito \"¡Conchetumare!\" Y logro por poco evitarla, Lidia le comento \"Joder\". A medida que la batalla se intensificaba, Lidia y Bryan se encontraban constantemente ayudándose mutuamente. Bryan cubría la espalda de Lidia mientras él luchaba contra dos piratas Argentinos, y Lidia la protegía de un pirata Japonesa que intentaba atacarla por detrás. Juntos, lograron derrotar a los piratas y salvar su barco. Exhaustos pero victoriosos, se miraron a los ojos y se sonrieron. La adrenalina de la batalla los había unido aún más. Después de derrotar a los piratas, Lidia y Bryan decidieron buscar el tesoro que los piratas habían estado protegiendo. Navegaron hacia una isla desierta, y después de una búsqueda exhaustiva, encontraron un cofre lleno de oro y joyas. Mientras Bryan se distraía admirando una estatua de oro, Lidia se acercó a él con una sonrisa maliciosa. De repente, lo empujó con fuerza y Bryan cayó al agua. Lidia se rió a carcajadas mientras Bryan luchaba por mantenerse a flote. \"No puedes resistir tu sangre española, ¿verdad?\", gritó Bryan. Y Lidia gritó \"¿Y lo malo?\" mientras se alejaba en el barco. Bryan tuvo que nadar hacia una isla triste y desolada, donde se desplomó en la arena, exhausto y enfadado. Pero justo cuando Bryan pensaba que Lidia lo había abandonado para siempre, el barco apareció de nuevo en el horizonte. Lidia se acercó a la orilla y gritó: \"¡Era broma, tonto! ¡Sube al barco y compartamos el tesoro!\". Bryan se levantó, sonriendo, y nadó hacia el barco. Cuando subió a bordo, Lidia lo abrazó y le dijo: \"Jeje no puede resistir mi sangre española...\". Después de buscar más en el tesoro, descubrieron un mapa antiguo que parecía estar conectado al tesoro. El mapa mostraba un camino sinuoso que llevaba a un lugar desconocido. Decidieron seguir el mapa, intrigados por lo que podrían encontrar. El mapa prometía llevarlos a un lugar mágico. A medida que avanzaban, el camino los llevó a través de montañas y valles, hasta que finalmente llegaron a un lugar que parecía ser el destino final del mapa. Pero cuando llegaron, se dieron cuenta de que el mapa no los había llevado a un lugar geográfico específico, sino a un lugar emocional. El mapa los había llevado a donde más querían estar: juntos, en un lugar lleno de amor y felicidad. Lidia y Bryan se miraron a los ojos, y sin decir una palabra, supieron que estaban exactamente donde querían estar. El mapa continuaba, pero ellos decidieron quedarse allí, disfrutando de la compañía del otro. El mapa parecía tener una vida propia, y comenzó a cambiar, mostrando un nuevo camino que se extendía hacia el futuro. Lidia y Bryan sonrieron, sabiendo que su aventura juntos apenas había comenzado.",
			paginas: []
		},
		{
			id: "2",
			titulo: "Libro2",
			color: "#D29BFD",
			cuento: "Lidia, la princesa española, era una joven valiente y apasionada por el mar y la libertad. Un día, mientras navegaba sola en su barco en la Costa Brava, conoció a Bryan, un príncipe chileno romántico y soñador y mega perfecto que había llegado a España en uno de sus viajes. Bryan se acercó a Lidia y le dijo a una velocidad impresionante: ¿Por qué el barco nunca se pierde? Porque siempre tiene un buen timonel... como tú, ¿verdad?. Lidia se ríe y sonríe no habia entendido por la velocidad de hablar de Bryan, por lo que tuvo que volver a decirlo mega lento pero al hacerlo se sintió atraído por Lidia por su divertido humor y forma de ser junto con su habilidad en el mar. Lidia comienza a contar historias de piratas y tesoros para presumir con una brújula antigua en la mano. Bryan la escucha embelesado con las historias y experiencias de Lidia, y pronto se encuentran navegando juntos hacia el horizonte, con el sol poniéndose en el mar. De repente, un barco pirata apareció en el horizonte, con una vela negra y una bandera con una calavera. Por lo que tuvieron que prepararse para la batalla, sabiendo que no podían dejar que los piratas los abordaran. La batalla comenzó, y Lidia y Bryan se lanzaron al ataque. Lidia lanzó una cuerda para atrapar a uno de los piratas, pero este se liberó y la atacó con su espada. Bryan apareció de la nada y desvió el golpe, permitiendo que Lidia contraatacara y derribara al pirata. Mientras tanto, otro pirata intentó abordar el barco, pero Bryan lo recibió con un puñetazo en la mandíbula. Lidia aprovechó la distracción para lanzar una granada de pólvora que hizo volar al pirata por los aires. Y Bryan grito \"¡Conchetumare!\" Y logro por poco evitarla, Lidia le comento \"Joder\". A medida que la batalla se intensificaba, Lidia y Bryan se encontraban constantemente ayudándose mutuamente. Bryan cubría la espalda de Lidia mientras él luchaba contra dos piratas Argentinos, y Lidia la protegía de un pirata Japonesa que intentaba atacarla por detrás. Juntos, lograron derrotar a los piratas y salvar su barco. Exhaustos pero victoriosos, se miraron a los ojos y se sonrieron. La adrenalina de la batalla los había unido aún más. Después de derrotar a los piratas, Lidia y Bryan decidieron buscar el tesoro que los piratas habían estado protegiendo. Navegaron hacia una isla desierta, y después de una búsqueda exhaustiva, encontraron un cofre lleno de oro y joyas. Mientras Bryan se distraía admirando una estatua de oro, Lidia se acercó a él con una sonrisa maliciosa. De repente, lo empujó con fuerza y Bryan cayó al agua. Lidia se rió a carcajadas mientras Bryan luchaba por mantenerse a flote. \"No puedes resistir tu sangre española, ¿verdad?\", gritó Bryan. Y Lidia gritó \"¿Y lo malo?\" mientras se alejaba en el barco. Bryan tuvo que nadar hacia una isla triste y desolada, donde se desplomó en la arena, exhausto y enfadado. Pero justo cuando Bryan pensaba que Lidia lo había abandonado para siempre, el barco apareció de nuevo en el horizonte. Lidia se acercó a la orilla y gritó: \"¡Era broma, tonto! ¡Sube al barco y compartamos el tesoro!\". Bryan se levantó, sonriendo, y nadó hacia el barco. Cuando subió a bordo, Lidia lo abrazó y le dijo: \"Jeje no puede resistir mi sangre española...\". Después de buscar más en el tesoro, descubrieron un mapa antiguo que parecía estar conectado al tesoro. El mapa mostraba un camino sinuoso que llevaba a un lugar desconocido. Decidieron seguir el mapa, intrigados por lo que podrían encontrar. El mapa prometía llevarlos a un lugar mágico. A medida que avanzaban, el camino los llevó a través de montañas y valles, hasta que finalmente llegaron a un lugar que parecía ser el destino final del mapa. Pero cuando llegaron, se dieron cuenta de que el mapa no los había llevado a un lugar geográfico específico, sino a un lugar emocional. El mapa los había llevado a donde más querían estar: juntos, en un lugar lleno de amor y felicidad. Lidia y Bryan se miraron a los ojos, y sin decir una palabra, supieron que estaban exactamente donde querían estar. El mapa continuaba, pero ellos decidieron quedarse allí, disfrutando de la compañía del otro. El mapa parecía tener una vida propia, y comenzó a cambiar, mostrando un nuevo camino que se extendía hacia el futuro. Lidia y Bryan sonrieron, sabiendo que su aventura juntos apenas había comenzado.",
			paginas: []
		},
		{
			id: "3",
			titulo: "Libro3",
			color: "#D29BFD",
			cuento: "Lidia, la princesa española, era una joven valiente y apasionada por el mar y la libertad. Un día, mientras navegaba sola en su barco en la Costa Brava, conoció a Bryan, un príncipe chileno romántico y soñador y mega perfecto que había llegado a España en uno de sus viajes. Bryan se acercó a Lidia y le dijo a una velocidad impresionante: ¿Por qué el barco nunca se pierde? Porque siempre tiene un buen timonel... como tú, ¿verdad?. Lidia se ríe y sonríe no habia entendido por la velocidad de hablar de Bryan, por lo que tuvo que volver a decirlo mega lento pero al hacerlo se sintió atraído por Lidia por su divertido humor y forma de ser junto con su habilidad en el mar. Lidia comienza a contar historias de piratas y tesoros para presumir con una brújula antigua en la mano. Bryan la escucha embelesado con las historias y experiencias de Lidia, y pronto se encuentran navegando juntos hacia el horizonte, con el sol poniéndose en el mar. De repente, un barco pirata apareció en el horizonte, con una vela negra y una bandera con una calavera. Por lo que tuvieron que prepararse para la batalla, sabiendo que no podían dejar que los piratas los abordaran. La batalla comenzó, y Lidia y Bryan se lanzaron al ataque. Lidia lanzó una cuerda para atrapar a uno de los piratas, pero este se liberó y la atacó con su espada. Bryan apareció de la nada y desvió el golpe, permitiendo que Lidia contraatacara y derribara al pirata. Mientras tanto, otro pirata intentó abordar el barco, pero Bryan lo recibió con un puñetazo en la mandíbula. Lidia aprovechó la distracción para lanzar una granada de pólvora que hizo volar al pirata por los aires. Y Bryan grito \"¡Conchetumare!\" Y logro por poco evitarla, Lidia le comento \"Joder\". A medida que la batalla se intensificaba, Lidia y Bryan se encontraban constantemente ayudándose mutuamente. Bryan cubría la espalda de Lidia mientras él luchaba contra dos piratas Argentinos, y Lidia la protegía de un pirata Japonesa que intentaba atacarla por detrás. Juntos, lograron derrotar a los piratas y salvar su barco. Exhaustos pero victoriosos, se miraron a los ojos y se sonrieron. La adrenalina de la batalla los había unido aún más. Después de derrotar a los piratas, Lidia y Bryan decidieron buscar el tesoro que los piratas habían estado protegiendo. Navegaron hacia una isla desierta, y después de una búsqueda exhaustiva, encontraron un cofre lleno de oro y joyas. Mientras Bryan se distraía admirando una estatua de oro, Lidia se acercó a él con una sonrisa maliciosa. De repente, lo empujó con fuerza y Bryan cayó al agua. Lidia se rió a carcajadas mientras Bryan luchaba por mantenerse a flote. \"No puedes resistir tu sangre española, ¿verdad?\", gritó Bryan. Y Lidia gritó \"¿Y lo malo?\" mientras se alejaba en el barco. Bryan tuvo que nadar hacia una isla triste y desolada, donde se desplomó en la arena, exhausto y enfadado. Pero justo cuando Bryan pensaba que Lidia lo había abandonado para siempre, el barco apareció de nuevo en el horizonte. Lidia se acercó a la orilla y gritó: \"¡Era broma, tonto! ¡Sube al barco y compartamos el tesoro!\". Bryan se levantó, sonriendo, y nadó hacia el barco. Cuando subió a bordo, Lidia lo abrazó y le dijo: \"Jeje no puede resistir mi sangre española...\". Después de buscar más en el tesoro, descubrieron un mapa antiguo que parecía estar conectado al tesoro. El mapa mostraba un camino sinuoso que llevaba a un lugar desconocido. Decidieron seguir el mapa, intrigados por lo que podrían encontrar. El mapa prometía llevarlos a un lugar mágico. A medida que avanzaban, el camino los llevó a través de montañas y valles, hasta que finalmente llegaron a un lugar que parecía ser el destino final del mapa. Pero cuando llegaron, se dieron cuenta de que el mapa no los había llevado a un lugar geográfico específico, sino a un lugar emocional. El mapa los había llevado a donde más querían estar: juntos, en un lugar lleno de amor y felicidad. Lidia y Bryan se miraron a los ojos, y sin decir una palabra, supieron que estaban exactamente donde querían estar. El mapa continuaba, pero ellos decidieron quedarse allí, disfrutando de la compañía del otro. El mapa parecía tener una vida propia, y comenzó a cambiar, mostrando un nuevo camino que se extendía hacia el futuro. Lidia y Bryan sonrieron, sabiendo que su aventura juntos apenas había comenzado.",
			paginas: []
		},
	]);

	const dividirCuento = (texto = '', titulo = "Portada", palabrasPorParte = 130) => {
		const palabras = texto.split(" ");
		const partes = [];

		// Página 0: Portada con título en lado A y primer bloque de texto en lado B
		const ladoB_portada = palabras.slice(0, palabrasPorParte).join(" ");
		partes.push([titulo, ladoB_portada]);

		// Empezamos el índice desde la palabra siguiente a las usadas en lado B de portada
		let index = palabrasPorParte;

		// A partir de aquí llenamos páginas normales (lado A y lado B)
		while (index < palabras.length) {
			const lado1 = palabras.slice(index, index + palabrasPorParte).join(" ");
			const lado2 = palabras
				.slice(index + palabrasPorParte, index + palabrasPorParte * 2)
				.join(" ");
			partes.push([lado1, lado2]);
			index += palabrasPorParte * 2;
		}

		// Aseguramos que la última página tenga "Fin" en el lado derecho
		const ultima = partes[partes.length - 1];
		if (!ultima[1] || ultima[1].trim() === "") {
			ultima[1] = "Fin";
		} else {
			partes.push(["Fin"]);
		}

		return partes;
	};

	useEffect(() => {
		const cuentoFormateado: Cuento[] = cuentos.map((c) => ({
			id: c.id,
			titulo: c.titulo,
			color: c.color,
			cuento: c.cuento,
			paginas: dividirCuento(c.cuento, c.titulo),
		}));

		setCuentos(cuentoFormateado);

		// getAllCuento()
		//   .then((res) => {
		//     const data = _.get(res, "data", []);
		//     setCuentosWeb(data);

		//     const formateados = data.map((c) => ({
		//       id: c.id,
		//       titulo: c.titulo,
		//       color: c.color,
		//       paginas: dividirCuento(c.cuento, c.titulo),
		//     }));

		//     setCuentos(formateados);
		//   })
		//   .catch((err) => {
		//     console.log(err);
		//   });
	}, []);

	return (
		<CuentoContext.Provider
			value={{
				cuentos,
			}}
		>
			{children}
		</CuentoContext.Provider>
	);
};
