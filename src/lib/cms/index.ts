export * as blog from "./blog";

export type StrapiImage = {
	id: number;
	attributes: {
		name: string;
		alternativeText?: string;
		caption?: string;
		width: number;
		height: number;
		formats: {
			large: ImageFormat;
			medium: ImageFormat;
			small: ImageFormat;
			thumbnail: ImageFormat;
		};
		previewUrl?: string;
		provider?: string;
		provider_metadata?: string;
		createdAt: string;
		updatedAt: string;
	} & ImageFormat;
};

export type ImageFormat = {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: string;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
};

export type LinkData = {
	id: number;
	attributes: {
		slug: string;
		name: string;
	};
};
