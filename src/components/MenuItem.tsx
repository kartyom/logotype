import ArrowIcon from "../assets/arrow.svg?react";
import clsx from "clsx";
import type { MenuItemType } from "./Header";

type Props = {
	item: MenuItemType;
};

export function MenuItem(props: Props) {
	return (
		<li
			className={clsx(
				"flex items-center gap-1 relative group cursor-pointer",
				"transition-opacity duration-150 h-full",
			)}
		>
			<span className="text-primary text-large font-500 whitespace-nowrap group-hover:opacity-80">
				{props.item.label}
			</span>
			{props.item.menu && (
				<>
					<ArrowIcon className="group-hover:rotate-180 transition-transform duration-200" />
					<div
						className={clsx(
							"absolute left-0 w-44 bg-background hidden group-hover:flex",
							"top-(--height-subheader) flex flex-col px-5 py-3",
							"border border-stroke",
						)}
					>
						{props.item.menu.map((subItem, index) => (
							<div
								key={index}
								className={clsx(
									index !== 0 && "border-t border-stroke",
									"flex items-center justify-between h-7",
									"text-primary hover:text-primary-hover",
									"hover:pl-2 transition-all duration-150",
								)}
							>
								<span className="text-medium font-400">{subItem}</span>
								<ArrowIcon className="-rotate-90" />
							</div>
						))}
					</div>
				</>
			)}
		</li>
	);
}
