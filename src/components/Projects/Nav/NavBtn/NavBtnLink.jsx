export default function NavBtnLink({ btnText, btnId, btnLink, download }) {
	return (
		<li className="hover:underline">
			<a
				href={btnLink}
				target="_blank"
				download={download ? download : undefined}
				id={btnId}
				className="text-center"
			>
				{btnText}
			</a>
		</li>
	);
}
