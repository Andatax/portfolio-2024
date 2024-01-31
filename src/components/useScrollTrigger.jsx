// useScrollTrigger.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = animationConfig => {
	const compRef = useRef(null);

	useEffect(() => {
		const timeline = gsap.timeline(animationConfig);

		ScrollTrigger.create({
			trigger: compRef.current,
			start: "top center",
			end: "bottom center",
			scrub: 1,
			animation: timeline,
		});
		return () => {
			timeline.kill();
		};
	}, [animationConfig]);

	return compRef;
};

export default useScrollTrigger;
