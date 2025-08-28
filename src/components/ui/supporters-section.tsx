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
		<section className="relative mx-auto py-16 md:py-20 px-4 md:px-20 bg-transparent">
			{/* Section label */}
			<div className="max-w-sm mx-auto mb-10 text-center">
				<h2 className="text-xs md:text-sm text-black uppercase tracking-[0.2em] whitespace-nowrap">
					{title}
				</h2>
			</div>

			{/* Separate cards with gaps */}
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-wrap justify-center gap-6 sm:gap-8">
					{sponsorData.ids.map((sponsorId) => {
						const sponsor = sponsorData.details[sponsorId];
						return (
							<a
								key={sponsorId}
								target="_blank"
								rel="noreferrer"
								href={sponsor.website}
								className="relative flex items-center justify-center p-6 sm:p-8 bg-white rounded-none w-[180px] h-[100px] sm:w-[220px] sm:h-[120px]"
							>
								<Image
									src={
										Images.sponsors[
											sponsor.name as keyof typeof Images.sponsors
										]
									}
									alt={sponsor.name}
									width={400}
									height={500}
									className="max-w-[160px] sm:max-w-[200px] h-auto w-auto"
									priority
								/>
							</a>
						);
					})}
				</div>
			</div>

			<div className="text-center mt-14">
				<Link
					href="/sponsor"
					className="group inline-flex items-center gap-2 px-6 py-3 rounded-none bg-gradient-to-r from-[#1d1d1f] to-black text-white font-semibold hover:from-black hover:to-[#1d1d1f] transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black active:scale-[0.99]"
				>
					{sponsorText}
					<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
				</Link>
			</div>
		</section>
	);
}
