# 전주성 포트폴리오

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4로 만든 포트폴리오입니다. 메인 페이지와 프로젝트별 상세 페이지로 구성됩니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ 폴더에 정적 HTML 생성
```

## 내용 수정

모든 문구와 데이터는 `src/data/` 폴더에 있습니다. 프로젝트와 사례는 `projects.ts`, 나머지는 `profile.ts`입니다.

- `profile` — 이름, 한 줄 소개, 이메일, GitHub, 소개 문단
- `changes` — 전후 수치 표 (측정 기준 포함)
- `projects` — 프로젝트 요약과 상세 페이지의 문제/해결/결과 사례
- `skills` — 기술 스택
- `education` — 학력. 비어 있으면 섹션이 숨겨집니다

채워야 할 곳은 `TODO` 주석으로 표시해 두었습니다.

- GitHub 주소 확인
- 이력서 PDF: `public/resume.pdf`에 넣고 `resumeUrl`을 `"/resume.pdf"`로 바꾸면 이력서 링크가 나타납니다

## 배포 (Vercel)

1. 이 폴더를 GitHub 저장소로 올립니다.
2. [vercel.com](https://vercel.com)에서 저장소를 Import 합니다. 설정은 기본값 그대로 두면 됩니다.
3. 배포 후 `Settings → Domains`에서 원하는 주소를 연결할 수 있습니다.

`next.config.ts`에서 `output: "export"`를 쓰고 있어서 GitHub Pages 같은 정적 호스팅에도 `out/` 폴더를 그대로 올릴 수 있습니다.

## 구조

```
src/
├─ app/
│  ├─ layout.tsx              # 폰트(Pretendard), 메타데이터
│  ├─ page.tsx                # 메인: 섹션을 순서대로 조립
│  ├─ projects/[id]/page.tsx  # 프로젝트 상세
│  ├─ opengraph-image.tsx     # 링크 공유 미리보기 이미지 (빌드 때 생성)
│  ├─ sitemap.ts, robots.ts   # 검색 엔진용 파일
│  ├─ icon.svg                # 파비콘
│  └─ globals.css             # 색상 토큰, 링크, 취소선·화면 전환 효과
├─ components/
│  ├─ PageShell.tsx       # 모든 페이지의 틀 (사이드바 + 본문)
│  ├─ Sidebar.tsx         # 사진, 이름, 링크 (서버 컴포넌트)
│  ├─ Toc.tsx             # 목차 (클라이언트 컴포넌트)
│  ├─ About.tsx           # 첫 문장, 경력·기술, 소개 문단
│  ├─ ChangesTable.tsx    # 전후 수치 표
│  ├─ FeaturedCases.tsx   # 대표 사례
│  ├─ ProjectSummary.tsx  # 메인의 프로젝트 요약
│  ├─ CaseSection.tsx     # 상세의 사례 하나 (문제·해결·결과)
│  └─ Section, DefList, BulletList, ContactLinks, Avatar  # 작은 공통 조각
├─ lib/
│  ├─ useCurrentSection.ts  # 지금 읽는 섹션 판정 (목차가 사용)
│  └─ splitByPhrases.ts     # 글을 구절 기준으로 쪼개기 (소개 문단이 사용)
└─ data/
   ├─ profile.ts   # 소개, 성과 표, 경력, 기술, 학력
   ├─ projects.ts  # 프로젝트와 사례, 주소 규칙
   └─ site.ts      # 배포 주소
```

## GitHub Pages 배포

1. GitHub 에 `jeonjuseong11.github.io` 이름으로 공개 저장소를 만듭니다.
2. 저장소 Settings → Pages → Source 를 **GitHub Actions** 로 바꿉니다.
3. `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml` 이 빌드해서 올립니다.

저장소 이름이 `jeonjuseong11.github.io` 가 아니면 주소에 `/저장소이름` 이 붙어서 `next.config.ts` 에 `basePath` 를 넣어야 합니다.
