"use client";
import React from "react";

import {motion, useInView} from "framer-motion";
import {Users, MessageCircle, UserPlus} from "lucide-react";

import {impactData} from "@/db";

const cardVariants = {
	hidden: {opacity: 0, y: 60},
	visible: (i: number) => {
		return {
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.35,
				duration: 1.2,
				ease: [0.22, 1, 0.36, 1],
			},
		};
	},
};

function PromoCard({
	icon,
	value,
	title,
	description,
	index,
}: {
	icon: React.ReactNode;
	value: string | number;
	title: string;
	description: string;
	index: number;
}) {
	const ref = React.useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {once: true, margin: "-80px"});

	return (
		<motion.div
			ref={ref}
			className="rounded-3xl bg-gradient-to-r from-[#000000] to-[#1c1c1e] p-8 flex flex-col h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 relative"
			variants={cardVariants}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			custom={index}
		>
			<div className="flex items-center gap-3 mb-6">
				{icon}
				<div className="text-7xl font-medium text-white tracking-wide font-instrumentSerif">
					{value}+
				</div>
			</div>
			<h3 className="text-white uppercase text-xl font-medium mb-3 tracking-tight">
				{title}
			</h3>
			<p className="text-white/90 text-lg leading-relaxed font-normal">
				{description}
			</p>
		</motion.div>
	);
}

export default function BrandPromoCard() {
	const cards = [
		{
			icon: <Users className="w-8 h-8 text-white" strokeWidth={2} />,
			value: impactData.offlineEvents,
			title: "Offline Events",
			description:
				"City-based meetups where ideas spark and connections flourish",
		},
		{
			icon: <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />,
			value: impactData.totalEvents,
			title: "MakerChats",
			description: "Real-world tech sessions fostering innovation and learning",
		},
		{
			icon: <UserPlus className="w-8 h-8 text-white" strokeWidth={2} />,
			value: impactData.totalAttendees,
			title: "Attendees",
			description: "Together for a future shaped from the ground up",
		},
	];

	return (
		<section
			className=" py-16 md:py-20 font-manrope relative px-4 md:px-20 max-w-7xl mx-auto"
			aria-labelledby="impact-heading"
		>
			<h2 className="text-5xl md:text-7xl font-light font-tiemposHeadline  leading-tight text-left text-gray-900 mb-20 -mt-20">
				Impact so far <span className="italic">!...</span>
			</h2>

			<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">
				{cards.map((card, i) => {
					return <PromoCard key={card.title} {...card} index={i} />;
				})}
			</div>
		</section>
	);
}
