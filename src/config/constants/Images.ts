/**
 * All the images used in this project should be defined here and should
 * only consumed from here.
 */

import brandIcon from "../../../public/mg-logo.webp";
import heroVideo from "../../../public/uploads/cover.mp4";
import teamChatPoster from "../../../public/uploads/team-chat-poster.webp";
import favicon96 from "../../../public/favicon-96x96.png";
import faviconSvg from "../../../public/favicon.svg";
import faviconIco from "../../../public/favicon.ico";
import appleTouchIcon from "../../../public/apple-touch-icon.png";
import groupPhoto from "../../../public/uploads/photos/makerchat-group-photo.webp";
import mgLogoWhite from "../../../public/mg-logo-white.webp";
import testimonialPrajith from "../../../public/uploads/testimonials/prajith-docker.webp";
import testimonialJogin from "../../../public/uploads/testimonials/jogin-fablab.webp";
// Location images
import kochiImage from "../../../public/uploads/photos/asia-bg-cat.webp";
import bangaloreImage from "../../../public/uploads/photos/tiger.webp";
import hyderabadImage from "../../../public/uploads/photos/hyd-char.webp";
import dubaiImage from "../../../public/uploads/photos/dubai-1.webp";
import kochiThumbnail from "../../../public/uploads/photos/low-ocean.webp";
import bangaloreThumbnail from "../../../public/uploads/photos/low-tiger.webp";
import hyderabadThumbnail from "../../../public/uploads/photos/low-hyd.webp";
import dubaiThumbnail from "../../../public/uploads/photos/low-dubai.webp";
// Speaker images
import salmanFarisImage from "../../../public/uploads/speakers/salman-faris.webp";
import rahulImage from "../../../public/uploads/speakers/rahul.webp";
import zainImage from "../../../public/uploads/speakers/zain.webp";
import vigneshImage from "../../../public/uploads/speakers/vignesh.webp";
import swalahImage from "../../../public/uploads/speakers/swalah.webp";
// Element images
import piSkeltonImage from "../../../public/elements/pi-skelton.webp";
import arduinoSkeltonImg from "../../../public/elements/arduino-skelton.webp";
// Impact card images
import offlineEventsImage from "../../../public/uploads/photos/rafi.webp";
// Event poster images
import flipperPoster from "../../../public/uploads/posters/flipper-poster.webp";
import keyboardPoster from "../../../public/uploads/posters/keyboard-poster.webp";
import buildDronePoster from "../../../public/uploads/posters/build-drone-poster.webp";
import robotPoster from "../../../public/uploads/posters/robot-poster.webp";
import piEventPoster from "../../../public/uploads/posters/pi-event-poster.webp";
import astrekPoster from "../../../public/uploads/posters/astrek-poster.webp";
import magicWandPoster from "../../../public/uploads/posters/magic-wand-poster.webp";
import arduinoDayPoster from "../../../public/uploads/posters/arduino-day-poster.webp";
import viewAllPoster from "../../../public/uploads/posters/view-all-poster.webp";

const Images = {
	brandIcon: brandIcon,
	heroVideo: heroVideo,
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
		bangalore: bangaloreImage,
		hyderabad: hyderabadImage,
		dubai: dubaiImage,
	},
	locationsThumbnail: {
		kochi: kochiThumbnail,
		bangalore: bangaloreThumbnail,
		hyderabad: hyderabadThumbnail,
		dubai: dubaiThumbnail,
	},
	speakers: {
		"f8123d67-9a0c-4e23-9a38-e4f0c4f9bb8a": salmanFarisImage,
		"e60aa346-f6da-11ed-b67e-0242ac120003": rahulImage,
		"e60aa346-f6da-11ed-b67e-0242ac120004": zainImage,
		"e60aa346-f6da-11ed-b67e-0242ac120005": vigneshImage,
		"e60aa346-f6da-11ed-b67e-0242ac120006": swalahImage,
	},
	elements: {
		piSkelton: piSkeltonImage,
		arduinoSkelton: arduinoSkeltonImg,
	},
	impact: {
		offlineEvents: offlineEventsImage,
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
		viewAll: viewAllPoster,
	},
};

export default Images;
