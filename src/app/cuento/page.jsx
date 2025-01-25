"use client";
import { CuentoContextProvider } from "@/context/CuentoContext";
import Cuento from "@/components/Cuento/Cuento";
import ListCuentos from "@/components/Cuento/ListCuento";

const Page = () => {
  return (
    <section className="bg-light dark:bg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full flex justify-center">
      <CuentoContextProvider>
        <Cuento />
        <ListCuentos />
      </CuentoContextProvider>
    </section>
  );
};

export default Page;
