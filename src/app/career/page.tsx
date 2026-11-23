import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { careers, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `경력 | ${profile.name}`,
  description: careers.map((c) => `${c.company} ${c.period}`).join(" · "),
};

export default function CareerPage() {
  const toc = careers.map((c, i) => ({ id: `company-${i + 1}`, label: c.company }));
  const backLink = (
    <li>
      <Link href="/" className="link">
        메인으로
      </Link>
    </li>
  );

  return (
    <PageShell pageKey="career" links={backLink} toc={toc}>
      <h1 className="text-2xl font-bold leading-[1.35] tracking-tight sm:text-3xl">경력</h1>

      {careers.map((c, i) => (
        <section key={c.company} id={`company-${i + 1}`} className="mt-10 border-t border-line pt-7">
          <h2 className="text-xl font-bold tracking-tight">{c.company}</h2>
          <p className="mt-2 text-sm tabular-nums text-muted">
            {c.team} · {c.title} · {c.period}
          </p>
          <p className="mt-5 leading-[1.8] text-soft">{c.summary}</p>

          {/* 데이터는 시간 순서로 적고, 화면에는 최근 것부터 보여 줍니다. */}
          {[...c.history].reverse().map(({ year, events }) => (
            <div key={year} className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-[4rem_1fr]">
              <h3 className="text-lg font-bold tabular-nums tracking-tight">{year}</h3>
              {/* 세로선 위에 점을 찍는 연혁 목록 */}
              <ol className="space-y-6 border-l border-line pl-6">
                {[...events].reverse().map((e) => (
                  <li
                    key={e.text}
                    className="relative before:absolute before:-left-[calc(1.5rem+4.5px)] before:top-[0.55rem] before:h-2 before:w-2 before:rounded-full before:bg-accent"
                  >
                    <p className="text-sm font-semibold tabular-nums text-muted">
                      {e.month === "현재" ? e.month : `${e.month}월`}
                    </p>
                    <p className="mt-1 leading-[1.8] text-soft">{e.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      ))}
    </PageShell>
  );
}
