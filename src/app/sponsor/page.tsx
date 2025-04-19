"use client";

import React from "react";

import {Check, XCircle} from "lucide-react";
import Image from "next/image";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const allBenefits = [
	"Your logo shining bright on our banners, socials, and website",
	"A shoutout during the MakerChat event (we’ll make it loud)",
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
			"Bold and visionary. This is for those who want to lead from the front. Elevate your brand by becoming a core part of MakerChat’s story and future. Ideal for companies committed to championing creativity and community.",
		benefits: allBenefits,
	},
];

export default function Photos() {
	return (
		<section className="bg-grid-[#4b3f33]/10 relative pb-32 pt-10 md:pt-10">
			{/* Background mask */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background images */}
			<div className="absolute top-0 left-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src="/elements/pi-skelton.png"
					width={600}
					height={600}
					alt="Raspberry Pi"
					className="opacity-10 object-contain"
				/>
			</div>
			<div className="absolute -bottom-36 -right-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src="/elements/arduino-skelton.png"
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
					<h2 className="text-center text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2">
						Why Sponsor Us
					</h2>
					<p className="text-center text-3xl md:text-4xl font-semibold text-neutral-900 mb-6 leading-snug">
						Plant Your Flag in the Maker Community
					</p>
					<p className="text-center text-lg text-neutral-600 font-light mb-6 max-w-3xl mx-auto">
						MakerChat is more than an event — it’s a movement of builders,
						creators, and dreamers. By sponsoring us, youre not just placing
						your logo — youre planting your flag in the heart of the maker
						community.
					</p>
					<ul className="text-neutral-700 space-y-2 text-base max-w-3xl mx-auto list-disc list-inside text-center">
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
				<section className="p-4 rounded-lg">
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
										<Button
											className="mt-auto w-full bg-black hover:bg-neutral-800 text-white text-base py-2 font-medium"
											onClick={() => {
												window.open("mailto:contact@makergram.com", "_blank");
											}}
										>
											Let’s Talk ✨
										</Button>
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
