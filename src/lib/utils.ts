export function smartypants(text: string): string {
	const replacements = [
		["---", "—"],
		[",,", "¸"],
		["(c)", "ⓒ"],
		["(C)", "Ⓒ"],
		["(r)", "ⓡ"],
		["(R)", "Ⓡ"],
		["(tm)", "™"],
		["(TM)", "™"],
		["(p)", "ⓟ"],
		["(P)", "Ⓟ"],
		["+-", "±"],
	];

	let result = text;

	for (const [search, replacement] of replacements) {
		result = result.replaceAll(search, replacement);
	}

	return result;
}
