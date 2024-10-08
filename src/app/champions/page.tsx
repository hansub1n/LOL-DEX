import { fetchChampionList } from "@/utils/serverApi";
import React from "react";
import { ChampionCard } from "../components/ChampionCard";

export const revalidate = 86400;

const ChampionsPage = async () => {
	const data = await fetchChampionList();

	if (!data) {
		throw new Error("챔피언 데이터를 가져오는 데 실패했습니다");
	}

	return (
		<div className="flex flex-col items-center w-full min-w-[100%] p-[70px] gap-[50px]">
			<h2 className="text-[25px] text-[#C8AA6E]">챔피언 목록</h2>
			<ChampionCard data={data} />
		</div>
	);
};

export default ChampionsPage;
