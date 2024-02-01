export default function NavName({ firstName, lastName }) {
	return (
		<h1 className="lg:text-9xl sm:text-5xl w-full font-bold mb-2 flex justify-center border-b-2 border-abbey-700">
			<span id={firstName} className="text-abbey-700 mr-20 mb-2">
				{firstName}
			</span>
			<span id={lastName} className="text-abbey-700 ml-20 mb-2">
				{lastName}
			</span>
		</h1>
	);
}
