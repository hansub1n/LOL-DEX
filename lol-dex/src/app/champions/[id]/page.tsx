import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Props = {
	params: {
		id: string;
	};
};

export function generateMetadata({ params }: Props) {
	return {
		title: `LoL-Dex : ${params.id}`,
		description: `${params.id} 상세 페이지`,
	};
}

const ChampionsIdPage = async ({ params }: Props) => {
	const data = await fetchChampionDetail(params.id);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="w-full">
				<div className="flex relative w-full min-w-[100%] h-[700px]">
					<Image
						layout="fill"
						src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`}
						alt={`${data.name} 이미지`}
						objectFit="cover"
					/>
				</div>
				<div className="flex items-end gap-[20px] m-[35px] ">
					<h1 className=" text-[50px]">{data.name}</h1>:
					<h2 className="mt-[10px] text-[20px] text-[#C8AA6E]">
						{data.title}
					</h2>
				</div>

				<div className="flex justify-start gap-[80px] items-start my-[90px] ml-[130px] mr-[50px] text-justify">
					<Image
						width={308}
						height={560}
						src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`}
						alt={`${data.name} 이미지`}
						objectFit="cover"
						className="min-w-[308px]"
					/>
					<div className="flex flex-col w-[1000px]  min-w-[1000px] justify-center m-[auto] gap-[30px]">
						<div>
							<p>{data.blurb}</p>
						</div>
						<div>
							<p className="text-[20px] mb-[15px] ">
								{data.name}의 기술
							</p>
							<div className="flex flex-wrap gap-[20px]">
								{data.spells.map((spell) => (
									<div
										key={spell.id}
										className="w-[320px] border rounded-[15px] p-4"
									>
										<div className="flex items-center justify-between">
											<p className="text-lg font-semibold">
												{spell.name}
											</p>
											<Image
												width={48}
												height={48}
												src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
												alt={`${spell.name} 이미지`}
												className="ml-4"
											/>
										</div>

										<p className="text-[13px] text-[#9da1a9] mt-2">
											{spell.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChampionsIdPage;
