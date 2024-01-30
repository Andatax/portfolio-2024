import List from "../List/List";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

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
	const gridCell = `${columnProperties} w-full flex ${flexItem} `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	return (
		<div className={gridCell}>
			<div className={containerClasses}>
				<a href={link}>
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
