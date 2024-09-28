import { fetchChampions } from "@/utils/serverApi";
import React from "react";
import { ChampionCard } from "../components/ChampionCard";

export const revalidate = 86400;

const ChampionsPage = async () => {
	const data = await fetchChampions();

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<ChampionCard data={data} />
		</div>
	);
};

export default ChampionsPage;
