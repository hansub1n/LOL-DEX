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
			{/* {freeChampions.map((champion) => (
				<div key={champion.id}>
					<Image
						width={140}
						height={140}
						src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
						alt={`${champion.name} 이미지`}
					/>
					<h2>{champion.name}</h2>
					<p>{champion.title}</p>
				</div>
			))} */}
		</div>
	);
};

export default RotationPage;
