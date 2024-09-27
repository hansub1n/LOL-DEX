export async function getChampionRotation() {
	const response = await fetch("/api/rotation");
	const data = await response.json();

	return data;
}
