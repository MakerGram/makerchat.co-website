"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import Images from "@/config/constants/Images";

import {Icons} from "./icons";
import {VelocityScroll} from "./scroll-based-velocity";

const Footer = () => {
	return (
		<>
			<div className="px-4 pt-24 mx-auto w-full lg:max-w-full bg-[#f5f5f7] relative pb-28">
				<VelocityScroll
					numRows={1}
					className="absolute -top-8 left-0 font-normal z-20 py-2 font-manrope border-t border-b border-[#d6d6d6] text-xl md:text-4xl text-[#1d1d1f] bg-[#e8e8ed]"
				>
					<span className="font-pixel font-normal">
						{[
							"#ArduinoGang",
							"#AIxRobots",
							"#GPTOnBoard",
							"#IoTwithAI",
							"#ESP32Vibes",
							"#DIYAutomation",
							"#RaspberryPiAI",
							"#EdgeAIonSTM32",
							"#ESP32ML",
							"#JetsonNanoFlex",
							"#BeagleBoneAI",
							"#HackWithGPT",
							"#AIoTRevolution",
							"#TinyMLonMCU",
							"#CircuitPythonGPT",
							"#MakeWithAI",
						].map((tag, idx) => {
							return (
								<span key={idx} className="text-[#1d1d1f]">
									✳︎ {tag}{" "}
								</span>
							);
						})}
					</span>
				</VelocityScroll>

				<div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 max-w-6xl mx-auto">
					<div className="md:max-w-md lg:col-span-2">
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href="https://makergram.com"
							aria-label="Go home"
							title="Company"
							className="inline-flex items-center"
						>
							<Image
								placeholder="blur"
								width={30}
								src={Images.brandIcon}
								alt="Picture of the author"
								className="rounded-md"
							/>
							<span className="ml-2 text-xl font-bold tracking-wide text-[#1d1d1f]">
								MakerGram
							</span>
						</Link>
						<div className="mt-4 lg:max-w-sm">
							<p className="text-base text-[#1d1d1f] font-light tracking-wide">
								MakerGram is an Open Community for Makers and hardware
								enthusiasts to grow further!
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
						{[
							{
								title: "About",
								links: [
									["Privacy Policy", "https://makergram.com/privacy-policy"],
									[
										"Terms and Conditions",
										"https://makergram.com/terms-and-conditions",
									],
									["Disclaimer", ""],
									["Contact", "/"],
								],
							},
							{
								title: "Join with us",
								links: [
									["Telegram", "/"],
									["Whatsapp", "/"],
									["Forum", "https://makergram.com/community/"],
									["Work with us", "/"],
								],
							},
							{
								title: "Others",
								links: [
									["Community", "https://makergram.com/community/"],
									["Workshops", "https://workshop.makergram.com/"],
									["Hardware rental", "/"],
									["Blog", "/story"],
								],
							},
						].map((section, idx) => {
							return (
								<div key={idx}>
									<p className="font-semibold tracking-wide text-[#1d1d1f]">
										{section.title}
									</p>
									<ul className="mt-2 space-y-2">
										{section.links.map(([label, url], i) => {
											return (
												<li key={i}>
													<Link
														href={url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-[#1d1d1f] transition-colors duration-300 hover:underline underline-offset-4 font-light"
													>
														{label}
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex flex-col justify-between pt-5 pb-5 border-t border-[#d6d6d6] sm:flex-row">
					<p className="text-sm text-[#1d1d1f] font-light">
						© 2025 MakerGram. All rights reserved. Proudly made for the
						Universe!
					</p>
					<div className="flex items-center mt-4 space-x-4 sm:mt-0">
						<Link
							href="https://www.instagram.com/"
							className="text-[#1d1d1f] hover:text-[#888]"
						>
							<Icons.instgram className="h-4 w-4" />
						</Link>
						<Link
							href="https://www.linkedin.com/company/"
							className="text-[#1d1d1f] hover:text-[#888]"
						>
							<Icons.linkedIn className="h-4 w-4" />
						</Link>
						<Link
							href="https://github.com"
							className="text-[#1d1d1f] hover:text-[#888]"
						>
							<Icons.gitHub className="h-4 w-4" />
						</Link>
						<Link
							href="https://twitter.com/"
							className="text-[#1d1d1f] hover:text-[#888]"
						>
							<Icons.twitter className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
