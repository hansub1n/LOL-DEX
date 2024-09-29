import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

export const ChampionCard = ({ data }: { data: Champion[] }) => {
	return (
		<div className="grid grid-cols-5 gap-[35px]">
			{data.map((item) => (
				<Link key={item.id} href={`/champions/${item.id}`}>
					<div className="relative group flex flex-col items-center justify-around w-[240px] h-[320px] rounded-[10px] bg-[#010101] border border-[#C8AA6E] shadow-lg transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
						<Image
							width={140}
							height={140}
							src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${item.image.full}`}
							alt={`${item.name} 이미지`}
						/>
						<div className="flex flex-col items-center text-center gap-[7px]">
							<p className="font-bold text-white">{item.name}</p>
							<p className="text-[14px] text-[#9da1a9]">
								{item.title}
							</p>
						</div>
						<div className="absolute inset-0 bg-[#00000049] rounded-[10px] pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
					</div>
				</Link>
			))}
		</div>
	);
};
