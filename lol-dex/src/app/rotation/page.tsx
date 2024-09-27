"use client";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
	const [championData, setChampionData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getChampionRotation();
				setChampionData(data);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	if (!championData) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>휴.. 데이터 가져오기 성공</h1>
			{}
		</div>
	);
};

export default RotationPage;
