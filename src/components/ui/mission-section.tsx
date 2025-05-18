"use client";
import React from "react";
import {useRef} from "react";

import Image from "next/image";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";

import Images from "@/config/constants/Images";

const contentData = {
	mission: {
		title: "Our Mission",
		image: "uploads/photos/3d-print.gif",
		paragraphs: [
			{
				text: "At MakerChat, were reimagining the future of work by empowering the intelligence to unlock human potential.",
				highlight: "MakerChat",
			},
			{
				text: "As an innovation lab, we develop breakthrough solutions that make complex tasks more intuitive, collaboration more powerful, and creativity more impactful—always with a human-centric focus.",
				highlight: "innovation lab",
			},
			{
				text: "Our mission is to harness technology to amplify human ingenuity, champion innovation, and ultimately transform how the world works. We invite every innovator, creator, and collaborator to join us in shaping the workplace of tomorrow.",
				highlight: "harness technology",
			},
		],
	},
	vision: {
		title: "Our Vision",
		image: "uploads/photos/makerchat-group-photo.webp",
		paragraphs: [
			{
				text: "At MakerChat, were reimagining the future of work by empowering the intelligence to unlock human potential.",
				highlight: "MakerChat",
			},
			{
				text: "As an innovation lab, we develop breakthrough solutions that make complex tasks more intuitive, collaboration more powerful, and creativity more impactful—always with a human-centric focus.",
				highlight: "innovation lab",
			},
			{
				text: "Our mission is to harness technology to amplify human ingenuity, champion innovation, and ultimately transform how the world works. We invite every innovator, creator, and collaborator to join us in shaping the workplace of tomorrow.",
				highlight: "harness technology",
			},
		],
	},
};

// Place this at the top level, outside the component:
const MissionSection = () => {
	const missionRef = useRef(null);
	const visionRef = useRef(null);
	const isMissionInView = useInView(missionRef, {once: true, amount: 0.2});
	const isVisionInView = useInView(visionRef, {once: true, amount: 0.2});

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
		<>
			<section className="bg-[#f5f5f7] text-black md:py-20 py-10 md:px-20 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						{/* Left: Image */}
						<motion.div
							ref={missionRef}
							variants={imageVariants}
							initial="hidden"
							animate={isMissionInView ? "visible" : "hidden"}
							className="relative w-full h-[300px] md:h-[400px] group"
						>
							<div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:scale-[1.02] rounded-3xl overflow-hidden bg-[#eee] ">
								<Image
									src={Images.missionAndVision.mission}
									alt="Mountain Hiking View"
									fill
									className="object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-in-out"
									priority
								/>
							</div>
						</motion.div>
						{/* Right: Content */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isMissionInView ? "visible" : "hidden"}
							className="space-y-8 z-50 md:mt-0 text-xl md:text-xl text-gray-800 flex flex-col items-center md:items-start lowercase"
						>
							<div className="flex items-center w-full gap-4">
								<motion.h2
									variants={itemVariants}
									className="text-lg md:text-lg text-gray-600 uppercase tracking-widest whitespace-nowrap"
								>
									{contentData.mission.title}
								</motion.h2>
								<div className="h-[1px] bg-gray-300 w-full"></div>
							</div>
							{contentData.mission.paragraphs.map((paragraph, index) => {
								return (
									<motion.p
										key={index}
										variants={itemVariants}
										className="font-manrope leading-relaxed"
									>
										{paragraph.text
											.split(paragraph.highlight)
											.map((part, i, arr) => {
												return (
													<React.Fragment key={i}>
														{part}
														{i < arr.length - 1 && (
															<span className="font-semibold">
																{paragraph.highlight}
															</span>
														)}
													</React.Fragment>
												);
											})}
									</motion.p>
								);
							})}
						</motion.div>
					</div>
				</div>
			</section>
			<section className="bg-white text-black md:py-20 py-10  md:px-20 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center lowercase">
						{/* Left: Content */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isVisionInView ? "visible" : "hidden"}
							className="space-y-8 z-50 md:mt-0 text-xl md:text-xl text-gray-800 flex flex-col items-center md:items-start order-2 md:order-1"
						>
							<div className="flex items-center w-full gap-4">
								<motion.h2
									variants={itemVariants}
									className="text-lg md:text-lg text-gray-600 uppercase tracking-widest whitespace-nowrap"
								>
									{contentData.vision.title}
								</motion.h2>
								<div className="h-[1px] bg-gray-300 w-full"></div>
							</div>
							{contentData.vision.paragraphs.map((paragraph, index) => {
								return (
									<motion.p
										key={index}
										variants={itemVariants}
										className="font-manrope leading-relaxed"
									>
										{paragraph.text
											.split(paragraph.highlight)
											.map((part, i, arr) => {
												return (
													<React.Fragment key={i}>
														{part}
														{i < arr.length - 1 && (
															<span className="font-semibold">
																{paragraph.highlight}
															</span>
														)}
													</React.Fragment>
												);
											})}
									</motion.p>
								);
							})}
						</motion.div>
						{/* Right: Image */}
						<motion.div
							ref={visionRef}
							variants={imageVariants}
							initial="hidden"
							animate={isVisionInView ? "visible" : "hidden"}
							className="relative w-full h-[300px] md:h-[400px] group order-1 md:order-2"
						>
							<div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:scale-[1.02] rounded-3xl overflow-hidden bg-[#eee] ">
								<Image
									src={Images.missionAndVision.vision}
									alt="Mountain Hiking View"
									fill
									className="object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-in-out"
									priority
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MissionSection;
