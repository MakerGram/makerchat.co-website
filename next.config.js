/** @type {import('next').NextConfig} */
// next.config.js
const {withContentlayer} = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true, // GitHub Pages prefers this for routing
	reactStrictMode: false,
	images: {
		unoptimized: true, // ✅ Required for `next export`
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
			},
			{
				protocol: "https",
				hostname: "static.inaturalist.org",
			},
			{
				protocol: "https",
				hostname: "drive.google.com",
			},
			{
				protocol: "https",
				hostname: "images.lumacdn.com",
			},
			{
				protocol: "https",
				hostname: "makergram.com",
			},
			{
				protocol: "https",
				hostname: "cdn.lu.ma",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

module.exports = withContentlayer(nextConfig);
