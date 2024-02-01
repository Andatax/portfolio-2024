import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

export const useGSAPAnimations = (trigger, selector, splitType, options) => {
	const comp = useRef();

	useGSAP(
		() => {
			const splitText = new SplitType(selector, { type: splitType });
			gsap.from(splitText[splitType], {
				scrollTrigger: {
					trigger,
					toggleActions: "restart pause resume restart",
					...options.scrollTrigger,
				},
				yPercent: 40,
				duration: options.duration || 1.2,
				delay: options.delay || 0.2,
				opacity: options.opacity || 0,
				stagger: options.stagger || 0.5,
			});
		},
		{ scope: comp, revertOnUpdate: true }
	);
};
