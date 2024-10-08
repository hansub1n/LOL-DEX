import { fetchChampionList } from "@/utils/serverApi";
import React from "react";
import { ChampionCard } from "../components/ChampionCard";

export const revalidate = 86400;

const ChampionsPage = async () => {
	const data = await fetchChampionList();

	return (
		<div className="flex flex-col items-center w-full min-w-[100%] p-[70px] gap-[50px]">
			<h2 className="text-[25px] text-[#C8AA6E]">챔피언 목록</h2>
			<div className="grid grid-cols-5 gap-[35px]">
				{data.map((champ) => (
					<ChampionCard champ={champ} key={champ.id} />
				))}
			</div>
		</div>
	);
};

export default ChampionsPage;
