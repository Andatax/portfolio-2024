import List from "../List/List";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import useScrollTrigger from "../../useScrollTrigger";

export default function GridContainer({
	bgColor,
	widthProject,
	heightProject,
	containerText,
	textPropeties,
	columnProperties,
	flexItem,
	skillsBody,
	languagesBody,
	listStyles,
	link,
	idTag,
}) {
	const comp = useRef(null);

	useEffect(() => {
		const aboutMeWords = new SplitType("#AboutMeBtn", {
			types: "words",
		});
		const todoneApp = new SplitType("#TodoneBtn", {
			types: "words",
		});
		let ctx = gsap.context(() => {
			const timeline = gsap.timeline({});
			timeline.from([aboutMeWords.words, todoneApp.words], {
				yPercent: 40,
				duration: 1.2,
				delay: 0.5,
				opacity: 0,
				stagger: 0.5,
			});
		}, comp);
		return () => ctx.revert();
		aboutMeWords.destroy();
	});
	const gridCell = `${columnProperties} w-full flex ${flexItem} `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	return (
		<div className={gridCell}>
			<div className={containerClasses}>
				<a href={link} ref={comp}>
					<p id={idTag} className={textPropeties}>
						<span>{containerText}</span>
					</p>
				</a>
				{skillsBody && <List listElements={skillsBody} listStyle={listStyles} />}
				{languagesBody && <List listElements={languagesBody} listStyle={listStyles} />}
			</div>
		</div>
	);
}
