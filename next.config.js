/** @type {import('next').NextConfig} */
// next.config.js
const {withContentlayer} = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
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
				protocol:"https",
				hostname:"lh3.googleusercontent.com"
			}
		],
	},
};

module.exports = withContentlayer(nextConfig);
