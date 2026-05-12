import { useState } from "react";
import { BurgerButton } from "./BurgerButton";
import { Logo } from "./Logo";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	function changeMobileMenuState() {
		setMobileMenuOpen((oldValue) => !oldValue);
	}

	return (
		<header className="">
			<Logo />
			<BurgerButton
				isMobileMenuOpen={mobileMenuOpen}
				changeMobileMenuState={changeMobileMenuState}
			/>
		</header>
	);
}
