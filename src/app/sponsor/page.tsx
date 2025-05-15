import React from "react";

import Link from "next/link";
import Image from "next/image";
import {Check, XCircle, Eye, Lightbulb, Users, Send} from "lucide-react";

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
	"A shoutout during the MakerChat event (we&apos;ll make it loud)",
	"A dedicated thank-you post – because legends deserve spotlights",
];

const sponsorshipTiers = [
	{
		title: "Supporter Tier",
		image: "pi-skelton.png",
		description: "For early believers who want to align with innovation.",
		benefits: allBenefits.slice(0, 2),
	},
	{
		title: "Partner Tier",
		image: "soldering-iron.png",
		description: "For brands ready to connect with the maker ecosystem.",
		benefits: allBenefits.slice(0, 2),
	},
	{
		title: "Strategic Sponsor Tier",
		image: "power-drill.png",
		description: "For leaders who want to shape the maker community.",
		benefits: allBenefits,
	},
];

export default function Sponsor() {
	return (
		<section className="bg-grid-[#4b3f33]/10 relative pb-28 mt-24 md:mt-24">
			{/* Background mask */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background images */}
			<div className="absolute top-0 left-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={Images.elements.piSkelton.src}
					width={600}
					height={600}
					alt="Raspberry Pi"
					className="opacity-5 md:opacity-10 object-contain"
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

				<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
					Why Sponsor Us
				</h2>
				<p className="text-center text-4xl md:text-5xl font-light font-tiemposHeadline lowercase leading-tight lg:text-6xl mb-6">
					Plant your flag⛳ in the
					<br />
					<span className="font-tiemposHeadline font-medium">
						maker community
					</span>
				</p>
				<p className="lowercase text-xl md:text-xl text-center font-manrope text-muted-foreground mb-8 max-w-3xl mx-auto">
					<span className="">MakerChat</span> is more than an event — it&apos;s
					a motion of <span className=" text-black">builders</span>,{" "}
					<span className=" text-black">creators</span>, and{" "}
					<span className=" text-black">dreamers</span>. By sponsoring us,
					you&apos;re not just placing your logo — you&apos;re planting your
					flag in the heart of the maker community.
				</p>
				{/* Features grid with icons and descriptions */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 mx-auto md:max-w-5xl lowercase">
					<div
						className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-neutral-200/50"
						role="listitem"
					>
						<div className="relative">
							<div className="mb-4">
								<div className="bg-gradient-to-br from-[#0071e3] to-[#42a1ec] p-3 rounded-[12px] inline-block">
									<Eye className="w-5 h-5 text-white" />
								</div>
							</div>
							<h3 className="text-xl font-medium tracking-tight text-[#1d1d1f] mb-2">
								Brand Visibility
							</h3>
							<p className="text-base text-[#86868b] leading-relaxed">
								Boost your brand among an engaged, innovative audience
							</p>
						</div>
					</div>

					<div
						className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-neutral-200/50"
						role="listitem"
					>
						<div className="relative">
							<div className="mb-4">
								<div className="bg-gradient-to-br from-[#0071e3] to-[#42a1ec] p-3 rounded-[12px] inline-block">
									<Lightbulb className="w-5 h-5 text-white" />
								</div>
							</div>
							<h3 className="text-xl font-medium tracking-tight text-[#1d1d1f] mb-2">
								Support Innovation
							</h3>
							<p className="text-base text-[#86868b] leading-relaxed">
								Support grassroots innovation and the maker ecosystem
							</p>
						</div>
					</div>

					<div
						className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-neutral-200/50"
						role="listitem"
					>
						<div className="relative">
							<div className="mb-4">
								<div className="bg-gradient-to-br from-[#0071e3] to-[#42a1ec] p-3 rounded-[12px] inline-block">
									<Users className="w-5 h-5 text-white" />
								</div>
							</div>
							<h3 className="text-xl font-medium tracking-tight text-[#1d1d1f] mb-2">
								Build Relationships
							</h3>
							<p className="text-base text-[#86868b] leading-relaxed">
								Create meaningful relationships with future tech leaders
							</p>
						</div>
					</div>
				</div>
				{/* Sponsorship tiers */}
				<section className="md:p-4 rounded-lg">
					<div className="grid gap-8 md:grid-cols-3">
						{sponsorshipTiers.map((tier, index) => {
							return (
								<Card
									key={index}
									className={`relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
										index === 1 ? "ring-1 ring-[#0071e3]" : ""
									}`}
								>
									<CardContent className="relative z-10 flex flex-col items-start p-8">
										<h2 className="text-2xl lowercase font-bold text-[#1d1d1f] text-left mb-3">
											{tier.title}
										</h2>
										<p className="text-base text-[#86868b] text-left font-normal leading-relaxed">
											{tier.description}
										</p>
										<div className="mt-8 space-y-4 mb-10 w-full text-left">
											{allBenefits.map((benefit, i) => {
												return (
													<div
														key={i}
														className="grid grid-cols-[auto,1fr] items-center gap-3 text-[#1d1d1f]"
													>
														{tier.benefits.includes(benefit) ? (
															<Check className="w-5 h-5 text-[#0071e3]" />
														) : (
															<XCircle className="w-5 h-5 text-[#86868b]" />
														)}
														<span className="text-[15px] leading-relaxed">
															{benefit}
														</span>
													</div>
												);
											})}
										</div>
										<Link
											href="mailto:contact@makergram.com"
											className="uppercase mt-auto w-full bg-gradient-to-br from-[#0071e3] to-[#42a1ec] hover:from-[#0077ed] hover:to-[#42a7f2] text-white text-[15px] py-3 font-medium text-center rounded-full transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
										>
											Let&apos;s talk
											<Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
										</Link>
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
