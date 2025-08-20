import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function BackgroundLines() {
	const svgRef = useRef(null);
	const linesRef = useRef([]);

	useEffect(() => {
		const lines = linesRef.current;

		const tl = gsap.timeline({ repeat: -1 });

		lines.forEach((line, index) => {
			if (line) {
				if (index === 15) {
					gsap.set(line, {
						strokeDasharray: "0,200",
						opacity: 0,
						stroke: "#9ca3af",
						scale: 0.8,
						transformOrigin: "center"
					});

					
					tl.to(
						line,
						{
							strokeDasharray: "200,0",
							opacity: 0.8,
							stroke: "#4a5c6a",
							scale: 1,
							duration: 2,
							ease: "power2.inOut",
							delay: 0.5,
						},
						0
					)
					.to(
						line,
						{
							opacity: 1,
							stroke: "#4a5c6a",
							duration: 1,
							ease: "power2.inOut",
						},
						1.5
					)
					.to(
						line,
						{
							strokeDasharray: "40,20",
							opacity: 0.7,
							stroke: "#6b7280",
							scale: 0.95,
							duration: 2.5,
							ease: "power2.inOut",
							delay: 1,
						},
						3
					)
					.to(
						line,
						{
							strokeDasharray: "0,200",
							opacity: 0.2,
							scale: 0.8,
							duration: 1.5,
							ease: "power2.in",
						},
						6
					);
				} else {
					gsap.set(line, {
						strokeDasharray: "20,10",
						opacity: 0.3,
					});

					tl.to(
						line,
						{
							strokeDasharray: "100,0",
							opacity: 0.7,
							duration: 4 + index * 0.3,
							ease: "power2.inOut",
							delay: index * 0.5,
						},
						0
					).to(
						line,
						{
							strokeDasharray: "20,10",
							opacity: 0.3,
							duration: 3,
							ease: "power2.inOut",
							delay: 2 + index * 0.2,
						},
						4
					);
				}
			}
		});

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
			<svg ref={svgRef} className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
				<g stroke="#646b76" fill="none" strokeWidth="0.2" opacity="0.6">
					<line ref={el => (linesRef.current[0] = el)} x1="0" y1="15" x2="100" y2="15" />
					<line ref={el => (linesRef.current[1] = el)} x1="10" y1="25" x2="90" y2="25" />
					<line ref={el => (linesRef.current[2] = el)} x1="0" y1="75" x2="100" y2="75" />
					<line ref={el => (linesRef.current[3] = el)} x1="10" y1="85" x2="90" y2="85" />

					<line
						ref={el => (linesRef.current[15] = el)}
						x1="5"
						y1="7"
						x2="95"
						y2="7"
						stroke="#4a5c6a"
						strokeWidth="0.2"
						opacity="1"
					/>

					<line ref={el => (linesRef.current[4] = el)} x1="50" y1="0" x2="50" y2="100" />
					<line ref={el => (linesRef.current[5] = el)} x1="20" y1="10" x2="20" y2="90" />
					<line ref={el => (linesRef.current[6] = el)} x1="80" y1="10" x2="80" y2="90" />

					<line ref={el => (linesRef.current[7] = el)} x1="0" y1="0" x2="30" y2="30" />
					<line ref={el => (linesRef.current[8] = el)} x1="100" y1="0" x2="70" y2="30" />
					<line ref={el => (linesRef.current[9] = el)} x1="0" y1="100" x2="30" y2="70" />
					<line ref={el => (linesRef.current[10] = el)} x1="100" y1="100" x2="70" y2="70" />

					<line ref={el => (linesRef.current[11] = el)} x1="0" y1="0" x2="15" y2="0" />
					<line ref={el => (linesRef.current[12] = el)} x1="0" y1="0" x2="0" y2="15" />
					<line ref={el => (linesRef.current[13] = el)} x1="85" y1="0" x2="100" y2="0" />
					<line ref={el => (linesRef.current[14] = el)} x1="100" y1="0" x2="100" y2="15" />
				</g>
			</svg>
		</div>
	);
}
