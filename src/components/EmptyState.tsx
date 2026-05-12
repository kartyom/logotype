import ArticleIcon from "../assets/article.svg?react";

export function EmptyState() {
	return (
		<div className="col-span-full flex flex-col items-center gap-4 py-20 text-center">
			<ArticleIcon />

			<p className="text-xlarge font-700 text-primary leading-7.5">
				No articles found
			</p>
			<p className="text-normal font-400 text-secondary leading-5">
				Check back later for new content.
			</p>
		</div>
	);
}
