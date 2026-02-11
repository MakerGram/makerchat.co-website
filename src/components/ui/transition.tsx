"use client";

import React from "react";

import {motion} from "framer-motion";

interface iTransitionComponentProps {
	children: React.ReactNode;
	type?: "slide" | "fade";
	key?: string | number;
	duration?: number;
}

interface iImageTransitionProps {
	children: React.ReactNode;
	key: string | number;
}

const TransitionComponent: React.FC<iTransitionComponentProps> = ({
	children,
	type = "fade",
	key,
	duration = 0.5,
}) => {
	const variants = {
		slide: {
			initial: {y: 20, opacity: 0},
			animate: {y: 0, opacity: 1},
			exit: {y: -20, opacity: 0},
		},
		fade: {
			initial: {opacity: 0},
			animate: {opacity: 1},
			exit: {opacity: 0},
		},
	};

	return (
		<motion.div
			key={key}
			initial={variants[type].initial}
			animate={variants[type].animate}
			exit={variants[type].exit}
			transition={{
				duration,
				ease: "easeInOut",
			}}
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
			}}
		>
			{children}
		</motion.div>
	);
};

const ImageTransition: React.FC<iImageTransitionProps> = ({children, key}) => {
	return (
		<motion.div
			key={key}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
			}}
		>
			{children}
		</motion.div>
	);
};

export default TransitionComponent;
export {ImageTransition};
