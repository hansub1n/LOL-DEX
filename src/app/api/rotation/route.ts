import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

const RIOT_DATA_URL = "https://kr.api.riotgames.com";
const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function GET() {
	try {
		if (!RIOT_API_KEY) {
			throw new Error("API키가 정의되지 않았습니다.");
		}

		const res = await fetch(
			`${RIOT_DATA_URL}/lol/platform/v3/champion-rotations`,
			{
				headers: {
					"X-Riot-Token": RIOT_API_KEY,
				},
			}
		);

		if (!res.ok) {
			throw new Error("로테이션 리스트 확인에 실패했습니다");
		}

		const data: ChampionRotation = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.message, status: 500 });
	}
}
