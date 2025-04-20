/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import React, {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";
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

	const [isShowLogo, setShowLogo] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY) {
				setShowLogo(false); // scrolling down → hide
			} else {
				setShowLogo(true); // scrolling up → show
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			return window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<>
			{/* Sticky brand logo with scroll-hide effect */}
			<div className="sticky top-0 z-50">
				<Link
					href="/"
					className={`fixed top-3 left-4 flex items-center gap-2 pl-1 pr-3 py-1 bg-black/60 backdrop-blur-md rounded-full shadow-lg border border-white/10 transition-all duration-300 ${
						isShowLogo ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					<div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-inner">
						<Image
							src="/mg-logo.webp"
							alt="Brand Logo"
							width={32}
							height={32}
							className="object-cover"
						/>
					</div>
					<span className="text-white font-bold text-sm font-manrope tracking-tight sm:inline">
						MakerChat
					</span>
				</Link>
			</div>

			{/* Bottom-centered dock navbar */}
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
		</>
	);
};

export default DockNavBar;
