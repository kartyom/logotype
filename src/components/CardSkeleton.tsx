export function CardSkeleton() {
	return (
		<div className="flex flex-col gap-4 animate-pulse">
			<div className="aspect-video w-full bg-grey-light rounded" />

			<div className="h-3.25 w-20 bg-grey-light rounded" />

			<div className="h-7.5 w-4/5 bg-grey-light rounded" />

			<div className="flex items-center gap-1.25">
				<div className="h-3 w-16 bg-grey-light rounded" />
				<div className="size-0.75 bg-grey-light rounded-full" />
				<div className="h-3 w-12 bg-grey-light rounded" />
				<div className="size-0.75 bg-grey-light rounded-full" />
				<div className="h-3 w-10 bg-grey-light rounded" />
			</div>

			<div className="flex flex-col gap-1">
				<div className="h-5 w-full bg-grey-light rounded" />
				<div className="h-5 w-full bg-grey-light rounded" />
				<div className="h-5 w-3/4 bg-grey-light rounded" />
			</div>
		</div>
	);
}
