import List from "../List/List";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPAnimations } from "./GridAnimations";

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
}) {
	gsap.registerPlugin(ScrollTrigger);
	const comp = useRef();
	const containerRef = useRef();

	useGSAPAnimations("#AboutMeBtn", "#AboutMeBtn", "chars", {
		stagger: 0.2,
		scrollTrigger: null,
		delay: 0.9,
	});
	useGSAPAnimations("#TodoneBtn", "#TodoneBtn", "words", {
		stagger: 0.5,
		scrollTrigger: null,
		delay: 0.9,
	});
	useGSAPAnimations("#MVCBtn", "#MVCBtn", "words", {
		stagger: 0.5,
		delay: 0.9,
		scrollTrigger: "#MVCBtn",
	});
	useGSAPAnimations("#MongoBtn", "#MongoBtn", "words", {
		stagger: 0.5,
		delay: 1.1,
		scrollTrigger: "#MongoBtn",
	});
	useGSAPAnimations("#AboutMeBody", "#AboutMeBody", "words", {
		stagger: 0.1,
		toggleActions: "restart pause resume none",
		scrollTrigger: "#AboutMeBody",
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
	const gridCell = `${columnProperties} w-full flex ${flexItem} `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	return (
		<div ref={comp} className={gridCell}>
			<div id={containerId} onMouseEnter={handleMouseEnter} className={containerClasses}>
				<a className={arefclass} href={link} target={target || undefined}>
					<p id={idTag} className={textPropeties}>
						<span>{containerText}</span>
					</p>
				</a>
				{listbody && <List listId={listId} listElements={listbody} listStyle={listStyles} />}
			</div>
		</div>
	);
}
