export async function getChampionRotation() {
	const response = await fetch("/api/rotation");
	const data = await response.json();
	console.log("rotation호출됨");
	return data;
}

export async function fetchChampions() {
	const response = await fetch("/api/champions");
	const data = await response.json();
	console.log("champions호출됨");
	return data;
}
