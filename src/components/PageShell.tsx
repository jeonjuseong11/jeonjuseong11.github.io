import { type ReactNode, ViewTransition } from "react";
import Sidebar from "./Sidebar";
import type { TocItem } from "@/lib/useCurrentSection";
import Toc from "./Toc";

// 모든 페이지가 쓰는 틀: 왼쪽 사이드바와 오른쪽 본문. 페이지를 옮기면 본문만 겹쳐서 바뀝니다.
export default function PageShell({
  home = false,
  links,
  toc,
  children,
}: {
  home?: boolean;
  links: ReactNode;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <div id="top" className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-20">
      <Sidebar home={home} links={links}>
        {/* 상세 페이지의 사례 목차는 길어서 좁은 화면에서는 숨깁니다. */}
        <Toc items={toc} hideOnMobile={!home} />
      </Sidebar>
      <ViewTransition>
        <main className="max-w-[46rem] pb-16 pt-10 lg:pt-14">
          {children}
          {/* 페이지 끝 표시. 목차가 여기를 보고 마지막 항목을 켭니다. */}
          <div id="page-end" />
        </main>
      </ViewTransition>
    </div>
  );
}
