/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import Image from "next/image";

import {placesData} from "@/db";
import PlaceCard from "@/components/ui/location-card";
import Images from "@/config/constants/Images";
import BackgroundImages from "@/components/BackgroundImages";

export const metadata = {
	title: "Cities – MakerChat",
	description:
		"Discover where MakerChat comes to life across India. Join inspiring events, meet fellow makers, and be part of the growing community of innovators in your city.",
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
				url: Images.groupPhoto.src,
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
		images: [Images.groupPhoto.src],
	},
	robots: "index, follow",
};

export default function Events() {
	return (
		<section className="bg-grid-[#4b3f33]/5 relative bg-[#f5f5f7]">
			{/* Background Mask */}

			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background Image */}
			<BackgroundImages />
			<div className="mx-auto  relative z-10  px-4 py-32 md:px-0">
				<section className="  lg:px-16 z-50">
					<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
						MakerChat across the Cities
					</h2>
					<p className="text-center text-5xl md:text-7xl lg:text-7xl font-light font-tiemposHeadline lowercase leading-tight  mb-10">
						Where MakerChat
						<br />
						<span className="font-tiemposHeadline font-medium">
							comes to life
						</span>
					</p>

					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
						{placesData.ids.map((placeId: string) => {
							const place = placesData.details[placeId];
							return <PlaceCard key={placeId} {...place} />;
						})}
					</div>
				</section>
			</div>
		</section>
	);
}
