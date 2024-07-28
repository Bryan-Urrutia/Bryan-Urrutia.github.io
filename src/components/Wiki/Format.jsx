import React from "react";
import {
  BsFiletypeCsv,
  BsFiletypeJson,
  BsFiletypeXml,
  BsFiletypeYml,
} from "react-icons/bs";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

const Format = () => {
  return (
    <>
      <TabsContent
        value="csv"
        className="flex flex-col gap-y-3 container mx-auto"
      >
        <h1 className="text-center text-2xl font-bold">CSV</h1>
        <div>
          <BsFiletypeCsv
            size={150}
            className="float-left  bg-secondary p-3 rounded-lg shadow-xl mr-4 border"
          />
          <h3 className="text-justify">
            CSV, por sus siglas en inglés "Comma-Separated Values" (Valores
            Separados por Comas), es un formato de archivo que se utiliza para
            almacenar datos tabulares en texto plano. Cada línea en el archivo
            representa un registro de la tabla, y los valores de cada registro
            están separados por comas. Este formato es ampliamente utilizado
            debido a su simplicidad y facilidad de uso con programas de hoja de
            cálculo y bases de datos.
          </h3>
        </div>
        <div>
          <h2 className="text-center text-xl font-bold">Uso de CSV</h2>
          <ol className="list-decimal">
            <li>
              <h4 className="text-lg font-bold text-blue">
                Intercambio de Datos
              </h4>
              <p className="text-justify">
                CSV se utiliza comúnmente para transferir datos entre diferentes
                aplicaciones y plataformas. Es un formato estándar que puede ser
                leído por la mayoría de las hojas de cálculo (como Microsoft
                Excel y Google Sheets) y sistemas de gestión de bases de datos.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold text-blue">
                Almacenamiento de Datos
              </h4>
              <p className="text-justify">
                Es una forma sencilla de almacenar datos en un formato legible
                por humanos. Ideal para conjuntos de datos pequeños y medianos.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold text-blue">
                Importación y Exportación
              </h4>
              <p className="text-justify">
                Muchas aplicaciones de software permiten la importación y
                exportación de datos en formato CSV, facilitando la integración
                y migración de datos.
              </p>
            </li>
          </ol>
          <h2 className="text-xl font-bold text-center mt-4">
            Ejemplo de un Archivo CSV
          </h2>
          <p className="text-justify">
            Supongamos que tenemos una lista de empleados con los siguientes
            campos: ID, Nombre, Apellido, Edad, Departamento, Salario. El
            archivo CSV podría verse así:
          </p>

          <div className="flex flex-col gap-2 justify-center items-center">
            <Card className="bg-secondary py-2 border shadow-lg">
              <CardContent className="pb-0">
                <SyntaxHighlighter language="csv" style={theme}>
                  {`ID,Nombre,Apellido,Edad,Departamento,Salario
1,Juan,Pérez,34,Recursos Humanos,50000
2,Ana,Gómez,29,Marketing,55000
3,Luis,Ramírez,41,IT,60000
4,Marta,Sánchez,36,Finanzas,62000
5,Carlos,Díaz,28,IT,52000`}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="json"
        className="flex flex-col gap-y-3 container mx-auto"
      >
        <h1 className="text-center text-2xl font-bold">JSON</h1>
        <div className="">
          <BsFiletypeJson
            size={150}
            className="float-left  bg-secondary p-3 rounded-lg shadow-xl mr-4 border"
          />
          <h3 className="text-justify">
            JSON, por sus siglas en inglés "JavaScript Object Notation"
            (Notación de Objetos de JavaScript), es un formato de archivo que se
            utiliza para almacenar y transferir datos. Es fácil de leer y
            escribir para los humanos, y fácil de interpretar y generar para las
            máquinas.
          </h3>
        </div>
        <div>
          <h2 className="text-center text-xl font-bold">Uso de JSON</h2>
          <ol className="list-decimal">
            <li>
              <h4 className="text-lg font-bold text-blue">
                Intercambio de Datos
              </h4>
              <p className="text-justify">
                JSON se utiliza comúnmente para transferir datos entre un
                servidor y una aplicación web. Es un formato ligero y
                ampliamente soportado por múltiples lenguajes de programación.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold text-blue">
                Almacenamiento de Datos
              </h4>
              <p className="text-justify">
                Es una forma estructurada y legible de almacenar datos. Ideal
                para configuraciones, datos de usuarios y muchas otras
                aplicaciones.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-bold text-blue">
                API y Servicios Web
              </h4>
              <p className="text-justify">
                Muchas APIs y servicios web utilizan JSON como formato de
                respuesta y solicitud debido a su simplicidad y eficiencia.
              </p>
            </li>
          </ol>
          <h2 className="text-xl font-bold text-center mt-4">
            Ejemplo de un Archivo JSON
          </h2>
          <p className="text-justify">
            Supongamos que tenemos una lista de empleados con los siguientes
            campos: ID, Nombre, Apellido, Edad, Departamento, Salario. El
            archivo JSON podría verse así:
          </p>

          <div className="flex flex-col gap-2 justify-center items-center">
            <Card className="bg-secondary py-2 border shadow-lg">
              <CardContent className="pb-0">
                <SyntaxHighlighter language="json" style={theme}>
                  {`[
  {
    "ID": 1,
    "Nombre": "Juan",
    "Apellido": "Pérez",
    "Edad": 34,
    "Departamento": "Recursos Humanos",
    "Salario": 50000
  },
  {
    "ID": 2,
    "Nombre": "Ana",
    "Apellido": "Gómez",
    "Edad": 29,
    "Departamento": "Marketing",
    "Salario": 55000
  },
  {
    "ID": 3,
    "Nombre": "Luis",
    "Apellido": "Ramírez",
    "Edad": 41,
    "Departamento": "IT",
    "Salario": 60000
  },
  {
    "ID": 4,
    "Nombre": "Marta",
    "Apellido": "Sánchez",
    "Edad": 36,
    "Departamento": "Finanzas",
    "Salario": 62000
  },
  {
    "ID": 5,
    "Nombre": "Carlos",
    "Apellido": "Díaz",
    "Edad": 28,
    "Departamento": "IT",
    "Salario": 52000
  }
]`}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="xml" className="container mx-auto">
        <h1 className="text-center text-2xl font-bold">xml</h1>
        <div className="">
          <BsFiletypeXml
            size={150}
            className="float-left  bg-secondary p-3 rounded-lg shadow-xl mr-4 border"
          />
          <h3 className="text-justify"></h3>
        </div>
      </TabsContent>
      <TabsContent value="yaml" className="container mx-auto">
        <h1 className="text-center text-2xl font-bold">yaml</h1>
        <div className="">
          <BsFiletypeYml
            size={150}
            className="float-left  bg-secondary p-3 rounded-lg shadow-xl mr-4 border"
          />
          <h3 className="text-justify"></h3>
        </div>
      </TabsContent>
    </>
  );
};

export default Format;
