import type { ContentType } from "../utils/content";

type Props = {
	data: ContentType;
};

export function Card(props: Props) {
	return (
		<div className="flex flex-col gap-4">
			<img
				src={props.data.img}
				srcSet={`${props.data.img} 1x, ${props.data.img_2x} 2x`}
				alt="content image"
				className=""
			/>

			<span className="text-red font-700 text-medium">{props.data.tags}</span>

			<span className="text-primary text-xlarge font-700">
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

			<p className="text-paragraph text-normal font-400">{props.data.text}</p>
		</div>
	);
}

function Dot() {
	return <div className="size-0.75 bg-grey-light rounded-full" />;
}
