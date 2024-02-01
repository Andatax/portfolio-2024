import gsap from "gsap";

export const abrahamContext = compRef => {
	return gsap.context(() => {
		const timeline = gsap.timeline({});
		timeline.from("#Abraham", {
			xPercent: 20,
			duration: 1.5,
			delay: 0.1,
			opacity: 0,
		});
	}, compRef);
};

export const mendezContext = compRef => {
	return gsap.context(() => {
		const timeline = gsap.timeline({});
		timeline.from("#Mendez", {
			xPercent: -20,
			duration: 1.5,
			delay: 0.1,
			opacity: 0,
		});
	}, compRef);
};

export const socialMediaContext = compRef => {
	return gsap.context(() => {
		const timeline = gsap.timeline({});
		timeline.from(["#github", "#linkedin", "#email", "#instagram"], {
			duration: 1,
			delay: 0.7,
			opacity: 0,
			stagger: 0.1,
		});
	}, compRef);
};
