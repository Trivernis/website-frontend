import qs from "qs";
import { env } from "$env/dynamic/private";

const STRAPI_CMS_API_KEY = env.STRAPI_CMS_API_KEY;
const STRAPI_CMS_URL = env.STRAPI_CMS_URL;

interface Props {
	endpoint: string;
	query?: Record<string, unknown>;
	wrappedByKey?: string;
	wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
	endpoint,
	query,
	wrappedByKey,
	wrappedByList,
}: Props): Promise<T> {
	if (endpoint.startsWith("/")) {
		endpoint = endpoint.slice(1);
	}

	const url = new URL(`${STRAPI_CMS_URL}/api/${endpoint}`);

	if (query) {
		url.search = qs.stringify(query);
	}
	console.log({ url });
	const res = await fetch(url.toString(), {
		headers: {
			Authorization: `Bearer ${STRAPI_CMS_API_KEY}`,
		},
	});
	let data = await res.json();

	if (wrappedByKey) {
		data = data[wrappedByKey];
	}

	if (wrappedByList) {
		data = data[0];
	}

	return data as T;
}
