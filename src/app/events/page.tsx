/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import Image from "next/image";

import {placesData} from "@/db";
import PlaceCard from "@/components/ui/location-card";
import Images from "@/config/constants/Images";
import BackgroundImages from "@/components/BackgroundImages";
import CitiesSection from "@/components/ui/cities-section";

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
		"MakerChat Bengaluru",
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
			<div className="mx-auto  relative z-10  py-20">
				<CitiesSection />
			</div>
		</section>
	);
}
