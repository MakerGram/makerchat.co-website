import React from "react";

import {speakers} from "@/db";
import {SpeakerCard} from "@/components/ui/speaker-card";
import Images from "@/config/constants/Images";

export default function SpeakersSection() {
	return (
		<section className="bg-[#f5f5f7] px-4 md:px-8 lg:px-16 py-10">
			<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
				Our Speakers
			</h2>
			<h2 className="text-4xl md:text-5xl font-light font-tiemposHeadline lowercase leading-tight text-center text-gray-900 mb-10">
				Where Founders, Builders &
				<br />
				<span className="font-tiemposHeadline font-medium">
					Experts Inspire
				</span>
			</h2>

			<div className="relative w-full overflow-x-auto flex scrollbar-hide scroll-smooth max-w-7xl mx-auto">
				<div className="flex flex-row gap-6 w-max items-center pb-4">
					{speakers.ids.map((review) => {
						const speaker = speakers.details[review];
						if (!speaker) return null;
						return (
							<div
								key={review}
								className="min-w-[260px] md:min-w-[300px] flex justify-center"
							>
								<SpeakerCard
									img={
										Images.speakers[speaker.id as keyof typeof Images.speakers]
									}
									name={speaker.firstName}
									designation={speaker.designation}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="text-center my-10">
				<a
					href="/sponsor"
					className="text-[#0071e3] text-base hover:underline underline-offset-8"
				>
					Interested in sponsoring? Learn more →
				</a>
			</div>
		</section>
	);
}
