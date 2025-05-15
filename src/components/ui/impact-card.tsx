/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useRef} from "react";

import {motion} from "framer-motion";
import {useInView} from "framer-motion";

export default function ImpactCard() {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true, amount: 0.2});

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

	const numberVariants = {
		hidden: {opacity: 0, scale: 0.5},
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
		<section
			ref={ref}
			className="bg-[#f5f5f7] py-16 md:py-20 px-2 md:px-2 font-manrope relative"
			aria-labelledby="impact-heading"
		>
			<motion.div
				initial={{opacity: 0, y: 20}}
				animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
				transition={{duration: 0.5}}
				className="flex items-center gap-4 mb-6 max-w-sm mx-auto"
			>
				<div className="h-px bg-gray-300 flex-1"></div>
				<h2 className="text-sm md:text-base text-gray-600 uppercase tracking-widest whitespace-nowrap">
					Our impact so far
				</h2>
				<div className="h-px bg-gray-300 flex-1"></div>
			</motion.div>

			<div className="px-4 md:px-10 lg:px-0 mx-auto">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="flex flex-col md:flex-row items-center justify-center gap-8"
				>
					<div
						className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
						role="list"
					>
						<motion.div
							variants={itemVariants}
							className="text-center"
							role="listitem"
						>
							<motion.p
								variants={numberVariants}
								className="text-7xl md:text-7xl font-normal text-black lg:text-6xl font-tiemposHeadline tracking-wide"
								aria-label="28 plus offline events"
							>
								28+
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="mt-2 md:mt-3 text-xl md:text-xl font-medium tracking-wide text-gray-700 font-nohemi"
							>
								Offline Events
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="mt-1 md:mt-2 text-lg text-gray-600 lowercase"
							>
								City-based meetups where ideas spark
							</motion.p>
						</motion.div>

						<div
							className="w-20 h-[1px] md:h-20 md:w-[1px] bg-gray-400 opacity-30"
							aria-hidden="true"
						></div>

						<motion.div
							variants={itemVariants}
							className="text-center"
							role="listitem"
						>
							<motion.p
								variants={numberVariants}
								className="text-7xl md:text-7xl font-normal text-black lg:text-6xl font-tiemposHeadline tracking-wide"
								aria-label="41 plus maker chats"
							>
								41+
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="mt-2 md:mt-3 text-xl md:text-xl font-medium tracking-wide text-gray-700 font-nohemi"
							>
								MakerChats
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="mt-1 md:mt-2 text-lg text-gray-600 lowercase"
							>
								Real-world tech sessions
							</motion.p>
						</motion.div>

						<div
							className="w-20 h-[1px] md:h-20 md:w-[1px] bg-gray-400 opacity-30"
							aria-hidden="true"
						></div>

						<motion.div
							variants={itemVariants}
							className="text-center"
							role="listitem"
						>
							<motion.p
								variants={numberVariants}
								className="text-7xl md:text-7xl font-normal text-black lg:text-6xl font-tiemposHeadline tracking-wide"
								aria-label="520 plus attendees"
							>
								520+
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="mt-2 md:mt-3 text-xl md:text-xl font-medium tracking-wide text-gray-700 font-nohemi"
							>
								Attendees
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="mt-1 md:mt-2 text-lg text-gray-600 lowercase"
							>
								Together for a future shaped from the ground up
							</motion.p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
