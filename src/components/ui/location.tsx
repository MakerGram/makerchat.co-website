/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";

export default function BangkokHero() {
	return (
		<div className="relative w-full h-screen">
			{/* Background Image */}
			<Image
				src="/uploads/photos/bangkok-desktop.avif" // replace with your actual path
				alt="Bangkok Temple"
				fill
				className="object-cover"
				priority
			/>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 to-transparent z-10" />

			{/* Content Section */}
			<div className="absolute inset-0 z-20 flex items-center md:items-start justify-center md:justify-start px-6 md:px-16 py-10">
				<div className="max-w-md w-full text-white space-y-4">
					{/* Icon and Subtitle */}
					<div className="flex items-center gap-3">
						<div className="bg-white/10 p-3 rounded-full">
							{/* Replace with actual icon if needed */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 2c4.418 0 8 1.79 8 4v12c0 2.21-3.582 4-8 4s-8-1.79-8-4V6c0-2.21 3.582-4 8-4z"
								/>
							</svg>
						</div>
						<p className="text-white/70 text-base">Whats Happening in</p>
					</div>

					{/* Title & Time */}
					<h1 className="text-4xl md:text-5xl font-bold">Bangkok</h1>
					<p className="text-sm text-white/70">🕒 1:34 AM GMT+7</p>

					{/* Description */}
					<p className="text-sm text-white/90 leading-relaxed">
						In Bangkok, events range from innovation conferences to co-working
						sessions and meetups for tech enthusiasts, drawing professionals and
						innovators from diverse industries to shape the future together.
					</p>

					{/* CTA */}
					<div className="flex items-center gap-3 pt-2">
						<input
							type="email"
							placeholder="me@email.com"
							className="px-4 py-2 w-full rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
						/>
						<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
