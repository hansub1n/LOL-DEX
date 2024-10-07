# LoL-Dex

#### 주특기 플러스주차 개인과제

Riot API를 활용한 리그 오브 레전드 정보 앱<br/><br/>

#### 프로젝트 구조

<details>
<summary>프로젝트 구조</summary>
...
📦LoL-Dex<br/>
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┣ 📜loading.tsx
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
 ┃ ┣ 📜error.tsx
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

    -   Riot API 사용하여 챔피언, 아이템, 로테이션 정보 조회

-   **페이지 이동**<br/>

    -   `Next.js`의 `Link` 태그 사용하여 페이지 간 이동 처리<br/>

-   **상태 관리**<br/>

    -   `useEffect`와 `useState` 훅 사용하여 데이터 상태 관리<br/>

-   **SEO 향상**<br/>

    -   Route Handlers 및 Next.js의 메타데이터, 이미지 태그 활용해 SEO 성능 개선<br/><br/>

#### 로딩 및 에러 핸들링

-   **로딩 상태**<br/>

    -   데이터를 불러오는 동안 로딩 상태를 표시합니다. 각 페이지에 로딩 컴포넌트를 구현하여 사용자에게 데이터가 로딩 중임을 시각적으로 알립니다.

-   **에러 핸들링**<br/>
    -   API 요청 중 오류가 발생하면 `ErrorBoundary` 컴포넌트를 통해 에러 메시지를 사용자에게 전달합니다. 사용자는 에러 발생 시 대체 UI를 통해 문제를 인지할 수 있습니다.<br/><br/>

#### 배포링크

https://lol-dex-amber.vercel.app/<br/><br/>

#### 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%230x646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%234B5563.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
