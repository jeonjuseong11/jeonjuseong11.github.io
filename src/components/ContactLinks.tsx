import { profile } from "@/data/profile";

// 사이드바에 들어가는 연락 링크. 이력서는 주소를 넣었을 때만 보입니다.
export default function ContactLinks() {
  return (
    <>
      <li>
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
      </li>
      <li>
        <a href={profile.github} target="_blank" rel="noreferrer" className="link">
          GitHub
        </a>
      </li>
      {profile.resumeUrl && (
        <li>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="link">
            이력서 PDF
          </a>
        </li>
      )}
    </>
  );
}
