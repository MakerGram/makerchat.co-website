import React from "react";

import Image from "next/image";

import Images from "@/config/constants/Images";

interface iBackgroundImagesProps {
	topImage?: {
		src: string;
		width?: number;
		height?: number;
		alt: string;
		className?: string;
	};
	bottomImage?: {
		src: string;
		width?: number;
		height?: number;
		alt: string;
		className?: string;
	};
}

export default function BackgroundImages({
	topImage = {
		src: Images.elements.piSkelton.src,
		width: 600,
		height: 600,
		alt: "Raspberry Pi",
		className: "opacity-5 object-contain",
	},
	bottomImage = {
		src: Images.elements.arduinoSkelton.src,
		width: 500,
		height: 500,
		alt: "Arduino",
		className: "opacity-5 object-cover",
	},
}: iBackgroundImagesProps) {
	return (
		<>
			<div className="absolute top-0 left-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={topImage.src}
					width={topImage.width}
					height={topImage.height}
					alt={topImage.alt}
					className={topImage.className}
				/>
			</div>
			<div className="absolute -bottom-36 -right-0 flex justify-start items-center pointer-events-none z-0">
				<Image
					src={bottomImage.src}
					width={bottomImage.width}
					height={bottomImage.height}
					alt={bottomImage.alt}
					className={bottomImage.className}
				/>
			</div>
		</>
	);
}
