import React from "react";

import Image from "next/image";

import Images from "@/config/constants/Images";

export const metadata = {
	title: "Sponsorship Tiers – MakerChat",
	description:
		"Explore sponsorship opportunities with MakerChat – where your brand shines among builders, dreamers, and grassroots innovators. Choose your tier and join the maker movement.",
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

export default function Sponsor() {
	return (
		<section className="bg-grid-[#4b3f33]/10 relative pb-32 pt-16 md:pt-10">
			{/* Background mask */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background images */}
			<div className="absolute top-0 left-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={Images.elements.piSkelton.src}
					width={600}
					height={600}
					alt="Raspberry Pi"
					className="opacity-10 object-contain"
				/>
			</div>
			<div className="absolute -bottom-36 -right-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={Images.elements.arduinoSkelton.src}
					width={500}
					height={500}
					alt="Arduino"
					className="opacity-10 object-cover"
				/>
			</div>

			{/* Foreground content */}
			<div className="mx-auto max-w-7xl relative z-10 px-4">
				{/* Sponsor intro section */}
				<div className="mb-12 text-center max-w-4xl mx-auto">
					<h2 className="text-left md:text-center text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2">
						Why Sponsor Us
					</h2>
					<p className="text-left md:text-center text-3xl md:text-4xl font-semibold text-neutral-900 mb-6 leading-snug">
						Plant Your Flag in the Maker Community
					</p>
					<p className="text-left md:text-center text-lg text-neutral-600 font-light mb-6 max-w-3xl mx-auto">
						MakerChat is more than an event — its a movement of builders,
						creators, and dreamers. By sponsoring us, youre not just placing
						your logo — youre planting your flag in the heart of the maker
						community.
					</p>
					<ul className="text-neutral-700 space-y-2 text-base max-w-3xl mx-auto list-disc list-inside text-left md:text-center">
						<li>
							Boost your brand visibility among an engaged, innovative audience
						</li>
						<li>Support grassroots innovation and the maker ecosystem</li>
						<li>
							Create meaningful relationships with future tech leaders and
							creators
						</li>
					</ul>
				</div>
				{/* Sponsorship tiers */}
			</div>
		</section>
	);
}
