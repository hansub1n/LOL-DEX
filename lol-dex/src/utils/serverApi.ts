"use server";
import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY!;

export const getVersion = async () => {
	const res = await fetch(
		"https://ddragon.leagueoflegends.com/api/versions.json"
	);
	const data = await res.json();
	return data[0];
};

export async function fetchChampions() {
	try {
		const version = await getVersion();
		const res = await fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
			{
				headers: {
					"X-Roit_Token": apiKey,
				},
			}
		);
		const data = await res.json();
		const champions: Champion[] = Object.values(data.data);

		return champions;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchChampionDetail(id: string) {
	try {
		const version = await getVersion();

		const res = await fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
			{
				headers: {
					"X-Roit_Token": apiKey,
				},
			}
		);
		const data = await res.json();
		const champion: Champion = data.data[id];

		return champion;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchItemList() {
	try {
		const version = await getVersion();
		const res = await fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
			{
				headers: {
					"X-Roit_Token": apiKey,
				},
			}
		);
		const data = await res.json();
		const items: Item[] = Object.values(data.data);
		return items;
	} catch (error) {
		console.log(error);
	}
}
