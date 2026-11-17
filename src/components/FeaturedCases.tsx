import Link from "next/link";
import { featured } from "@/data/profile";
import { caseHref, getProject } from "@/data/projects";

// 메인에 먼저 보여주는 대표 사례. 제목을 누르면 상세 페이지의 그 사례 위치로 갑니다.
export default function FeaturedCases() {
  return (
    <ul>
      {featured.map((f) => (
        <li key={f.caseTitle} className="border-t border-line py-5 first:border-t-0 first:pt-0 last:pb-0">
          <h3 className="text-lg font-bold tracking-tight">
            <Link href={caseHref(f.project, f.caseTitle)} className="transition-colors hover:text-accent">
              {f.caseTitle}
            </Link>
          </h3>
          <p className="mt-2 leading-[1.8] text-soft">{f.lead}</p>
          <p className="mt-2 text-sm text-muted">{getProject(f.project).title}</p>
        </li>
      ))}
    </ul>
  );
}
