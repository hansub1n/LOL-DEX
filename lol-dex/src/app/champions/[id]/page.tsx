import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Props = {
	params: {
		id: string;
	};
};

const ChampionsIdPage = async ({ params }: Props) => {
	const data = await fetchChampionDetail(params.id);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			ChampionsIdPage : {params.id}
			<div>
				<Image
					width={140}
					height={140}
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`}
					alt={`${data.name} 이미지`}
				/>
				<p>{data.name}</p>
				<p>{data.title}</p>
			</div>
		</div>
	);
};

export default ChampionsIdPage;
