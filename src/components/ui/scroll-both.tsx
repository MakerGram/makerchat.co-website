/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

"use client";

import * as React from "react";

import Image from "next/image";
import {StaticImageData} from "next/image";
import {format, parseISO} from "date-fns";

import {eventData} from "@/db";

const EventCards = () => {
	// Transform eventData to CardType[]
	const cards: CardType[] = eventData.ids.map((id, idx) => {
		const event = eventData.details[id];
		const start = parseISO(event.startDateTime);
		return {
			url: event.coverImg,
			link: event.registerUrl
				? event.registerUrl.startsWith("http")
					? event.registerUrl
					: `https://lu.ma/${event.registerUrl}`
				: undefined,
			title: event.title,
			id: idx + 1, // or event.id if you want to keep the string id
			time: format(start, "h:mm a"),
			host: {
				name: `${event.speaker.firstName}${event.speaker.lastName ? " " + event.speaker.lastName : ""}`,
				avatar: event.speaker.avtarImg || "/avatars/default.png",
			},
			location:
				event.venue?.name ||
				(event.venue && "fullAddress" in event.venue
					? (event.venue as any).fullAddress
					: ""),
			status: undefined, // No status in DB
			attendees: [], // No attendees in DB
			date: format(start, "MMM d"),
			weekday: format(start, "EEEE"),
		};
	});

	// Group cards by date
	const grouped = cards.reduce(
		(acc, card) => {
			const key = `${card.date}||${card.weekday}`;
			if (!acc[key]) acc[key] = [];
			acc[key].push(card);
			return acc;
		},
		{} as Record<string, CardType[]>,
	);
	const dateKeys = Object.keys(grouped); // Reverse to show latest date group first
	const totalGroups = dateKeys.length;

	return (
		<div className=" py-12 px-4 md:px-0 min-h-screen  ">
			<h2 className="text-3xl font-bold text-gray-900 mb-8 max-w-2xl mx-auto font-ocean">
				Events
			</h2>
			<div className="relative border-l-2 border-[#0393eb] pl-6 max-w-2xl mx-auto">
				{dateKeys.map((key, index) => {
					const [date, weekday] = key.split("||");
					const displayIndex = totalGroups - index; // Descending index starting from 1

					return (
						<div key={key} className="mb-10">
							<div className="flex items-center mb-4">
								<span className="w-3 h-3 bg-[#0393eb] rounded-full -ml-[1.95rem] mr-3 -mt-5" />
								<span className="text-sm bg-[#0393eb] text-white px-2 py-0.5 rounded-full mr-2 font-medium">
									#{displayIndex}
								</span>
								<span className="text-2xl font-semibold text-[#0393eb] font-instrumentSerif">
									{date}
								</span>
								・
								<span className="text-gray-500 text-xl font-instrumentSerif">
									{weekday}
								</span>
							</div>
							<div className="flex flex-col gap-6">
								{grouped[key].map((card) => {
									return <Card card={card} key={card.id} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Card = ({card}: {card: CardType}) => {
	return (
		<a
			href={card.link}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative flex flex-row items-stretch h-[190px] md:h-[190px] min-w-[250px] md:min-w-[520px] bg-white rounded-2xl overflow-hidden shadow-md p-4 md:p-6 bg-dot-[#4b3f33]/30"
		>
			{/* Left: Event Info */}
			<div className="flex flex-col justify-between flex-1 pr-4">
				<div>
					<div className="text-base text-gray-500 mb-1 font-instrumentSerif">
						{card.time}
					</div>
					<div className="text-lg md:text-2xl font-semibold text-gray-900 mb-2 font-tiemposHeadline">
						{card.title}
					</div>
				</div>
			</div>
			{/* Right: Event Image */}
			<div className="relative w-full max-w-[120px] aspect-[4/5] md:max-w-[192px] md:aspect-[4/5] flex-shrink-0 rounded-xl overflow-hidden">
				<Image
					src={card.url}
					alt={card.title}
					fill
					style={{objectFit: "cover", objectPosition: "center"}}
					className="w-full h-full"
					sizes="(max-width: 768px) 120px, 192px"
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
	time: string;
	host: {
		name: string;
		avatar: string; // URL or StaticImageData
	};
	location: string;
	status?: string; // e.g., 'Sold Out'
	attendees: {avatar: string}[];
	date: string; // e.g., 'Jul 24'
	weekday: string; // e.g., 'Thursday'
};
