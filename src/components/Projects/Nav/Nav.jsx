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
			<ul className="space-y-2 text-abbey-700 lg:text-md md:text-xs md:flex-column lg:flex items-center justify-between">
				{/* <NavBtn
					btnText="Instagram"
					btnId="instagram"
					btnLink="https://www.instagram.com/onemoretiffplease/?igsh=MTJpbGQwczlqMjQ3eg%3D%3D"
				/> */}
				<NavBtn btnText="GitHub" btnId="github" btnLink="https://github.com/Andatax" />
				<NavBtn
					btnText="LinkedIn"
					btnId="linkedin"
					btnLink="https://www.linkedin.com/in/abraham-mendez-b0885b177"
				/>
				<NavBtn
					btnText="CV"
					btnId="cv"
					btnLink="/AbrahamMendez_Resume2026v1.pdf"
					download="AbrahamMendez_Resume2026v1.pdf"
				/>
				<NavBtn btnText="Email" btnId="email" btnLink="mailto:abraham.mendez1011@gmail.com" />
			</ul>
		</nav>
	);
}
