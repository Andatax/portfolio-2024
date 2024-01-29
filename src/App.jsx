import { useState } from "react";
import Nav from "./components/Nav";
import "./index.css";
import Gallery from "./components/Gallery";

function App() {
	return (
		<>
			<div className="relative h-screen p-3">
				<div className="bg-gull-gray-200 w-full h-auto rounded-md flex-col ">
					<Nav />
					<div className="pb-1">
						<Gallery />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
