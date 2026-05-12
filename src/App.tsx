import clsx from "clsx";
import { Card } from "./components/Card";
import { CardSkeleton } from "./components/CardSkeleton";
import { EmptyState } from "./components/EmptyState";
import { Header } from "./components/Header";
import { useQuery } from "./hooks/useQuery";
import { getContent, type ContentType } from "./utils/content";
import { useQueryParam } from "./hooks/useQueryParam";
import { useDebouncer } from "./hooks/useDebouncer";
import { useMemo } from "react";

function App() {
	const [search] = useQueryParam("search");
	const debouncedSearch = useDebouncer(search, 300);

	const { data: content, isLoading } = useQuery(["content"], getContent);

	const filteredContent = useMemo(() => {
		const query = debouncedSearch?.trim().toLowerCase();

		if (!query) {
			return content;
		}

		return content?.filter((item: ContentType) => {
			return [item.title, item.text].some((value) =>
				value.toLowerCase().includes(query),
			);
		});
	}, [content, debouncedSearch]);

	return (
		<div className="pt-(--height-header)">
			<Header />

			<main
				className={clsx(
					"max-w-290 max-laptop:px-4 py-4 laptop:py-12 tablet:mx-auto",
					"grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
					"gap-8 laptop:gap-y-19.5 laptop:gap-x-10",
				)}
			>
				{filteredContent?.length ? (
					filteredContent.map((item, index) => <Card data={item} key={index} />)
				) : isLoading ? (
					new Array(5)
						.fill(null)
						.map((_, index) => <CardSkeleton key={index} />)
				) : (
					<EmptyState />
				)}
			</main>
		</div>
	);
}

export default App;
