/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export default function PlaceCard({
	image,
	title,
	url,
	description,
	location,
}: {
	image?: string;
	title?: string;
	url?: string;
	description?: string;
	location?: string;
}) {
	return (
		<Link href={url || "#"} passHref>
			<div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer border border-white/10 backdrop-blur-md">
				{/* Background Image */}
				<div className="relative w-full h-80">
					<Image
						src={image || "/placeholder.jpg"}
						alt={title || "Place Image"}
						fill
						className="object-cover"
					/>
				</div>

				{/* Content Overlay */}
				<div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
					<h3 className="text-white text-xl font-semibold">{location}</h3>
					{description && (
						<p className="text-white/90 text-lg mt-1 line-clamp-2">
							{description}
						</p>
					)}
				</div>

				{/* Arrow Icon */}
				<div className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full transition-all">
					<ArrowUpRight className="text-white w-4 h-4" />
				</div>
			</div>
		</Link>
	);
}
