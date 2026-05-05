export interface Portfolio {
	href: string;
	img: {
		src: string;
		alt: string;
	};
	title: string;
	game?: string;
	types?: string[];
}

export const getTags = (portfolio: Portfolio): string[] => {
	const result: string[] = [];
	if (portfolio.game) result.push(portfolio.game);
	portfolio.types?.forEach((type) => result.push(type));
	return result;
};
