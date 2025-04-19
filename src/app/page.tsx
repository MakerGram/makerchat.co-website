/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/naming-convention */
"use client";
import {useRef, useState} from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";
import {Volume2, VolumeOff} from "lucide-react";

import {Button} from "@/components/ui/button";
import {speakers, sponsorData} from "@/db";
import VantaraSection from "@/components/ui/impact";
import QuoteSlider from "@/components/ui/founder-quote";
import {Marquee} from "@/components/ui/marquee";
import {ReviewCard} from "@/components/ui/review-card";
import PlaceCard from "@/components/ui/location-card";

const places = [
	{
		title: "India",
		location: "Kochi",
		image: "/uploads/photos/kochi.jpg",
		url: "/location/kochi",
		description: "Where conversations flow like the backwaters",
	},
	{
		title: "India",
		location: "Bangalore",
		image: "/uploads/photos/blr-1.jpg",
		url: "/location/bangalore",
		description: "Innovation meets coffee and code",
	},
	{
		title: "India",
		location: "Hyderabad",
		image: "/uploads/photos/hyd-char.jpg",
		url: "/location/hyderabad",
		description: "City of Pearls, powered by ideas",
	},
	{
		title: "Dubai",
		location: "Dubai",
		image: "/uploads/photos/dubai-1.jpg",
		url: "/location/dubai",
		description: "Desert dreams. Global voices.",
	},
];

export default function Home() {
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);

	return (
		<>
			{/* Hero Section with Video */}
			<section className="relative flex items-end md:items-start justify-end md:justify-end h-[100dvh] bg-black overflow-hidden flex-col w-full">
				<video
					ref={videoRef}
					autoPlay
					muted={isMuted}
					playsInline
					loop
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="/uploads/cover.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Dark overlay for readability */}
				<div className="absolute inset-0  z-10" />

				{/* Bottom gradient fade */}
				<div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

				{/* Mute/Unmute button */}
				<button
					onClick={() => {
						return setIsMuted((prev) => {
							return !prev;
						});
					}}
					className="z-50 absolute bottom-9 md:top-auto md:bottom-12 right-6 w-14 h-14 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition"
				>
					{isMuted ? <Volume2 size={28} /> : <VolumeOff size={28} />}
				</button>

				{/* Text content */}
				<div className="relative  flex items-center justify-start z-10 bg-black/40 w-full py-10 px-5 md:px-20">
					<div className="relative z-10 flex flex-col items-start md:items-start text-left md:text-left md:max-w-5xl ">
						<span className="text-sm text-white font-manrope font-normal tracking-wide mt-2 italic flex items-center gap-2 mb-2 lowercase">
							by{" "}
							<Image
								src="/mg-logo-white.png"
								alt="MakerGram Logo"
								width={130}
								height={40}
								className="inline-block"
							/>
						</span>
						<p className="text-4xl md:text-6xl font-bold tracking-tight text-white pointer-events-none whitespace-normal break-words">
							where{" "}
							<span className="font-tiemposHeadline italic font-light tracking-wide">
								makers{" "}
							</span>{" "}
							meet to chat and build{" "}
							<span className="font-tiemposHeadline italic font-light tracking-wide">
								together{" "}
							</span>
						</p>
						<Button
							onClick={() => {
								return router.push("/events");
							}}
							className="font-manrope mt-12 text-base md:text-small px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/30 text-white font-medium bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
						>
							Register Now →
						</Button>
					</div>
				</div>
			</section>

			<section className="mx-auto py-20 max-w-4xl px-4 md:px-0">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					Trusted by Visionaries, Backed by Leaders
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Supporters
				</p>
				<div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4 lg:grid-cols-3">
					{sponsorData.ids.map((sponsorId) => {
						const sponsor = sponsorData.details[sponsorId];
						return (
							<a
								key={sponsorId}
								target="_blank"
								rel="noreferrer"
								href={sponsor.website}
								className="flex items-center lg:justify-center"
							>
								<Image
									src={sponsor.logoImg}
									alt={sponsor.name}
									width={200}
									height={200}
									priority
								/>
							</a>
						);
					})}
				</div>
			</section>

			<VantaraSection />
			<section className="w-full px-6 md:px-0 py-16 md:py-10 bg-white text-[#2f2f2f]">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<div className="space-y-6">
						<p className="text-4xl md:text-5xl font-semibold font-manrope leading-tight text-center md:text-left text-gray-900 ">
							We needed <span className="">real conversations.</span>
						</p>
						<p className="text-lg md:text-xl text-center md:text-left font-normal text-muted-foreground">
							That’s when{" "}
							<span className="font-semibold text-[#1e1e1e]">MakerChat</span>{" "}
							was born — to bring meaningful, creator-first dialogues to life.
						</p>
					</div>

					{/* Image Block */}
					<div className="relative flex justify-center">
						<Image
							src="/uploads/team-chat-poster.png"
							alt="Our Story"
							width={600}
							height={400}
							className="relative z-10 rounded-3xl  w-full max-w-[480px] object-cover"
						/>
					</div>
				</div>
			</section>

			<QuoteSlider />
			<section className="bg-white px-4 md:px-8 lg:px-16 py-20">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					MakerChat across the Cities
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Where MakerChat Comes to Life
				</p>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
					{places.map((place, index) => {
						return <PlaceCard key={index} {...place} />;
					})}
				</div>
			</section>

			<section className="bg-[#f5f5f7] px-4 md:px-8 lg:px-16 py-20">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					Where Founders, Builders & Experts Inspire the Crowd
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Voices Behind the Vision
				</p>

				<div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg  mt-10">
					<Marquee pauseOnHover className="[--duration:20s]">
						{speakers.ids.map((review) => {
							const speaker = speakers.details[review];
							if (!speaker) return null;
							return (
								<ReviewCard
									key={review}
									img={speaker.avtarImg}
									name={speaker.firstName}
									designation={speaker.designation}
								/>
							);
						})}
					</Marquee>
				</div>
				<div className="max-w-xl mx-auto mt-12 px-4 md:px-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
						<div className="text-center md:text-left">
							<h2 className="text-[#1d1d1f] text-xl md:text-2xl font-light mb-2">
								Step Into the Spotlight
							</h2>
							<p className="text-[#6e6e73] text-base md:text-lg font-normal">
								Share your journey with makers across the world.
							</p>
						</div>
						<div className="shrink-0">
							<a
								href="https://go.makerchat.co/march25-cfp"
								target="_blank"
								rel="noreferrer"
								className="inline-block px-6 py-2 text-sm md:text-base font-medium text-white bg-[#1d1d1f] rounded-full hover:opacity-80 transition"
							>
								Apply now
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
