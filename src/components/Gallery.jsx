import GridContainer from "./Projects/GridCell/GridContainer.jsx";
import gridData from "./Projects/GridCell/containerData.jsx";

export default function Gallery() {
	return (
		<div className="m-5 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:auto-cols-min sm:grid-cols-1 gap-1">
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
