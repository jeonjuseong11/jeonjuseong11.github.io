import Link from "next/link";
import { ViewTransition } from "react";
import { featured } from "@/data/profile";
import { caseHref, caseTitleName, getProject } from "@/data/projects";

// 메인에 먼저 보여주는 대표 사례. 제목을 누르면 상세 페이지의 그 사례 위치로 갑니다.
export default function FeaturedCases() {
  return (
    <ul>
      {featured.map((f) => {
        const project = getProject(f.project);
        const index = project.cases.findIndex((c) => c.title === f.caseTitle);
        return (
          <li key={f.caseTitle} className="border-t border-line py-5 first:border-t-0 first:pt-0 last:pb-0">
            {/* 상세 페이지의 사례 제목과 같은 name 이라, 이동할 때 제목이 그 자리로 이어집니다. */}
            <ViewTransition name={caseTitleName(f.project, index)} share="morph" default="none">
              <h3 className="w-fit text-lg font-bold tracking-tight">
                <Link href={caseHref(f.project, f.caseTitle)} className="transition-colors hover:text-accent">
                  {f.caseTitle}
                </Link>
              </h3>
            </ViewTransition>
            <p className="mt-2 leading-[1.8] text-soft">{f.lead}</p>
            <p className="mt-2 text-sm text-muted">{project.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
