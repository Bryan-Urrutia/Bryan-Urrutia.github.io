"use client";
import React from "react";
import { TabsContent } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

const Python = () => {
  const bubbleSort = `def bubbleSort(nums):
    intercambio = True
    while intercambio:
        intercambio = False
        for i in range(len(nums) - 1):
            if nums[i] > nums[i+1]:
                nums[i], nums[i+1] = nums[i+1], nums[i]
                intercambio = True

listaNumerosAleatorios = [5,2,1,8,4]
bubbleSort(listaNumerosAleatorios)
print(listaNumerosAleatorios)`;

  const selectionSort = `def selectionSort(nums):
    for i in range(len(nums)):
        low_index= i

        for j in range(i + 1, len(nums)):
            if nums[j] < nums[low_index]:
                low_index = j
            print(nums)
        nums[i], nums[low_index] = nums[low_index], nums[i]

listaNumerosAleatorios = [1,6,2,4,8,7]
selectionSort(listaNumerosAleatorios)
print(listaNumerosAleatorios)`;

  const insertionSort = `def insertionSort(nums):
    for i in range(1, len(nums)):
        insert_item = nums[i]

        j = i - 1

        while j >= 0 and nums[j] > insert_item:
            nums[j + 1] = nums[j]
            j -= 1
        nums[j + 1] = insert_item

listaNumerosAleatorios = [9,2,6,3,4,8,7]
insertionSort(listaNumerosAleatorios)
print(listaNumerosAleatorios)`;
  return (
    <>
      <TabsContent value="about-python" className="gap-y-3 flex flex-col">
        <h1 className="text-center text-2xl font-bold">¿Qué es Python?</h1>
        <div className="">
          <Image
            src={"/wiki/python-logo.png"}
            className="float-left bg-secondary p-3 rounded-lg shadow-xl mr-4 border"
            height={180}
            width={250}
            alt="Python logo"
          />
          <h3 className="text-justify">
            Python es un{" "}
            <span className="text-blue not-italic font-bold">
              lenguaje de alto nivel de programación interpretado
            </span>{" "}
            cuya filosofía hace hincapié en la legibilidad de su código. Se
            trata de un lenguaje de programación multiparadigma, ya que soporta
            parcialmente la orientación a objetos, programación imperativa y, en
            menor medida, programación funcional. Utilizado en las aplicaciones
            web, el desarrollo de software, la ciencia de datos y el machine
            learning (ML).
          </h3>
        </div>

        <div>
          <h2 className="text-center text-2xl font-bold">
            ¿Cuáles son las características de Python?
          </h2>
          <h3>
            Las características siguientes del lenguaje de programación Python
            lo hacen único:
          </h3>
          <ol className="list-decimal mt-2 gap-2 flex flex-col">
            <li>
              <h4 className="text-lg font-bold">Un lenguaje interpretado</h4>
              <p className="text-justify">
                Python es un lenguaje interpretado, lo que significa que ejecuta
                directamente el código línea por línea. Si existen errores en el
                código del programa, su ejecución se detiene. Así, los
                programadores pueden encontrar errores en el código con rapidez.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold">
                Un lenguaje fácil de utilizar
              </h4>
              <p className="text-justify">
                Python utiliza palabras similares a las del inglés. A diferencia
                de otros lenguajes de programación, Python no utiliza llaves. En
                su lugar, utiliza sangría.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold">
                Un lenguaje tipeado dinámicamente
              </h4>
              <p className="text-justify">
                Los programadores no tienen que anunciar tipos de variables
                cuando escriben código porque Python los determina en el tiempo
                de ejecución. Debido a esto, es posible escribir programas de
                Python con mayor rapidez.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold">Un lenguaje de alto nivel</h4>
              <p className="text-justify">
                Python es más cercano a los idiomas humanos que otros lenguajes
                de programación. Por lo tanto, los programadores no deben
                preocuparse sobre sus funcionalidades subyacentes, como la
                arquitectura y la administración de la memoria.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold">
                Un lenguaje orientado a los objetos
              </h4>
              <p className="text-justify">
                Python es más cercano a los idiomas humanos que otros lenguajes
                de programación. Por lo tanto, los programadores no deben
                preocuparse sobre sus funcionalidades subyacentes, como la
                arquitectura y la administración de la memoria.
              </p>
            </li>
          </ol>
        </div>
      </TabsContent>
      <TabsContent value="code-python" className="gap-y-3 flex flex-col">
        <h1 className="text-center text-2xl font-bold">Algoritmos</h1>
        <div>
          <h2 className="text-xl font-bold text-blue">
            Ordenamiento de burbuja (Bubble Sort)
          </h2>
          <p className="text-justify">
            Este algoritmo de clasificación simple itera sobre la lista de
            datos, comparando elementos en pares hasta que los elementos más
            grandes “burbujean” hasta el final de la lista y los más pequeños
            permanecen al principio.
          </p>
          <p className="text-justify mt-2">
            Comienza comparando los dos primeros elementos de la lista, si el
            primer elemento es mayor que el segundo, los intercambiamos, si no,
            se quedan como están. Luego pasamos al siguiente par de elementos,
            los comparamos e intercambiamos si fuera necesario.
          </p>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Card className="bg-secondary py-2 border shadow-lg">
              <CardContent className="pb-0">
                <SyntaxHighlighter language="python" style={theme}>
                  {bubbleSort}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
            <p className="text-muted-foreground">
              El bucle while se rompe cuando no se han intercambiado elementos.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue">
            Ordenamiento de selección (Selection Sort)
          </h2>
          <p className="text-justify">
            Este algoritmo separa la lista en dos partes, ordenada y no
            ordenada. Continuamente “elimina” el elemento más pequeño de la
            parte sin ordenar y lo agrega a la parte ordenada.
          </p>
          <p className="text-justify mt-2">
            Lo que realmente realiza este algoritmo es tratar la parte izquierda
            de la lista como la parte ordenada buscando en toda la lista el
            elemento más pequeño y poniéndolo el primero. Después, sabiendo que
            ya tenemos el elemento más pequeño el primero, buscamos en toda la
            lista el elemento más pequeño de los restantes sin ordenar y lo
            intercambiamos con el siguiente ordenado y así hasta acabar con la
            lista.
          </p>

          <div className="flex flex-col gap-2 justify-center items-center">
            <Card className="bg-secondary py-2 border shadow-lg">
              <CardContent className="pb-0">
                <SyntaxHighlighter language="python" style={theme}>
                  {selectionSort}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
            <p className="text-muted-foreground">
              Cuantos más elementos tengamos ordenados, menos elementos
              tendremos que examinar.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue">
            Ordenamineto de inserción (Insert Sort)
          </h2>
          <p className="text-justify">
            Este algoritmo, al igual que la clasificación por selección, separa
            la lista en dos partes, ordenadas y no ordenadas. También suponemos
            que el primer elemento está ordenado, luego pasamos al siguiente
            elemento que lo vamos a llamar X, comparamos X con el primero, si es
            mayor, se queda como está pero si es más pequeño, copiamos el primer
            elemento en la segunda posición e insertamos X como primero.
          </p>

          <div className="flex flex-col gap-2 justify-center items-center">
            <Card className="bg-secondary py-2 border shadow-lg">
              <CardContent className="pb-0">
                <SyntaxHighlighter language="python" style={theme}>
                  {insertionSort}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="django" className="gap-y-3 flex flex-col">
        <h1 className="text-center text-2xl font-bold">Framework Django</h1>
        <div className="">
          <Image
            src={"/wiki/django-logo.png"}
            className="float-left bg-secondary p-3 rounded-lg shadow-xl mr-4 border"
            height={180}
            width={250}
            alt="Django logo"
          />
          <h3 className="text-justify">
            Django es un software que puede utilizar para desarrollar
            aplicaciones web de forma rápida y eficiente. La mayoría de las
            aplicaciones web tienen varias funciones comunes, como la
            autenticación, la recuperación de información de una base de datos y
            la administración de cookies. Los desarrolladores tienen que
            codificar una funcionalidad similar en cada aplicación web que
            escriban. Django facilita su trabajo al agrupar las diferentes
            funciones en una gran colección de módulos reutilizables, llamada
            marco de aplicación web. Los desarrolladores utilizan el marco web
            de Django para organizar y escribir su código de manera más
            eficiente y reducir significativamente el tiempo de desarrollo web.
          </h3>
        </div>
      </TabsContent>
    </>
  );
};

export default Python;
