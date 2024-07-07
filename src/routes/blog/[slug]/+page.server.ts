import { getPost, getPosts } from "$lib/cms/blog";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	try {
		const slug = params.slug;
		const post = await getPost(slug);

		return {
			post,
			error: undefined,
		};
	} catch (err: any) {
		console.error(err);
		return {
			post: undefined,
			error: {
				message: "Could not load blog post :(",
				code: 500,
			},
		};
	}
};
