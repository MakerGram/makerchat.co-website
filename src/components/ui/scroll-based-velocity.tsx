/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import React, {useEffect, useRef, useState} from "react";

import {cn} from "@/lib/utils";

interface iVelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	numRows?: number;
}

interface iStaticRowProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

function StaticRow({children, ...props}: iStaticRowProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLSpanElement>(null);
	const [repetitions, setRepetitions] = useState(1);

	useEffect(() => {
		const calculateRepetitions = () => {
			if (containerRef.current && textRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				const textWidth = textRef.current.offsetWidth;
				const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
				setRepetitions(newRepetitions);
			}
		};

		calculateRepetitions();
		window.addEventListener("resize", calculateRepetitions);
		return () => {
			return window.removeEventListener("resize", calculateRepetitions);
		};
	}, [children]);

	return (
		<div
			ref={containerRef}
			className="w-full overflow-hidden whitespace-nowrap"
			{...props}
		>
			<div className="inline-block">
				{Array.from({length: repetitions}).map((_, i) => {
					return (
						<span key={i} ref={i === 0 ? textRef : null}>
							{children}{" "}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export function VelocityScroll({
	numRows = 2,
	children,
	className,
	...props
}: iVelocityScrollProps) {
	return (
		<div className={cn("relative w-full", className)} {...props}>
			{Array.from({length: numRows}).map((_, i) => {
				return <StaticRow key={i}>{children}</StaticRow>;
			})}
		</div>
	);
}
