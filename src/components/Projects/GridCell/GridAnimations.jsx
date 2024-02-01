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
