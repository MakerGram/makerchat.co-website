import {iNormalizedObject, iNormalizedObjectForStory} from "./CommonTypes";

export interface iTestimonials {
	id: string;
	desc: string;
	profileImg: string;
	name: string;
	designation: string;
}
interface iSponsor {
	id: string;
	name: string;
	logoImg: string;
	website: string;
}
interface iGeoCoordinates {
	latitude: number;
	longitude: number;
}
type iVenue = {
	id?: string;
	name?: string;
	address?: string;
	mapUrl?: string;
	geoCoordinates?: iGeoCoordinates;
};

type iSpeaker = {
	id: string;
	firstName: string;
	lastName: string;
	avtarImg?: string;
	designation: string;
};
type iEvent = {
	id: string;
	title: string;
	coverImg: string;
	description: string;
	startDateTime: string;
	endDateTime: string;
	registerUrl: string;
	speaker: iSpeaker;
	venue: iVenue;
	// metrics: iMetrics;
};

interface iLocations {
	id: string;
	name: string;
	geoCoordinates: iGeoCoordinates;
}
interface iPhotos {
	id: string;
	photoUrl: string;
	caption: string;
}
interface iQuestions {
	id: string;
	title: string;
	body: string;
}
interface iStories {
	id: string;
	title: string;
	slug: string;
	readingTime: string;
	postUrl: string;
	featuredImage: string;
	publishedAt: string;
	date: string;
}

export type NormalizedLocationType = iNormalizedObject<iLocations>;
export type NormalizedTestimonialType = iNormalizedObject<iTestimonials>;
export type NormalizedEventType = iNormalizedObject<iEvent>;
export type NormalizedPhtotoType = iNormalizedObject<iPhotos>;
export type NormalizedSponsorType = iNormalizedObject<iSponsor>;
export type NormalizedQuestionsType = iNormalizedObject<iQuestions>;
export type NormalizedStoriesType = iNormalizedObjectForStory<iStories>;
export type NormalizedSpeakerType = iNormalizedObject<iSpeaker>;

export interface iMetricsType {
	totalEvents: number;
	totalAttendees: number;
}

interface iPlaceDetails {
	id: string;
	title: string;
	location: string;
	image: string;
	url: string;
	description: string;
}

export interface iNormalizedPlaceType {
	ids: string[];
	details: {
		[key: string]: iPlaceDetails;
	};
}
