/* eslint-disable @typescript-eslint/naming-convention */
import * as React from "react";
import {useState, useRef} from "react";

import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Example = () => {
	return (
		<div className="bg-white">
			<HorizontalScrollCarousel />
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const cardsPerView = 3;

	const scrollToCard = (index: number) => {
		if (scrollContainerRef.current) {
			const card = scrollContainerRef.current.querySelectorAll("a")[index];
			if (card) {
				card.scrollIntoView({behavior: "smooth", inline: "start"});
			}
		}
		setCurrentIndex(index);
	};

	const handlePrev = () => {
		if (currentIndex > 0) scrollToCard(currentIndex - 1);
	};

	const handleNext = () => {
		if (currentIndex < cards.length - cardsPerView)
			scrollToCard(currentIndex + 1);
	};

	return (
		<section className="relative bg-[#f5f5f7] py-20 px-4 md:px-16">
			<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
				Past Events
			</h2>
			<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
				Highlights from our recent events
			</p>

			<div className="relative max-w-7xl mx-auto px-4">
				{/* Carousel wrapper */}
				<div className="relative">
					<div
						ref={scrollContainerRef}
						className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4"
					>
						{cards.map((card) => {
							return <Card card={card} key={card.id} />;
						})}
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
									return scrollToCard(idx);
								}}
								className={`h-2 w-2 rounded-full transition-colors duration-300 ${
									idx === currentIndex ? "bg-[#bb8f5e]" : "bg-gray-300"
								}`}
							/>
						);
					})}
				</div>
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
			className="group relative h-[456px] min-w-[300px] md:min-w-[392px] overflow-hidden bg-transparent rounded-2xl"
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

export default Example;

type CardType = {
	url: string;
	link?: string;
	title: string;
	id: number;
};

export const cards: CardType[] = [
	{
		link: "https://makergram.com/community/",
		url: "/uploads/posters/flipper-poster.webp",
		title: "Title 1",
		id: 1,
	},
	{
		link: "https://makergram.com/community/",
		url: "/uploads/posters/keyboard-poster.webp",
		title: "Title 2",
		id: 2,
	},
	{
		link: "https://lu.ma/yulr3vd9https://makergram.com/community/",
		url: "/uploads/posters/build-drone-poster.webp",
		title: "Title 3",
		id: 3,
	},
	{
		link: "https://makergram.com/community/",
		url: "/uploads/posters/robot-poster.webp",
		title: "Title 4",
		id: 4,
	},
	{
		link: "https://makergram.com/community/",
		url: "/uploads/posters/pi-event-poster.webp",
		title: "Title 5",
		id: 5,
	},
	{
		link: "https://makergram.com/community/",
		url: "/uploads/posters/astrek-poster.webp",
		title: "Title 6",
		id: 6,
	},
	{
		link: "https://workshop.makergram.com/docs/tiny-ml-workshop/magicWand/",
		url: "/uploads/posters/magic-wand-poster.webp",
		title: "Title 7",
		id: 7,
	},
	{
		link: "https://makergram.com/community/",
		url: "/uploads/posters/arduino-day-poster.webp",
		title: "Title 8",
		id: 8,
	},
	{
		link: "/events",
		url: "/uploads/posters/view-all-poster.webp",
		title: "Title 9",
		id: 9,
	},
];
