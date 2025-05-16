"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

import {sponsorData} from "@/db";
import Images from "@/config/constants/Images";

export default function SupportersSection() {
	const title = "Proudly Supported By";
	const sponsorText = "Join Our Supporters";

	return (
		<section className="mx-auto py-16 md:py-20  px-4 md:px-20 relative bg-[#f5f5f7]">
			<div className="flex items-center gap-4  max-w-sm mx-auto mb-10">
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
							className="flex tracking-wider items-center lg:justify-center p-4 sm:p-6 rounded-2xl bg-white transition-all duration-300"
						>
							<Image
								src={
									Images.sponsors[sponsor.name as keyof typeof Images.sponsors]
								}
								alt={sponsor.name}
								width={400}
								height={500}
								className="w-full h-auto max-w-[250px] sm:max-w-[300px]"
								priority
							/>
						</a>
					);
				})}
			</div>
			<div className="text-center mt-14">
				<Link
					href="/sponsor"
					className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1d1d1f] to-black text-white font-medium hover:from-[#2d2d2f] hover:to-[#1d1d1f] transition-all duration-200 shadow-sm hover:shadow-md"
				>
					{sponsorText}
					<ArrowRight className="w-4 h-4" />
				</Link>
			</div>
		</section>
	);
}
