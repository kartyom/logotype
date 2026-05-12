import { useState } from "react";
import { Logo } from "./Logo";
import clsx from "clsx";
import { Search } from "./Search";
import { SubMenu } from "./SubMenu";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<>
			<header
				className={clsx(
					"fixed h-header w-full bg-background top-0 left-0",
					"border-b border-stroke z-50",
				)}
			>
				<div className="max-w-290 flex items-center h-full mx-auto max-laptop:px-5">
					<div
						className={clsx(
							searchOpen
								? "max-tablet:opacity-0 max-tablet:pointer-events-none"
								: "opacity-100",
							"absolute left-1/2 -translate-x-1/2",
							"transition-opacity duration-150",
						)}
					>
						<Logo />
					</div>
					<Search isOpen={searchOpen} setIsOpen={setSearchOpen} />
				</div>
			</header>

			<SubMenu
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
		</>
	);
}
