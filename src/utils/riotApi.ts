import { ChampionRotation } from "@/types/ChampionRotation";

export async function getChampionRotation() {
	const response = await fetch("/api/rotation");
	const data: ChampionRotation = await response.json();
	console.log("rotation호출됨");
	return data;
}
