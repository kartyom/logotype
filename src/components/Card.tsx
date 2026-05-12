import type { ContentType } from "../utils/content";

type Props = {
	data: ContentType;
};

export function Card(props: Props) {
	return (
		<div className="flex flex-col gap-4">
			<img src={props.data.img} alt="content image" className="" />
		</div>
	);
}
