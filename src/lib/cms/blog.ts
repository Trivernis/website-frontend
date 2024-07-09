import type { LinkData, StrapiImage } from ".";
import fetchApi from "./client";

export type BlogPostTeaser = {
	id: number;
	attributes: {
		locale: string;
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

export type BlogPost = BlogPostTeaser & {
	attributes: {
		content: BlogPostContentEntry[];
	};
};

type BlogPostContentTemplate<S, T> = {
	id: number;
	__component: S;
} & T;

export type BlogPostContentEntry =
	| BlogPostContentTemplate<
			"content.text-markdown",
			{ value: string; type: "paragraph" | "infobox" }
	  >
	| BlogPostContentTemplate<"content.image", { value: { data: StrapiImage } }>;

export async function getPosts(locale = "all"): Promise<BlogPostTeaser[]> {
	return await fetchApi<BlogPostTeaser[]>({
		endpoint: "blog-posts",
		wrappedByKey: "data",
		query: {
			sort: ["publishedAt:DESC"],
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

export async function getPost(slug: string): Promise<BlogPost> {
	return await fetchApi<BlogPost>({
		endpoint: "blog-posts",
		wrappedByKey: "data",
		wrappedByList: true,
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
				content: {
					populate: "*",
				},
			},
			filters: {
				slug: {
					$eq: slug,
				},
			},
			locale: "all",
		},
	});
}
