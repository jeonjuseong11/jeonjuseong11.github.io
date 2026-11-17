// 프로젝트를 뺀 나머지 콘텐츠(소개, 성과 표, 기술, 학력)는 이 파일에서 관리합니다.
// 프로젝트와 사례는 projects.ts, 배포 주소는 site.ts 에 있습니다.

export type Education = {
  period: string;
  title: string;
  detail?: string;
};

export const profile = {
  name: "전주성",
  nameEn: "Jeon Juseong",
  role: "Frontend Engineer",
  tagline: "불편함에 귀 기울이고 함께 해결하며, 속으로 뿌듯해하는 개발자입니다.",
  // 소개 첫 문단. links 의 phrase 는 text 안의 구절과 글자까지 같아야 하고, 해당 프로젝트 상세로 연결됩니다.
  story: {
    text: '제가 만든 것으로 사람들의 삶이 편해지는, 그렇게 다른 사람에게 영향을 주는 삶을 살고 싶습니다. 개발하면서 가장 좋았던 순간들은 기술적으로 어려운 문제를 풀었을 때가 아니라, 제가 만든 것이 누군가의 하루를 실제로 바꾸는 걸 봤을 때였습니다. 매일 하던 수작업이 사라지고, 기다리던 화면이 바로 뜨는 걸 옆에서 지켜볼 때 "내가 다른 사람에게 영향을 줄 수 있는 사람이구나"라는 걸 실감했습니다.',
    links: [
      { phrase: "매일 하던 수작업이 사라지고", project: "daily-report" },
      { phrase: "기다리던 화면이 바로 뜨는", project: "intranet" },
    ],
  },
  email: "jeonjuseong11@gmail.com",
  github: "https://github.com/jeonjuseong11",
  // 이력서 PDF를 public/resume.pdf 로 넣고 "/resume.pdf" 로 바꾸면 링크가 나타납니다.
  resumeUrl: null as string | null,
  // 첫 화면에서 한눈에 보이는 사실
  facts: [
    { label: "경력", value: "프론트엔드 3년 차 · 2024년 1월부터 서울이동통신 웹개발팀", href: "/career" },
    {
      label: "기술",
      value: "React · TypeScript · Next.js · React Native · TanStack Query · STOMP·SSE · Vitest · Playwright",
    },
  ],
  about: [
    "고객 문의를 직접 받아 반복 문의를 기능으로 줄였고, 레거시는 동료와 규칙을 합의해 이관했습니다. 실시간 통신(STOMP·SSE)과 토큰 인증의 동시성 문제, 번들 성능 최적화를 주로 다뤘으며, 고친 버그는 테스트 코드로 재현해 남깁니다.",
    "같은 유형의 버그가 반복되면 문서로 정리하고, 검사 도구와 규칙으로 만들어 커밋 전에 걸리게 했습니다.",
  ],
};

// 전후가 분명한 성과만 모은 표입니다. project 는 해당 프로젝트 id 로 연결됩니다.
export const changes = [
  {
    label: "하루 충전 확인 문의",
    basis: "직접 응대한 동일 유형 문의 건수 기준, 2026.11 현재 유지",
    before: "약 20건",
    after: "5~6건",
    project: "billing-portal",
  },
  {
    label: "문자 상담 웹 첫 로딩 번들",
    basis: "vite 빌드 entry 기준, gzip 1,182 → 209kB",
    before: "3,786kB",
    after: "703kB",
    project: "a015-platform",
  },
  {
    label: "키오스크 첫 로딩 JS",
    basis: "vite 빌드 기준, gzip 898 → 228kB",
    before: "2,973kB",
    after: "672kB",
    project: "cafe-order",
  },
  {
    label: "순환 import",
    basis: "1,500개 파일 레거시, dependency-cruiser 기준",
    before: "52개",
    after: "0개",
    project: "a015-platform",
  },
  {
    label: "FSD 레이어 위반",
    basis: "dependency-cruiser 기준",
    before: "217개",
    after: "13개",
    project: "a015-platform",
  },
  {
    label: "첫 주문 쿠폰 미적용 비율",
    basis: "쿠폰이 회원 할인보다 유리한 첫 주문, 운영 DB 근사치",
    before: "19%",
    after: "8.5%",
    project: "cafe-order",
  },
  {
    label: "주소록 이름 인덱스 생성 시간",
    basis: "주소록 7.5만 건, 갤럭시 실측",
    before: "0.63초",
    after: "0.09초",
    project: "a015-app",
  },
  {
    label: "인트라넷 페이지 이동 시간",
    basis: "레거시와 차세대 병행 운영 비교",
    before: "약 3~5초",
    after: "약 1~2초",
    project: "intranet",
  },
  {
    label: "의존성 보안 취약점",
    basis: "차세대 인트라넷",
    before: "117개",
    after: "12개",
    project: "intranet",
  },
];

