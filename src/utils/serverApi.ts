"use server";
import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

const getVersion = async () => {
	try {
		const res = await fetch(
			"https://ddragon.leagueoflegends.com/api/versions.json"
		);
		const data = await res.json();
		return data[0];
	} catch (error) {
		console.log(error);
	}
};

export async function fetchChampions() {
	try {
		const version = await getVersion();
		const res = await fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
		);

		const data = await res.json();
		const champions: Champion[] = Object.values(data.data);

		if (Math.random() > 0.4) {
			return champions;
		}
	} catch (error) {
		console.log(error);
		// throw new Error("무료 챔피언 데이터를 가져오는 데 실패했습니다.");
	}
}

export async function fetchChampionDetail(id: string) {
	try {
		const version = await getVersion();

		const res = await fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
			{
				cache: "no-store",
			}
		);

		const data = await res.json();
		const champion: Champion = data.data[id];

		if (Math.random() > 0.4) {
			return champion;
		}
	} catch (error) {
		console.log(error);
	}
}

export async function fetchItemList() {
	try {
		const version = await getVersion();
		const res = await fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
		);

		const data = await res.json();
		const items: Item[] = Object.values(data.data);

		if (Math.random() > 0.4) {
			return items;
		}
	} catch (error) {
		console.log(error);
	}
}
