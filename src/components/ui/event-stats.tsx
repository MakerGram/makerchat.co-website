import React from "react";

import {MapPin, CalendarDays, UsersRound} from "lucide-react";

const STATS = [
	{icon: <MapPin />, value: "28+", label: "Ongoing Offline Events"},
	{icon: <CalendarDays />, value: "41+", label: "MakerChats Conducted"},
	{icon: <UsersRound />, value: "520+", label: "Attendees Engaged"},
];

export function EventStats() {
	return (
		<div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
			{STATS.map((item, idx) => {
				return (
					<div
						key={idx}
						className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-lg"
					>
						<div className="w-6 h-6 md:w-8 md:h-8 text-white/80">
							{item.icon}
						</div>
						<div>
							<p className="text-xl md:text-4xl font-black text-white leading-tight tracking-tight">
								{item.value}
							</p>
							<p className="text-xs md:text-sm text-white/70 font-medium mt-0.5 md:mt-1 lowercase">
								{item.label}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
