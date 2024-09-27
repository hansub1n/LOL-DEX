import React from "react";

type Props = {
	params: {
		id: number;
	};
};

const ChampionsIdPage = ({ params }: Props) => {
	return <div>ChampionsIdPage : {params.id}</div>;
};

export default ChampionsIdPage;
