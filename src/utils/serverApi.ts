"use server";
import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

const DATA_DRAGON_URL = "https://ddragon.leagueoflegends.com";

const getVersion = async () => {
	const res = await fetch(`${DATA_DRAGON_URL}/api/versions.json`);

	if (!res.ok) {
		throw new Error("버전 확인에 실패했습니다");
	}

	const data = await res.json();
	return data[0];
};

export async function fetchChampionList() {
	const version = await getVersion();
	const res = await fetch(
		`${DATA_DRAGON_URL}/cdn/${version}/data/ko_KR/champion.json`
	);

	if (!res.ok) {
		throw new Error("챔피언 리스트 확인에 실패했습니다");
	}

	const data = await res.json();
	const champions: Champion[] = Object.values(data.data);

	return champions;
}

export async function fetchChampionDetail(id: string) {
	const version = await getVersion();
	const res = await fetch(
		`${DATA_DRAGON_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`,
		{
			cache: "no-store",
		}
	);

	if (!res.ok) {
		throw new Error("챔피언 정보 확인에 실패했습니다");
	}

	const data = await res.json();
	const champion: Champion = data.data[id];

	return champion;
}

export async function fetchItemList() {
	const version = await getVersion();
	const res = await fetch(
		`${DATA_DRAGON_URL}/cdn/${version}/data/ko_KR/item.json`
	);

	if (!res.ok) {
		throw new Error("아이템 리스트 확인에 실패했습니다");
	}

	const data = await res.json();
	const items: Item[] = Object.values(data.data);

	return items;
}
