/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true, // GitHub Pages prefers this for routing
	reactStrictMode: false,
	basePath: "", // Add basePath for custom domain
	assetPrefix: "", //
	images: {
		unoptimized: true, // Required for `next export`
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
	webpack(config) {
		config.module.rules.push({
			test: /\.(mp4|webm|ogg)$/,
			type: "asset/resource",
			generator: {
				filename: "static/media/[name].[hash][ext]",
			},
		});

		return config;
	},
};

module.exports = nextConfig;
