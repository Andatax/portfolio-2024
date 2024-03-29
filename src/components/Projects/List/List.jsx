export default function List({ listElements, listStyle, listId }) {
	return (
		<ul id={listId} className="mt-3  text-abbey-700 ">
			{listElements.map((listElement, index) => (
				<li key={index} className={listStyle}>
					{listElement}
				</li>
			))}
		</ul>
	);
}
