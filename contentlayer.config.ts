// contentlayer.config.ts
import {defineDocumentType, makeSource} from "contentlayer/source-files";

export const Sponsor = defineDocumentType(() => {
	return {
		name: "Sponsor",
		filePathPattern: `sponsor.md`, // Specify the exact file name
		contentType: "markdown",
		computedFields: {
			url: {
				type: "string",
				resolve: (article) => {
					return `/sponsor/${article._raw.sourceFileName}`;
				},
			},
		},
	};
});
export const SpeakerGuideline = defineDocumentType(() => {
	return {
		name: "SpeakerGuideline",
		filePathPattern: `speaker-guide-line.md`, // Specify the exact file name
		contentType: "markdown",
		computedFields: {
			url: {
				type: "string",
				resolve: (article) => {
					return `/speaker-guide-line/${article._raw.sourceFileName}`;
				},
			},
		},
	};
});
export const Speaker = defineDocumentType(() => {
	return {
		name: "Speaker",
		filePathPattern: `speaker.md`, // Specify the exact file name
		contentType: "markdown",
		computedFields: {
			url: {
				type: "string",
				resolve: (article) => {
					return `/speaker/${article._raw.sourceFileName}`;
				},
			},
		},
	};
});
export const WhatWeDo = defineDocumentType(() => {
	return {
		name: "WhatWeDo",
		filePathPattern: `what-we-do.md`, // Specify the exact file name
		contentType: "markdown",
		computedFields: {
			url: {
				type: "string",
				resolve: (article) => {
					return `/what-we-do/${article._raw.sourceFileName}`;
				},
			},
		},
	};
});

export default makeSource({
	contentDirPath: "./src/db/",
	documentTypes: [Sponsor, WhatWeDo, Speaker, SpeakerGuideline],
});
