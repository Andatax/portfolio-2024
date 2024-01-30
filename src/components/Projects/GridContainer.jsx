import List from "./List/List";
import listData from "./List/listStyle";

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
}) {
	const gridCell = `${columnProperties} w-full flex ${flexItem} `;
	const containerClasses = `${flexItem} ${columnProperties} ${bgColor} ${widthProject} ${heightProject} rounded-md`;

	return (
		<div className={gridCell}>
			<div className={containerClasses}>
				<p className={textPropeties}>
					<span>{containerText}</span>
				</p>
				{skillsBody && <List listElements={skillsBody} listStyle={listData} />}
				{languagesBody && <List listElements={languagesBody} listStyle={listData} />}
			</div>
		</div>
	);
}
