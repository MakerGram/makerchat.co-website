import React from "react";

export function InterestSection() {
	return (
		<div className="text-white font-manrope space-y-4">
			<p className="text-lg text-white/80">
				Leave your email and we&apos;ll notify you when we launch!
			</p>
			<div className="flex items-center gap-3 pt-2">
				<input
					type="email"
					placeholder="me@email.com"
					className="px-4 py-2 w-full md:w-[500px] rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
				/>
				<button className="px-4 py-2 bg-white text-black text-base font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition font-manrope">
					Show Interest
				</button>
			</div>
		</div>
	);
}
