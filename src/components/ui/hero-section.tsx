/* eslint-disable react/react-in-jsx-scope */
import {useRef, useState, useEffect} from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";

import {Button} from "@/components/ui/button";

export default function HeroSection({src}: {src: string}) {
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isMuted, setIsMuted] = useState(false); // default is false (sound ON)

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = isMuted;
		}
	}, [isMuted]);

	return (
		<section className="relative flex items-center justify-center h-screen bg-black overflow-hidden flex-col">
			<video
				ref={videoRef}
				autoPlay
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

			<div className="relative flex items-center justify-center p-10 mx-6">
				<div className="absolute inset-0 bg-black/5 rounded-[10px]" />
				<div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
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
						MakerChat: where{" "}
						<span className="font-tiemposHeadline italic font-light tracking-wide">
							makers
						</span>{" "}
						meet to chat and build{" "}
						<span className="font-tiemposHeadline italic font-light tracking-wide">
							together
						</span>
					</p>
					<Button
						onClick={() => {
							return router.push("/events");
						}}
						variant="link"
						className="mt-10 text-lg px-10 py-6 rounded-none border border-white hover:bg-white hover:text-black transition text-white hover:no-underline font-bold"
					>
						Register Now →
					</Button>
				</div>
			</div>

			{/* Mute Toggle Button */}
			<button
				onClick={() => {
					return setIsMuted(!isMuted);
				}}
				className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 text-sm rounded-md z-20 hover:bg-white hover:text-black transition"
			>
				{isMuted ? "Unmute" : "Mute"}
			</button>
		</section>
	);
}
