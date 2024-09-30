export async function getChampionRotation() {
	const response = await fetch("/api/rotation");
	const data = await response.json();
	console.log("rotation호출됨");
	return data;
}
