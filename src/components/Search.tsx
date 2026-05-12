import { useEffect, useRef } from "react";
import clsx from "clsx";
import SearchIcon from "../assets/search.svg?react";
import XIcon from "../assets/x.svg?react";
import { useQueryParam } from "../hooks/useQueryParam";

type Props = {
	isOpen: boolean;
	setIsOpen: (v: boolean) => void;
};

export function Search(props: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [search, setSearch] = useQueryParam("search");

	useEffect(() => {
		if (props.isOpen) {
			inputRef.current?.focus();
		}
	}, [props.isOpen]);

	useEffect(() => {
		if (!props.isOpen) {
			return;
		}

		function onPointerDown(e: PointerEvent) {
			if (!wrapperRef.current?.contains(e.target as Node)) {
				props.setIsOpen(false);
				setSearch(null);
			}
		}

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") {
				props.setIsOpen(false);
				setSearch(null);
			}
		}

		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [props.isOpen]);

	return (
		<div ref={wrapperRef} className="ml-auto">
			<div
				onClick={(e) => e.stopPropagation()}
				className={clsx(
					props.isOpen ? "border-stroke" : "border-transparent",
					"flex items-center rounded-md py-1.5 px-2",
					"transition-colors duration-150 border",
				)}
			>
				<div
					className={clsx(
						props.isOpen ? "w-48 opacity-100" : "w-0 opacity-0",
						"overflow-hidden transition-all duration-300",
					)}
				>
					<input
						ref={inputRef}
						placeholder="Search…"
						value={search ?? ""}
						onChange={(e) => setSearch(e.currentTarget.value)}
						className={clsx(
							"w-48 pr-2 outline-none bg-transparent text-normal",
							"font-400 text-primary placeholder:text-secondary",
						)}
					/>
				</div>

				<button
					aria-label={props.isOpen ? "Close search" : "Open search"}
					onClick={() => {
						props.setIsOpen(!props.isOpen);
						if (props.isOpen) {
							setSearch(null);
						}
					}}
					className={clsx(
						"flex items-center justify-center px-1 hover:opacity-70",
						"transition-opacity duration-150 cursor-pointer shrink-0",
					)}
				>
					{props.isOpen ? <XIcon /> : <SearchIcon />}
				</button>
			</div>
		</div>
	);
}
