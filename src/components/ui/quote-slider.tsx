/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import {useState} from "react";

import Image from "next/image";
import {Quote, ArrowLeft, ArrowRight} from "lucide-react";

import {testimonialData} from "@/db";
import Images from "@/config/constants/Images";

export default function QuoteSlider() {
	const [current, setCurrent] = useState(0);
	const [showFull, setShowFull] = useState(false);

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

	const maxChars = 250;
	const isLong = testimonial?.desc.length > maxChars;
	const displayedDesc =
		showFull || !isLong
			? testimonial?.desc
			: testimonial?.desc.slice(0, maxChars) + "...";

	return (
		<section
			className="w-full px-4 py-16 bg-[#f5f5f7] flex flex-col md:flex-row items-start justify-between mx-auto gap-12 md:px-16"
			style={{minHeight: "400px"}}
		>
			{/* Left Content */}
			<div className="flex-1 max-w-6xl">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					Loved by the community
				</h2>
				<p className="text-lg text-gray-700">
					Real voices from real makers, changemakers, and innovators.
				</p>

				{/* Navigation */}
				<div className="mt-8 flex items-center space-x-4">
					<button
						onClick={prevTestimonial}
						className="text-gray-700 hover:text-[#bb8f5e] transition"
						aria-label="Previous"
					>
						<ArrowLeft className="w-6 h-6" />
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
									className={`w-3 h-3 rounded-full transition-all ${
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
						<ArrowRight className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Testimonial Card Container with fixed dimensions */}
			<div className="flex-1 max-w-xl">
				<div
					className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-8"
					style={{minHeight: "350px"}}
				>
					{testimonial && (
						<div>
							<Quote className="mx-auto mb-4 w-12 h-12 text-[#bb8f5e]" />
							<p className="text-base md:text-lg text-gray-800 leading-relaxed font-light font-manrope">
								{displayedDesc}
								{isLong && (
									<span
										onClick={() => {
											return setShowFull(!showFull);
										}}
										className="ml-2 text-[#bb8f5e] cursor-pointer font-medium"
									>
										{showFull ? "Show less" : "Read more"}
									</span>
								)}
							</p>
							<div className="mt-6 flex items-center space-x-4">
								<Image
									src={
										Images.testimonials[
											testimonial.id as keyof typeof Images.testimonials
										]
									}
									alt={testimonial.name}
									width={50}
									height={50}
									className="rounded-full object-cover"
								/>
								<div>
									<p className="font-semibold text-gray-900">
										{testimonial.name}
									</p>
									<p className="text-sm text-gray-600">
										{testimonial.designation}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
