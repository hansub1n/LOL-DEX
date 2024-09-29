import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

export const ChampionCard = ({ data }: { data: Champion[] }) => {
	return (
		<div>
			{data.map((item) => (
				<Link key={item.id} href={`/champions/${item.id}`}>
					<div>
						<Image
							width={140}
							height={140}
							src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${item.image.full}`}
							alt={`${item.name} 이미지`}
						/>
						<p>{item.name}</p>
						<p>{item.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
};
