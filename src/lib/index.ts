// place files you want to import through the `$lib` alias in this folder.

import moment from "moment";

export function formatDateAbsolute(date: Date | string): string {
	return moment(date).format("DD.MM.YYYY. HH:mm:ss");
}

export function formatDateRelative(date: Date | string): string {
	return moment(date).fromNow();
}

export function randInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function shuffle<T>(array: T[]) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		const randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
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
