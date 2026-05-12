import { useState } from "react";
import { BurgerButton } from "./BurgerButton";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	function changeMobileMenuState() {
		setMobileMenuOpen((oldValue) => !oldValue);
	}

	return (
		<header className="">
			<BurgerButton
				isMobileMenuOpen={mobileMenuOpen}
				changeMobileMenuState={changeMobileMenuState}
			/>
		</header>
	);
}
