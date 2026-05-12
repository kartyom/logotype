export type ContentType = {
	autor: string;
	date: string;
	img: string;
	img_2x: string;
	tags: string;
	text: string;
	title: string;
	views: string;
};

export async function getContent(): Promise<ContentType[]> {
	const response = await fetch(
		"https://cloud.codesupply.co/endpoint/react/data.json",
	);

	if (!response.ok) {
		throw new Error("Failed to load");
	}

	return response.json();
}
