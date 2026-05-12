import { useCallback, useMemo, useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
	window.addEventListener("popstate", callback);

	return () => {
		window.removeEventListener("popstate", callback);
	};
};

const getSnapshot = () => window.location.search;

export function useQueryParam(key: string) {
	const search = useSyncExternalStore(subscribe, getSnapshot);

	const value = useMemo(() => {
		return new URLSearchParams(search).get(key);
	}, [search, key]);

	const setValue = useCallback(
		(value: string | null) => {
			const params = new URLSearchParams(window.location.search);

			if (value == null || value === "") {
				params.delete(key);
			} else {
				params.set(key, value);
			}

			const query = params.toString();
			const url = query
				? `${window.location.pathname}?${query}`
				: window.location.pathname;

			window.history.pushState(null, "", url);

			window.dispatchEvent(new PopStateEvent("popstate"));
		},
		[key],
	);

	return [value, setValue] as const;
}
