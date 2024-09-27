const getVersion = async () => {
	const res = await fetch(
		"https://ddragon.leagueoflegends.com/api/versions.json"
	);
	const data = await res.json();
	return data;
};

export async function getChampions() {}
