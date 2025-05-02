/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";

import Images from "@/config/constants/Images";

export default function ImpactCard() {
	return (
		<div className="bg-[#f5f5f7] py-16 px-4 md:px-16 font-manrope">
			<h2 className="text-center text-sm md:text-base text-gray-400 uppercase tracking-widest mb-2">
				Our impact so far
			</h2>
			<p className="text-center text-3xl md:text-4xl font-bold text-[#1e1916] mb-12 leading-snug">
				Real moments. Real impact.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Card 1 */}
				<div className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md h-64">
					<Image
						src={Images.impact.offlineEvents}
						alt="Offline Events"
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 z-0" />
					<div className="relative z-10 p-4 h-full flex flex-col justify-end">
						<p className="text-white">
							<span className="text-3xl md:text-6xl font-extrabold">28+</span>{" "}
							<span className="text-2xl font-medium text-white">
								Offline Events
							</span>
						</p>
						<p className="text-gray-100 text-lg leading-snug mt-1">
							City-based meetups where ideas spark and makers connect.
						</p>
					</div>
				</div>

				{/* Card 2 */}
				<div className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md h-64">
					<Image
						src={Images.impact.makerChats}
						alt="MakerChats"
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 z-0" />
					<div className="relative z-10 p-4 h-full flex flex-col justify-end">
						<p className="text-white">
							<span className="text-3xl md:text-6xl font-extrabold">41+</span>{" "}
							<span className="text-2xl font-medium text-white">
								MakerChats
							</span>
						</p>
						<p className="text-gray-100 text-lg leading-snug mt-1">
							Real-world tech sessions by the community.
						</p>
					</div>
				</div>

				{/* Card 3 */}
				<div className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md h-64">
					<Image
						src={Images.impact.attendees}
						alt="Attendees"
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 z-0" />
					<div className="relative z-10 p-4 h-full flex flex-col justify-end">
						<p className="text-white">
							<span className="text-3xl md:text-6xl font-extrabold">520+</span>{" "}
							<span className="text-2xl font-medium text-white">Attendee</span>
						</p>
						<p className="text-gray-100 text-lg leading-snug mt-1">
							Together for a future shaped from the ground up.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
