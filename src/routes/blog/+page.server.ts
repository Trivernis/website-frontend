import { getPosts } from "$lib/cms/blog";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }: { params: unknown }) => {
	try {
		const posts = await getPosts();

		return {
			posts,
		};
	} catch (err: any) {
		console.error(err);
		return {
			posts: [],
			error: {
				message: "Could not load any blog posts :(",
				code: 500,
			},
		};
	}
};
