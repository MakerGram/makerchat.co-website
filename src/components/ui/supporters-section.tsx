"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import {sponsorData} from "@/db";

export default function SupportersSection() {
	const title = "Our Supporters";
	const sponsorText = "Interested in Sponsoring - Learn more →";

	return (
		<section className="mx-auto py-16 md:py-20 max-w-6xl px-2 md:px-0 relative">
			<div className="flex items-center gap-4 mb-3 max-w-sm mx-auto">
				<div className="h-px bg-gray-300 flex-1"></div>
				<h2 className="text-sm md:text-base text-gray-600 uppercase tracking-widest whitespace-nowrap">
					{title}
				</h2>
				<div className="h-px bg-gray-300 flex-1"></div>
			</div>

			<div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4 lg:grid-cols-3">
				{sponsorData.ids.map((sponsorId) => {
					const sponsor = sponsorData.details[sponsorId];
					return (
						<a
							key={sponsorId}
							target="_blank"
							rel="noreferrer"
							href={sponsor.website}
							className="flex tracking-wider items-center lg:justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
						>
							<Image
								src={sponsor.logoImg}
								alt={sponsor.name}
								width={300}
								height={400}
								priority
							/>
						</a>
					);
				})}
			</div>
			<div className="text-center mt-8 lowercase">
				<Link
					href="/sponsor"
					className="text-[#0071e3] text-base hover:underline underline-offset-8"
				>
					{sponsorText}
				</Link>
			</div>
		</section>
	);
}
