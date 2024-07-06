import { getPost, getPosts } from "$lib/cms/blog";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({
	params,
}: { params: { slug: string } }) => {
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
			posts: [],
			error: {
				message: "Could not load blog post :(",
				code: 500,
			},
		};
	}
};
