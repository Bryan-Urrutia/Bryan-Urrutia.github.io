"use client";
import Recuerdo from "@/components/Recuerdos/Recuerdo";
import { RecuerdoContextProvider } from "@/context/RecuerdoContext";

const Page = () => {
  return (
    <RecuerdoContextProvider>
      <Recuerdo />
    </RecuerdoContextProvider>
  );
};

export default Page;
