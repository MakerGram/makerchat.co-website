/**
 * All the images used in this project should be defined here and should
 * only consumed from here.
 */

import brandIcon from "../../../public/mg-logo.webp";
// import heroVideo from "../../../public/uploads/cover.mp4";
import teamChatPoster from "../../../public/photos/elements/team-chat.webp";
import favicon96 from "../../../public/favicon-96x96.png";
import faviconSvg from "../../../public/favicon.svg";
import faviconIco from "../../../public/favicon.ico";
import appleTouchIcon from "../../../public/apple-touch-icon.png";
import groupPhoto from "../../../public/photos/elements/makerchat-group-photo.webp";
import mgLogoWhite from "../../../public/mg-logo-white.webp";
import testimonialPrajith from "../../../public/photos/testimonials/prajith-docker.webp";
import testimonialJogin from "../../../public/photos/testimonials/jogin-fablab.webp";
// Location images
import kochiImage from "../../../public/photos/locations/kochi.webp";
import bangaloreImage from "../../../public/photos/locations/blr.webp";
import hyderabadImage from "../../../public/photos/locations/hyd.webp";
import dubaiImage from "../../../public/photos/locations/dubai-wheel.webp";
import kochiThumbnail from "../../../public/photos/locations/thumbnails/kochi-thumbnail.webp";
import bangaloreThumbnail from "../../../public/photos/locations/thumbnails/blr-thumbnail.webp";
import hyderabadThumbnail from "../../../public/photos/locations/thumbnails/hyd-thumbnail.webp";
import dubaiThumbnail from "../../../public/photos/locations/thumbnails/dubai-thumbnail.webp";
// Speaker images
import salmanFarisImage from "../../../public/photos/speakers/salman-faris.webp";
import rahulImage from "../../../public/photos/speakers/rahul.webp";
import zainImage from "../../../public/photos/speakers/zain.webp";
import vigneshImage from "../../../public/photos/speakers/vignesh.webp";
import swalahImage from "../../../public/photos/speakers/swalah.webp";
// Element images
import piSkeltonImage from "../../../public/photos/elements/pi-skelton.webp";
import arduinoSkeltonImg from "../../../public/photos/elements/arduino-skelton.webp";
// Event poster images
import flipperPoster from "../../../public/photos/posters/flipper-poster.webp";
import keyboardPoster from "../../../public/photos/posters/keyboard-poster.webp";
import buildDronePoster from "../../../public/photos/posters/build-drone-poster.webp";
import robotPoster from "../../../public/photos/posters/robot-poster.webp";
import piEventPoster from "../../../public/photos/posters/pi-event-poster.webp";
import astrekPoster from "../../../public/photos/posters/astrek-poster.webp";
import magicWandPoster from "../../../public/photos/posters/magic-wand-poster.webp";
import arduinoDayPoster from "../../../public/photos/posters/arduino-day-poster.webp";
// Sponsor images
import seedStudioImage from "../../../public/photos/sponsors/seed-studio.webp";
import edgeImpulseImage from "../../../public/photos/sponsors/edge-impulse.svg";
import tinkerhubImage from "../../../public/photos/sponsors/tinkerspace.webp";
// Mission images
import missionImage from "../../../public/photos/elements/3d-print.gif";
import visionImage from "../../../public/photos/elements/makerchat-group-photo.webp";
import Tv from "../../../public/photos/elements/tv.webp";
import KochiBalloon from "../../../public/photos/elements/kochi-balloon.webp";
import TotalEvents from "../../../public/photos/posters/HSHS.png";

const Images = {
	brandIcon: brandIcon,
	heroVideo:
		"https://ik.imagekit.io/makerchat/cover.mp4?updatedAt=1753163659633",
	teamChatPoster: teamChatPoster,
	favicon96: favicon96,
	faviconSvg: faviconSvg,
	faviconIco: faviconIco,
	appleTouchIcon: appleTouchIcon,
	groupPhoto: groupPhoto,
	mgLogoWhite: mgLogoWhite,
	testimonials: {
		"e60aa346-f6da-11ed-b67e-0242ac120002": testimonialPrajith,
		"e60aa346-f6da-11ed-b67e-0242ac120003": testimonialJogin,
	},
	locations: {
		kochi: kochiImage,
		bengaluru: bangaloreImage,
		hyderabad: hyderabadImage,
		dubai: dubaiImage,
	},
	locationsThumbnail: {
		kochi: kochiThumbnail,
		bengaluru: bangaloreThumbnail,
		hyderabad: hyderabadThumbnail,
		dubai: dubaiThumbnail,
	},
	Tv: Tv,
	KochiBalloon: KochiBalloon,
	TotalEvents: TotalEvents,
	speakers: {
		"f8123d67-9a0c-4e23-9a38-e4f0c4f9bb8a": salmanFarisImage,
		"e60aa346-f6da-11ed-b67e-0242ac120003": rahulImage,
		"e60aa346-f6da-11ed-b67e-0242ac120004": zainImage,
		"e60aa346-f6da-11ed-b67e-0242ac120005": vigneshImage,
		"e60aa346-f6da-11ed-b67e-0242ac120006": swalahImage,
		"e60aa346-f6da-11ed-b67e-0242ac120006s":
			"https://ik.imagekit.io/makerchat/1747345543318.jpeg?updatedAt=1756400741738",
		"e60aa346-f6da-11ed-b67e-0242ac120006s1":
			"https://ik.imagekit.io/makerchat/1729510248489.jpeg?updatedAt=1756400911972",
		"f8123d67-9a0c-4e23-9a38-e4f0c4f9bb8as":
			"https://ik.imagekit.io/makerchat/1620924580345.jpeg?updatedAt=1756400911972",
		"f8123d67-9a0c-4e23-9a38-e4f0c4f9bb8ass":
			"https://ik.imagekit.io/makerchat/1629564744580.jpeg?updatedAt=1756400911972",
	},
	elements: {
		piSkelton: piSkeltonImage,
		arduinoSkelton: arduinoSkeltonImg,
	},
	impact: {
		attendees: groupPhoto,
	},
	eventPosters: {
		flipper: flipperPoster,
		keyboard: keyboardPoster,
		buildDrone: buildDronePoster,
		robot: robotPoster,
		piEvent: piEventPoster,
		astrek: astrekPoster,
		magicWand: magicWandPoster,
		arduinoDay: arduinoDayPoster,
	},
	sponsors: {
		SeedStudio: seedStudioImage,
		"Edge Impulse": edgeImpulseImage,
		Tinkerhub: tinkerhubImage,
	},
	missionAndVision: {
		mission: missionImage,
		vision: visionImage,
	},
};

export default Images;
