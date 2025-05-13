/* eslint-disable react/react-in-jsx-scope */

"use client";

import {useRef, useState} from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";
import {Volume2, VolumeOff} from "lucide-react";

import {Button} from "@/components/ui/button";
import Images from "@/config/constants/Images";

export default function HeroSection() {
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);

	return (
		<section className="relative flex items-end md:items-start justify-end md:justify-end h-[100dvh] bg-black overflow-hidden flex-col w-full">
			<video
				ref={videoRef}
				autoPlay
				muted={isMuted}
				playsInline
				loop
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src={Images.heroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Dark overlay for readability */}
			<div className="absolute inset-0  z-10" />

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

			{/* Mute/Unmute button */}
			<Button
				onClick={() => {
					setIsMuted((prev) => {
						return !prev;
					});
				}}
				className="z-50 absolute bottom-28 md:top-auto md:bottom-12 right-6 w-12 h-12 rounded-full border border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
			>
				{isMuted ? <Volume2 size={28} /> : <VolumeOff size={28} />}
			</Button>

			{/* Text content */}
			<div className="relative  flex items-center justify-start z-10 bg-black/40 w-full  px-5 md:px-20 pb-28">
				<div className="relative z-10 flex flex-col items-start md:items-start text-left md:text-left md:max-w-5xl ">
					<span className="text-sm text-white font-manrope font-normal tracking-wide mt-2 italic flex items-center gap-2 mb-2 lowercase">
						by{" "}
						<Image
							src={Images.mgLogoWhite}
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
						className="font-manrope text-base md:text-small px-6 md:px-8  rounded-full border border-white/30 text-white font-medium bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 mt-5"
					>
						Register Now →
					</Button>
				</div>
			</div>
		</section>
	);
}
