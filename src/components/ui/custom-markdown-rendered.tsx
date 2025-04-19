import * as React from "react";

import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CustomLink = ({href, children, ...props}: JSX.IntrinsicElements["a"]) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	);
};

export const CustomMarkdownRender = ({children}: {children: string}) => {
	if (typeof children !== "string") {
		console.warn("CustomMarkdownRender expects children of type string.");
		return null;
	}
	return (
		<ReactMarkdown
			className="article-wrapper font-manrope"
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			components={{
				a: CustomLink,
			}}
		>
			{children}
		</ReactMarkdown>
	);
};
