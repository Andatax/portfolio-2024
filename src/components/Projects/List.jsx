export default function Lists({ listElements, }) {
	return (
		<ul className="space-y-2 text-abbey-700 text-xs flex items-center justify-between">
			{listElements.map((listElement, index) => (
				<li key={index}>{listElement}</li>
			))}
		</ul>
	);
}
