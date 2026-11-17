import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// 링크를 공유할 때 뜨는 미리보기 이미지. 빌드 때 한 번 만들어집니다.
export const dynamic = "force-static";
export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // 기본 폰트에는 한글이 없어서 Pretendard 를 직접 읽어 넣습니다.
  const font = (weight: string) =>
    readFile(join(process.cwd(), `node_modules/pretendard/dist/public/static/Pretendard-${weight}.otf`));
  const [bold, regular] = await Promise.all([font("Bold"), font("Regular")]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#f6f4ef",
        color: "#1c1b18",
        fontFamily: "Pretendard",
      }}
    >
      {/* 문장마다 줄을 바꿔 단어 중간에서 끊기지 않게 합니다. */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 62,
          fontWeight: 700,
          lineHeight: 1.35,
          letterSpacing: -1.5,
        }}
      >
        {profile.tagline.split(/(?<=[.,]) /).map((line) => (
          <div key={line} style={{ display: "flex" }}>
            {line}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", borderTop: "2px solid #dcd9d1", paddingTop: 32 }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 30, color: "#6f6c64", marginLeft: 20 }}>{profile.role}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: bold, weight: 700, style: "normal" },
        { name: "Pretendard", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
