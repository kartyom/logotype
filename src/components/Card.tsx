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
		</div>
	);
}
