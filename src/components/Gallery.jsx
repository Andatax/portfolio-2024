import GridContainer from "./Projects/GridCell/GridContainer.jsx";
import gridData from "./Projects/GridCell/containerData.jsx";

export default function Gallery() {
	return (
		<div className="m-5 grid grid-cols-3 gap-1">
			{gridData.map((data, gridID) =>
				data.isEmpty ? (
					<div key={gridID} className="w-full h-32"></div>
				) : (
					<GridContainer key={gridID} {...data} />
				)
			)}
		</div>
	);
}
