// The root layout is a Server Component
// by default and can not be set to a Client Component.
import React from "react";

import {Manrope, Instrument_Serif} from "next/font/google";
const manrope = Manrope({subsets: ["latin"], variable: "--font-manrope"});
import localFont from "next/font/local";

import "./globals.css";
import TopNavBar from "@/components/ui/top-navbar";
import {cn} from "@/lib/utils";
import Footer from "@/components/ui/footer";

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-instrument-serif",
});

const TiemposHeadline = localFont({
	src: [
		{
			path: "../../public/fonts/TiemposHeadline-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/TiemposHeadline-LightItalic.otf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/fonts/TiemposHeadline-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/TiemposHeadline-RegularItalic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/TiemposHeadline-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/TiemposHeadline-MediumItalic.otf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/TiemposHeadline-Semibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/TiemposHeadline-SemiboldItalic.otf",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../public/fonts/TiemposHeadline-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/TiemposHeadline-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/TiemposHeadline-Black.otf",
			weight: "900",
			style: "normal",
		},
		{
			path: "../../public/fonts/TiemposHeadline-BlackItalic.otf",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--TiemposHeadline",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang="en"
			className={cn(
				manrope.variable,
				instrumentSerif.variable,
				TiemposHeadline.variable,
			)}
		>
			<body className="flex flex-col min-h-screen h-dvh bg-white antialiased font-manrope ">
				<main className="flex-grow">
					<TopNavBar />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
