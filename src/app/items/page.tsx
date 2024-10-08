"use server";

import { fetchItemList } from "@/utils/serverApi";
import React from "react";
import { ItemCard } from "../components/ItemCard";

const ItemPage = async () => {
	const data = await fetchItemList();

	return (
		<div className="flex flex-col items-center w-full min-w-[100%] p-[70px] gap-[50px]">
			<h2 className="text-[25px] text-[#C8AA6E]">아이템 목록</h2>
			<div className="grid grid-cols-5 gap-[35px]">
				{data.map((item) => (
					<ItemCard item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default ItemPage;
