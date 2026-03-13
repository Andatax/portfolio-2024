import List from "../List/List";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
const isTouchDevice = () => window.matchMedia("(hover: none)").matches;
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animations } from "./GridAnimations";

export default function GridContainer({
	bgColor,
	widthProject,
	heightProject,
	containerText,
	textPropeties,
	columnProperties,
	flexItem,
	listbody,
	listStyles,
	link,
	idTag,
	containerId,
	listId,
	target,
	scroll,
}) {
	gsap.registerPlugin(ScrollTrigger);
	const comp = useRef();
	const gridCell = `${columnProperties} w-full flex  `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	useGSAP(() => {
		animations.forEach(({ id, type, ...options }) => {
			const splitText = new SplitType(id, { type });

			const animationSettings = {
				yPercent: 40,
				duration: options.duration || 1.2,
				opacity: options.opacity || 0,
				stagger: options.stagger || 0.5,
			};

			if (options.scrollTrigger) {
				animationSettings.scrollTrigger = {
					trigger: id,
					toggleActions: "restart pause resume restart",
					...options.scrollTrigger,
				};
			}

			gsap.from(splitText[type], animationSettings);
		});
	}, []);

	const isRevealed = useRef(false);

	const revealList = () => {
		gsap.to(`#${listId} li`, { xPercent: 0, opacity: 1, duration: 1, stagger: 0.1 });
		isRevealed.current = true;
	};

	useEffect(() => {
		if (!listId || !isTouchDevice()) return;
		const trigger = comp.current;
		if (!trigger) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isRevealed.current) {
					revealList();
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(trigger);
		return () => observer.disconnect();
	}, [listId]);

	const handleClick = (e) => {
		if (scroll) {
			const el = document.getElementById("AboutMeBody");
			if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
			return;
		}
		if (isTouchDevice() && !isRevealed.current) {
			e.preventDefault();
			revealList();
		}
	};

	return (
		<div ref={comp} className={gridCell}>
			<a
				id={containerId}
				onMouseEnter={revealList}
				className={containerClasses}
				onClick={handleClick}
				href={link ? link : undefined}
				target={target || undefined}
			>
				<p id={idTag} className={textPropeties}>
					<span>{containerText}</span>
				</p>

				{listbody && <List listId={listId} listElements={listbody} listStyle={listStyles} />}
			</a>
		</div>
	);
}
