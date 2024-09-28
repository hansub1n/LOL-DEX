import { Champion } from "@/types/Champion";
import Image from "next/image";

export const ChampionCard = ({ data }: { data: Champion[] }) => {
	// console.log(data);
	return (
		<div>
			<h2>챔피언 목록</h2>
			{data.map((item) => (
				<div key={item.id}>
					<Image
						width={140}
						height={140}
						src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${item.image.full}`}
						alt={`${item.name} 이미지`}
					/>
					<p>{item.name}</p>
					<p>{item.title}</p>
				</div>
			))}
		</div>
	);
};
