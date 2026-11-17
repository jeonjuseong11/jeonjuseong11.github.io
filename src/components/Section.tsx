import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  className = "",
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`mt-16 border-t border-line pt-8 sm:mt-20 ${className}`}>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
