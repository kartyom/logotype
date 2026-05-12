import { useId } from "react";
import type { ContentType } from "../utils/content";
import { CardDialog } from "./CardDialog";
import { Dot } from "./Dot";

type Props = {
	data: ContentType;
};

export function Card(props: Props) {
	const dialogId = useId();

	return (
		<>
			<button
				className="flex flex-col gap-4 items-start"
				popoverTarget={dialogId}
			>
				<img
					src={props.data.img}
					srcSet={`${props.data.img} 1x, ${props.data.img_2x} 2x`}
					alt="content image"
					className="w-full"
				/>

				<span className="text-red font-700 text-medium">{props.data.tags}</span>

				<span className="text-primary text-xlarge font-700 text-start">
					{props.data.title}
				</span>

				<div className="flex items-center gap-1.25">
					<b className="text-small text-primary font-500">{props.data.autor}</b>

					<Dot />

					<span className="text-small text-secondary font-400">
						{props.data.date}
					</span>

					<Dot />

					<span className="text-small text-secondary font-400">
						{props.data.views}
					</span>
				</div>

				<p className="text-paragraph text-normal font-400 text-start">
					{props.data.text}
				</p>
			</button>
			<CardDialog id={dialogId} data={props.data} />
		</>
	);
}
