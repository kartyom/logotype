import clsx from "clsx";
import { MenuItem } from "./MenuItem";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { BurgerButton } from "./BurgerButton";

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

type Props = {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (v: boolean) => void;
};

export function SubMenu(props: Props) {
	const [activeMenu, setActiveMenu] = useState<string | null>(null);

	useEffect(() => {
		const isDesktop = window.innerWidth <= 1240;
		if (props.mobileMenuOpen && !isDesktop) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [props.mobileMenuOpen]);

	return (
		<>
			<div
				onClick={() => props.setMobileMenuOpen(false)}
				className={clsx(
					props.mobileMenuOpen && "bg-background/60",
					"laptop:hidden fixed h-full w-full top-0 left-0",
				)}
			/>
			<nav
				aria-label="Main navigation"
				className={clsx(
					props.mobileMenuOpen
						? "max-laptop:translate-x-0"
						: "max-laptop:-translate-x-full",
					"fixed top-0 max-laptop:w-80 z-60 bg-white border-stroke",
					"flex max-laptop:flex-col max-laptop:h-full",
					"transition-transform duration-300 ease-out",
					[
						"laptop:h-subheader laptop:z-40",
						"laptop:items-center laptop:justify-center",
						"laptop:sticky laptop:top-(--height-header) laptop:border-b",
						"laptop:animate-[hide-nav_linear_both]",
						"laptop:[animation-timeline:scroll(root)]",
						"laptop:[animation-range:200px_260px]",
					],
				)}
			>
				<div className="flex flex-col h-full">
					<div
						className={clsx(
							"laptop:hidden flex border-b border-stroke shrink-0 h-header",
							"items-center justify-between px-5",
						)}
					>
						<Logo />
					</div>
					<ul
						className={clsx(
							"flex max-laptop:flex-col h-full p-5 laptop:p-0",
							"laptop:items-center laptop:gap-8 list-none m-0",
						)}
					>
						{MENU_ITEMS.map((item) => (
							<MenuItem
								key={item.label}
								item={item}
								isActive={activeMenu === item.label}
								setActive={(v) =>
									setActiveMenu((old) => (v === old ? null : v))
								}
							/>
						))}
					</ul>
				</div>
			</nav>

			<div
				className={clsx(
					props.mobileMenuOpen ? "translate-x-70" : "translate-x-5",
					"laptop:hidden fixed transition-all duration-300 ease-out",
					"top-[calc(var(--height-header)/2)] -translate-y-1/2 z-61",
				)}
			>
				<BurgerButton
					isMobileMenuOpen={props.mobileMenuOpen}
					changeMobileMenuState={() =>
						props.setMobileMenuOpen(!props.mobileMenuOpen)
					}
				/>
			</div>
		</>
	);
}
