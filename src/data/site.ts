// 배포 주소. 공유 미리보기 이미지와 사이트맵의 절대 주소에 쓰입니다.
// Vercel 에서는 자동으로 잡히고, 다른 곳에 올릴 때는 NEXT_PUBLIC_SITE_URL 환경변수로 지정합니다.
const configured =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

// 주소 없이 배포하면 사이트맵과 공유 이미지에 localhost 가 박힌 채로 나갑니다.
// 배포 환경(CI)에서는 빌드를 멈추고, 내 컴퓨터에서 빌드할 때는 경고만 냅니다.
if (!configured && process.env.NODE_ENV === "production") {
  const message = "배포 주소가 없습니다. NEXT_PUBLIC_SITE_URL 환경변수에 사이트 주소를 넣어 주세요.";
  if (process.env.CI) throw new Error(message);
  console.warn(`[site] ${message} 지금은 http://localhost:3000 으로 만듭니다.`);
}

export const siteUrl = configured ?? "http://localhost:3000";
