import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

export const useGSAPAnimations = (trigger, selector, splitType, options) => {
	const comp = useRef();

	useGSAP(
		() => {
			const splitText = new SplitType(selector, { type: splitType });

			const animationSettings = {
				yPercent: 40,
				duration: options.duration || 1.2,
				opacity: options.opacity || 0,
				stagger: options.stagger || 0.5,
			};

			if (options.scrollTrigger) {
				animationSettings.scrollTrigger = {
					trigger,
					toggleActions: "restart pause resume restart",
					...options.scrollTrigger,
				};
			}

			gsap.from(splitText[splitType], animationSettings);
		},
		{ scope: comp, revertOnUpdate: true }
	);
};
export const animations = [
	{ id: "#AboutMeBtn", type: "chars", stagger: 0.2, scrollTrigger: null, delay: 0.9 },
	{ id: "#TodoneBtn", type: "words", stagger: 0.5, scrollTrigger: null, delay: 0.9 },
	{ id: "#MVCBtn", type: "words", stagger: 0.5, delay: 0.9, scrollTrigger: "#MVCBtn" },
	{ id: "#MongoBtn", type: "words", stagger: 0.5, delay: 1.1, scrollTrigger: "#MongoBtn" },
	{
		id: "#AboutMeBody",
		type: "words",
		stagger: 0.1,
		duration: 0.8,
		toggleActions: "restart pause resume none",
		scrollTrigger: { trigger: "#AboutMeBody" },
	},
];
