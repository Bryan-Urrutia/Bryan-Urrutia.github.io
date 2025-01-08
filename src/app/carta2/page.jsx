"use client";
import "./style.css";

const cartas = [
  {
    para: "Lidia Cano",
    de: "Bryan Urrutia",
    carta: "",
    desactivado: false,
  },
  {
    para: "Lidia Cano",
    de: "Bryan Urrutia",
    carta: "",
    desactivado: true,
  },
  {
    para: "Lidia Cano",
    de: "Bryan Urrutia",
    carta: "",
    desactivado: true,
  },
  {
    para: "Lidia Cano",
    de: "Bryan Urrutia",
    carta: "",
    desactivado: true,
  },
];
const Page = () => {
  return (
    <section className="">
      <div className="grid grid-cols-4 px-10">
        {cartas.map((carta, index) => {
          return (
            <div className="pb-64 pt-10" key={index}>
              <div className="valentines-day">
                <div
                  className={`envelope ${carta.desactivado ? "true" : "false"}`}
                ></div>
                <div
                  className={`heart ${carta.desactivado ? "true" : "false"}`}
                ></div>
                <div className="text">{index + 1}</div>
                <div
                  className={`front ${carta.desactivado ? "true" : "false"}`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
