import {useEffect, useState} from "react";

export interface iParams {
	slug: string;
}

export function useAsyncParams(paramsPromise: Promise<iParams | null>) {
	const [params, setParams] = useState<iParams | null>(null);

	useEffect(() => {
		async function unwrapParams() {
			const resolvedParams = await paramsPromise;
			setParams(resolvedParams);
		}
		unwrapParams();
	}, [paramsPromise]);

	return params;
}
