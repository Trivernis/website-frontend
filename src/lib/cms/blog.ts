import type { LinkData, StrapiImage } from ".";
import fetchApi from "./client";

export type BlogPostTeaser = {
	id: number;
	attributes: {
		title: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		content: string;
		slug: string;
		author: {
			data?: LinkData;
		};
		collection: {
			data?: LinkData;
		};
		tags: {
			data: LinkData[];
		};
		teaserImage: { data: StrapiImage };
	};
};

export async function getPosts(locale = "all"): Promise<BlogPostTeaser[]> {
	return await fetchApi<BlogPostTeaser[]>({
		endpoint: "blog-posts",
		wrappedByKey: "data",
		query: {
			populate: {
				author: {
					populate: ["slug", "name"],
				},
				collection: {
					populate: ["slug", "name"],
				},
				tags: {
					populate: ["slug", "name"],
				},
				teaserImage: {
					populate: "*",
				},
			},
			locale,
		},
	});
}
