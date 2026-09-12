/**
 * Card — DESIGN.md surface container
 * Variants: default | filled | elevated
 * Padding: s | m | l
 */
export default function Card({
  children,
  variant = "default",
  padding = "l",
  className = "",
}) {
  const variants = {
    default:
      "bg-[var(--color-bg-surface)] border border-[var(--color-border-neutral-primary)]",
    filled:
      "bg-[var(--color-bg-surface-subtle)] border border-transparent",
    elevated:
      "bg-[var(--color-bg-surface)] shadow-[var(--shadow-card)]",
  };

  const paddings = {
    s: "p-2",
    m: "p-3",
    l: "p-4",
  };

  return (
    <div
      className={`rounded-[var(--radius-l)] ${variants[variant]} ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
