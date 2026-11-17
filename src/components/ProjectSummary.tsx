import Link from "next/link";
import { ViewTransition } from "react";
import { type Project, projectHref } from "@/data/projects";
import BulletList from "./BulletList";

// 메인 페이지의 프로젝트 요약. 사례 전문은 /projects/[id] 상세 페이지에 있습니다.
export default function ProjectSummary({ project }: { project: Project }) {
  const href = projectHref(project.id);
  return (
    <article id={project.id}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        {/* 상세 페이지의 제목과 같은 name 이라, 이동할 때 제목이 그 자리로 이어집니다. */}
        <ViewTransition name={`project-title-${project.id}`} share="morph" default="none">
          <h3 className="text-lg font-bold tracking-tight">
            <Link href={href} className="transition-colors hover:text-accent">
              {project.title}
            </Link>
          </h3>
        </ViewTransition>
        <p className="text-sm tabular-nums text-muted">{project.period}</p>
      </div>
      <p className="mt-1.5 font-semibold leading-relaxed">{project.headline}</p>

      <p className="mt-5 leading-[1.8] text-soft">{project.summary}</p>
      <BulletList items={project.highlights} className="mt-4 font-medium" />
      <p className="mt-5 text-sm leading-relaxed text-muted">{project.stack.join(" · ")}</p>

      <p className="mt-5">
        <Link href={href} className="link font-semibold">
          사례 {project.cases.length}건 자세히 보기
        </Link>
      </p>
    </article>
  );
}
