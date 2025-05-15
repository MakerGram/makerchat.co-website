/* eslint-disable react/react-in-jsx-scope */

"use client";

import {useRef, useState} from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";
import {Volume2, VolumeX} from "lucide-react";

import {Button} from "@/components/ui/button";
import Images from "@/config/constants/Images";

export default function HeroSection() {
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);

	return (
		<section className="relative flex items-end md:items-center justify-center md:justify-center h-screen bg-black overflow-hidden flex-col w-full">
			<video
				ref={videoRef}
				autoPlay
				muted={isMuted}
				playsInline
				className="absolute inset-0 w-full h-screen object-cover"
				preload="auto"
			>
				<source src={Images.heroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Dark overlay for readability */}
			<div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

			{/* Mute/Unmute button */}
			<Button
				onClick={() => {
					setIsMuted((prev) => {
						return !prev;
					});
				}}
				className="z-50 absolute bg-transparent bottom-auto top-4 md:top-auto md:bottom-12 right-4 md:right-8 w-10 h-10 rounded-full border text-white  transition-all duration-300 flex items-center justify-center"
			>
				{isMuted ? <Volume2 size={30} /> : <VolumeX size={30} />}
			</Button>

			{/* Text content */}
			<div className="relative  flex items-center md:justify-center justify-start z-10 w-fit px-5 md:px-0">
				<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center md:max-w-5xl ">
					<span className="text-sm text-white font-manrope font-normal tracking-wide mt-6 italic flex items-center gap-2 mb-2 lowercase border-b border-white/30 pb-2">
						by{" "}
						<Image
							src={Images.mgLogoWhite}
							alt="MakerGram Logo"
							width={130}
							height={40}
							className="inline-block"
						/>
					</span>
					<p className="text-5xl md:text-7xl font-bold tracking-tight text-white pointer-events-none whitespace-normal break-words">
						where{" "}
						<span className="font-tiemposHeadline  font-light tracking-wide">
							makers{" "}
						</span>{" "}
						meet to chat and build{" "}
						<span className="font-tiemposHeadline  font-light tracking-wide">
							together{" "}
						</span>
					</p>
					<Button
						onClick={() => {
							return router.push("/events");
						}}
						className="lowercase font-manrope md:py-6 text-base md:text-xl px-6 md:px-8 rounded-full bg-transparent hover:bg-white/10 shadow-xl border border-white/30 text-white font-medium transition-all duration-300 mt-3 mb-6"
					>
						Register Now →
					</Button>
				</div>
			</div>
		</section>
	);
}
