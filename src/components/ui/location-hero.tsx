/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useMemo} from "react";

import {placesData} from "@/db";
import {useCountdown} from "@/hooks/use-countdown";
import {iLocationHeroProps} from "@/customTypes/location";
import {
	COUNTDOWN_TARGETS,
	LOCATION_STATUS,
} from "@/config/constants/LocationConstants";

import {OtherLocations} from "./other-locations";
import {EventStats} from "./event-stats";
import {NotifySection} from "./notify-section";
import {InterestSection} from "./interest-section";

export default function LocationHero({slug, data}: iLocationHeroProps) {
	const status =
		LOCATION_STATUS[slug as keyof typeof LOCATION_STATUS] || "interest";
	const countdownTarget = useMemo(() => {
		const target = COUNTDOWN_TARGETS[slug as keyof typeof COUNTDOWN_TARGETS];
		return target ? new Date(target).getTime() : null;
	}, [slug]);

	const countdown = useCountdown(countdownTarget);

	// Get other locations excluding current one
	const otherLocations = useMemo(() => {
		return placesData.ids
			.filter((id) => {
				return id !== slug;
			})
			.map((id) => {
				return placesData.details[id];
			});
	}, [slug]);

	const renderStatusContent = () => {
		switch (status) {
			case "active":
				return <EventStats />;
			case "notify":
				return <NotifySection location={data.location} countdown={countdown} />;
			case "interest":
				return <InterestSection />;
			default:
				return null;
		}
	};

	return (
		<div className="relative z-20 flex flex-col items-center justify-center px-5 md:px-16 min-h-dvh h-full w-full max-w-3xl mx-auto">
			<div className="w-full text-white space-y-4 bg-black/10 backdrop-blur-sm rounded-xl p-6 min-h-[300px]">
				<div
					className={`inline-flex items-center px-3 py-1.5 rounded-full backdrop-blur-sm text-sm uppercase tracking-wide text-white/80 font-semibold ${
						slug === "kochi"
							? "bg-green-500/20"
							: slug === "bangalore"
								? "bg-yellow-500/20"
								: slug === "hyderabad"
									? "bg-[#79405c]/20"
									: "bg-[#87CEEB]/20"
					}`}
				>
					{status === "active" && "Happening Now"}
					{status === "notify" && "Happening Very Soon!"}
					{status === "interest" && "Express Your Interest"}
				</div>

				<h1 className="text-4xl md:text-5xl font-bold flex items-center gap- font-tiemposHeadline tracking-wider">
					{data.location}
				</h1>

				<p className="text-lg text-white/90 leading-relaxed font-manrope lowercase ">
					{data.description}
				</p>

				{renderStatusContent()}
			</div>

			<OtherLocations locations={otherLocations} />
		</div>
	);
}
