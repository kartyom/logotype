import SearchIcon from "../assets/search.svg?react";

export function Search() {
	return (
		<button
			aria-label="Search"
			className="flex ml-auto items-center justify-center p-1 text-black hover:opacity-70 transition-opacity duration-150"
		>
			<SearchIcon />
		</button>
	);
}
