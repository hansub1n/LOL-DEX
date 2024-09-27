import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
	const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY!;

	if (!apiKey) {
		return NextResponse.json(
			{ error: "API Key is missing" },
			{ status: 500 }
		);
	}
	const res = await fetch(
		"https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
		{
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
				"Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
				"Accept-Charset":
					"application/x-www-form-urlencoded; charset=UTF-8",
				Origin: "https://developer.riotgames.com",
				"X-Riot-Token": apiKey,
			},
		}
	);

	if (!res.ok) {
		return NextResponse.json(
			{
				error: "Failed to fetch data",
			},
			{ status: 500 }
		);
	}
	const data: ChampionRotation = await res.json();
	return NextResponse.json(data);
}
