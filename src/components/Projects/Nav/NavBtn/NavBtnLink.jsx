export default function NavBtnLink({ btnText, btnId, btnLink }) {
	return (
		<li className="mx-10 mt-2 hover:underline">
			<a href={btnLink} target="_blank" id={btnId} className="text-center">
				{btnText}
			</a>
		</li>
	);
}
