/* eslint-disable react/react-in-jsx-scope */

import HeroSection from "@/components/ui/hero-section";
import QuoteSlider from "@/components/ui/quote-slider";
import Images from "@/config/constants/Images";
import MissionSection from "@/components/ui/mission-section";
import SupportersSection from "@/components/ui/supporters-section";
import StorySection from "@/components/ui/story-section";
import SpeakersSection from "@/components/ui/speakers-section";
import CitiesSection from "@/components/ui/cities-section";
import BrandPromoCard from "@/components/ui/brand-promo-card";

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

			<SupportersSection />

			{/* <ImpactCard /> */}
			<StorySection />
			<BrandPromoCard />

			<MissionSection />

			<QuoteSlider />
			<CitiesSection />
			<SpeakersSection />
		</>
	);
}
