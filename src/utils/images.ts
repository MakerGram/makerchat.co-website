/**
 * Utility function to handle image paths for GitHub Pages deployment
 */
export const getImagePath = (path: string): string => {
	// Remove ./public prefix if present
	const cleanPath = path.replace("./public", "");

	// Add base path for GitHub Pages
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

	// Return normalized path
	return `${basePath}${cleanPath}`;
};
