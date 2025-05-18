/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useState, useRef, useEffect} from "react";

import {motion, useAnimation, useInView, AnimatePresence} from "framer-motion";
import Image from "next/image";
import {Quote, ArrowLeft, ArrowRight} from "lucide-react";

import {testimonialData} from "@/db";
import Images from "@/config/constants/Images";

export default function QuoteSlider() {
	const [current, setCurrent] = useState(0);
	const [showFull, setShowFull] = useState(false);
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);

	// Animation refs and controls
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {once: true, amount: 0.2});
	const controls = useAnimation();

	// Animation variants
	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: {opacity: 0, y: 20},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	// Card animation variants
	const cardVariants = {
		enter: (direction: number) => {
			return {
				x: direction > 0 ? 1000 : -1000,
				opacity: 0,
				scale: 0.9,
			};
		},
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
			scale: 1,
		},
		exit: (direction: number) => {
			return {
				zIndex: 0,
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
				scale: 0.9,
			};
		},
	};

	// Trigger animations when section comes into view
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const testimonials = testimonialData.ids.map((id) => {
		return testimonialData.details[id];
	});
	const testimonial = testimonials[current];

	const nextTestimonial = () => {
		setShowFull(false);
		setCurrent((prev) => {
			return (prev + 1) % testimonials.length;
		});
	};
	const prevTestimonial = () => {
		setShowFull(false);
		setCurrent((prev) => {
			return (prev - 1 + testimonials.length) % testimonials.length;
		});
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (!touchStartX.current || !touchEndX.current) return;

		const difference = touchStartX.current - touchEndX.current;
		const minSwipeDistance = 50;

		if (Math.abs(difference) > minSwipeDistance) {
			if (difference > 0) {
				nextTestimonial();
			} else {
				prevTestimonial();
			}
		}

		touchStartX.current = null;
		touchEndX.current = null;
	};

	const maxChars = 250;
	const isLong = testimonial?.desc.length > maxChars;
	const displayedDesc =
		showFull || !isLong
			? testimonial?.desc
			: testimonial?.desc.slice(0, maxChars) + "...";

	return (
		<section
			ref={sectionRef}
			className="w-full px-4 py-10 md:py-20 bg-[#f5f5f7] md:px-20"
		>
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">
				<motion.div
					initial="hidden"
					animate={controls}
					variants={containerVariants}
					className="w-full md:w-[45%] lg:w-[50%]"
				>
					<motion.div
						variants={itemVariants}
						className="space-y-4 md:space-y-6"
					>
						<h2 className="text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
							Testimonials
						</h2>
						<h2 className="text-5xl md:text-7xl font-light font-tiemposHeadline lowercase leading-tight text-gray-900 mb-6">
							Loved by the
							<br />
							<span className="font-tiemposHeadline font-medium">
								community
							</span>
						</h2>
						<p className="text-xl sm:text-xl text-gray-700 lowercase">
							Real voices from real makers, changemakers, and innovators.
						</p>
					</motion.div>

					{/* Navigation */}
					<motion.div
						variants={itemVariants}
						className="mt-6 md:mt-8 flex items-center space-x-4"
					>
						<button
							onClick={prevTestimonial}
							className="text-gray-700 hover:text-[#bb8f5e] transition"
							aria-label="Previous"
						>
							<ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
						</button>
						<div className="flex space-x-2">
							{testimonials.map((_, index) => {
								return (
									<button
										key={index}
										onClick={() => {
											setCurrent(index);
											setShowFull(false);
										}}
										className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
											index === current ? "bg-gray-700" : "bg-gray-400"
										}`}
									/>
								);
							})}
						</div>
						<button
							onClick={nextTestimonial}
							className="text-gray-700 hover:text-[#bb8f5e] transition"
							aria-label="Next"
						>
							<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
						</button>
					</motion.div>
				</motion.div>

				{/* Testimonial Card Container */}
				<motion.div
					initial="hidden"
					animate={controls}
					variants={containerVariants}
					className="w-full md:w-[55%] lg:w-[50%] relative mt-8 md:mt-0"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					style={{transformStyle: "preserve-3d"}}
				>
					<div className="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden">
						<AnimatePresence initial={false} custom={current}>
							<motion.div
								key={current}
								custom={current}
								variants={cardVariants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: {type: "spring", stiffness: 300, damping: 30},
									opacity: {duration: 0.2},
									scale: {duration: 0.2},
								}}
								className="absolute inset-0"
								style={{
									zIndex: 1,
									transformStyle: "preserve-3d",
									backfaceVisibility: "hidden",
									willChange: "transform",
								}}
							>
								<div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8 h-full flex flex-col">
									{testimonial && (
										<>
											<Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#bb8f5e] mb-4" />
											<div className="flex-1 flex flex-col">
												<div
													className={`relative ${showFull ? "max-h-[200px] sm:max-h-[240px] md:max-h-[280px] overflow-y-auto pr-2" : ""}`}
												>
													<p
														className={`text-lg sm:text-lg md:text-lg text-gray-800 leading-relaxed font-light  lowercase font-manrope ${!showFull && isLong ? "line-clamp-4 sm:line-clamp-5 md:line-clamp-6" : ""}`}
													>
														{displayedDesc}
													</p>
													{isLong && (
														<button
															onClick={() => {
																return setShowFull(!showFull);
															}}
															className="mt-2 text-[#bb8f5e] cursor-pointer font-medium hover:underline inline-block"
														>
															{showFull ? "Show less" : "Read more"}
														</button>
													)}
												</div>
												<div className="mt-auto pt-4 sm:pt-6 flex items-center space-x-3 sm:space-x-4">
													<Image
														src={
															Images.testimonials[
																testimonial.id as keyof typeof Images.testimonials
															]
														}
														alt={testimonial.name}
														width={40}
														height={40}
														className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
													/>
													<div>
														<p className="font-semibold text-gray-900 text-sm sm:text-base">
															{testimonial.name}
														</p>
														<p className="text-xs sm:text-sm text-gray-600">
															{testimonial.designation}
														</p>
													</div>
												</div>
											</div>
										</>
									)}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
