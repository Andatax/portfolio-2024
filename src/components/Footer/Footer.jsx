import { useState, useEffect } from "react";
export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<footer>
			<button onClick={scrollToTop} className="text-abbey-700 text-md pl-5 pb-5">
				Back to top
			</button>
		</footer>
	);
}
