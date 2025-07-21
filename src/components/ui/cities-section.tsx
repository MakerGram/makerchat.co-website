"use client";
import React, {useRef, useState, useEffect} from "react";

import {placesData} from "@/db";
import PlaceCard from "@/components/ui/location-card";

export default function CitiesSection() {
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
		<section className="bg-transparent px-4 py-10 md:px-20">
			<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
				MakerChat across the Cities
			</h2>
			<h2 className="text-5xl md:text-7xl font-light font-tiemposHeadline lowercase leading-tight text-center text-gray-900 mb-10">
				MakerChat across the <br className="hidden md:block" />
				<span className="font-tiemposHeadline font-medium">Cities</span>
			</h2>

			<div className="relative w-full max-w-7xl mx-auto">
				{/* Left Arrow */}
				<button
					onClick={() => {
						scroll("left");
					}}
					disabled={!canScrollLeft}
					className={`max-[1396px]:flex min-[1397px]:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out ${
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
					className={`max-[1396px]:flex min-[1397px]:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out ${
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
					className="relative w-full overflow-x-auto min-[1397px]:overflow-x-visible scrollbar-hide scroll-smooth"
				>
					<div className="flex flex-row gap-8 w-max items-center pb-4 min-[1397px]:grid min-[1397px]:grid-cols-4 min-[1397px]:gap-10 min-[1397px]:w-full min-[1397px]:justify-center min-[1397px]:items-stretch">
						{placesData.ids.map((placeId: string) => {
							const place = placesData.details[placeId];
							return <PlaceCard key={placeId} {...place} id={placeId} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
