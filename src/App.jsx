import Nav from "./components/Projects/Nav/Nav";
import "./index.css";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer/Footer";
import BackgroundLines from "./components/BackgroundLines";

function App() {
	return (
		<>
			<main className="relative h-screen p-2">
				<div className="bg-cod-gray-50 w-full h-auto rounded-md flex-col relative">
					<BackgroundLines />
					<div className="relative z-10">
						<Nav />
						<div className="pb-1">
							<Gallery />
						</div>
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
}
export default App;
