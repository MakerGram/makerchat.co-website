/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import {notFound} from "next/navigation";

import EventCards from "@/components/ui/scroll-both";
import {placesData} from "@/db";
import LocationHero from "@/components/ui/location-hero";

type Params = {
	slug: string;
};
export default function LocationPage({params}: {params: Params}) {
	const slug = params.slug;
	const isValid = placesData.ids.includes(slug);

	if (!isValid) return notFound();

	const data = placesData.details[slug as keyof typeof placesData.details];

	return (
		<>
			<div className="relative w-full min-h-screen overflow-hidden">
				<Image
					src={data.image}
					alt={data.location}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-black/70 to-transparent" />

				<LocationHero slug={slug} data={data} />
			</div>
			{slug === "kochi" && <EventCards />}
		</>
	);
}
