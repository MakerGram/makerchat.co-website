import React from "react";

import Image from "next/image";
import {
	Languages,
	Users,
	MessageSquare,
	FileText,
	Presentation,
	Monitor,
	Shield,
	User,
} from "lucide-react";

import Images from "@/config/constants/Images";

export const metadata = {
	title: "Speaker Guidelines – MakerChat",
	description:
		"Learn about the guidelines and requirements for becoming a speaker at MakerChat events. Join our community of makers and share your knowledge.",
	icons: {
		icon: [
			{url: Images.faviconIco.src},
			{url: Images.favicon96.src, type: "image/png", sizes: "96x96"},
			{url: Images.faviconSvg.src, type: "image/svg+xml"},
			{url: Images.faviconIco.src, rel: "shortcut icon"},
		],
		apple: [{url: Images.appleTouchIcon.src, sizes: "180x180"}],
	},
	manifest: "/site.webmanifest",
	appleWebApp: {
		title: "MakerGram",
	},
	keywords: [
		"MakerChat speaker",
		"speaker guidelines",
		"presentation requirements",
		"technical setup",
		"code of conduct",
		"speaker registration",
		"maker community",
		"event guidelines",
	],
	openGraph: {
		title: "Speaker Guidelines – MakerChat",
		description:
			"Learn about the guidelines and requirements for becoming a speaker at MakerChat events. Join our community of makers and share your knowledge.",
		url: "https://yourdomain.com/speaker",
		siteName: "MakerChat",
		images: [
			{
				url: Images.groupPhoto.src,
				width: 1200,
				height: 630,
				alt: "MakerChat Speaker Guidelines Open Graph Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Speaker Guidelines – MakerChat",
		description:
			"Learn about the guidelines and requirements for becoming a speaker at MakerChat events. Join our community of makers and share your knowledge.",
		images: [Images.groupPhoto.src],
	},
	robots: "index, follow",
};

export default function Speaker() {
	return (
		<section className="bg-grid-[#4b3f33]/10 relative pb-28 mt-24 md:mt-24">
			{/* Background mask */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background images */}
			<div className="absolute top-0 left-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={Images.elements.piSkelton.src}
					width={600}
					height={600}
					alt="Raspberry Pi"
					className="opacity-10 object-contain"
				/>
			</div>
			<div className="absolute -bottom-36 -right-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={Images.elements.arduinoSkelton.src}
					width={500}
					height={500}
					alt="Arduino"
					className="opacity-10 object-cover"
				/>
			</div>

			{/* Foreground content */}
			<div className="mx-auto max-w-4xl relative z-10 px-4">
				{/* Speaker intro section */}

				<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
					Speaker Guidelines
				</h2>
				<p className="text-center text-4xl md:text-5xl font-light font-tiemposHeadline lowercase leading-tight lg:text-6xl mb-6">
					Share your knowledge with the{" "}
					<span className="font-tiemposHeadline font-medium">Community</span>
				</p>

				{/* Guidelines Content */}
				<div className="max-w-4xl mx-auto space-y-12 ">
					{/* Language Section */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#42a1ec] flex items-center justify-center shadow-lg">
								<Languages className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
								Session Language Medium
							</h3>
						</div>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0071e3]/10 to-[#42a1ec]/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-[#0071e3] font-medium">1</span>
								</div>
								<span>
									All sessions must be conducted in English or Malayalam
									depending on the audience.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0071e3]/10 to-[#42a1ec]/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-[#0071e3] font-medium">2</span>
								</div>
								<span>
									If the speaker is only fluent in English, they can speak in
									English fully.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0071e3]/10 to-[#42a1ec]/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-[#0071e3] font-medium">3</span>
								</div>
								<span>
									Speakers must be fluent in the language they choose to conduct
									their session in.
								</span>
							</li>
						</ul>
					</div>

					{/* Attitude Section */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
								<Users className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
								Attitude Towards Attendees
							</h3>
						</div>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-purple-600 font-medium">1</span>
								</div>
								<span>
									Speakers must be respectful and professional at all times when
									interacting with attendees.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-purple-600 font-medium">2</span>
								</div>
								<span>
									Speakers should be approachable and willing to engage with
									attendees during and after their sessions.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-purple-600 font-medium">3</span>
								</div>
								<span>
									Speakers should be open to receiving questions, answering
									queries, and addressing the crowd.
								</span>
							</li>
						</ul>
					</div>

					{/* Language Etiquettes */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
								<MessageSquare className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
								Language Etiquettes
							</h3>
						</div>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-green-600 font-medium">1</span>
								</div>
								<span>
									Speakers should avoid using ideological references or biases
									such as political or religious.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-green-600 font-medium">2</span>
								</div>
								<span>
									Speakers should refrain from using offensive and obscene
									words.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-green-600 font-medium">3</span>
								</div>
								<span>
									Speakers should refrain from using gender-specific
									stereotypes, or engaging in bullying, verbal sexual harassment
									and using bad/offensive jokes.
								</span>
							</li>
						</ul>
					</div>

					{/* Session Content */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
								<FileText className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
								Session Content
							</h3>
						</div>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-orange-600 font-medium">1</span>
								</div>
								<span>
									The content of the session should be relevant and aligned with
									the core principles of MakerChat.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-orange-600 font-medium">2</span>
								</div>
								<span>
									Speakers should avoid promoting their own products or services
									unless explicitly approved by Makergram.
								</span>
							</li>
						</ul>
					</div>

					{/* Presentation Style */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
								<Presentation className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
								Presentation Style
							</h3>
						</div>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-red-600 font-medium">1</span>
								</div>
								<span>
									Speakers should use engaging and interactive presentation
									styles, such as live demos or hands-on activities, whenever
									possible.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-red-600 font-medium">2</span>
								</div>
								<span>
									Speakers should avoid reading from a script and instead speak
									naturally to the audience.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-red-600 font-medium">3</span>
								</div>
								<span>
									Speakers should use visual aids such as slides or diagrams to
									help illustrate key points.
								</span>
							</li>
						</ul>
					</div>

					{/* Technical Requirements */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
								<Monitor className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
								Technical Requirements
							</h3>
						</div>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">1</span>
								</div>
								<span>
									Speakers should ensure that the desktop background of the
									system shouldn&apos;t contain any human beings other than the
									speaker.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">2</span>
								</div>
								<span>
									Speakers must ensure that their presentation equipment and
									software are compatible with MakerChat&apos;s technical setup.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">3</span>
								</div>
								<span>
									Speakers should bring a laptop having a supported operating
									system (Mac, Windows or Ubuntu).
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">4</span>
								</div>
								<span>
									Speakers must ensure their device is fully charged and bring
									the charging adapter with Indian connector.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">5</span>
								</div>
								<span>
									Speakers must ensure that their device has a full-size HDMI
									port and USB-A port, or bring appropriate adapters.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">6</span>
								</div>
								<span>
									Speakers should ensure that any confidential or sensitive
									files are removed or hidden from the presentation view.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">7</span>
								</div>
								<span>
									Speakers should ensure that the system has a clean desktop and
									notifications are turned off.
								</span>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center mt-1 flex-shrink-0">
									<span className="text-indigo-600 font-medium">8</span>
								</div>
								<span>
									Speakers should set display timeout to at least 10 minutes and
									configure an appropriate screensaver.
								</span>
							</li>
						</ul>
					</div>

					{/* Code of Conduct */}
					<div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#0055FF] flex items-center justify-center shadow-lg">
								<Shield className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl font-medium bg-gradient-to-r from-[#007AFF] to-[#0055FF] bg-clip-text text-transparent">
								Code of Conduct
							</h3>
						</div>
						<p className="text-gray-700 text-lg">
							Speakers must adhere to Makergram&apos;s code of conduct at all
							times during the event. Any violations of the code of conduct will
							not be tolerated and may result in expulsion from the event and/or
							future events. Also, may have to face legal consequences if
							required.
						</p>
					</div>

					{/* Register Button */}
					<div className="text-center mt-12">
						<a
							href="#"
							className="mt-auto  w-full max-w-xs mx-auto bg-gradient-to-br from-[#0071e3] to-[#42a1ec] hover:from-[#0077ed] hover:to-[#42a7f2] text-white text-[15px] py-3 font-medium text-center rounded-full transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 uppercase"
						>
							Register as a Speaker
							<User className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
