import React, {useRef, useState, useEffect} from "react";

import {ChevronLeft, ChevronRight, Play, Pause} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const videos = [
	{
		id: 1,
		title: "Apple Vision Pro",
		src: "/ex.mov",
		poster: "/posters/vision.jpg",
		autoplay: true,
	},
	{
		id: 2,
		title: "MacBook Pro M3",
		src: "/ex.mov",
		poster: "/posters/macbook.jpg",
		autoplay: false,
	},
	{
		id: 3,
		title: "iPhone 15 Pro",
		src: "/ex.mov",
		poster: "/posters/iphone.jpg",
		autoplay: true,
	},
];

export default function AppleCardCarousel() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});
	const [playStates, setPlayStates] = useState<{[key: number]: boolean}>({});
	const [loadStates, setLoadStates] = useState<{[key: number]: boolean}>({});
	const [refreshKey, setRefreshKey] = useState(Date.now()); // Forces refresh

	const scroll = (dir: "left" | "right") => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: dir === "left" ? -320 : 320,
				behavior: "smooth",
			});
		}
	};

	const togglePlay = (id: number) => {
		const video = videoRefs.current[id];
		if (!video) return;

		if (video.paused) {
			video.play().then(() => {
				setPlayStates((prev) => {
					return {...prev, [id]: true};
				});
			});
		} else {
			video.pause();
			setPlayStates((prev) => {
				return {...prev, [id]: false};
			});
		}
	};

	// Autoplay after video refs are ready
	useEffect(() => {
		videos.forEach((video) => {
			const el = videoRefs.current[video.id];
			if (el && video.autoplay) {
				el.play()
					.then(() => {
						setPlayStates((prev) => {
							return {...prev, [video.id]: true};
						});
					})
					.catch(() => {
						setPlayStates((prev) => {
							return {...prev, [video.id]: false};
						});
					});
			}
		});
	}, [refreshKey]);

	// Force rebind on remount/reentry
	useEffect(() => {
		setRefreshKey(Date.now());
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			{/* Controls */}
			<div className="flex justify-between px-2 mb-2">
				<Button
					variant="ghost"
					onClick={() => {
						return scroll("left");
					}}
				>
					<ChevronLeft />
				</Button>
				<Button
					variant="ghost"
					onClick={() => {
						return scroll("right");
					}}
				>
					<ChevronRight />
				</Button>
			</div>

			{/* Carousel */}
			<div
				ref={scrollRef}
				className="flex space-x-4 overflow-x-auto px-2 scroll-smooth scrollbar-hide"
			>
				{videos.map((video) => {
					return (
						<Card
							key={`${video.id}-${refreshKey}`}
							className="min-w-[320px] h-[500px] relative flex flex-col"
						>
							<CardContent className="p-0 h-full relative">
								<video
									ref={(el) => {
										return (videoRefs.current[video.id] = el);
									}}
									src={video.src}
									poster={video.poster}
									muted
									loop
									playsInline
									className="rounded-lg w-full h-full object-cover"
									onWaiting={() => {
										{
											return setLoadStates((prev) => {
												return {...prev, [video.id]: true};
											});
										}
									}}
									onPlaying={() => {
										{
											return setLoadStates((prev) => {
												return {...prev, [video.id]: false};
											});
										}
									}}
								/>

								{loadStates[video.id] && (
									<div className="absolute inset-0 flex items-center justify-center bg-black/30">
										<div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
									</div>
								)}

								<Button
									size="icon"
									className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-full"
									onClick={() => {
										return togglePlay(video.id);
									}}
								>
									{playStates[video.id] ? (
										<Pause size={18} />
									) : (
										<Play size={18} />
									)}
								</Button>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
