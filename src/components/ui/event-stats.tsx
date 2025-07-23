import React from "react";

import {CalendarDays, UsersRound} from "lucide-react";

import {impactData} from "@/db";

const STATS = [
	{icon: <CalendarDays />, value: impactData.totalEvents, label: "MakerChats"},
	{icon: <UsersRound />, value: impactData.totalAttendees, label: "Attendees"},
	{
		icon: <UsersRound />,
		value: impactData.offlineEvents,
		label: "OfflineEvents",
	},
];

export function EventStats() {
	return (
		<div className="-mt-0 md:-mt-10 flex-1 flex flex-row  gap-5">
			{STATS.map((item, idx) => {
				return (
					<div key={idx} className="flex-1 flex flex-col items-center gap-5">
						<div>
							<p className="text-xl font-ocean text-center md:text-4xl font-black text-black leading-tight tracking-wide">
								{item.value}
							</p>
							<span className="text-base font-instrumentSerif text-center md:text-base text-black/70 font-medium mt-0.5 md:mt-1">
								{item.label}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
