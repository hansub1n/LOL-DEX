import { Item } from "@/types/Item";
import Image from "next/image";

export const ItemCard = ({ item }: { item: Item }) => {
	return (
		<div className="relative group flex flex-col items-center justify-around w-[240px] h-[320px] rounded-[10px] bg-[#010101] border border-[#C8AA6E] shadow-lg transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
			<Image
				width={100}
				height={100}
				src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
				alt={`${item.name} 이미지`}
			/>
			<div className="flex flex-col text-center gap-[7px] px-[10px]">
				<p>{item.name}</p>
				<p className="text-[14px] text-[#9da1a9]">{item.plaintext}</p>
			</div>
			<div className="absolute inset-0 bg-[#00000049] rounded-[10px] pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
		</div>
	);
};
