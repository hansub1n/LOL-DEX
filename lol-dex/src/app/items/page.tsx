"use server";

import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemPage = async () => {
	const data = await fetchItemList();
	// console.log(data);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>아이템 목록</h2>
			{data.map((item) => (
				<div key={item.id}>
					<Image
						width={100}
						height={100}
						src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
						alt={`${item.name} 이미지`}
					/>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default ItemPage;
