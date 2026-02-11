"use client";
import React, {useRef, useState, useEffect} from "react";

import Link from "next/link";
import {Check, XCircle, Send} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";

interface iSponsorTier {
	title: string;
	image: string;
	description: string;
	benefits: string[];
}

interface iSponsorCardProps {
	tiers: iSponsorTier[];
	allBenefits: string[];
}

export function SponsorCard({tiers, allBenefits}: iSponsorCardProps) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const checkScroll = () => {
		if (scrollContainerRef.current) {
			const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
		}
	};

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			checkScroll();
			scrollContainer.addEventListener("scroll", checkScroll);
			window.addEventListener("resize", checkScroll);
		}
		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", checkScroll);
				window.removeEventListener("resize", checkScroll);
			}
		};
	}, []);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = scrollContainerRef.current.clientWidth;
			const newScrollPosition =
				direction === "left"
					? scrollContainerRef.current.scrollLeft - scrollAmount
					: scrollContainerRef.current.scrollLeft + scrollAmount;

			scrollContainerRef.current.scrollTo({
				left: newScrollPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="rounded-lg">
			<div className="relative w-full max-w-7xl mx-auto">
				{/* Left Arrow */}
				<button
					onClick={() => {
						return scroll("left");
					}}
					disabled={!canScrollLeft}
					className={`md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out ${
						canScrollLeft
							? "hover:bg-gray-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:scale-[0.98]"
							: "opacity-50 cursor-not-allowed"
					}`}
					aria-label="Scroll left"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-gray-600"
					>
						<path
							d="M15 18L9 12L15 6"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Right Arrow */}
				<button
					onClick={() => {
						return scroll("right");
					}}
					disabled={!canScrollRight}
					className={`md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out ${
						canScrollRight
							? "hover:bg-gray-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:scale-[0.98]"
							: "opacity-50 cursor-not-allowed"
					}`}
					aria-label="Scroll right"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-gray-600"
					>
						<path
							d="M9 6L15 12L9 18"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				<div
					ref={scrollContainerRef}
					className="relative w-full overflow-x-auto flex scrollbar-hide scroll-smooth snap-x snap-mandatory"
				>
					<div className="flex flex-row gap-4 w-max items-stretch py-2 md:grid md:grid-cols-3 md:gap-8 md:w-full">
						{tiers.map((tier, index) => {
							return (
								<Card
									key={index}
									className={`relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex-none w-[85vw] snap-center md:w-auto md:min-w-0 ${
										index === 1 ? "md:ring-1 md:ring-[#1d1d1f]" : ""
									}`}
								>
									<CardContent className="relative z-10 flex flex-col items-start p-8">
										<h2 className="text-2xl  font-bold text-[#1d1d1f] text-left mb-3">
											{tier.title}
										</h2>
										<p className="text-lg text-[#86868b] text-left font-normal leading-relaxed">
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
															<Check className="w-5 h-5 text-[#1d1d1f]" />
														) : (
															<XCircle className="w-5 h-5 text-[#86868b]" />
														)}
														<span className="text-lg leading-relaxed">
															{benefit}
														</span>
													</div>
												);
											})}
										</div>
										<Link
											href="mailto:contact@makergram.com"
											className="uppercase mt-auto w-full bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] hover:from-[#2d2d2f] hover:to-[#3d3d3f] text-white text-[15px] py-3 font-medium text-center rounded-full transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
										>
											Let&apos;s talk
											<Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
										</Link>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
