/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import React, {useState, useEffect} from "react";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Home, BookOpen, Calendar, Bookmark, Heart} from "lucide-react";

import Images from "@/config/constants/Images";

const navItems = [
	{href: "/", label: "Home", icon: Home},
	{href: "/speaker", label: "Speaker", icon: Bookmark},
	{href: "/events", label: "Events", icon: Calendar},
	{href: "/story", label: "Blog", icon: BookOpen},
];
const navItemsMobile = [
	{href: "/", label: "Home", icon: Home},
	{href: "/sponsor", label: "Sponsor", icon: Heart},
	{href: "/speaker", label: "Speaker", icon: Bookmark},
	{href: "/events", label: "Events", icon: Calendar},
	{href: "/story", label: "Blog", icon: BookOpen},
];

const DockNavBar = () => {
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Show navbar if scrolling up or at the top
			if (currentScrollY < lastScrollY || currentScrollY < 10) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, {passive: true});
		return () => {
			return window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	const isActive = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(href);
	};

	return (
		<>
			{/* Sticky brand logo */}
			<div
				className={`sticky top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
					isVisible
						? "translate-y-0 opacity-100"
						: "-translate-y-4 opacity-0 pointer-events-none"
				}`}
			>
				<Link
					href="/"
					className={`fixed top-4 left-4 md:left-4 flex items-center gap-2 pr-2 pl-2 py-1.5 transition-all duration-300 hover:opacity-80 bg-black/40 backdrop-blur-sm shadow-xl rounded-full border border-white/5`}
				>
					<div className="w-6 h-6 rounded-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10">
						<Image
							src={Images.brandIcon}
							alt="Brand Logo"
							width={24}
							height={24}
							className="object-cover"
						/>
					</div>
					<span
						className={`font-medium tracking-wide font-sf-pro text-sm text-white`}
					>
						MakerChat
					</span>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<nav
				className={`hidden md:block fixed top-3 right-6 z-50 transition-all duration-300 ${
					isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div className="flex gap-6 pl-5 pr-2 py-2 bg-black/40 backdrop-blur-sm shadow-xl rounded-full border border-white/5 items-center lowercase">
					{navItems.map(({href, label}) => {
						return (
							<Link
								key={label}
								href={href}
								className={`flex items-center gap-2 text-base font-medium text-white hover:text-white transition-all duration-200 relative ${
									isActive(href)
										? "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full"
										: ""
								}`}
							>
								{label}
							</Link>
						);
					})}

					<Link
						href="/sponsor"
						className="ml-4 px-6 py-2 bg-white text-black text-base font-medium rounded-full shadow transition-all duration-200 hover:bg-black hover:text-white flex items-center gap-2"
					>
						<Heart className="w-5 h-5" />
						Sponsor Us
					</Link>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
				<div className="flex gap-6 px-6 py-3 bg-black/40 backdrop-blur-sm shadow-xl rounded-full border border-white/5">
					{navItemsMobile.map(({href, label, icon: Icon}) => {
						return (
							<Link
								key={label}
								href={href}
								className={`flex flex-col items-center text-xs transition-all duration-200 text-white hover:text-white`}
							>
								<Icon
									className="w-5 h-5 mb-1"
									fill={
										isActive(href)
											? href === "/sponsor"
												? "white"
												: "white"
											: "none"
									}
									stroke={
										isActive(href)
											? href === "/sponsor"
												? "white"
												: "white"
											: "white"
									}
								/>
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
