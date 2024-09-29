import { Champion } from "@/types/Champion";
import { getVersion } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
	const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

	if (!apiKey) {
		return NextResponse.json(
			{ error: "API Key is missing" },
			{ status: 500 }
		);
	}
	const version = await getVersion();
	const res = await fetch(
		`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
		{
			headers: {
				"X-Roit_Token": apiKey,
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

	const data = await res.json();
	const champions: Champion[] = Object.values(data.data);
	return NextResponse.json(champions);
}
