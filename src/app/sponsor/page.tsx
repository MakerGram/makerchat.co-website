import React from "react";

import Images from "@/config/constants/Images";
import {SponsorCard} from "@/components/ui/sponsor-card";
import {FeaturesGrid} from "@/components/ui/features-grid";
import BackgroundImages from "@/components/BackgroundImages";

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
		<section className="bg-grid-[#4b3f33]/5 relative bg-[#f5f5f7]">
			{/* Background mask */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background images */}
			<BackgroundImages />

			{/* Foreground content */}
			<div className="mx-auto max-w-7xl relative z-10 px-4 py-32 md:px-0 ">
				{/* Sponsor intro section */}

				<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
					Why Sponsor Us
				</h2>
				<p className="text-center text-5xl md:text-7xl lg:text-7xl font-light font-tiemposHeadline lowercase leading-tight  mb-6">
					Plant your flag in the
					<span className="font-tiemposHeadline font-medium">
						{" "}
						<br className="hidden md:block" />
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
				<FeaturesGrid />
				{/* Sponsorship tiers */}
				<SponsorCard tiers={sponsorshipTiers} allBenefits={allBenefits} />
			</div>
		</section>
	);
}
