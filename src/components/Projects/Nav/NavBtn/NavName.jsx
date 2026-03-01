export default function NavName({ firstName, lastName }) {
	return (
		<h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl w-full font-bold mb-2 flex flex-wrap justify-center">
			<span id={firstName} className="text-abbey-700 mr-1 sm:mr-10 lg:mr-20 mb-2">
				{firstName}
			</span>
			<span id={lastName} className="text-abbey-700 ml-1 sm:ml-10 lg:ml-20 mb-2">
				{lastName}
			</span>
		</h1>
	);
}
