import { CartaContext } from "@/context/CartaContext";
import { useContext } from "react";

export default function Layout({ children }) {
  const { showCarta } = useContext(CartaContext);
  return (
    <section
      className={`${
        showCarta ? "" : "bg-light dark:bg-dark"
      }  flex flex-row gap-x-4  min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full`}
    >
      <article className="container mx-auto py-10">{children}</article>
    </section>
  );
}
