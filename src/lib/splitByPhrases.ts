const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// 글을 주어진 구절 기준으로 쪼갭니다. 구절은 결과 배열에 그대로 한 조각으로 남습니다.
//   splitByPhrases("가 나 다", ["나"]) → ["가 ", "나", " 다"]
// 구절이 글에 없으면 오류를 냅니다. 한 글자만 달라도 조용히 지나가면 찾기 어렵기 때문입니다.
export function splitByPhrases(text: string, phrases: string[]): string[] {
  for (const phrase of phrases) {
    if (!text.includes(phrase)) throw new Error(`글에 "${phrase}" 구절이 없습니다.`);
  }
  if (phrases.length === 0) return [text];
  return text.split(new RegExp(`(${phrases.map(escapeRegExp).join("|")})`)).filter(Boolean);
}
