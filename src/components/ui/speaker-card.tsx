/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import Image from "next/image";
import {Linkedin} from "lucide-react";

export const SpeakerCard = ({
	img,
	name,
	designation,
	linkedin,
}: {
	img: any;
	name: string;
	designation: string;
	linkedin?: string;
}) => {
	return (
		<div className="relative w-[260px] md:w-[300px] h-[360px] md:h-[400px] rounded-[2rem] overflow-hidden group">
			{/* Background Image with Blur */}
			<div className="absolute inset-0">
				<Image
					src={img || ""}
					alt={name}
					fill
					className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
					priority
				/>
				{/* Sophisticated overlay with multiple layers */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
				<div className="absolute inset-0 backdrop-blur-[0.5px]" />
			</div>

			{/* Content */}
			<div className="absolute inset-0 flex flex-col justify-end p-8">
				<div className="transform transition-all duration-500 ease-out group-hover:translate-y-[-8px]">
					<h3 className="text-white text-2xl font-medium tracking-tight mb-2 drop-shadow-lg">
						{name}
					</h3>
					<p className="text-white/90 text-base font-light mb-6 drop-shadow-md">
						{designation}
					</p>

					{/* LinkedIn Button */}
					{linkedin && (
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 group-hover:scale-105 border border-white/20 hover:border-white/30 shadow-lg"
						>
							<Linkedin className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">Connect</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
