/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useState, useEffect} from "react";

import Image from "next/image";

import {eventData, placesData} from "@/db";
import PlaceCard from "@/components/ui/location-card";

export default function Photos() {
	const [events, setEvents] = useState<typeof eventData | null>(null);
	const [query, setQuery] = useState("");

	useEffect(() => {
		setEvents(eventData);
	}, []);

	if (!events) return null;

	const filteredIds = events.ids.filter((id) => {
		{
			return events.details[id].title
				.toLowerCase()
				.includes(query.toLowerCase());
		}
	});

	return (
		<section className="bg-grid-black/10 relative pb-32 pt-16 md:pt-10 z-10">
			{/* Background Mask */}
			<div className="absolute inset-0 pointer-events-none bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background Image */}
			<div className="absolute top-0 left-0 pointer-events-none z-0">
				<Image
					src="/elements/pi-skelton.png"
					width={600}
					height={600}
					alt="Background Element"
					className="opacity-10 object-contain"
				/>
			</div>

			<section className="bg-white px-4 md:px-8 lg:px-16 ">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					MakerChat across the Cities
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Where MakerChat Comes to Life
				</p>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
					{placesData.ids.map((placeId: string) => {
						const place = placesData.details[placeId];
						return <PlaceCard key={placeId} {...place} />;
					})}
				</div>
			</section>
		</section>
	);
}
