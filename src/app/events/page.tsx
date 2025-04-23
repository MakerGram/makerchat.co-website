/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import Image from "next/image";

import {placesData} from "@/db";
import PlaceCard from "@/components/ui/location-card";

export const metadata = {
	title: "Cities – MakerChat",
	description:
		"Discover where MakerChat comes to life across India. Join inspiring events, meet fellow makers, and be part of the growing community of innovators in your city.",
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
		"MakerChat cities",
		"MakerChat Kochi",
		"MakerChat Bangalore",
		"maker events India",
		"startup meetups",
		"tech meetups India",
		"maker community",
		"hardware innovation events",
		"startup city events",
		"maker ecosystem locations",
	],
	openGraph: {
		title: "Cities – MakerChat",
		description:
			"Discover where MakerChat comes to life across India. Join inspiring events, meet fellow makers, and be part of the growing community of innovators in your city.",
		url: "https://yourdomain.com/cities",
		siteName: "MakerChat",
		images: [
			{
				url: "/uploads/photos/makerchat-group-photo.webp",
				width: 1200,
				height: 630,
				alt: "MakerChat Community Event",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Cities – MakerChat",
		description:
			"Explore the cities where MakerChat thrives. Connect, create, and collaborate with India's most passionate maker community.",
		images: ["/uploads/photos/makerchat-group-photo.webp"],
	},
	robots: "index, follow",
};

export default function Events() {
	return (
		<section className="bg-grid-black/10 relative pb-32 pt-16 md:pt-10">
			{/* Background Mask */}

			<div className="absolute inset-0 pointer-events-none bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] -z-10"></div>

			{/* Background Image */}
			<div className="absolute top-0 left-0 pointer-events-none ">
				<Image
					src="/elements/pi-skelton.png"
					width={600}
					height={600}
					alt="Background Element"
					className="opacity-10 object-contain"
				/>
			</div>

			<section className=" px-4 md:px-8 lg:px-16 z-50">
				<h2 className="text-left md:text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					MakerChat across the Cities
				</h2>
				<p className="text-left md:text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-10 leading-snug">
					Where MakerChat Comes to Life
				</p>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
					{placesData.ids.map((placeId: string) => {
						const place = placesData.details[placeId];
						return <PlaceCard key={placeId} {...place} />;
					})}
				</div>
			</section>
		</section>
	);
}
