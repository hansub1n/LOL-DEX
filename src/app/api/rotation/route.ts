import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
	const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

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
	const data: ChampionRotation[] = await res.json();

	return NextResponse.json(data);
}
