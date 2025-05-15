/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

import Images from "@/config/constants/Images";

export default function PlaceCard({
	id,
	title,
	url,
	description,
	location,
}: {
	id: string;
	title?: string;
	url?: string;
	description?: string;
	location?: string;
}) {
	return (
		<Link href={url || "#"} passHref>
			<div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border border-white/20 backdrop-blur-xl bg-white/5">
				{/* Background Image */}
				<div className="relative w-full h-[280px]">
					<Image
						src={
							Images.locationsThumbnail[
								id as keyof typeof Images.locationsThumbnail
							]
						}
						alt={title || "Place Image"}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>

				{/* Content Overlay */}
				<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
					<h3 className="text-white text-2xl font-semibold tracking-tight">
						{location}
					</h3>
					{description && (
						<p className="text-white/90 text-base mt-2 line-clamp-2 font-light">
							{description}
						</p>
					)}
				</div>

				{/* Arrow Icon */}
				<div className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl p-3 rounded-full transition-all duration-300 group-hover:scale-110 border border-white/20">
					<ArrowUpRight className="text-white w-5 h-5" />
				</div>
			</div>
		</Link>
	);
}
