import ArrowIcon from "../assets/arrow.svg?react";
import clsx from "clsx";
import type { MenuItemType } from "./SubMenu";

type Props = {
	item: MenuItemType;
	isActive: boolean;
	setActive: (v: string) => void;
};

export function MenuItem(props: Props) {
	return (
		<li
			onClick={() => props.item.menu && props.setActive(props.item.label)}
			className={clsx(
				props.item.menu && "max-laptop:border-b border-stroke",
				"flex max-laptop:flex-col relative group cursor-pointer",
				"transition-opacity duration-150 laptop:h-full! max-laptop:overflow-hidden",
			)}
			style={{
				height:
					props.isActive && props.item.menu
						? props.item.menu?.length * 28 + 48
						: 48,
				transition: "height 0.3s",
			}}
		>
			<div className="flex items-center gap-1 shrink-0 h-12">
				<span className="text-primary text-large font-500 whitespace-nowrap group-hover:opacity-80">
					{props.item.label}
				</span>
				{props.item.menu && (
					<ArrowIcon
						className={clsx(
							props.isActive && "max-laptop:rotate-180",
							"group-hover:rotate-180 transition-transform duration-200",
						)}
					/>
				)}
			</div>
			{props.item.menu && (
				<div
					className={clsx(
						"laptop:absolute laptop:left-0 laptop:w-44 bg-background",
						"laptop:hidden laptop:group-hover:flex laptop:border border-stroke",
						"top-(--height-subheader) flex flex-col px-5 laptop:py-3",
					)}
				>
					{props.item.menu.map((subItem, index) => (
						<div
							key={index}
							className={clsx(
								index !== 0 && "laptop:border-t border-stroke",
								"flex items-center justify-between h-7 max-laptop:w-1/2",
								"text-primary hover:text-primary-hover max-laptop:gap-1",
								"hover:pl-2 transition-all duration-150",
							)}
						>
							<span className="text-medium font-400 whitespace-nowrap">
								{subItem}
							</span>
							<ArrowIcon className="-rotate-90" />
						</div>
					))}
				</div>
			)}
		</li>
	);
}
