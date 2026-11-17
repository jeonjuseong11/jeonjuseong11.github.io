import Link from "next/link";
import { profile } from "@/data/profile";
import { projectHref } from "@/data/projects";
import { splitByPhrases } from "@/lib/splitByPhrases";
import DefList from "./DefList";

// 소개 첫 문단. story.links 에 적힌 구절만 해당 프로젝트 상세로 가는 링크가 됩니다.
function Story() {
  const { text, links } = profile.story;
  const parts = splitByPhrases(
    text,
    links.map((l) => l.phrase),
  );
  return (
    <p className="text-ink">
      {parts.map((part, i) => {
        const link = links.find((l) => l.phrase === part);
        return link ? (
          <Link key={i} href={projectHref(link.project)} className="link">
            {part}
          </Link>
        ) : (
          part
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="소개">
      <p className="text-2xl font-bold leading-[1.45] tracking-tight text-balance sm:text-[1.75rem]">
        {profile.tagline}
      </p>
      <DefList
        items={profile.facts.map((f) => ({
          label: f.label,
          value: f.href ? (
            <Link href={f.href} className="link">
              {f.value}
            </Link>
          ) : (
            f.value
          ),
        }))}
        cols="sm:grid-cols-[3rem_1fr]"
        className="mt-8"
      />
      <div className="mt-8 space-y-4 leading-[1.8] text-soft">
        <Story />
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
