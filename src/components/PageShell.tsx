import { type ReactNode, ViewTransition } from "react";
import Sidebar from "./Sidebar";
import type { TocItem } from "@/lib/useCurrentSection";
import Toc from "./Toc";

// 모든 페이지가 쓰는 틀: 왼쪽 사이드바와 오른쪽 본문. 페이지를 옮기면 본문만 바뀌는 효과가 납니다.
export default function PageShell({
  pageKey,
  home = false,
  links,
  toc,
  children,
}: {
  pageKey: string; // 페이지마다 다른 값. 이 값이 바뀌어야 본문이 새로 들어오는 것으로 처리돼 전환 효과가 납니다.
  home?: boolean;
  links: ReactNode;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    // 페이지를 옮길 때 이전 본문은 흐려지며 사라지고, 새 본문은 아래에서 살짝 올라옵니다.
    // ViewTransition 은 다른 태그 안쪽에 있으면 들어오고 나가는 효과가 동작하지 않아서 가장 바깥에 둡니다.
    <ViewTransition key={pageKey} enter="page-in" exit="page-out" default="none">
      <div id="top" className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-20">
        <Sidebar home={home} links={links}>
          {/* 상세 페이지의 사례 목차는 길어서 좁은 화면에서는 숨깁니다. */}
          <Toc items={toc} hideOnMobile={!home} />
        </Sidebar>
        <main className="max-w-[46rem] pb-16 pt-10 lg:pt-14">
          {children}
          {/* 페이지 끝 표시. 목차가 여기를 보고 마지막 항목을 켭니다. */}
          <div id="page-end" />
        </main>
      </div>
    </ViewTransition>
  );
}
