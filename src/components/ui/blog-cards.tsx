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
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto px-4 mt-10">
			{stories.ids.map((item) => {
				const {featuredImage, title, readingTime, publishedAt, postUrl} =
					stories.items[item];
				return (
					<a
						key={item}
						href={postUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#f5f5f7] rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] transition-all duration-300 transform hover:scale-[1.015] overflow-hidden relative group"
					>
						<div className="relative aspect-[4/3]">
							<Image
								src={featuredImage}
								fill
								alt="Blog Cover"
								className="object-cover"
							/>
							<div className="absolute top-2 left-2 text-white text-xs flex items-center px-2 py-1 shadow-md bg-black/50 rounded-md">
								<Clock className="mr-1 h-3 w-3" />
								{readingTime} min read
							</div>
							<ArrowUpRight className="absolute top-2 right-2 h-6 w-6 text-white bg-black/40 p-1 rounded-full" />
						</div>
						<div className="p-6">
							<p className="text-lg font-medium text-neutral-900 leading-snug mb-2">
								{title}
							</p>
							<time className="text-sm text-neutral-500">
								{moment(publishedAt).format("MMMM D, YYYY")}
							</time>
						</div>
					</a>
				);
			})}
		</div>
	);
}
