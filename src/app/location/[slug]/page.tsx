/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */

import {Metadata} from "next";
import Image from "next/image";

import EventCards from "@/components/ui/scroll-both";
import {placesData} from "@/db";
import LocationHero from "@/components/ui/location-hero";
import Images from "@/config/constants/Images";

type Params = Promise<{slug: string}>;

export async function generateStaticParams() {
	return [
		{slug: "kochi"},
		{slug: "bangalore"},
		{slug: "hyderabad"},
		{slug: "dubai"},
	];
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const {slug} = await params;

	if (!placesData.ids.includes(slug)) {
		return {};
	}

	const data = placesData.details[slug as keyof typeof placesData.details];

	return {
		title: `${data.location} Events`,
		description: `Discover events and updates in ${data.location}.`,
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
}

export default async function LocationPage({params}: {params: Params}) {
	const {slug} = await params;

	const data = placesData.details[slug as keyof typeof placesData.details];

	return (
		<>
			<div className="relative h-dvh min-h-dvh overflow-hidden">
				<Image
					src={Images.locations[data.id as keyof typeof Images.locations]}
					alt={data.location}
					fill
					className="object-cover absolute inset-0"
					priority
				/>
				<div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-black/70 to-transparent" />
				<LocationHero slug={slug} data={data} />

				{/* Scroll indicator for Kochi */}
				{slug === "kochi" && (
					<div className="absolute bottom-12 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3">
						<div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
							<div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-scroll-down" />
						</div>
						<p className="text-white/80 text-sm font-medium tracking-wide">
							Scroll to explore past events
						</p>
					</div>
				)}
			</div>

			{/* Show event cards only for Kochi */}
			{slug === "kochi" && <EventCards />}
		</>
	);
}
