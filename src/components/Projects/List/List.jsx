export default function Lists({ listElements, listData }) {
	return (
		<ul className="mt-3 text-cod-gray-100 text-md ">
			{listElements.map((listElement, index) => (
				<li key={index} className={listData}>
					{listElement}
				</li>
			))}
		</ul>
	);
}
