import React from "react";

import {Check, XCircle} from "lucide-react";
import Image from "next/image";

import {Card, CardContent} from "@/components/ui/card";
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

const allBenefits = [
	"Your logo shining bright on our banners, socials, and website",
	"A shoutout during the MakerChat event (we'll make it loud)",
	"A dedicated thank-you post – because legends deserve spotlights",
];

const sponsorshipTiers = [
	{
		title: "Supporter Tier",
		image: "pi-skelton.png",
		description:
			"Foundational and focused. This tier is ideal for early believers who want to show strong support and align with our vision. A perfect entry point to associate your brand with innovation and creativity.",
		benefits: allBenefits.slice(0, 2),
	},
	{
		title: "Partner Tier",
		image: "soldering-iron.png",
		description:
			"Engaged and impactful. For brands ready to forge meaningful connections within the maker ecosystem. This tier amplifies your presence and demonstrates active support for grassroots innovation.",
		benefits: allBenefits.slice(0, 2),
	},
	{
		title: "Strategic Sponsor Tier",
		image: "power-drill.png",
		description:
			"Bold and visionary. This is for those who want to lead from the front. Elevate your brand by becoming a core part of MakerChat's story and future. Ideal for companies committed to championing creativity and community.",
		benefits: allBenefits,
	},
];

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
				<section
					className=" py-16 md:py-20 px-2 md:px-2 font-manrope relative"
					aria-labelledby="sponsor-heading"
				>
					<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
						Why Sponsor Us
					</h2>
					<p className="text-center text-4xl md:text-5xl font-light font-tiemposHeadline lowercase leading-tight lg:text-6xl mb-6">
						Plant your flag in the
						<br />
						<span className="font-tiemposHeadline font-medium">
							maker community
						</span>
					</p>
					<p className="text-base md:text-lg text-center font-manrope text-muted-foreground mb-8 max-w-3xl mx-auto">
						<span className="font-tiempos font-bold text-black">MakerChat</span>{" "}
						is more than an event — its a movement of{" "}
						<span className="font-tiempos text-black">builders</span>,{" "}
						<span className="font-tiempos text-black">creators</span>, and{" "}
						<span className="font-tiempos text-black">dreamers</span>. By
						sponsoring us, youre not just placing your logo — youre planting
						your flag in the heart of the maker community.
					</p>
					<div className="flex flex-col md:flex-row items-center justify-center gap-8">
						<div
							className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
							role="list"
						>
							<div className="text-center" role="listitem">
								<p className="text-base md:text-lg font-medium tracking-wide text-gray-700 font-nohemi">
									Brand Visibility
								</p>
								<p className="mt-1 md:mt-2 text-base text-gray-600">
									Boost your brand among an engaged, innovative audience
								</p>
							</div>

							<div
								className="w-20 h-[1px] md:h-20 md:w-[1px] bg-[#bb8f5e] opacity-30"
								aria-hidden="true"
							></div>

							<div className="text-center" role="listitem">
								<p className="text-base md:text-lg font-medium tracking-wide text-gray-700 font-nohemi">
									Support Innovation
								</p>
								<p className="mt-1 md:mt-2 text-base text-gray-600">
									Support grassroots innovation and the maker ecosystem
								</p>
							</div>

							<div
								className="w-20 h-[1px] md:h-20 md:w-[1px] bg-[#bb8f5e] opacity-30"
								aria-hidden="true"
							></div>

							<div className="text-center" role="listitem">
								<p className="text-base md:text-lg font-medium tracking-wide text-gray-700 font-nohemi">
									Build Relationships
								</p>
								<p className="mt-1 md:mt-2 text-base text-gray-600">
									Create meaningful relationships with future tech leaders
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Sponsorship tiers */}
				<section className="md:p-4 rounded-lg">
					<div className="grid gap-6 md:grid-cols-3">
						{sponsorshipTiers.map((tier, index) => {
							return (
								<Card
									key={index}
									className={`relative overflow-hidden pt-6 pb-6 rounded-3xl bg-[#f5f5f7] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.02] ${
										index === 1 ? "ring-2 ring-neutral-400" : ""
									}`}
								>
									<CardContent className="relative z-10 flex flex-col items-start text-center px-6">
										<h2 className="text-2xl font-semibold text-neutral-900 text-left mb-2">
											{tier.title}
										</h2>
										<p className="text-base text-neutral-600 text-left font-light">
											{tier.description}
										</p>
										<div className="mt-6 space-y-5 mb-10 w-full text-left">
											{allBenefits.map((benefit, i) => {
												return (
													<div
														key={i}
														className="grid grid-cols-[auto,1fr] items-center gap-2 text-neutral-800"
													>
														{tier.benefits.includes(benefit) ? (
															<Check className="w-5 h-5 text-green-500" />
														) : (
															<XCircle className="w-5 h-5 text-red-400" />
														)}
														<span className="text-sm">{benefit}</span>
													</div>
												);
											})}
										</div>
										<a
											href="mailto:contact@makergram.com"
											className="mt-auto block w-full bg-black hover:bg-neutral-800 text-white text-base py-2 font-medium text-center rounded-md"
										>
											Lets talk
										</a>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</section>
			</div>
		</section>
	);
}
