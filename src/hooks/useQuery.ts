import { useEffect, useRef, useState } from "react";

type QueryState<TData, TError> = {
	data?: TData;
	error?: TError;
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	refetch: () => Promise<void>;
};

type UseQueryOptions<TData> = {
	enabled?: boolean;
	initialData?: TData;
};

export function useQuery<TData, TError = Error>(
	queryKey: readonly unknown[],
	queryFn: () => Promise<TData>,
	options: UseQueryOptions<TData> = {},
): QueryState<TData, TError> {
	const { enabled = true, initialData } = options;

	const [data, setData] = useState<TData | undefined>(initialData);
	const [error, setError] = useState<TError | undefined>();
	const [isLoading, setIsLoading] = useState(
		enabled && initialData === undefined,
	);

	const requestIdRef = useRef(0);

	const fetchData = async () => {
		const requestId = ++requestIdRef.current;

		setIsLoading(true);
		setError(undefined);

		try {
			const result = await queryFn();

			if (requestId === requestIdRef.current) {
				setData(result);
			}
		} catch (error) {
			if (requestId === requestIdRef.current) {
				setError(error as TError);
			}
		} finally {
			if (requestId === requestIdRef.current) {
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		if (!enabled) return;

		void fetchData();
	}, [enabled, ...queryKey]);

	return {
		data,
		error,
		isLoading,
		isError: error !== undefined,
		isSuccess: data !== undefined && error === undefined,
		refetch: fetchData,
	};
}
