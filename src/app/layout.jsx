import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { ThemeProvider } from "@/components/Header/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "CV Bryan Urrutia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
