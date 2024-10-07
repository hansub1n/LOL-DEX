"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	console.log("여기");

	const { refresh } = useRouter();

	return (
		<div className="flex flex-col justify-center items-center mt-[130px] ">
			<h2 className="text-[30px] mb-[5px]">오류 발생!</h2>
			<p>{error.message}</p>
			<button
				onClick={() =>
					startTransition(() => {
						refresh();
						reset();
					})
				}
				className="border-[3px] border-[#59C1DE] text-[#59C1DE] py-[8px] px-[20px] rounded-[10px] mt-[80px] transition:all duration-300 ease-in-out hover:bg-[#59C1DE] hover:text-[#010101]"
			>
				다시 시도
			</button>
		</div>
	);
}
