import type { Metadata } from "next";
import { Geist, Geist_Mono, Sacramento } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import Music from "@/components/Music";
import { MusicContextProvider } from "@/context/MusicaContext";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const sacramentoSans = Sacramento({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-sacramento-sans",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nidito de amor",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${sacramentoSans.variable} `}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider defaultOpen={false}>
						<AppSidebar />
						<MusicContextProvider>
						<main className="h-screen w-full">
							<SidebarTrigger />
							<Toaster richColors position="top-center" toastOptions={{ style: { zIndex: 999999 } }} />
							{children}
							<div className="pt-20">
								<Music />
							</div>
						</main>
						</MusicContextProvider>
					</SidebarProvider>
				</ThemeProvider>
				<Script
					src="https://app.embed.im/snow.js"
					strategy="afterInteractive"
				/>
				<Script
					src="https://app.embed.im/sparkles.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>

	);
}
