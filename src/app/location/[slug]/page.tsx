/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */

// src/app/location/[slug]/page.tsx

import {Metadata} from "next";
import Image from "next/image";

import EventCards from "@/components/ui/scroll-both";
import {placesData} from "@/db";
import LocationHero from "@/components/ui/location-hero";

type Params = Promise<{slug: string}>;

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
				{url: "/favicon-96x96.png", type: "image/png", sizes: "96x96"},
				{url: "/favicon.svg", type: "image/svg+xml"},
				{url: "/favicon.ico", rel: "shortcut icon"},
			],
			apple: [{url: "/apple-touch-icon.png", sizes: "180x180"}],
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
					url: "/uploads/photos/makerchat-group-photo.webp",
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
			images: ["/uploads/photos/makerchat-group-photo.webp"],
		},
		robots: "index, follow",
	};
}

export default async function LocationPage({params}: {params: Params}) {
	const {slug} = await params;

	const data = placesData.details[slug as keyof typeof placesData.details];

	return (
		<>
			<div className="relative w-full min-h-screen overflow-hidden">
				<Image
					src={data.image}
					alt={data.location}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-black/70 to-transparent" />
				<LocationHero slug={slug} data={data} />
			</div>

			{/* Show event cards only for Kochi */}
			{slug === "kochi" && <EventCards />}
		</>
	);
}
