/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useEffect, useMemo, useState} from "react";

import {useParams} from "next/navigation";
import Image from "next/image";
import {MapPin, CalendarDays, UsersRound} from "lucide-react";

import Example from "@/components/ui/scroll-both";
import {SlidingNumber} from "@/components/ui/sliding-number";

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

	const isValidSlug = useMemo(() => {
		return slug && Object.keys(locationData).includes(slug);
	}, [slug]);

	const data = useMemo(() => {
		return locationData[slug as LocationSlug];
	}, [slug]);

	const countdownTarget = useMemo(() => {
		if (slug === "bangalore" && data?.type === "notify") {
			return new Date("2025-05-01T10:00:00").getTime();
		}
		return null;
	}, [slug, data]);

	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isDone: false,
	});

	useEffect(() => {
		if (!countdownTarget) return;

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownTarget - now;

			if (distance <= 0) {
				setCountdown({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					isDone: true,
				});
				clearInterval(interval);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCountdown({days, hours, minutes, seconds, isDone: false});
		}, 1000);

		return () => {
			return clearInterval(interval);
		};
	}, [countdownTarget]);

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
				<div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-black/70 to-transparent " />

				<div className="relative z-20 flex flex-col items-center justify-center px-5 md:px-16 min-h-screen space-y-12 w-fit mx-auto">
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

						{data.type === "active" && (
							<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
								{[
									{
										icon: <MapPin />,
										value: "28+",
										label: "Ongoing Offline Events",
									},
									{
										icon: <CalendarDays />,
										value: "41+",
										label: "MakerChats Conducted",
									},
									{
										icon: <UsersRound />,
										value: "520+",
										label: "Attendees Engaged",
									},
								].map((item, idx) => {
									return (
										<div
											key={idx}
											className="bg-white/10 rounded-2xl p-4 flex items-start gap-4 shadow-lg"
										>
											<div className="w-8 h-8 text-white/80 mt-1">
												{item.icon}
											</div>
											<div>
												<p className="text-3xl font-extrabold text-white leading-snug">
													{item.value}
												</p>
												<p className="text-sm text-white/70 font-medium">
													{item.label}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						)}

						{data.type === "notify" && (
							<div className=" text-white font-manrope space-y-6 flex flex-col items-center">
								{slug === "bangalore" && (
									<div className="bg-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-lg w-full max-w-xs justify-center ">
										<div className="text-center">
											<p className="text-sm text-white/70 font-medium mb-2 uppercase">
												Countdown to launch
											</p>

											{countdown.isDone ? (
												<p className="text-lg font-semibold text-white">
													Launching Now!
												</p>
											) : (
												<div className="flex items-center gap-2 justify-center font-manrope text-xl md:text-3xl font-bold">
													<SlidingNumber value={countdown.days} padStart />
													<span>d</span>
													<SlidingNumber value={countdown.hours} padStart />
													<span>h</span>
													<SlidingNumber value={countdown.minutes} padStart />
													<span>m</span>
													<SlidingNumber value={countdown.seconds} padStart />
													<span>s</span>
												</div>
											)}
										</div>
									</div>
								)}

								<p className="text-lg font-semibold text-center">
									Interested in joining us in {data.location}?
								</p>
								<p className="text-lg text-white/80 text-center">
									Leave your email and we’ll notify you when we launch!
								</p>

								<div className="flex items-center gap-3 pt-2 flex-wrap justify-center">
									<input
										type="email"
										placeholder="me@email.com"
										className="px-4 py-2 w-full md:w-[500px] rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
									/>
									<button className="px-4 py-2 bg-white text-black text-base font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition font-manrope w-full md:w-auto">
										Notify Me
									</button>
								</div>
							</div>
						)}

						{data.type === "interest" && (
							<div className=" text-white font-manrope space-y-4">
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
