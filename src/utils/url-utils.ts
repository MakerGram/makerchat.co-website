export function isValidURL(string: string) {
	try {
		new URL(string);
		return true; // The string is a valid URL
	} catch (_) {
		return false; // The string is not a valid URL
	}
}
