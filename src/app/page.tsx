/* eslint-disable react/react-in-jsx-scope */

import Image from "next/image";

import {placesData, speakers, sponsorData} from "@/db";
import {Marquee} from "@/components/ui/marquee";
import {SpeakerCard} from "@/components/ui/speaker-card";
import PlaceCard from "@/components/ui/location-card";
import ImpactCard from "@/components/ui/impact-card";
import HeroSection from "@/components/ui/hero-section";
import QuoteSlider from "@/components/ui/quote-slider";
import Images from "@/config/constants/Images";

export const metadata = {
	title: "Home – MakerChat",
	description: "where makers meet to chat and build together",
	icons: {
		icon: [
			{url: Images.faviconIco.src},
			{url: Images.favicon96.src, type: "image/png", sizes: "96x96"},
			{url: Images.faviconSvg.src, type: "image/svg+xml"},
			{url: Images.faviconSvg.src, rel: "shortcut icon"},
		],
		apple: [{url: Images.appleTouchIcon.src, sizes: "180x180"}],
	},
	manifest: "/site.webmanifest",
	appleWebApp: {
		title: "MakerGram",
	},
	keywords: [
		"MakerChat",
		"startup events India",
		"founder stories",
		"real founder journeys",
		"build in public",
		"community-led conversations",
		"early-stage startups",
		"hardware startup stories",
		"maker community India",
		"candid startup talks",
		"learn share collaborate",
		"tech maker interviews",
		"grassroots innovation",
		"behind the build",
		"founder-first content",
		"startup storytelling",
		"DIY startup culture",
		"authentic entrepreneur voices",
	],
	openGraph: {
		title: "Home – MakerChat",
		description: "where makers meet to chat and build together",
		url: "https://yourdomain.com/about",
		siteName: "MakerChat",
		images: [
			{
				url: Images.groupPhoto.src,
				width: 1200,
				height: 630,
				alt: "MakerChat Open Graph Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Home – MakerChat",
		description: "where makers meet to chat and build together",
		images: [Images.groupPhoto.src],
	},
	robots: "index, follow",
};

export default function Home() {
	return (
		<>
			{/* Hero Section with Video */}
			<HeroSection />

			<section className="mx-auto py-20 max-w-4xl px-4 md:px-0">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					Trusted by Visionaries, Backed by Leaders
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Supporters
				</p>
				<div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4 lg:grid-cols-3">
					{sponsorData.ids.map((sponsorId) => {
						const sponsor = sponsorData.details[sponsorId];
						return (
							<a
								key={sponsorId}
								target="_blank"
								rel="noreferrer"
								href={sponsor.website}
								className="flex items-center lg:justify-center"
							>
								<Image
									src={sponsor.logoImg}
									alt={sponsor.name}
									width={200}
									height={200}
									priority
								/>
							</a>
						);
					})}
				</div>
			</section>

			<ImpactCard />
			<section className="w-full px-6 md:px-0 py-16 md:py-10 bg-white text-[#2f2f2f]">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<div className="space-y-6">
						<p className="text-4xl md:text-5xl font-semibold font-manrope leading-tight text-center md:text-left text-gray-900 ">
							We needed <span className="">real conversations.</span>
						</p>
						<p className="text-lg md:text-xl text-center md:text-left font-normal text-muted-foreground">
							That&apos;s when{" "}
							<span className="font-semibold text-[#1e1e1e]">MakerChat</span>{" "}
							was born — to bring meaningful, creator-first dialogues to life.
						</p>
					</div>

					{/* Image Block */}
					<div className="relative flex justify-center">
						<Image
							src={Images.teamChatPoster}
							alt="Our Story"
							width={600}
							height={400}
							className="relative z-10 rounded-3xl  w-full max-w-[480px] object-cover"
						/>
					</div>
				</div>
			</section>

			<QuoteSlider />
			<section className="bg-white px-4 md:px-8 lg:px-16 py-20">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					MakerChat across the Cities
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Where MakerChat Comes to Life
				</p>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
					{placesData.ids.map((placeId: string) => {
						const place = placesData.details[placeId];
						return <PlaceCard key={placeId} {...place} id={placeId} />;
					})}
				</div>
			</section>

			<section className="bg-[#f5f5f7] px-4 md:px-8 lg:px-16 py-20">
				<h2 className="text-center text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">
					Where Founders, Builders & Experts Inspire the Crowd
				</h2>
				<p className="text-center text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-snug">
					Voices Behind the Vision
				</p>

				<div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg  mt-10">
					<Marquee pauseOnHover className="[--duration:20s]">
						{speakers.ids.map((review) => {
							const speaker = speakers.details[review];
							if (!speaker) return null;
							return (
								<SpeakerCard
									key={review}
									img={
										Images.speakers[speaker.id as keyof typeof Images.speakers]
									}
									name={speaker.firstName}
									designation={speaker.designation}
								/>
							);
						})}
					</Marquee>
				</div>
				<div className="max-w-xl mx-auto mt-12 px-4 md:px-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
						<div className="text-center md:text-left">
							<h2 className="text-[#1d1d1f] text-xl md:text-2xl font-light mb-2">
								Step Into the Spotlight
							</h2>
							<p className="text-[#6e6e73] text-base md:text-lg font-normal">
								Share your journey with makers across the world.
							</p>
						</div>
						<div className="shrink-0">
							<a
								href="https://go.makerchat.co/march25-cfp"
								target="_blank"
								rel="noreferrer"
								className="inline-block px-6 py-2 text-sm md:text-base font-medium text-white bg-[#1d1d1f] rounded-full hover:opacity-80 transition"
							>
								Apply now
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
