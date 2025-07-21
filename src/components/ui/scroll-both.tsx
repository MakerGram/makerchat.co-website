/* eslint-disable @typescript-eslint/naming-convention */

"use client";

import * as React from "react";
import {useState, useEffect} from "react";

import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {StaticImageData} from "next/image";
import {motion, useAnimation} from "framer-motion";

import Images from "@/config/constants/Images";

const EventCards = () => {
	return (
		<div className="bg-white">
			<HorizontalScrollCarousel />
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const cardsPerView = 3;
	const cardWidth = 392 + 16; // card width + gap (adjust as needed)
	const totalCards = cards.length;
	const maxIndex = totalCards - cardsPerView;

	const controls = useAnimation();

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => {
				const next = prev + 1 > maxIndex ? 0 : prev + 1;
				controls.start({
					x: -next * cardWidth,
					transition: {duration: 1.5, ease: "easeInOut"},
				});
				return next;
			});
		}, 4000); // scroll every 4 seconds
		return () => {
			return clearInterval(interval);
		};
	}, [controls, maxIndex, cardWidth]);

	// Manual scroll to card
	const scrollToCard = (index: number) => {
		controls.start({
			x: -index * cardWidth,
			transition: {duration: 0.8, ease: "easeInOut"},
		});
		setCurrentIndex(index);
	};

	const handlePrev = () => {
		if (currentIndex > 0) scrollToCard(currentIndex - 1);
	};

	const handleNext = () => {
		if (currentIndex < maxIndex) scrollToCard(currentIndex + 1);
	};

	return (
		<section
			className="relative bg-[#f5f5f7] py-20 px-4 md:px-16 overflow-hidden
		"
		>
			<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
				Past Events
			</h2>
			<p className="text-center text-4xl md:text-5xl font-light font-tiemposHeadline lowercase leading-tight lg:text-6xl mb-16">
				Relive our
				<br />
				<span className="font-tiemposHeadline font-medium">maker moments</span>
			</p>

			<div className="relative max-w-7xl mx-auto px-4">
				{/* Carousel wrapper */}
				<div className="relative overflow-hidden">
					<motion.div
						className="flex gap-4"
						animate={controls}
						drag="x"
						dragConstraints={{left: -maxIndex * cardWidth, right: 0}}
						style={{cursor: "grab"}}
					>
						{cards.map((card) => {
							return <Card card={card} key={card.id} />;
						})}
					</motion.div>
				</div>

				{/* Arrows */}
				<button
					onClick={handlePrev}
					className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-20 p-2 bg-white shadow rounded-full"
				>
					<ChevronLeft size={24} />
				</button>
				<button
					onClick={handleNext}
					className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-20 p-2 bg-white shadow rounded-full"
				>
					<ChevronRight size={24} />
				</button>
			</div>

			{/* Bullets */}
			<div className="flex justify-center mt-6 gap-2">
				{cards.slice(0, cards.length - cardsPerView + 1).map((_, idx) => {
					return (
						<button
							key={idx}
							onClick={() => {
								scrollToCard(idx);
							}}
							className={`h-2 w-2 rounded-full transition-colors duration-300 ${
								idx === currentIndex ? "bg-[#bb8f5e]" : "bg-gray-300"
							}`}
						/>
					);
				})}
			</div>
		</section>
	);
};

const Card = ({card}: {card: CardType}) => {
	return (
		<a
			href={card.link}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative h-[320px] md:h-[456px] min-w-[300px] md:min-w-[392px] overflow-hidden bg-transparent rounded-2xl"
		>
			<div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
				<Image
					src={card.url}
					alt={card.title}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="w-full h-full"
				/>
			</div>
		</a>
	);
};

export default EventCards;

type CardType = {
	url: string | StaticImageData;
	link?: string;
	title: string;
	id: number;
};

export const cards: CardType[] = [
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.flipper,
		title: "Title 1",
		id: 1,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.keyboard,
		title: "Title 2",
		id: 2,
	},
	{
		link: "https://lu.ma/yulr3vd9https://makergram.com/community/",
		url: Images.eventPosters.buildDrone,
		title: "Title 3",
		id: 3,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.robot,
		title: "Title 4",
		id: 4,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.piEvent,
		title: "Title 5",
		id: 5,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.astrek,
		title: "Title 6",
		id: 6,
	},
	{
		link: "https://workshop.makergram.com/docs/tiny-ml-workshop/magicWand/",
		url: Images.eventPosters.magicWand,
		title: "Title 7",
		id: 7,
	},
	{
		link: "https://makergram.com/community/",
		url: Images.eventPosters.arduinoDay,
		title: "Title 8",
		id: 8,
	},
	{
		link: "https://lu.ma/user/MakerGram",
		url: Images.eventPosters.viewAll,
		title: "Title 9",
		id: 9,
	},
];
