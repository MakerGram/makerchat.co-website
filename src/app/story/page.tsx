/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";

import BlogCards from "@/components/ui/blog-cards";
import Images from "@/config/constants/Images";

export const metadata = {
	title: "Blog – MakerChat",
	description:
		"Fresh stories from the Maker Zone — read startup journeys, project spotlights, and behind-the-build insights.",
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
		title: "MakerChat Blog",
	},
	keywords: [
		"MakerChat blog",
		"maker stories",
		"hardware startup blog",
		"startup build in public",
		"DIY tech projects",
		"founder stories India",
		"early stage innovation",
		"maker movement",
		"blog for makers",
		"raspberry pi arduino projects",
		"community-led tech",
		"grassroots entrepreneurship",
	],
	openGraph: {
		title: "Blog – MakerChat",
		description:
			"Fresh stories from the Maker Zone — read startup journeys, project spotlights, and behind-the-build insights.",
		url: "https://yourdomain.com/blog",
		siteName: "MakerChat",
		images: [
			{
				url: Images.groupPhoto.src,
				width: 1200,
				height: 630,
				alt: "MakerChat Blog Open Graph Image",
			},
		],
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog – MakerChat",
		description:
			"Fresh stories from the Maker Zone — read startup journeys, project spotlights, and behind-the-build insights.",
		images: [Images.groupPhoto.src],
	},
	robots: "index, follow",
};

export default function Blog() {
	return (
		<section className="bg-grid-[#4b3f33]/10 relative pb-28 mt-16 md:mt-24">
			{/* Radial background mask */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#fff9eb)] z-0"></div>

			{/* Background Images */}
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

			{/* Top headline */}
			<div className="relative z-10 text-center px-4 md:px-8">
				<h2 className="text-center text-sm md:text-base text-gray-600 uppercase tracking-widest mb-3">
					MakerChat Stories
				</h2>
				<p className="text-center text-4xl md:text-5xl font-light font-tiemposHeadline lowercase leading-tight lg:text-6xl mb-6">
					where makers
					<br />
					<span className="font-tiemposHeadline font-medium">thrive</span>
				</p>
			</div>

			{/* Blog Cards from client component */}
			<BlogCards />
		</section>
	);
}
