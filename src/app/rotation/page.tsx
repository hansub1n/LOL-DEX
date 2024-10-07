"use client";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";
import { ChampionCard } from "../components/ChampionCard";
import { fetchChampions } from "@/utils/serverApi";
import ErrorBoundary from "../components/ErrorBoundary";

const RotationPage = () => {
	const [rotation, setRotation] = useState<ChampionRotation | null>(null);
	const [champions, setChampions] = useState<Champion[] | null>(null);
	const [error, setError] = useState<Error | null>(null);

	const fetchRotationData = async () => {
		try {
			const rotationData = await getChampionRotation();
			const championsData = await fetchChampions();
			if (!championsData || !rotationData) {
				throw new Error(
					"무료 챔피언 데이터를 가져오는 데 실패했습니다"
				);
			}

			setRotation(rotationData);
			setChampions(championsData);
		} catch (err) {
			setError(err as Error);
		}
	};

	useEffect(() => {
		fetchRotationData();
	}, []);

	let freeChampions: Champion[] = [];

	if (champions !== null) {
		freeChampions = champions.filter((champion) =>
			rotation?.freeChampionIds.includes(Number(champion.key))
		);
	}

	const reset = () => {
		setError(null);
		setRotation(null);
		setChampions(null);
		fetchRotationData();
	};

	return (
		<ErrorBoundary error={error} reset={reset}>
			<div className="flex flex-col items-center w-full min-w-[100%] p-[70px] gap-[50px]">
				<h1 className="text-[25px] text-[#C8AA6E]">
					이번 주 무료 챔피언
				</h1>
				<ChampionCard data={freeChampions} />
			</div>
		</ErrorBoundary>
	);
};

export default RotationPage;
