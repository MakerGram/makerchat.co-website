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

			{/* <div className="relative z-10 mb-12 text-center">
				<h2 className="text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2">
					Upcoming Events
				</h2>
				<p className="text-3xl md:text-4xl font-semibold text-neutral-900">
					Happening Around the Maker Community
				</p>
				<p className="mt-3 max-w-2xl mx-auto text-base text-neutral-600 font-light">
					Dive into our curated events — from hands-on sessions to networking
					with makers, techies, and creators who build the future.
				</p>
			</div> */}

			{/* <div className="mx-auto max-w-7xl px-4 relative z-10 mt-10">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{filteredIds.map((id, index) => {
						const {coverImg, title, description, registerUrl} =
							events.details[id];

						return (
							<a
								key={index}
								href={`https://lu.ma/${registerUrl}`}
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#f5f5f7] rounded-3xl p-5 flex flex-col shadow-none hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300"
							>
								<div className="overflow-hidden rounded-2xl mb-4">
									<img
										src={coverImg}
										alt={title}
										className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
									/>
								</div>

								<h3 className="text-xl font-semibold text-[#1d1d1f] group-hover:text-black transition-colors">
									{title}
								</h3>

								<p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
									{description}
								</p>

								<span className="mt-4 inline-block w-fit text-sm font-medium text-[#1d1d1f] border border-neutral-300 rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
									View Event
								</span>
							</a>
						);
					})}
				</div>
			</div> */}
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
