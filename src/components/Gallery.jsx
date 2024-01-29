import GridContainer from "./Projects/GridContainer.jsx";
import gridData from "./Projects/containerData.jsx";

export default function Gallery() {
	return (
		<div className="m-5 grid grid-cols-3 gap-1">
			{gridData.map((data, index) =>
				data.isEmpty ? (
					<div key={index} className="w-full h-32"></div>
				) : (
					<GridContainer key={index} {...data} />
				)
			)}
		</div>
	);
}
