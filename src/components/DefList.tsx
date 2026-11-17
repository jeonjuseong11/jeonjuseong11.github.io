import type { ReactNode } from "react";

// "라벨 – 값" 줄 목록. cols 에는 라벨 칸 너비를 정하는 클래스를 넘깁니다. 예: "sm:grid-cols-[9rem_1fr]"
export default function DefList({
  items,
  cols,
  className = "",
}: {
  items: { label: string; value: ReactNode }[];
  cols: string;
  className?: string;
}) {
  return (
    <dl className={className}>
      {items.map(({ label, value }) => (
        <div key={label} className={`grid gap-x-6 gap-y-1 border-t border-line py-3 leading-[1.8] ${cols}`}>
          <dt className="text-sm font-semibold leading-[inherit] text-muted">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
