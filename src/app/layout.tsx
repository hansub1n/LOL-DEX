import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
// import Loading from "./loading";
// import { Suspense } from "react";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "LoL-Dex",
	description: "Riot Games API를 활용한 리그 오브 렌전드 정보 앱",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#131313] text-[#ffffff] font-HeirofLight font-bold`}
			>
				<header className="z-[1000] w-full top-0 fixed bg-[#131313] shadow-md">
					<nav className="flex justify-around p-4 w-[1000px] m-auto">
						<Link href={"/"}>홈</Link>
						<Link href={"/champions"}>챔피언 목록</Link>
						<Link href={"/items"}>아이템 목록</Link>
						<Link href={"/rotation"}>챔피언 로테이션</Link>
					</nav>
				</header>
				<div className="mt-[55.99px]">{children}</div>
			</body>
		</html>
	);
}
