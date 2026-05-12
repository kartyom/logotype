import type { ContentType } from "../utils/content";
import { Dot } from "./Dot";
import XIcon from "../assets/x.svg?react";
import clsx from "clsx";

type Props = {
	id: string;
	data: ContentType;
};

export function CardDialog({ id, data }: Props) {
	return (
		<dialog
			id={id}
			popover="auto"
			className={clsx(
				"m-auto max-tablet:mx-4 tablet:max-w-xl max-h-[90vh]",
				"overflow-y-auto rounded-xl bg-white shadow-2xl",
			)}
		>
			<div className="relative">
				<button
					popoverTarget={id}
					popoverTargetAction="hide"
					aria-label="Close"
					className={clsx(
						"absolute right-3 top-3 z-10 flex size-8",
						"items-center justify-center rounded-full",
						"bg-white/90 text-primary hover:bg-white",
						"transition-colors duration-150 cursor-pointer",
					)}
				>
					<XIcon />
				</button>
				<img
					src={data.img}
					srcSet={`${data.img} 1x, ${data.img_2x} 2x`}
					alt="content image"
					className="w-full rounded-t-xl"
				/>
			</div>

			<div className="flex flex-col gap-3 p-6">
				<span className="text-red font-700 text-medium">{data.tags}</span>

				<span className="text-primary text-xlarge font-700">{data.title}</span>

				<div className="flex items-center gap-1.25">
					<b className="text-small text-primary font-500">{data.autor}</b>
					<Dot />
					<span className="text-small text-secondary font-400">
						{data.date}
					</span>
					<Dot />
					<span className="text-small text-secondary font-400">
						{data.views}
					</span>
				</div>

				<p className="text-paragraph text-normal font-400">{data.text}</p>
			</div>
		</dialog>
	);
}
