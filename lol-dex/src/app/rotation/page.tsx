// RotationPage.tsx
"use client";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampions, getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";
import { ChampionCard } from "../components/ChampionCard";

const RotationPage = () => {
	const [rotation, setRotation] = useState<ChampionRotation | null>(null);
	const [champions, setChampions] = useState<Champion[] | null>(null);

	useEffect(() => {
		const fetchRotationData = async () => {
			try {
				const rotationData = await getChampionRotation();
				const championsData: Champion[] = await fetchChampions();

				setRotation(rotationData);
				setChampions(championsData);
			} catch (error) {
				console.log(error);
			}
		};

		// const fetchChampionsData = async () => {

		// 	const championsData = await fetchChampions();
		// 	setChampions(championsData);
		// };

		fetchRotationData();
		// fetchChampionsData();
	}, []);

	if (!rotation) {
		return <div className="flex justify-center mt-[130px]">Loading...</div>;
	}

	let freeChampions: Champion[] = [];

	if (champions !== null) {
		freeChampions = champions.filter((champion) =>
			rotation.freeChampionIds.includes(Number(champion.key))
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
