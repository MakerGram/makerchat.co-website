import React from "react";

import Link from "next/link";
import {MapPin, ArrowRight} from "lucide-react";

import {iLocation} from "@/customTypes/location";

interface iOtherLocationsProps {
	locations: iLocation[];
}

export function OtherLocations({locations}: iOtherLocationsProps) {
	return (
		<div className="w-full md:mt-10 mt-2">
			<h2 className="text-base font-semibold text-white/80 text-left">
				Other Locations
			</h2>
			<div className="flex flex-wrap gap-3 mt-2">
				{locations.map((location) => {
					return (
						<Link
							key={location.id}
							href={location.url}
							className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
						>
							<MapPin className="w-4 h-4" />
							<span className="text-sm">{location.location}</span>
							<ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
