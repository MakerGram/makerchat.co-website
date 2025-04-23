/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";

import BlogCards from "@/components/ui/blog-cards";

export const metadata = {
	title: "Blog – MakerChat",
	description:
		"Fresh stories from the Maker Zone — read startup journeys, project spotlights, and behind-the-build insights.",
	icons: {
		icon: [
			{url: "/favicon-96x96.png", type: "image/png", sizes: "96x96"},
			{url: "/favicon.svg", type: "image/svg+xml"},
			{url: "/favicon.ico", rel: "shortcut icon"},
		],
		apple: [{url: "/apple-touch-icon.png", sizes: "180x180"}],
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
				url: "/uploads/photos/makerchat-group-photo.webp",
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
		images: ["/uploads/photos/makerchat-group-photo.webp"],
	},
	robots: "index, follow",
};

export default function Blog() {
	return (
		<section className="bg-grid-black/10 relative pb-32 pt-16 md:pt-10">
			{/* Radial background mask */}
			<div className="absolute inset-0 pointer-events-none bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] z-0" />

			{/* Background Images */}
			<div className="absolute top-0 left-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src="/elements/pi-skelton.png"
					width={600}
					height={600}
					alt="Raspberry Pi"
					className="opacity-10 object-contain"
				/>
			</div>
			<div className="absolute -bottom-36 -right-20 flex justify-start items-center pointer-events-none z-0">
				<Image
					src="/elements/arduino-skelton.png"
					width={500}
					height={500}
					alt="Arduino"
					className="opacity-10 object-cover"
				/>
			</div>

			{/* Top headline */}
			<div className="relative z-10 text-center px-4 md:px-8">
				<h2 className="text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2 text-left md:text-center">
					MakerChat Blog
				</h2>
				<p className="text-3xl md:text-4xl font-semibold text-neutral-900 text-left md:text-center">
					Fresh from the Maker Zone
				</p>
			</div>

			{/* Blog Cards from client component */}
			<BlogCards />
		</section>
	);
}
