import List from "../List/List";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
}) {
	gsap.registerPlugin(ScrollTrigger);
	const comp = useRef();
	useGSAP(
		() => {
			const aboutMeWords = new SplitType("#AboutMeBtn", { type: "words, chars" });
			gsap.from(aboutMeWords.chars, {
				yPercent: 40,
				duration: 0.9,
				delay: 0.1,
				opacity: 0,
				stagger: 0.2,
			});
		},
		{ scope: comp, revertOnUpdate: true }
	);
	useGSAP(
		() => {
			const todoneWords = new SplitType("#TodoneBtn", { type: "words" });
			gsap.from(todoneWords.words, {
				scrollTrigger: {
					trigger: "#TodoneBtn",
					toggleActions: "restart pause resume restart",
					start: "top 20%",
				},
				yPercent: 40,
				duration: 1.2,
				delay: 0.2,
				opacity: 0,
				stagger: 0.5,
			});
		},
		{ scope: comp, revertOnUpdate: true }
	);
	useGSAP(
		() => {
			const mvcWords = new SplitType("#MVCBtn", { type: "words" });
			gsap.from(mvcWords.words, {
				scrollTrigger: {
					trigger: "#MVCBtn",
					toggleActions: "restart pause resume restart",
				},
				yPercent: 40,
				duration: 1.2,
				delay: 0.4,
				opacity: 0,
				stagger: 0.5,
			});
		},
		{ scope: comp, revertOnUpdate: true }
	);
	useGSAP(
		() => {
			const mongoWords = new SplitType("#MongoBtn", { type: "words" });
			gsap.from(mongoWords.words, {
				scrollTrigger: {
					trigger: "#MongoBtn",
					toggleActions: "restart pause resume restart",
				},
				yPercent: 40,
				duration: 1.2,
				delay: 0.8,
				opacity: 0,
				stagger: 0.5,
			});
		},
		{ scope: comp, revertOnUpdate: true }
	);
	useGSAP(
		() => {
			const bioWords = new SplitType("#AboutMeBody", { type: "words" });
			gsap.from(bioWords.words, {
				scrollTrigger: {
					trigger: "#AboutMeBody",
					toggleActions: "restart pause resume restart",
				},
				yPercent: 40,
				duration: 1,
				delay: 0.2,
				opacity: 0,
				stagger: 0.1,
			});
		},
		{ scope: comp, revertOnUpdate: true }
	);

	const gridCell = `${columnProperties} w-full flex ${flexItem} `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	return (
		<div ref={comp} className={gridCell}>
			<div id={containerId} className={containerClasses}>
				<a className={arefclass} href={link}>
					<p id={idTag} className={textPropeties}>
						<span>{containerText}</span>
					</p>
				</a>
				{listbody && <List listElements={listbody} listStyle={listStyles} />}
			</div>
		</div>
	);
}
``