"use client";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";
import { ChampionCard } from "../components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";

const RotationPage = () => {
	const [rotation, setRotation] = useState<ChampionRotation | null>(null);
	const [champions, setChampions] = useState<Champion[] | null>(null);

	useEffect(() => {
		const fetchRotationData = async () => {
			const [rotationData, championsData] = await Promise.all([
				getChampionRotation(),
				fetchChampionList(),
			]);

			setRotation(rotationData);
			setChampions(championsData);
		};

		fetchRotationData();
	}, []);

	let freeChampions: Champion[] = [];

	if (champions !== null) {
		freeChampions = champions.filter((champion) =>
			rotation?.freeChampionIds.includes(Number(champion.key))
		);
	}

	return (
		<div className="flex flex-col items-center w-full min-w-[100%] p-[70px] gap-[50px]">
			<h1 className="text-[25px] text-[#C8AA6E]">이번 주 무료 챔피언</h1>
			<ChampionCard data={freeChampions} />
		</div>
	);
};

export default RotationPage;
