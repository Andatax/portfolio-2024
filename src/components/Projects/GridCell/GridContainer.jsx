import List from "../List/List";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPAnimations, animations } from "./GridAnimations";

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
	arefclass,
	listId,
	target,
	scroll,
}) {
	gsap.registerPlugin(ScrollTrigger);
	const comp = useRef();
	const containerRef = useRef();
	const gridCell = `${columnProperties} w-full lg:flex  `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;
	const aboutMeBodySelector = document.getElementById("AboutMeBody");

	animations.forEach(({ id, type, ...options }) => {
		useGSAPAnimations(id, id, type, options);
	});
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
			<div id={containerId} onMouseEnter={handleMouseEnter} className={containerClasses}>
				<a
					className={arefclass}
					onClick={
						scroll && aboutMeBodySelector
							? () => aboutMeBodySelector.scrollIntoView({ behavior: "smooth" })
							: null
					}
					href={link ? link : undefined}
					target={target || undefined}
				>
					<p id={idTag} className={textPropeties}>
						<span>{containerText}</span>
					</p>
				</a>
				{listbody && <List listId={listId} listElements={listbody} listStyle={listStyles} />}
			</div>
		</div>
	);
}
