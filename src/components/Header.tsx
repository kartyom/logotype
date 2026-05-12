import { useState } from "react";
import { BurgerButton } from "./BurgerButton";
import { Logo } from "./Logo";
import ArrowIcon from "../assets/arrow.svg?react";
import SearchIcon from "../assets/search.svg?react";

const NAV_ITEMS = [
	{ label: "Demos", hasChevron: true },
	{ label: "Post", hasChevron: true },
	{ label: "Features", hasChevron: true },
	{ label: "Categories", hasChevron: true },
	{ label: "Shop", hasChevron: true },
	{ label: "Buy Now", hasChevron: false },
] as const;

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header>
			<div className="relative flex items-center border-b border-gray-200 py-5 laptop:py-6.75 laptop:px-10">
				<div className="laptop:hidden">
					<BurgerButton
						isMobileMenuOpen={mobileMenuOpen}
						changeMobileMenuState={() => setMobileMenuOpen((v) => !v)}
					/>
				</div>
				<div className="absolute left-1/2 -translate-x-1/2">
					<Logo />
				</div>
				<button
					aria-label="Search"
					className="hidden laptop:flex ml-auto items-center justify-center p-1 text-black hover:opacity-70 transition-opacity duration-150"
				>
					<SearchIcon />
				</button>
			</div>

			<nav
				aria-label="Main navigation"
				className="sticky top-0 z-50 bg-white border-b border-gray-200 hidden laptop:flex items-center justify-center py-5.25 nav-sticky"
			>
				<ul className="flex items-center gap-8 list-none m-0 p-0">
					{NAV_ITEMS.map((item) => (
						<li key={item.label}>
							<a
								href="#"
								className="flex items-center gap-1 text-base font-medium leading-4 text-black whitespace-nowrap hover:opacity-70 transition-opacity duration-150"
							>
								{item.label}
								{item.hasChevron && <ArrowIcon />}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
