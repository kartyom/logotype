import { useState } from "react";
import { BurgerButton } from "./BurgerButton";
import { Logo } from "./Logo";
import clsx from "clsx";
import { Search } from "./Search";
import { MenuItem } from "./MenuItem";

export type MenuItemType = {
	label: string;
	menu?: string[];
};

const MENU_ITEMS: MenuItemType[] = [
	{
		label: "Demos",
		menu: [
			"Home Classic",
			"Home Minimal",
			"Home Grid",
			"Home Magazine",
			"Home Dark",
		],
	},
	{
		label: "Post",
		menu: [
			"Post Header",
			"Post Layout",
			"Share Buttons",
			"Gallery Post",
			"Video Post",
		],
	},
	{
		label: "Features",
		menu: ["Typography", "Buttons", "Icons", "Widgets", "Author Box"],
	},
	{
		label: "Categories",
		menu: ["Technology", "Lifestyle", "Business", "Travel", "Culture"],
	},
	{
		label: "Shop",
		menu: ["All Products", "Product Details", "Cart", "Checkout", "My Account"],
	},
	{ label: "Buy Now" },
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header
				className={clsx(
					"fixed h-header w-full bg-background top-0 left-0",
					"border-b border-stroke z-50",
				)}
			>
				<div className="max-w-290 flex items-center h-full mx-auto max-laptop:px-5">
					<div className="laptop:hidden">
						<BurgerButton
							isMobileMenuOpen={mobileMenuOpen}
							changeMobileMenuState={() => setMobileMenuOpen((v) => !v)}
						/>
					</div>
					<div className="absolute left-1/2 -translate-x-1/2">
						<Logo />
					</div>
					<Search />
				</div>
			</header>
			<nav
				aria-label="Main navigation"
				className={clsx(
					"sticky top-(--height-header) z-40 bg-white border-b border-stroke hidden",
					"laptop:flex items-center justify-center h-subheader",
					"transition-transform duration-300 ease-out",
					"animate-[hide-nav_linear_both]",
					"[animation-timeline:scroll(root)]",
					"[animation-range:200px_260px]",
				)}
			>
				<ul className="flex h-full items-center gap-8 list-none m-0 p-0">
					{MENU_ITEMS.map((item) => (
						<MenuItem key={item.label} item={item} />
					))}
				</ul>
			</nav>
		</>
	);
}
