import React from "react";

import {Users, MessageCircle, UserPlus} from "lucide-react";

export default function BrandPromoCard() {
	return (
		<section
			className=" py-16 md:py-20 font-manrope relative px-4 md:px-20"
			aria-labelledby="impact-heading"
		>
			<h2 className="text-5xl md:text-7xl font-light font-tiemposHeadline lowercase leading-tight text-left text-gray-900 mb-20 -mt-20">
				impact so far <span className="italic">!</span>
			</h2>

			<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">
				{/* Card 1 */}
				<div className="rounded-3xl bg-gradient-to-r from-[#000000] to-[#1c1c1e] p-8 flex flex-col h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 relative">
					<div className="flex items-center gap-3 mb-6">
						<Users className="w-8 h-8 text-white" strokeWidth={2} />
						<div className="text-7xl font-medium text-white tracking-wide font-instrumentSerif">
							28+
						</div>
					</div>
					<h3 className="text-white uppercase text-xl font-medium mb-3 tracking-tight">
						Offline Events
					</h3>
					<p className="text-white/90 text-lg leading-relaxed font-normal">
						City-based meetups where ideas spark and connections flourish
					</p>
				</div>

				{/* Card 2 */}
				<div className="rounded-3xl bg-gradient-to-r from-[#000000] to-[#1c1c1e] p-8 flex flex-col h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 relative">
					<div className="flex items-center gap-3 mb-6">
						<MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
						<div className="text-7xl font-medium text-white tracking-wide font-instrumentSerif">
							41+
						</div>
					</div>
					<h3 className="text-white uppercase text-xl font-medium mb-3 tracking-tight">
						MakerChats
					</h3>
					<p className="text-white/90 text-lg leading-relaxed font-normal">
						Real-world tech sessions fostering innovation and learning
					</p>
				</div>

				{/* Card 3 */}
				<div className="rounded-3xl bg-gradient-to-r from-[#000000] to-[#1c1c1e] p-8 flex flex-col h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 relative">
					<div className="flex items-center gap-3 mb-6">
						<UserPlus className="w-8 h-8 text-white" strokeWidth={2} />
						<div className="text-7xl font-medium text-white tracking-tight font-instrumentSerif">
							520+
						</div>
					</div>
					<h3 className="text-white uppercase text-xl font-medium mb-3 tracking-tight">
						Attendees
					</h3>
					<p className="text-white/90 text-lg leading-relaxed font-normal">
						Together for a future shaped from the ground up
					</p>
				</div>
			</div>
		</section>
	);
}
