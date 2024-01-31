import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { abrahamContext, mendezContext, socialMediaContext } from "./navAnimation";
export default function Nav() {
	const comp = useRef(null);
	useEffect(() => {
		const ctxAbraham = abrahamContext(comp);
		return () => ctxAbraham.revert();
	}, []);

	useEffect(() => {
		const ctxMendez = mendezContext(comp);
		return () => ctxMendez.revert();
	}, []);

	useEffect(() => {
		const ctxSocialMedia = socialMediaContext(comp);
		return () => ctxSocialMedia.revert();
	}, []);
	return (
		<nav className="w-full p-5" ref={comp}>
			<h1 className="lg:text-9xl sm:text-5xl w-full font-bold mb-2 flex justify-center border-b-2 border-abbey-700">
				<span id="Abraham" className="text-abbey-700 mr-20 mb-2">
					Abraham
				</span>
				<span id="Mendez" className="text-abbey-700 ml-20 mb-2">
					Mendez
				</span>
			</h1>
			<ul className="space-y-2 text-abbey-700 text-xs flex items-center justify-between">
				<li className="mx-10 mt-2">
					<a href="https://github.com/Andatax" target="_blank" id="github" className="text-center">
						GitHub
					</a>
				</li>
				<li className="mx-10">
					<a
						href="https://www.linkedin.com/in/abraham-mendez-b0885b177"
						target="_blank"
						id="linkedin"
						className="btn-link"
					>
						LinkedIn
					</a>
				</li>
				<li className="mx-10">
					<a
						href="https://www.instagram.com/onemoretiffplease/?igsh=MTJpbGQwczlqMjQ3eg%3D%3D"
						target="_blank"
						id="instagram"
						className="btn-link"
					>
						Instagram
					</a>
				</li>
				<li className="mx-10">
					<a href="mailto:abraham.mendez1011@gmail.com" id="email" className="btn-link">
						Email
					</a>
				</li>
			</ul>
		</nav>
	);
}
