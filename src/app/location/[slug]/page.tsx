/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useEffect, useState} from "react";

import {useParams} from "next/navigation";
import Image from "next/image";
import {MapPin, CalendarDays, UsersRound} from "lucide-react";

import Example from "@/components/ui/scroll-both";

type LocationSlug = "kochi" | "bangalore" | "dubai" | "hyderabad";

const locationData: Record<
	LocationSlug,
	{
		title: string;
		location: string;
		flag: string;
		image: string;
		desc: string;
		type: "active" | "notify" | "interest";
		topLabel: string;
	}
> = {
	kochi: {
		title: "India",
		location: "Kochi",
		flag: "🇮🇳",
		image: "/uploads/photos/kochi.png",
		desc: "Innovation begins where curiosity meets community — Kochi is proof of that.",
		type: "active",
		topLabel: "Happening Now",
	},
	bangalore: {
		title: "India",
		location: "Bangalore",
		flag: "🇮🇳",
		image: "/uploads/photos/blr.jpg",
		desc: "Bangalore is next — get ready for an explosion of innovation and maker energy!",
		type: "notify",
		topLabel: "Happening Very Soon!",
	},
	dubai: {
		title: "UAE",
		location: "Dubai",
		flag: "🇦🇪",
		image: "/uploads/photos/dubai-1.jpg",
		desc: "From the desert rises a hub of makers, dreamers, and doers — that's Dubai.",
		type: "interest",
		topLabel: "Express Your Interest",
	},
	hyderabad: {
		title: "India",
		location: "Hyderabad",
		flag: "🇮🇳",
		image: "/uploads/photos/hyd-char.jpg",
		desc: "Every great idea in Hyderabad starts with a conversation and a spark of curiosity.",
		type: "interest",
		topLabel: "Express Your Interest",
	},
};

export default function LocationHero() {
	const params = useParams();

	const rawSlug = params?.slug;
	const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
	const isValidSlug = slug && Object.keys(locationData).includes(slug);

	const [timeLeft, setTimeLeft] = useState("");

	const data = locationData[slug as LocationSlug];

	// Countdown for Bangalore
	useEffect(() => {
		if (!isValidSlug || data.type !== "notify" || slug !== "bangalore") return;

		const countdownTarget = new Date("2025-05-01T10:00:00").getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownTarget - now;

			if (distance <= 0) {
				setTimeLeft("Launching Now!");
				clearInterval(interval);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
		}, 1000);

		return () => {
			return clearInterval(interval);
		};
	}, [isValidSlug, slug, data]);

	if (!isValidSlug) {
		return <div className="text-white p-10">Location not found</div>;
	}

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

				<div className="relative z-20 flex flex-col items-center justify-center px-5  md:px-16 min-h-screen space-y-12 w-fit mx-auto">
					<div className="w-full text-white space-y-4 bg-black/10 backdrop-blur-sm rounded-xl p-6">
						{data.topLabel && (
							<div className="text-sm uppercase tracking-wide text-white/80 font-semibold">
								{data.topLabel}
							</div>
						)}

						<h1 className="text-4xl md:text-5xl font-bold font-manrope flex items-center gap-3">
							{data.location}
						</h1>

						<p className="text-lg text-white/90 leading-relaxed font-manrope">
							{data.desc}
						</p>

						{/* Impact of Kochi – Active Events */}
						{data.type === "active" && (
							<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="bg-white/10 rounded-2xl p-4 flex items-start gap-4 shadow-lg">
									<MapPin className="w-8 h-8 text-white/80 mt-1" />
									<div>
										<p className="text-3xl font-extrabold text-white leading-snug">
											28+
										</p>
										<p className="text-sm text-white/70 font-medium">
											Ongoing Offline Events
										</p>
									</div>
								</div>
								<div className="bg-white/10 rounded-2xl p-4 flex items-start gap-4 shadow-lg">
									<CalendarDays className="w-8 h-8 text-white/80 mt-1" />
									<div>
										<p className="text-3xl font-extrabold text-white leading-snug">
											41+
										</p>
										<p className="text-sm text-white/70 font-medium">
											MakerChats Conducted
										</p>
									</div>
								</div>
								<div className="bg-white/10 rounded-2xl p-4 flex items-start gap-4 shadow-lg">
									<UsersRound className="w-8 h-8 text-white/80 mt-1" />
									<div>
										<p className="text-3xl font-extrabold text-white leading-snug">
											520+
										</p>
										<p className="text-sm text-white/70 font-medium">
											Attendees Engaged
										</p>
									</div>
								</div>
							</div>
						)}

						{/* Notify Section */}
						{data.type === "notify" && (
							<div className="mt-10 text-white font-manrope space-y-4">
								{slug === "bangalore" && (
									<div className="text-white text-sm md:text-base font-medium leading-tight tracking-tight">
										<span className="text-white/60">Countdown to launch:</span>{" "}
										<span className="text-yellow-400 font-semibold font-mono text-[20px] md:text-[28px]">
											{timeLeft}
										</span>
									</div>
								)}
								<p className="text-lg font-semibold">
									Interested in joining us in {data.location}?
								</p>
								<p className="text-lg text-white/80">
									Leave your email and we’ll notify you when we launch!
								</p>

								<div className="flex items-center gap-3 pt-2">
									<input
										type="email"
										placeholder="me@email.com"
										className="px-4 py-2 w-full md:w-[500px] rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
									/>
									<button className="px-4 py-2 bg-white text-black text-base font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition font-manrope">
										Notify Me
									</button>
								</div>
							</div>
						)}

						{/* Interest Section */}
						{data.type === "interest" && (
							<div className="mt-10 text-white font-manrope space-y-4">
								<p className="text-lg font-semibold">
									Interested in joining us in {data.location}?
								</p>
								<p className="text-lg text-white/80">
									Leave your email and we’ll notify you when we launch!
								</p>
								<div className="flex items-center gap-3 pt-2">
									<input
										type="email"
										placeholder="me@email.com"
										className="px-4 py-2 w-full md:w-[500px] rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
									/>
									<button className="px-4 py-2 bg-white text-black text-base font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition font-manrope">
										Show Interest
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{data.type === "active" && <Example />}
		</>
	);
}
