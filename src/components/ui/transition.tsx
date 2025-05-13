"use client";

import React from "react";

import {motion} from "framer-motion";

interface iTransitionComponentProps {
	children: React.ReactNode;
}

const TransitionComponent: React.FC<iTransitionComponentProps> = ({
	children,
}) => {
	return (
		<motion.div
			initial={{y: 20, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{ease: "easeInOut", duration: 0.5}}
		>
			{children}
		</motion.div>
	);
};

export default TransitionComponent;
