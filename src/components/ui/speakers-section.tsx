"use client";
import React, {useRef, useState, useEffect} from "react";

import Link from "next/link";
import {ArrowRight} from "lucide-react";

import {speakers} from "@/db";
import {SpeakerCard} from "@/components/ui/speaker-card";
import Images from "@/config/constants/Images";

export default function SpeakersSection() {
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
			const scrollAmount = 300;
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
		<section className="bg-[#f5f5f7] px-4  md:px-20 pt-16 pb-32">
			<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
				Our Speakers
			</h2>
			<h2 className="text-5xl md:text-7xl font-light font-tiemposHeadline lowercase leading-tight text-center text-gray-900 mb-12">
				Where Founders, Builders & <br className="hidden md:block" /> Experts{" "}
				<span className="font-tiemposHeadline font-medium">Inspire</span>
			</h2>

			<div className="relative w-full max-w-7xl mx-auto">
				{/* Left Arrow */}
				<button
					onClick={() => {
						scroll("left");
					}}
					disabled={!canScrollLeft}
					className={`md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out ${
						canScrollLeft
							? "hover:bg-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)] active:scale-[0.98]"
							: "opacity-35 cursor-not-allowed"
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
						scroll("right");
					}}
					disabled={!canScrollRight}
					className={`md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out ${
						canScrollRight
							? "hover:bg-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)] active:scale-[0.98]"
							: "opacity-35 cursor-not-allowed"
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
					className="relative w-full overflow-x-auto flex scrollbar-hide scroll-smooth"
				>
					<div className="flex flex-row gap-8 w-max items-center pb-4">
						{speakers.ids.map((review) => {
							const speaker = speakers.details[review];
							if (!speaker) return null;
							return (
								<div
									key={review}
									className="min-w-[260px] md:min-w-[300px] flex justify-center"
								>
									<SpeakerCard
										img={
											Images.speakers[
												speaker.id as keyof typeof Images.speakers
											]
										}
										name={speaker.firstName}
										designation={speaker.designation}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="text-center mt-14">
				<Link
					href="/sponsor"
					className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1d1d1f] to-[#2d2d2f] text-white font-medium hover:from-[#2d2d2f] hover:to-[#3d3d3f] transition-all duration-200 shadow-sm hover:shadow-md"
				>
					Become a Speaker - Apply Now
					<ArrowRight className="w-4 h-4" />
				</Link>
			</div>
		</section>
	);
}
