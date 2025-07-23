import React from "react";

import {Metadata} from "next";
import Image from "next/image";
import {notFound} from "next/navigation";

import {placesData} from "@/db";
import Images from "@/config/constants/Images";
import {InterestSection} from "@/components/ui/interest-section";

export const metadata: Metadata = {
	title: `${placesData.details.bangalore.location} Events`,
	description: `Discover events and updates in ${placesData.details.bangalore.location}.`,
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

export default function BangalorePage() {
	const slug = "bangalore";
	if (!placesData.ids.includes(slug)) {
		notFound();
	}
	const data = placesData.details[slug as keyof typeof placesData.details];
	return (
		<>
			<div className="relative h-[80vh] overflow-hidden">
				<div className="absolute inset-0 bg-black overflow-hidden">
					<Image
						src={Images.locations[data.id as keyof typeof Images.locations]}
						alt={data.location}
						fill
						className="object-cover absolute inset-0 blur-sm scale-110"
						priority
					/>
				</div>

				<div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-t from-black/90 to-transparent" />
				{/* <LocationHero slug={slug} data={data} /> */}

				<div className="absolute flex items-center flex-col-reverse md:flex-col-reverse justify-center z-50 top-1/2 md:top-1/2  -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full px-4">
					<InterestSection slug={slug} />
					<div className="text-4xl md:text-7xl font-bold font-cyber text-[#76F6FB]">
						Bengalore
					</div>
				</div>
			</div>
		</>
	);
}
