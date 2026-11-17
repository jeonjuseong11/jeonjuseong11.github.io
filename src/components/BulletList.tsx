export default function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`list-disc space-y-1.5 pl-5 marker:text-muted ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
