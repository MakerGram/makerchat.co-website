/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import React from "react";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Home, BookOpen, Calendar, Bookmark} from "lucide-react";

const dockItems = [
	{href: "/", label: "Home", icon: Home},
	{href: "/sponsor", label: "Sponsor", icon: Bookmark},
	{href: "/events", label: "Events", icon: Calendar},
	{href: "/story", label: "Blog", icon: BookOpen},
];

const DockNavBar = () => {
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
			<div className="flex gap-6 px-6 py-3 bg-black/80 backdrop-blur-md shadow-xl rounded-full border border-white/10">
				{dockItems.map(({href, label, icon: Icon}) => {
					return (
						<Link
							key={label}
							href={href}
							className={`flex flex-col items-center text-xs transition-all duration-200 ${
								isActive(href) ? "text-white" : "text-gray-400"
							} hover:text-white`}
						>
							<Icon className="w-5 h-5 mb-1" />
							{label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default DockNavBar;
