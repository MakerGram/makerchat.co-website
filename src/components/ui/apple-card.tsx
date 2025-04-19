/* eslint-disable indent */
"use client";
import React, {
	useEffect,
	useRef,
	createContext,
	useContext,
	useState,
} from "react";

import Image from "next/image"; // Assuming you're using Next.js
import {AnimatePresence, motion} from "framer-motion";
import {ImageProps} from "next/image";
import {ArrowLeft, ArrowRight, Quote, X} from "lucide-react";

import {cn} from "@/lib/utils";
import {useOutsideClick} from "@/hooks/useOut";
import {iTestimonials} from "@/customTypes/EventTypes";

interface iCarouselProps {
	items: JSX.Element[];
	initialScroll?: number;
}

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => {},
	currentIndex: 0,
});

export const Carousel = ({items, initialScroll = 0}: iCarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: 300, behavior: "smooth"});
		}
	};

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
			setCurrentIndex(index);
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	return (
		<CarouselContext.Provider
			value={{onCardClose: handleCardClose, currentIndex}}
		>
			<div className="relative w-full">
				<div
					className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
					ref={carouselRef}
					onScroll={checkScrollability}
				>
					<div
						className={cn(
							"absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l",
						)}
					></div>

					<div
						className={cn(
							"flex flex-row justify-start gap-4 pl-10",
							"max-w-6xl mx-auto", // remove max-w-4xl if you want the carousel to span the full width of its container
						)}
					>
						{items.map((item, index) => {
							return (
								<motion.div
									initial={{
										opacity: 0,
										y: 20,
									}}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 0.5,
											delay: 0.2 * index,
											ease: "easeOut",
											once: true,
										},
									}}
									key={"card" + index}
									className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
								>
									{item}
								</motion.div>
							);
						})}
					</div>
				</div>
				<div className="flex justify-end gap-2 mr-10">
					<button
						className="relative z-40 h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center disabled:opacity-50"
						onClick={scrollLeft}
						disabled={!canScrollLeft}
					>
						<ArrowLeft className="h-6 w-6 text-white" />
					</button>
					<button
						className="relative z-40 h-10 w-10 rounded-full bg-[#4b3f33]
						 flex items-center justify-center disabled:opacity-50"
						onClick={scrollRight}
						disabled={!canScrollRight}
					>
						<ArrowRight className="h-6 w-6 text-white" />
					</button>
				</div>
			</div>
		</CarouselContext.Provider>
	);
};

export const Card = ({
	card,
	index,
	layout = false,
}: {
	card: iTestimonials;
	index: number;
	layout?: boolean;
}) => {
	const [isOpen, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {onCardClose, currentIndex} = useContext(CarouselContext);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				handleClose();
			}
		}

		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => {
			return window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen]);

	useOutsideClick(containerRef, () => {
		return handleClose();
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		onCardClose(index);
	};

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<div className="fixed inset-0 h-screen z-50 overflow-auto">
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="bg-red backdrop-blur-lg h-full w-full fixed inset-0"
						/>
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							ref={containerRef}
							layoutId={layout ? `card-${card.name}` : undefined}
							className="max-w-5xl mx-auto  bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] h-full z-[60]  p-4 md:p-10 rounded-3xl relative md:mt-10"
						>
							<button
								className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-[#4b3f33]"
								onClick={handleClose}
							>
								<X className="h-6 w-6 text-white dark:text-neutral-900 absolute" />
							</button>
							<motion.p
								layoutId={layout ? `category-${card.name}` : undefined}
								className="px-0 md:px-20 text-[rgba(31, 27, 29, 0.7)] text-lg dark:text-white font-thin font-tiemposHeadline underline underline-offset-8"
							>
								{card.designation}
							</motion.p>
							<motion.p
								layoutId={layout ? `title-${card.name}` : undefined}
								className="px-0 md:px-20 text-2xl md:text-4xl font-normal italic text-[rgba(31, 27, 29, 0.7)] mt-4 dark:text-white font-tiemposHeadline lowercase"
							>
								{card.name}
							</motion.p>
							<div className="py-8 text-[rgba(31, 27, 29, 0.7)] px-0 md:px-20 text-3xl lowercase font-thin font-tiemposHeadline leading-snug tracking-wide">
								<Quote className="h-6 w-6 text-[rgba(31, 27, 29, 0.7)] dark:text-neutral-900" />
								{card.desc}
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<motion.button
				layoutId={layout ? `card-${card.name}` : undefined}
				onClick={handleOpen}
				className=" "
				whileHover={{
					// rotateX: 2, // Slightly tilts forward
					// rotateY: 2, // Slightly tilts sideways
					// rotate: 3, // Subtle rotation
					scale: 1.02, // Slight scale-up for effect
					transition: {duration: 0.3, ease: "easeOut"}, // Smooth transition
				}}
			>
				<div
					className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] h-96 w-80 md:h-[30rem] md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-xl`}
				>
					<div className="absolute opacity-30" style={{inset: "-1px 0 0"}}>
						<div className="absolute inset-0">
							<Image
								className="block w-full h-full object-center object-cover"
								src="/textures/bg-layer.jpg" // Replace with your new image path
								alt="Image"
								layout="fill" // Ensures the image takes up the full container
								objectFit="cover" // Ensures the image covers the area without distortion
							/>
						</div>
					</div>
					<BlurImage src={card.profileImg} alt={card.name} />
					<motion.p
						layoutId={layout ? `title-${card.name}` : undefined}
						className="text-[rgba(31, 27, 29, 0.7)] text-2xl md:text-2xl font-normal text-center [text-wrap:balance] font-tiemposHeadline mt-4 lowercase px-3"
					>
						{card.desc.length > 100
							? `${card.desc.slice(0, 100)}...`
							: card.desc}
					</motion.p>
					<motion.p
						layoutId={layout ? `category-${card.name}` : undefined}
						className="text-[rgba(31, 27, 29, 0.7)] text-xl md:text-2xl  font-thin font-tiemposHeadline italic text-center mt-5 lowercase"
					>
						{card.name}.
					</motion.p>
					<motion.p
						layoutId={layout ? `category-${card.name}` : undefined}
						className="text-[rgba(31, 27, 29, 0.7)] text-base md:text-base font-thin font-tiemposHeadline italic text-center mt-1 lowercase underline underline-offset-8 decoration-1"
					>
						{card.designation.length > 25
							? `${card.designation.slice(0, 25)}...`
							: card.designation}
					</motion.p>
				</div>
			</motion.button>
		</>
	);
};

export const BlurImage = ({src, alt, ...rest}: ImageProps) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<div
			className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] 
				opacity-80 overflow-hidden rounded-[1000px] border-[3px] border-solid 
				border-[rgba(59,59,59,0.6)] aspect-[1/1] flex-none 
				saturate-[0.2] sepia-[0.46] relative"
		>
			<Image
				className={cn(
					"transition duration-300 absolute top-0 inset-0 rounded-inherit object-cover z-50",
					isLoading ? "blur-sm" : "blur-0",
				)}
				onLoad={() => {
					setLoading(false);
				}}
				src={src}
				width={150} // Set the width of the image
				height={150} // Set the height of the image
				loading="lazy"
				decoding="async"
				blurDataURL={typeof src === "string" ? src : undefined}
				alt={alt || "Background of a beautiful view"}
				{...rest}
			/>
		</div>
	);
};
