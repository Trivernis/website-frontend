import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
	const lang = event.url.searchParams.get("lang") ?? "en";
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", lang),
	});
}) satisfies Handle;
