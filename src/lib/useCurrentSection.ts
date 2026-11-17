"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string; children?: { id: string; label: string }[] };

// 스크롤 위치를 보고 "지금 읽는 섹션"의 id 를 돌려줍니다. active 는 최상위 항목, child 는 그 하위 항목입니다.
// 화면을 어떻게 그릴지는 모르고, id 판정만 합니다.
export function useCurrentSection(items: TocItem[], endId = "page-end") {
  const [active, setActive] = useState("");
  const [child, setChild] = useState("");

  useEffect(() => {
    const subItems = items.flatMap((i) => i.children ?? []);

    // 화면 위쪽 40% 안에 걸쳐 있는 섹션들 중 가장 아래 것이 "지금 읽는 곳"입니다.
    // 좁은 기준선 하나로 판정하면 짧은 섹션은 기준선에 닿지 못해 건너뛰게 됩니다.
    const inView = new Set<string>();
    // 마지막 섹션이 짧아 위쪽까지 올라오지 못하는 페이지도 있어서, 페이지 끝이 보이면 마지막 항목으로 칩니다.
    let atEnd = false;

    const lastInView = (list: { id: string }[]) => {
      for (let i = list.length - 1; i >= 0; i--) if (inView.has(list[i].id)) return list[i];
    };
    // 두 감시자가 각자 상태를 바꾸면 순서에 따라 결과가 달라지므로, 판정은 이 함수 한 곳에서만 합니다.
    const update = () => {
      const current = atEnd ? items[items.length - 1] : lastInView(items);
      const currentChild = lastInView(subItems);
      if (current) setActive(current.id);
      if (currentChild) setChild(currentChild.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inView.add(e.target.id);
          else inView.delete(e.target.id);
        }
        update();
      },
      { rootMargin: "0px 0px -60% 0px" },
    );
    for (const { id } of [...items, ...subItems]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const end = document.getElementById(endId);
    const endObserver = new IntersectionObserver(([e]) => {
      atEnd = e.isIntersecting;
      update();
    });
    if (end) endObserver.observe(end);

    return () => {
      observer.disconnect();
      endObserver.disconnect();
    };
  }, [items, endId]);

  return { active, child };
}
