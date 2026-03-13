import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { abrahamContext, mendezContext, socialMediaContext } from "./navAnimation";
import { useGSAP } from "@gsap/react";
import NavBtn from "./NavBtn/NavBtnLink";
import NavName from "./NavBtn/NavName";
export default function Nav() {
	const comp = useRef(null);
	useGSAP(() => {
		const ctxAbraham = abrahamContext(comp);
		return () => ctxAbraham.revert();
	}, []);

	useGSAP(() => {
		const ctxMendez = mendezContext(comp);
		return () => ctxMendez.revert();
	}, []);

	useGSAP(() => {
		const ctxSocialMedia = socialMediaContext(comp);
		return () => ctxSocialMedia.revert();
	}, []);
	return (
		<nav className="w-full p-5" ref={comp}>
			<NavName firstName="Abraham" lastName="Mendez" />
			<ul className="text-abbey-700 text-xs sm:text-sm lg:text-base flex flex-row items-center justify-between">
				<NavBtn btnText="General Portfolio" btnId="Portfolio" btnLink="https://amendezstudio.com" />
				<NavBtn btnText="GitHub" btnId="github" btnLink="https://github.com/Andatax" />
				<NavBtn
					btnText="LinkedIn"
					btnId="linkedin"
					btnLink="https://www.linkedin.com/in/abraham-mendez-b0885b177"
				/>
				<NavBtn
					btnText="Resume"
					btnId="resume"
					btnLink="https://images.amendezstudio.com/AbrahamMendez_Resume2026.pdf"
					download="AbrahamMendez_Resume2026.pdf"
				/>
				<NavBtn btnText="Email" btnId="email" btnLink="mailto:abraham.mendez1011@gmail.com" />
			</ul>
		</nav>
	);
}
