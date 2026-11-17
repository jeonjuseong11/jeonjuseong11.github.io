import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import BulletList from "@/components/BulletList";
import CaseSection from "@/components/CaseSection";
import DefList from "@/components/DefList";
import PageShell from "@/components/PageShell";
import { profile } from "@/data/profile";
import { caseAnchor, projectHref, projects } from "@/data/projects";

type Props = { params: Promise<{ id: string }> };

// 목록에 없는 id 는 404 로 보냅니다.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return project ? { title: `${project.title} | ${profile.name}`, description: project.summary } : {};
}

function Neighbor({ label, id, title, align = "" }: { label: string; id: string; title: string; align?: string }) {
  return (
    <p className={align}>
      <span className="block text-sm text-muted">{label}</span>
      <Link href={projectHref(id)} className="link font-semibold">
        {title}
      </Link>
    </p>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[index - 1];
  const next = projects[index + 1];
  const meta = [
    { label: "서비스", value: project.service },
    { label: "역할", value: project.role },
    { label: "기술", value: project.stack.join(" · ") },
  ].filter((row) => row.value);
  const toc = [
    { id: "overview", label: "개요" },
    ...project.cases.map((c, i) => ({ id: caseAnchor(i), label: c.title })),
  ];
  const backLink = (
    <li>
      <Link href="/#projects" className="link">
        프로젝트 목록으로
      </Link>
    </li>
  );

  return (
    <PageShell links={backLink} toc={toc}>
      <section id="overview">
        {/* 메인의 프로젝트 제목과 같은 name 이라, 이동할 때 제목이 이 자리로 이어집니다. */}
        <ViewTransition name={`project-title-${project.id}`} share="morph" default="none">
          <h1 className="w-fit text-2xl font-bold leading-[1.35] tracking-tight text-balance sm:text-3xl">
            {project.title}
          </h1>
        </ViewTransition>
        <p className="mt-3 text-sm tabular-nums text-muted">{project.period}</p>
        <p className="mt-8 leading-[1.8] text-soft">{project.summary}</p>
        <DefList items={meta} cols="sm:grid-cols-[4rem_1fr]" className="mt-8" />

        <h2 className="mt-10 text-xl font-bold tracking-tight">주요 성과</h2>
        {project.outcome && <p className="mt-4 leading-[1.8] text-soft">{project.outcome}</p>}
        <BulletList items={project.highlights} className="mt-4 font-medium" />
      </section>

      {project.cases.map((c, i) => (
        <CaseSection key={c.title} id={caseAnchor(i)} item={c} />
      ))}

      <nav
        aria-label="다른 프로젝트"
        className="mt-16 flex flex-wrap justify-between gap-x-8 gap-y-4 border-t border-line pt-8"
      >
        {prev ? <Neighbor label="이전 프로젝트" id={prev.id} title={prev.title} /> : <span />}
        {next && <Neighbor label="다음 프로젝트" id={next.id} title={next.title} align="text-right" />}
      </nav>
    </PageShell>
  );
}
