import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 HTML로 내보내서 Vercel, GitHub Pages 어디든 올릴 수 있게 합니다.
  output: "export",
  images: { unoptimized: true },
  // /career 를 career/index.html 로 내보냅니다. GitHub Pages 는 career.html 과 career/ 폴더가 같이 있으면 주소를 못 찾습니다.
  trailingSlash: true,
};

export default nextConfig;
