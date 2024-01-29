export default function Nav() {
	return (
		<nav className="w-full p-5">
			<h1 className="lg:text-9xl sm:text-5xl w-full font-bold mb-2 flex justify-center border-b-2 border-abbey-700">
				<span className="text-abbey-700 mr-20 mb-2">Abraham </span>
				<span className="text-abbey-700 ml-20 mb-2">Mendez</span>
			</h1>
			<ul className="space-y-2 text-abbey-700 text-xs flex items-center justify-between">
				<li className="mx-10 mt-2">
					<a href="https://github.com/Andatax" target="_blank" className="text-center">
						GitHub
					</a>
				</li>
				<li className="mx-10">
					<a
						href="https://www.linkedin.com/in/abraham-mendez-b0885b177"
						target="_blank"
						className="btn-link"
					>
						LinkedIn
					</a>
				</li>
				<li className="mx-10">
					<a
						href="https://www.instagram.com/onemoretiffplease/?igsh=MTJpbGQwczlqMjQ3eg%3D%3D"
						target="_blank"
						className="btn-link"
					>
						Instagram
					</a>
				</li>
				<li className="mx-10">
					<a href="mailto:abraham.mendez1011@gmail.com" className="btn-link">
						Email
					</a>
				</li>
			</ul>
		</nav>
	);
}
