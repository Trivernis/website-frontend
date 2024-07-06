// place files you want to import through the `$lib` alias in this folder.

import moment from "moment";

export function formatDateAbsolute(date: Date | string): string {
	return moment(date).format("DD.MM.YYYY. HH:mm:ss");
}

export function formatDateRelative(date: Date | string): string {
	return moment(date).fromNow();
}

export type ImageMetadata = {
	caption?: string;
	altText?: string;

	formats: {
		ext?: string;
		url: string;
		hash?: string;
		mime: string;
		name: string;
		path?: string;
		size?: number;
		width?: number;
		height?: number;
		sizeInBytes?: number;
	}[];
};
