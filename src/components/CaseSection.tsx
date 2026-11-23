import { ViewTransition } from "react";
import type { Case } from "@/data/projects";

function Paragraphs({ text }: { text: string }) {
  return text.split("\n\n").map((p) => <p key={p}>{p}</p>);
}

function CaseTable({ table }: { table: NonNullable<Case["table"]> }) {
  return (
    <div className="overflow-x-auto pt-1">
      <table className="w-full text-left text-[15px] leading-relaxed">
        <caption className="pb-2 text-left text-sm font-semibold text-ink">{table.caption}</caption>
        <thead>
          <tr className="text-sm text-muted">
            {table.head.map((h, i) => (
              <th key={i} scope="col" className="border-b border-line py-2 pr-4 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(([first, ...rest], i) => (
            <tr key={i} className="border-b border-line align-top">
              <th scope="row" className="whitespace-nowrap py-2.5 pr-4 font-medium text-ink">
                {first}
              </th>
              {rest.map((cell, j) => (
                <td key={j} className="py-2.5 pr-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 상세 페이지의 사례 하나. 문제·해결·결과 중 내용이 있는 것만 보여주고, 표는 해결 아래에 붙습니다.
// titleName 은 화면 전환에서 메인의 대표 사례 제목과 짝짓는 이름입니다.
export default function CaseSection({ id, titleName, item }: { id: string; titleName: string; item: Case }) {
  const rows = [
    { label: "문제", text: item.problem },
    { label: "해결", text: item.solution, table: item.table },
    { label: "결과", text: item.result },
  ].filter((row) => row.text);

  return (
    <section id={id} className="mt-12 border-t border-line pt-7">
      <ViewTransition name={titleName} share="morph" default="none">
        <h2 className="w-fit text-xl font-bold tracking-tight">{item.title}</h2>
      </ViewTransition>
      {item.note && <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.note}</p>}

      {item.body && (
        <div className="mt-5 space-y-3 leading-[1.8] text-soft">
          <Paragraphs text={item.body} />
        </div>
      )}

      <dl className="mt-5 grid gap-x-6 gap-y-4 leading-[1.8] sm:grid-cols-[2.5rem_minmax(0,1fr)]">
        {rows.map(({ label, text, table }) => (
          <div key={label} className="contents">
            <dt className="text-sm font-semibold leading-[inherit] text-muted">{label}</dt>
            <dd className="space-y-3 text-soft">
              <Paragraphs text={text!} />
              {table && <CaseTable table={table} />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
