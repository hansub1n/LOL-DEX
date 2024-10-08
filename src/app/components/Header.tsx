import Link from "next/link";

export default function Header() {
	return (
		<header className="z-[1000] w-full top-0 fixed bg-[#131313] shadow-md">
			<nav className="flex justify-around p-4 w-[1000px] m-auto">
				<Link href={"/"}>홈</Link>
				<Link href={"/champions"}>챔피언 목록</Link>
				<Link href={"/items"}>아이템 목록</Link>
				<Link href={"/rotation"}>챔피언 로테이션</Link>
			</nav>
		</header>
	);
}
