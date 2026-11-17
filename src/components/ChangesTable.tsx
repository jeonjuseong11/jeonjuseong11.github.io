import Link from "next/link";
import { changes } from "@/data/profile";
import { projectHref } from "@/data/projects";

// 전후 수치 표. 화면에 들어오는 만큼 "전" 값에 취소선이 그어집니다 (globals.css 의 .ledger).
export default function ChangesTable() {
  return (
    <table className="ledger w-full text-left">
      <caption className="sr-only">프로젝트별 개선 전후 수치</caption>
      <thead>
        <tr className="text-sm text-muted">
          <th scope="col" className="pb-3 font-medium">
            항목
          </th>
          <th scope="col" className="pb-3 text-right font-medium">
            전
          </th>
          <th scope="col" className="w-24 pb-3 text-right font-medium sm:w-32">
            후
          </th>
        </tr>
      </thead>
      <tbody>
        {changes.map((c) => (
          <tr key={c.label} className="border-t border-line align-top">
            <th scope="row" className="py-4 pr-4 font-medium">
              <Link href={projectHref(c.project)} className="link">
                {c.label}
              </Link>
              <span className="mt-1 block text-sm font-normal leading-snug text-muted">{c.basis}</span>
            </th>
            <td className="whitespace-nowrap py-4 text-right tabular-nums text-muted">
              <del>{c.before}</del>
            </td>
            <td className="whitespace-nowrap py-4 text-right text-lg font-bold tabular-nums text-accent">
              <ins>{c.after}</ins>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
