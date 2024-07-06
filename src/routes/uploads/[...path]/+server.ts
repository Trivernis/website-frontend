import { STRAPI_CMS_URL } from "$env/static/private";

export async function GET({
	params,
}: { params: { path: string } }): Promise<Response> {
	const path = params.path;

	try {
		return fetch(`${STRAPI_CMS_URL}/uploads/${path}`);
	} catch (err) {
		return new Response(`File not found:  ${path}`, {
			status: 404,
		});
	}
}
