import About from "@/components/About";
import ChangesTable from "@/components/ChangesTable";
import ContactLinks from "@/components/ContactLinks";
import DefList from "@/components/DefList";
import FeaturedCases from "@/components/FeaturedCases";
import PageShell from "@/components/PageShell";
import ProjectSummary from "@/components/ProjectSummary";
import Section from "@/components/Section";
import { education, nav, profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  // 목차의 "프로젝트" 아래에 프로젝트 제목들을 달아 줍니다.
  const toc = nav.map((n) =>
    n.id === "projects" ? { ...n, children: projects.map((p) => ({ id: p.id, label: p.title })) } : n,
  );

  return (
    <PageShell pageKey="home" home links={<ContactLinks />} toc={toc}>
      <About />

      <Section id="changes" title="주요 성과">
        <ChangesTable />
      </Section>

      <Section id="featured" title="대표 사례">
        <FeaturedCases />
      </Section>

      <Section id="projects" title="프로젝트">
        <div className="space-y-14">
          {projects.map((p) => (
            <ProjectSummary key={p.id} project={p} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="기술">
        <DefList
          items={skills.map((s) => ({ label: s.group, value: s.items.join(", ") }))}
          cols="sm:grid-cols-[9rem_1fr]"
        />
      </Section>

      {/* 학력 데이터가 있을 때만 보입니다. */}
      {education.length > 0 && (
        <Section id="education" title="학력">
          <DefList
            items={education.map((e) => ({
              label: e.period,
              value: (
                <>
                  <span className="font-semibold">{e.title}</span>
                  {e.detail && <span className="block text-soft">{e.detail}</span>}
                </>
              ),
            }))}
            cols="sm:grid-cols-[9rem_1fr]"
          />
        </Section>
      )}

      <Section id="contact" title="연락" className="lg:min-h-[70dvh]">
        <p className="leading-[1.8] text-soft">이메일로 연락 주세요.</p>
        <p className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">
          <a href={`mailto:${profile.email}`} className="link break-all">
            {profile.email}
          </a>
        </p>
      </Section>

      <footer className="mt-16 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </PageShell>
  );
}
