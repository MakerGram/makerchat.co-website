/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export default function PlaceCard({
	image,
	title,
	url,
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
			<div className="group relative bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
				{/* Image background */}
				<div className="relative w-full h-64">
					<Image
						src={image || "/placeholder.jpg"}
						alt={title || "Place Image"}
						fill
						className="object-cover"
					/>

					{location && (
						<div className="absolute inset-0 flex justify-center items-center">
							<p className="text-white text-[20px] font-medium bg-black px-5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
								{location}
							</p>
						</div>
					)}

					{/* {description && (
						<div className="absolute top-4 left-4">
							<span className="text-[12px] px-3 py-[4px] bg-black text-white font-medium rounded-full shadow backdrop-blur-sm leading-none transition-all duration-200 ease-in-out">
								{description}
							</span>
						</div>
					)} */}
				</div>

				{/* Arrow icon */}
				<div className="absolute bottom-5 right-5 bg-neutral-100 group-hover:bg-neutral-200 transition-colors duration-300 p-2 rounded-full shadow-sm">
					<ArrowUpRight className="text-black w-4 h-4" />
				</div>
			</div>
		</Link>
	);
}
