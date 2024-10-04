import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center w-full min-w-[100%] mt-[120px]">
			<h1 className="text-[30px] text-[#C8AA6E]">
				리그 오브 레전드 정보 앱
			</h1>
			<p className="text-[#3b4353]">
				Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
			</p>
			<div className="flex gap-[30px] mt-[100px] text-[#3b4353]">
				<Link href={`/champions`}>
					<div className="flex flex-col justify-center items-center hover:text-[#59C1DE]">
						<Image
							width={500}
							height={300}
							src={
								"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg"
							}
							alt={"문도박사 이미지"}
							objectFit="cover"
						/>
						<p>챔피언 목록 보기</p>
					</div>
				</Link>
				<Link href={`/rotation`}>
					<div className="flex flex-col justify-center items-center hover:text-[#59C1DE]">
						<Image
							width={500}
							height={300}
							src={
								"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg"
							}
							alt={"파이크 이미지"}
							objectFit="cover"
						/>
						<p>금주의 로테이션 확인</p>
					</div>
				</Link>
				<Link href={`/items`}>
					<div className="flex flex-col justify-center items-center hover:text-[#59C1DE]">
						<Image
							width={500}
							height={300}
							src={
								"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg"
							}
							alt={"케넨 이미지"}
							objectFit="cover"
						/>
						<p>아이템 목록 보기</p>
					</div>
				</Link>
			</div>
		</div>
	);
}
