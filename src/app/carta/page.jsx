"use client";
import { CartaContextProvider } from "@/context/CartaContext";
import ListCartas from "@/components/Carta/ListCartas";
import Carta from "@/components/Carta/Carta";
import Mensaje from "@/components/Carta/Mensaje";

const Page = () => {
  return (
    <CartaContextProvider>
      <Carta />
      <ListCartas />
      {/* <Mensaje /> */}
    </CartaContextProvider>
  );
};

export default Page;