// 메인에 먼저 보여줄 대표 사례. caseTitle 은 해당 프로젝트 cases 의 title 과 같아야 합니다.
export const featured = [
  {
    project: "billing-portal",
    caseTitle: "매일 반복되던 충전 확인 문의",
    lead: "고객 전화를 직접 받다가 같은 확인 문의가 하루 약 20건 반복되는 것을 보고, 고객이 웹에서 처리 상태를 바로 확인하도록 바꿨습니다. 문의는 5~6건으로 줄었습니다.",
  },
  {
    project: "a015-platform",
    caseTitle: "단일 탭 제한을 철회하고 멀티탭 동기화로 전환",
    lead: "직접 도입한 단일 탭 제한이 상담 업무를 막는다는 문의를 받고 3일 만에 철회했습니다. 여러 탭을 그대로 쓰면서도 메시지와 상태가 맞도록 다시 만들었습니다.",
  },
  {
    project: "a015-platform",
    caseTitle: "동료를 설득해 테스트 도입",
    lead: "반복되는 오류 사례를 근거로 동료를 설득해 테스트를 도입했습니다. 0개에서 시작해 유닛 테스트 1,948개와 E2E 56개가 됐습니다.",
  },
];

// 경력 페이지(/career)에 나옵니다. 회사가 늘면 맨 위에 항목을 하나 더 넣습니다(최근 회사가 위).
export const careers = [
  {
    company: "서울이동통신",
    team: "웹개발팀",
    title: "프론트엔드 개발자",
    period: "2024.01 – 재직 중",
    summary:
      "웹 4개와 앱 1개를 개발·운영하고 있습니다. 프론트엔드 2명·백엔드 2명 팀에서 시작해 지금은 프론트엔드를 혼자 맡고 있습니다.",
    // 연혁. 연도별로 묶고, 한 일을 시간 순서로 적습니다. 화면에는 최근 것부터 나옵니다.
    history: [
      {
        year: "2024",
        events: [
          { month: "01", text: "서울이동통신 웹개발팀 입사. 프론트엔드 2명·백엔드 2명 팀으로 시작했습니다." },
          {
            month: "01",
            text: "고객 통합 정산 포털의 프론트엔드 초기 구성과 개발을 주도했습니다. 고객 문의를 직접 받으면서, 하루 약 20건씩 반복되던 충전 확인 문의를 5~6건으로 줄였습니다.",
          },
          {
            month: "07",
            text: "레거시와 새 시스템의 비교표를 만들어 사내 인트라넷 재구축 논의에 참여했고, 66개 화면 중 33개를 개발했습니다.",
          },
        ],
      },
      {
        year: "2025",
        events: [
          {
            month: "05",
            text: "문자 발송·상담 웹 서비스를 시작했습니다. 기존 담당자가 떠나며 인수한 1,500개 파일 규모의 레거시에서, 기능 개발을 계속하면서 구조 이관과 Sentry 도입을 했습니다. 동료를 설득해 테스트를 도입하고 초기 환경을 구축했습니다.",
          },
          {
            month: "06",
            text: "카페 주문 시스템 개발에 참여했습니다. 결제를 막던 할인 계산 오류를 고치고 관리자 통계 화면을 만들었습니다.",
          },
          {
            month: "09",
            text: "문자·통화 모바일 앱의 초기 구성과 핵심 기능을 개발했습니다. 빨리 출시하려고 웹뷰 앱을 제안했고, 이후 더보기 탭을 네이티브로 옮겼습니다.",
          },
        ],
      },
      {
        year: "2026",
        events: [
          {
            month: "01",
            text: "인계받은 일일 보고 업무를 스크립트로 만들어, 매일 약 20분 걸리던 조회·입력이 오전 9시에 자동으로 실행되게 했습니다.",
          },
          { month: "현재", text: "웹 4개와 앱 1개의 프론트엔드를 혼자 맡아 개발·운영하고 있습니다." },
        ],
      },
    ],
  },
];

export const skills = [
  { group: "Language", items: ["TypeScript", "JavaScript", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "React Native", "Vite", "Tailwind CSS", "styled-components"] },
  { group: "State · Data", items: ["TanStack Query", "Zustand", "Jotai", "Recoil(레거시)", "React Hook Form", "Zod"] },
  { group: "Realtime", items: ["WebSocket (STOMP)", "SSE", "BroadcastChannel", "Firebase FCM"] },
  { group: "Quality", items: ["Playwright", "Jest", "Vitest", "MSW", "Storybook", "Biome", "dependency-cruiser"] },
  { group: "Monitoring", items: ["Sentry", "Firebase Crashlytics"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MariaDB", "Docker"] },
];

export const education: Education[] = [
  {
    period: "2025.03 – 2026.02",
    title: "동양미래대학교 인공지능소프트웨어학과",
    detail: "전공심화과정 학사 졸업 (재직 중 병행)",
  },
  {
    period: "2019 – 2024",
    title: "대림대학교 컴퓨터정보학부",
    detail: "웹 애플리케이션 전공 전문학사 졸업",
  },
];

export const nav = [
  { id: "about", label: "소개" },
  { id: "changes", label: "성과" },
  { id: "featured", label: "대표 사례" },
  { id: "projects", label: "프로젝트" },
  { id: "skills", label: "기술" },
  ...(education.length > 0 ? [{ id: "education", label: "학력" }] : []),
  { id: "contact", label: "연락" },
];
