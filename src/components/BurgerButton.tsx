import clsx from "clsx";

type Props = {
	changeMobileMenuState: () => void;
	isMobileMenuOpen: boolean;
};

export function BurgerButton(props: Props) {
	return (
		<button
			onClick={props.changeMobileMenuState}
			className={clsx(
				"self-center mr-auto w-6 h-6",
				"relative flex items-center justify-center",
			)}
		>
			<span
				className={clsx(
					props.isMobileMenuOpen ? "rotate-45" : "-translate-y-2",
					"absolute h-0.5 w-6 bg-black transition-all duration-300",
					"rounded-full",
				)}
			/>
			<span
				className={clsx(
					props.isMobileMenuOpen ? "opacity-0" : "opacity-100",
					"absolute h-0.5 w-6 bg-black transition-all duration-300",
					"rounded-full",
				)}
			/>
			<span
				className={clsx(
					props.isMobileMenuOpen ? "-rotate-45" : "translate-y-2",
					"absolute h-0.5 w-6 bg-black transition-all duration-300",
					"rounded-full",
				)}
			/>
		</button>
	);
}
