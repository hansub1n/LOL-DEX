"use server";

import { fetchItemList } from "@/utils/serverApi";
import React from "react";
import { ItemCard } from "../components/ItemCard";

const ItemPage = async () => {
	const data = await fetchItemList();

	if (!data) {
		throw new Error("아이템 데이터를 가져오는 데 실패했습니다");
	}

	return (
		<div className="flex flex-col items-center w-full min-w-[100%] p-[70px] gap-[50px]">
			<h2 className="text-[25px] text-[#C8AA6E]">아이템 목록</h2>
			<ItemCard data={data} />
		</div>
	);
};

export default ItemPage;
