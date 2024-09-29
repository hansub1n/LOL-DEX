// RotationPage.tsx
"use client";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampions, getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChampionCard } from "../components/ChampionCard";

const RotationPage = () => {
	const [rotation, setRotation] = useState<ChampionRotation | null>(null);
	const [champions, setChampions] = useState<Champion[] | null>(null);

	useEffect(() => {
		const fetchRotationData = async () => {
			try {
				const rotationData = await getChampionRotation();
				setRotation(rotationData);
			} catch (error) {
				console.log(error);
			}
		};

		const fetchChampionsData = async () => {
			const championsData = await fetchChampions();
			setChampions(championsData);
		};

		fetchRotationData();
		fetchChampionsData();
	}, []);

	if (!rotation) {
		return <div>Loading...</div>;
	}

	let freeChampions: Champion[] = [];

	if (champions !== null) {
		freeChampions = champions.filter((champion) =>
			rotation.freeChampionIds.includes(Number(champion.key))
		);
	}

	return (
		<div>
			<h1>이번주 무료 챔피언</h1>
			<ChampionCard data={freeChampions} />
		</div>
	);
};

export default RotationPage;
