# LoL-Dex

#### 주특기 플러스주차 개인과제

Riot API를 활용한 리그 오브 레전드 정보 앱<br/><br/>

#### 프로젝트 구조

<details>
<summary>프로젝트 구조</summary>
...
📦LoL-Dex<br/>
 ┣ 📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜ChampionCard.tsx
 ┃ ┃ ┗ 📜ItemCard.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Item.ts
 ┗ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜README.md
 ┣ 📜tailwind.config.ts
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
 ...
</details>

#### 실행 방법

1.  **홈페이지(SSG)**<br/>

    -   리그 오브 레전드 정보 앱 소개와 함께 챔피언, 로테이션, 아이템 페이지로 이동할 수 있는 링크를 제공합니다.

2.  **챔피언 페이지(ISR)**<br/>

    -   챔피언 목록을 확인할 수 있으며, 각 챔피언을 클릭하여 상세 페이지로 이동할 수 있습니다.

3.  **아이템 페이지(SSG)**<br/>

    -   게임 내 모든 아이템 목록을 확인할 수 있습니다.

4.  **로테이션 페이지(CSR)**<br/>

    -   현재 주간 무료 로테이션 챔피언 목록을 확인할 수 있습니다.<br/>

5.  **챔피언 상세 페이지(SSR)**<br/>

    -   선택한 챔피언의 상세 정보(스킬, 통계 등)를 확인할 수 있으며, 동적으로 생성된 메타데이터를 포함합니다<br/><br/>

#### 주요 기능

-   **기능 요약**<br/>

    -   Riot API를 사용하여 챔피언, 아이템, 로테이션 정보를 조회

-   **페이지 이동**<br/>

    -   `Next.js`의 `Link` 태그를 사용하여 페이지 간 이동을 처리합니다.<br/>

-   **상태 관리**<br/>

    -   `useEffect`와 `useState` 훅을 사용하여 데이터를 가져오고 상태를 관리합니다.<br/>

-   **상태 관리**<br/>
    -   `useEffect`와 `useState` 훅을 사용하여 데이터를 가져오고 상태를 관리합니다.<br/><br/>

#### 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
