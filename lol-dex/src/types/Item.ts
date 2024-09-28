export type Item = {
	id: string;
	name: string;
	description: string;
	colloq: string;
	plaintext: string;
	specialRecipe: number;
	image: {
		full: string;
		sprite: string;
		group: string;
		x: number;
		y: number;
		w: number;
		h: number;
	};
	gold: {
		base: number;
		purchasable: boolean;
		total: number;
		sell: number;
	};
	tags: string[];
	maps: {
		[mapId: number]: boolean;
	};
	stats: {
		[statKey: string]: number;
	};
	effect: {
		Effect1Amount: string;
		Effect2Amount: string;
		Effect3Amount: string;
		Effect4Amount: string;
		Effect5Amount: string;
		Effect6Amount: string;
		Effect7Amount: string;
		Effect8Amount: string;
	};
	depth: number;
};
