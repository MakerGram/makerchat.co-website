import React from "react";

import {placesData} from "@/db";
import PlaceCard from "@/components/ui/location-card";

export default function CitiesSection() {
	return (
		<section className="bg-white px-4  py-10 md:px-20">
			<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
				MakerChat across the Cities
			</h2>
			<h2 className="text-5xl md:text-7xl font-light font-tiemposHeadline lowercase leading-tight text-center text-gray-900 mb-10">
				MakerChat across the <br className="hidden md:block" />
				<span className="font-tiemposHeadline font-medium">Cities</span>
			</h2>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
				{placesData.ids.map((placeId: string) => {
					const place = placesData.details[placeId];
					return <PlaceCard key={placeId} {...place} id={placeId} />;
				})}
			</div>
		</section>
	);
}
