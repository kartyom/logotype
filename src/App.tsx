import clsx from "clsx";
import { Card } from "./components/Card";
import { CardSkeleton } from "./components/CardSkeleton";
import { EmptyState } from "./components/EmptyState";
import { Header } from "./components/Header";
import { useQuery } from "./hooks/useQuery";
import { getContent } from "./utils/content";

function App() {
	const { data: content, isLoading } = useQuery(["content"], getContent);

	return (
		<div className="">
			<Header />

			<main
				className={clsx(
					"max-w-290 max-laptop:px-4 py-4 laptop:py-12",
					"grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
					"gap-8 laptop:gap-y-19.5 laptop:gap-x-10",
				)}
			>
				{content?.length ? (
					content.map((item, index) => <Card data={item} key={index} />)
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
