import List from "./List";
export default function GridContainer({
	bgColor,
	widthProject,
	heightProject,
	containerText,
	textPropeties,
	columnProperties,
	flexItem,
	skillsBody,
}) {
	const gridCell = `${columnProperties} w-full flex ${flexItem} `;
	const containerClasses = `flex ${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	return (
		<div className={gridCell}>
			<div className={containerClasses}>
				<p className={textPropeties}>
					<span>{containerText}</span>
					{skillsBody && <List listElements={skillsBody} />}
				</p>
			</div>
		</div>
	);
}
