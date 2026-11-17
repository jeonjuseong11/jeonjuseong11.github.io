"use client";

import type { ComponentProps, MouseEvent } from "react";

// 같은 페이지 안의 위치로 가는 링크. 보통의 #링크는 누를 때마다 방문 기록이 하나씩 쌓여서,
// 뒤로가기가 이전 페이지가 아니라 이전 스크롤 위치로 가게 됩니다. 기록을 쌓지 않고 주소만 바꿉니다.
export default function AnchorLink({ id, onClick, ...props }: { id: string } & Omit<ComponentProps<"a">, "href">) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // 새 탭으로 열기 같은 동작은 브라우저에 맡깁니다.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    location.replace(`#${id}`);
  }
  return <a href={`#${id}`} {...props} onClick={handleClick} />;
}
