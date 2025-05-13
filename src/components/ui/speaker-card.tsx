/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";

import {cn} from "@/lib/utils";

/* eslint-disable react/react-in-jsx-scope */
export const SpeakerCard = ({
	img,
	name,
	designation,
}: {
	img: any;
	name: string;
	designation: string;
}) => {
	return (
		<figure
			className={cn(
				"relative aspect-[3/4] w-40 cursor-pointer overflow-hidden rounded-xl shadow-sm transition-transform hover:scale-105 bg-neutral-100",
			)}
		>
			<div className="w-full h-full rounded-xl overflow-hidden">
				<Image
					src={img || ""}
					alt={name}
					width={300}
					height={400}
					className="object-cover w-full h-full"
					priority
				/>
			</div>
			<div className="absolute z-10 bottom-0 w-full px-3 py-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
				<p className="text-white font-medium text-sm leading-tight">{name}</p>
				<p className="text-white text-xs font-light truncate opacity-90">
					{designation}
				</p>
			</div>
		</figure>
	);
};
