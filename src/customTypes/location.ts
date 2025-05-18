export type iLocationStatus = "active" | "notify" | "interest";

export interface iLocationData {
	location: string;
	description: string;
	image: string;
}

export interface iLocationHeroProps {
	slug: string;
	data: iLocationData;
}

export interface iCountdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	isDone: boolean;
}

export interface iLocation {
	id: string;
	location: string;
	url: string;
}
