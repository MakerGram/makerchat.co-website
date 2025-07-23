import React from "react";

import {Metadata} from "next";
import Image from "next/image";
import {notFound} from "next/navigation";

import EventCards from "@/components/ui/scroll-both";
import {placesData} from "@/db";
import Images from "@/config/constants/Images";
import TVSlideshow from "@/components/ui/tv-slideshow";

export const metadata: Metadata = {
	title: `${placesData.details.kochi.location} Events`,
	description: `Discover events and updates in ${placesData.details.kochi.location}.`,
	icons: {
		icon: [
			{url: Images.faviconIco.src},
			{url: Images.favicon96.src, type: "image/png", sizes: "96x96"},
			{url: Images.faviconSvg.src, type: "image/svg+xml"},
			{url: Images.faviconIco.src, rel: "shortcut icon"},
		],
		apple: [{url: Images.appleTouchIcon.src, sizes: "180x180"}],
	},
	manifest: "/site.webmanifest",
	appleWebApp: {
		title: "MakerGram",
	},
	keywords: [
		"MakerChat sponsorship",
		"sponsor maker events",
		"support grassroots innovation",
		"hardware startup sponsors",
		"tech community sponsors",
		"founder sponsorship tiers",
		"DIY community support",
		"maker event sponsorship",
		"brand visibility India startups",
		"support maker ecosystem",
	],
	openGraph: {
		title: "Sponsorship Tiers – MakerChat",
		description:
			"Explore sponsorship opportunities with MakerChat – where your brand shines among builders, dreamers, and grassroots innovators. Choose your tier and join the maker movement.",
		url: "https://yourdomain.com/sponsorship",
		siteName: "MakerChat",
		images: [
			{
				url: Images.groupPhoto.src,
				width: 1200,
				height: 630,
				alt: "MakerChat Sponsorship Open Graph Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sponsorship Tiers – MakerChat",
		description:
			"Explore sponsorship opportunities with MakerChat – where your brand shines among builders, dreamers, and grassroots innovators.",
		images: [Images.groupPhoto.src],
	},
	robots: "index, follow",
};

export default function KochiPage() {
	const slug = "kochi";
	if (!placesData.ids.includes(slug)) {
		notFound();
	}
	const data = placesData.details[slug as keyof typeof placesData.details];
	return (
		<>
			<div className="relative h-[500px] md:h-[640px] ">
				<div className="absolute inset-0  bg-black overflow-hidden">
					<Image
						src={Images.locations[data.id as keyof typeof Images.locations]}
						alt={data.location}
						fill
						className="object-cover absolute inset-0 blur-sm scale-110"
						priority
					/>
				</div>
				<div className="absolute flex items-center flex-col justify-center z-50 -bottom-0 md:bottom-0 left-1/2 transform -translate-x-1/2 w-full">
					<Image
						src={Images.KochiBalloon}
						alt="Centered Image"
						width={900}
						height={600}
						className="object-contain w-full max-w-[900px] h-auto"
						priority
					/>
				</div>
				<TVSlideshow />
			</div>

			<EventCards />
		</>
	);
}
