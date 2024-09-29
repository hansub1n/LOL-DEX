export type Champion = {
	id: string; // 챔피언 ID
	key: string; // 챔피언 키
	name: string; // 챔피언 이름
	title: string; // 챔피언 타이틀
	image: Image; // 챔피언 이미지 정보
	skins: Skin[]; // 챔피언 스킨 리스트
	lore: string; // 챔피언 배경 이야기
	blurb: string; // 짧은 설명
	allytips: string[]; // 아군 팁
	enemytips: string[]; // 적군 팁
	tags: string[]; // 태그 (예: 전사, 마법사)
	partype: string; // 자원 타입 (예: 마나, 분노)
	info: Info; // 챔피언 정보 (공격, 방어, 마법, 난이도)
	stats: Stats; // 기본 능력치
	spells: Spell[]; // 스킬 정보
};

type Image = {
	full: string; // 이미지 파일명
	sprite: string; // 스프라이트 이미지 파일명
	group: string; // 그룹 (예: 챔피언, 아이템)
	x: number; // x 좌표 (스프라이트 이미지)
	y: number; // y 좌표 (스프라이트 이미지)
	w: number; // 이미지 너비
	h: number; // 이미지 높이
};

type Skin = {
	id: string; // 스킨 ID
	num: number; // 스킨 번호
	name: string; // 스킨 이름
	chromas: boolean; // 크로마 유무
};

type Info = {
	attack: number; // 공격력 수치 (1-10)
	defense: number; // 방어력 수치 (1-10)
	magic: number; // 마법 수치 (1-10)
	difficulty: number; // 난이도 수치 (1-10)
};

type Stats = {
	hp: number; // 체력
	hpperlevel: number; // 레벨 당 체력 증가량
	mp: number; // 마나
	mpperlevel: number; // 레벨 당 마나 증가량
	movespeed: number; // 이동 속도
	armor: number; // 방어력
	armorperlevel: number; // 레벨 당 방어력 증가량
	spellblock: number; // 마법 저항력
	spellblockperlevel: number; // 레벨 당 마법 저항력 증가량
	attackrange: number; // 공격 사거리
	hpregen: number; // 체력 회복 속도
	hpregenperlevel: number; // 레벨 당 체력 회복 속도 증가량
	mpregen: number; // 마나 회복 속도
	mpregenperlevel: number; // 레벨 당 마나 회복 속도 증가량
	crit: number; // 치명타 확률
	critperlevel: number; // 레벨 당 치명타 확률 증가량
	attackdamage: number; // 공격력
	attackdamageperlevel: number; // 레벨 당 공격력 증가량
	attackspeedperlevel: number; // 레벨 당 공격 속도 증가량
	attackspeed: number; // 공격 속도
};

type Spell = {
	id: string; // 스킬 ID
	name: string; // 스킬 이름
	description: string; // 스킬 설명
	tooltip: string; // 툴팁 (스킬 사용 방법)
	leveltip: LevelTip; // 레벨 증가에 따른 정보
	maxrank: number; // 최대 레벨
	cooldown: number[]; // 스킬 재사용 대기시간 (레벨별)
	cooldownBurn: string; // 재사용 대기시간 문자열
	cost: number[]; // 스킬 비용 (레벨별)
	costBurn: string; // 스킬 비용 문자열
	effect: number[][]; // 스킬 효과 (레벨별)
	effectBurn: string[]; // 스킬 효과 문자열
	vars: any[]; // 추가 변수 정보
	costType: string; // 비용 타입 (예: 마나)
	maxammo: string; // 최대 탄약 수
	range: number[]; // 스킬 범위 (레벨별)
	rangeBurn: string; // 스킬 범위 문자열
	image: Image; // 스킬 이미지
	resource: string; // 리소스 타입
};

type LevelTip = {
	label: string[]; // 레벨 증가에 따른 설명
	effect: string[]; // 레벨 증가에 따른 효과
};
