import React from "react";

import Link from "next/link";
import {ChevronRightIcon} from "@radix-ui/react-icons"; // Make sure to adjust the import based on your icon library
import {usePathname} from "next/navigation";

const Breadcrumb = () => {
	const pathname = usePathname(); // Get the current pathname

	const pathSegments = pathname.split("/").filter(Boolean); // Get path segments

	return (
		<nav className="mb-4 mt-2 flex items-center space-x-1 text-sm leading-none text-muted-foreground font-mono ">
			<Link href="/" className="hover:underline">
				Home
			</Link>
			{pathSegments.map((segment, index) => {
				const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
				const isLastSegment = index === pathSegments.length - 1; // Check if this is the last segment

				return (
					<React.Fragment key={index}>
						<ChevronRightIcon className="h-3.5 w-3.5" />
						<Link
							href={href}
							className={`truncate hover:underline ${isLastSegment && "text-foreground"}`}
						>
							{segment.charAt(0).toUpperCase() + segment.slice(1)}{" "}
						</Link>
					</React.Fragment>
				);
			})}
		</nav>
	);
};

export default Breadcrumb;
