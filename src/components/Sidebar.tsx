import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import AnchorLink from "./AnchorLink";
import Avatar from "./Avatar";

// 왼쪽 고정 영역: 사진, 이름, 링크, 목차. 서버 컴포넌트이고 목차(children)만 클라이언트에서 동작합니다.
// 메인(home)에서는 이름이 페이지 제목(h1)이고, 그 밖에서는 메인으로 가는 링크입니다.
export default function Sidebar({
  home = false,
  links,
  children,
}: {
  home?: boolean;
  links: ReactNode;
  children: ReactNode;
}) {
  const Name = home ? "h1" : "p";
  return (
    <header className="pt-10 lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto lg:py-14">
      <Avatar className="mb-4 h-24 w-24" />
      <Name className="text-xl font-bold tracking-tight">
        {home ? <AnchorLink id="top">{profile.name}</AnchorLink> : <Link href="/">{profile.name}</Link>}
      </Name>
      <p className="mt-1 text-muted">{profile.role}</p>
      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm lg:flex-col">{links}</ul>
      {children}
    </header>
  );
}
