import GridContainer from "./Projects/GridCell/GridContainer.jsx";
import gridData from "./Projects/GridCell/containerData.jsx";

export default function Gallery() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:m-5">
			{gridData.map((data, gridID) =>
				data.isEmpty ? (
					<div key={gridID} className="hidden md:block md:h-32"></div>
				) : (
					<GridContainer key={gridID} {...data} />
				)
			)}
		</div>
	);
}
