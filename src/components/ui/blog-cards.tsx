"use client";

import React, {useEffect, useState} from "react";

import Image from "next/image";
import {ArrowUpRight, Clock} from "lucide-react";
import moment from "moment";

import {NormalizedStoriesType} from "@/customTypes/EventTypes";
import {Icons} from "@/components/ui/icons";

export default function BlogCards() {
	const [stories, setStories] = useState<NormalizedStoriesType | null>(null);
	const [isLoading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		fetch("https://quasar.makergram.com/api/mg-blog/posts/by-tag/Makerchat")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch");
				return res.json();
			})
			.then((data) => {
				setStories(data?.data?.ids?.length >= 0 ? {...data.data} : null);
			})
			.catch(() => {
				setStories(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<div className="mx-auto h-full w-full mt-20 z-10 relative">
				<Icons.spinner className="h-16 w-16 animate-spin m-auto" />
			</div>
		);
	}

	if (!stories) {
		return (
			<p className="text-center text-neutral-500 text-lg mt-12 z-10 relative">
				No stories available.
			</p>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10  mx-auto  max-w-7xl">
			{stories.ids.map((item) => {
				const {featuredImage, title, readingTime, publishedAt, postUrl} =
					stories.items[item];
				return (
					<a
						key={item}
						href={postUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border border-white/20 backdrop-blur-xl bg-white/5"
					>
						{/* Background Image */}
						<div className="relative aspect-[4/3]">
							<Image
								src={featuredImage}
								fill
								alt="Blog Cover"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
							<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
							<div className="absolute inset-0 backdrop-blur-[0.5px]" />

							{/* Reading Time Badge */}
							<div className="absolute top-4 left-4 text-white text-xs flex items-center px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full transition-all duration-300 border border-white/20">
								<Clock className="mr-1.5 h-3.5 w-3.5" />
								{readingTime} min read
							</div>

							{/* Arrow Icon */}
							<div className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl p-2.5 rounded-full transition-all duration-300 group-hover:scale-110 border border-white/20">
								<ArrowUpRight className="text-white w-5 h-5" />
							</div>
						</div>

						{/* Content */}
						<div className="absolute inset-0 flex flex-col justify-end p-6">
							<div className="transform transition-all duration-500 ease-out group-hover:translate-y-[-8px] text-left">
								<h3 className="text-white text-xl font-medium tracking-tight mb-2 drop-shadow-lg">
									{title}
								</h3>
								<time className="text-white/90 text-sm font-light drop-shadow-md">
									{moment(publishedAt).format("MMMM D, YYYY")}
								</time>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}
