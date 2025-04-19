import {
	NormalizedEventType,
	NormalizedQuestionsType,
	NormalizedSpeakerType,
	NormalizedSponsorType,
	NormalizedTestimonialType,
	iNormalizedPlaceType,
} from "@/customTypes/EventTypes";

import events from "./events.json";
import testimonial from "./testimonial.json";
import sponsor from "./sponsors.json";
import questions from "./questions.json";
import speaker from "./speakers.json";
import places from "./places.json";

const eventData = events as NormalizedEventType;
const testimonialData = testimonial as NormalizedTestimonialType;
const sponsorData = sponsor as NormalizedSponsorType;
const questionData = questions as NormalizedQuestionsType;
const speakers = speaker as NormalizedSpeakerType;
const placesData = places as iNormalizedPlaceType;

export {
	eventData,
	testimonialData,
	sponsorData,
	questionData,
	speakers,
	placesData,
};
