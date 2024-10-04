export type Item = {
	id: string;
	name: string;
	description: string;
	colloq: string;
	plaintext: string;
	specialRecipe: number;
	image: ItemImage;
	gold: ItemGold;
	tags: string[];
	maps: ItemMaps;
	stats: ItemStats;
	effect: ItemEffect;
	depth: number;
};

type ItemImage = {
	full: string;
	sprite: string;
	group: string;
	x: number;
	y: number;
	w: number;
	h: number;
};

type ItemGold = {
	base: number;
	purchasable: boolean;
	total: number;
	sell: number;
};

type ItemMaps = {
	[mapId: number]: boolean;
};

type ItemStats = {
	[statKey: string]: number;
};

type ItemEffect = {
	[key: string]: string;
};
