"use client";

import React from "react";
import {useRef} from "react";

import Image from "next/image";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";

import Images from "@/config/constants/Images";

export default function StorySection() {
	const textRef = useRef(null);
	const imageRef = useRef(null);
	const isTextInView = useInView(textRef, {once: true, amount: 0.2});
	const isImageInView = useInView(imageRef, {once: true, amount: 0.2});

	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: {opacity: 0, y: 20},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const imageVariants = {
		hidden: {opacity: 0, scale: 0.95},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	return (
		<section className="w-full px-4 py-10 md:py-0 bg-white md:px-20">
			<div className="mx-auto flex flex-col md:flex-row gap-12 items-center justify-between max-w-7xl">
				{/* Text Content */}
				<div className="relative flex items-start gap-8">
					<div className="space-y-6">
						<motion.div
							ref={textRef}
							variants={containerVariants}
							initial="hidden"
							animate={isTextInView ? "visible" : "hidden"}
							className="space-y-6"
						>
							<motion.p
								variants={itemVariants}
								className=" text-center md:text-left text-5xl md:text-7xl lg:text-7xl font-light font-tiemposHeadline lowercase leading-tight"
							>
								We needed real
								<br />
								<span className="font-tiemposHeadline font-medium">
									conversations
								</span>
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="text-xl md:text-xl text-center md:text-left font-manrope text-gray-800 max-w-xl lowercase"
							>
								That&apos;s when{" "}
								<span className="font-normal text-gray-800">MakerChat</span> was
								born —a space for{" "}
								<span className="font-normal text-gray-800">creators</span> to
								connect, share stories, and dive deep into what truly{" "}
								<span className="font-normal text-gray-800">drives them</span>.
							</motion.p>
						</motion.div>
					</div>
				</div>

				{/* Image Block */}
				<motion.div
					ref={imageRef}
					variants={imageVariants}
					initial="hidden"
					animate={isImageInView ? "visible" : "hidden"}
					className="relative flex justify-center"
				>
					<Image
						src={Images.teamChatPoster}
						alt="Our Story"
						width={200}
						height={200}
						className="relative z-10 rounded-3xl w-fit h-auto object-cover"
					/>
				</motion.div>
			</div>
		</section>
	);
}
