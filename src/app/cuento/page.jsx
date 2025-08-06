"use client";
import { CuentoContextProvider } from "@/context/CuentoContext";
import Cuento from "@/components/Cuento/Cuento";
import ListCuentos from "@/components/Cuento/ListCuento";

const Page = () => {
  return (
    <section className="min-h-screen w-full flex justify-center">
      <CuentoContextProvider>
        <Cuento />
        <ListCuentos />
      </CuentoContextProvider>
    </section>
  );
};

export default Page;
