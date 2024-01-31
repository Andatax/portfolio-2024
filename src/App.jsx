import { useState } from "react";
import Nav from "./components/Projects/Nav/Nav";
import "./index.css";
import Gallery from "./components/Gallery";

function App() {
	return (
		<>
			<main className="relative h-screen p-2">
				<div className="bg-cod-gray-50 w-full h-auto rounded-md flex-col ">
					<Nav />
					<div className="pb-1">
						<Gallery />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
