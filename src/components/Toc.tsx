"use client";

import { type TocItem, useCurrentSection } from "@/lib/useCurrentSection";
import AnchorLink from "./AnchorLink";

// 목차. 지금 읽는 항목을 굵게 표시하고, 그 항목의 하위 목록만 펼칩니다.
// 어디를 읽고 있는지는 useCurrentSection 이 판정하고, 여기서는 그리기만 합니다.
export default function Toc({ items, hideOnMobile = false }: { items: TocItem[]; hideOnMobile?: boolean }) {
  const { active, child } = useCurrentSection(items);

  return (
    <nav aria-label="목차" className={`mt-8 lg:mt-10 ${hideOnMobile ? "hidden lg:block" : ""}`}>
      <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm leading-snug lg:block lg:space-y-2.5">
        {items.map(({ id, label, children }) => {
          const open = active === id;
          return (
            <li key={id}>
              <AnchorLink
                id={id}
                aria-current={open ? "true" : undefined}
                className={`transition-colors ${open ? "font-semibold text-ink" : "text-muted hover:text-ink"}`}
              >
                {label}
              </AnchorLink>
              {/* 높이 0 ↔ 내용 높이를 grid 행으로 전환해 부드럽게 여닫습니다. 접힌 동안에는 키보드로도 들어가지 않습니다. */}
              {children && (
                <div
                  inert={!open}
                  className={`hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:grid ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-2.5 space-y-2 border-l border-line pl-3 text-[13px]">
                      {children.map((c) => (
                        <li key={c.id}>
                          <AnchorLink
                            id={c.id}
                            className={`transition-colors ${child === c.id ? "text-accent" : "text-muted hover:text-ink"}`}
                          >
                            {c.label}
                          </AnchorLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
