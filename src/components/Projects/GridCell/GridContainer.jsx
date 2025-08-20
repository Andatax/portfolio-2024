import List from "../List/List";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
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
	const aboutMeBodySelector = document.getElementById("AboutMeBody");

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
	
	useGSAP(() => {
		const listElements = document.querySelectorAll(`#${listId} li`);

		if (listElements.length > 0) {
			gsap.from(listElements, {
				opacity: 0,
				y: -100,
				duration: 0.5,
				ease: "power2.out",
			});
		}
	}, [listId]);
	const handleMouseEnter = () => {
		gsap.to(`#${listId} li`, { xPercent: 0, opacity: 1, duration: 1, stagger: 0.1 });
	};

	return (
		<div ref={comp} className={gridCell}>
			<a
				id={containerId}
				onMouseEnter={handleMouseEnter}
				className={containerClasses}
				onClick={
					scroll && aboutMeBodySelector
						? () => aboutMeBodySelector.scrollIntoView({ behavior: "smooth", block: "center" })
						: null
				}
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
