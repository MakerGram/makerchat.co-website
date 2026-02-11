"use client";

import React from "react";
import {useState, useEffect} from "react";

import Image from "next/image";
import {PowerGlitch} from "powerglitch";

import Images from "@/config/constants/Images";

export default function TVSlideshow() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => {
				return (prev + 1) % cards.length;
			});
		}, 3000); // 3 seconds
		return () => {
			return clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		PowerGlitch.glitch(".some-element");
	}, [current]);

	return (
		<div className="absolute -bottom-20 md:bottom-0 right-0 mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]  relative">
			{/* TV Frame */}
			<Image
				src={Images.Tv}
				alt="TV Frame"
				fill
				className="absolute inset-0 z-10 pointer-events-none select-none w-full h-full object-contain"
				priority
			/>
			{/* Slideshow Image */}
			<div
				className="absolute z-0 flex items-center justify-center rounded-lg overflow-hidden"
				style={{
					top: "28%", // adjust as needed
					left: "16%", // adjust as needed
					width: "54%", // adjust as needed
					height: "54%", // adjust as needed
				}}
			>
				<Image
					src={cards[current].url}
					alt={`Slide ${current + 1}`}
					fill
					className="object-contain rounded-lg shadow-lg some-element"
				/>
			</div>
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cards: any = [
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.astrek,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.flipper,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.keyboard,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.keyboard,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.robot,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.piEvent,
	},

	{
		link: "https://workshop.makergram.com/docs/tiny-ml-workshop/magicWand/",
		url: Images.eventPosters.magicWand,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.arduinoDay,
	},
];
