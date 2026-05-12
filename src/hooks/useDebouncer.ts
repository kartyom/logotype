import { useEffect, useState } from "react";

export function useDebouncer<T>(state: T, milliseconds: number) {
	const [debounced, setDebounced] = useState(state);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounced(state);
		}, milliseconds);

		return () => {
			clearTimeout(timeout);
		};
	}, [state, milliseconds]);

	return debounced;
}
