"use client";
import { CuentoContextProvider } from "@/context/CuentoContext";
import Cuento from "@/components/Cuento/Cuento";

const Page = () => {
  return (
    <section className="container mx-auto">
      <div className="flex-1">
        <CuentoContextProvider>
          <Cuento />
        </CuentoContextProvider>
      </div>
    </section>
  );
};

export default Page;
