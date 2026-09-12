/**
 * Button — NovaKit / DESIGN.md
 * Variants: primary | secondary | ghost | danger | link
 * Sizes: m | l (md | lg aliases)
 */
function Spinner({ className = "" }) {
  return (
    <span
      className={`inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin ${className}`}
      aria-hidden="true"
    />
  );
}

export default function Button({
  children,
  variant = "primary",
  size = "m",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
  icon = null,
  iconPosition = "right",
}) {
  const isLink = variant === "link";
  const resolvedSize = size === "lg" ? "l" : size === "md" ? "m" : size;
  const isDisabled = disabled || loading;

  const base = isLink
    ? "inline-flex items-center justify-center gap-1 rounded-[var(--radius-s)] font-normal select-none min-h-11 px-1 py-2"
    : "inline-flex items-center justify-center gap-2 rounded-[var(--radius-m)] font-semibold select-none w-full active:scale-[0.98]";

  const sizes = {
    m: isLink ? "text-[14px] leading-[1.4]" : "h-11 px-4 text-[16px] leading-[1.5] font-medium",
    l: isLink ? "text-[14px] leading-[1.4]" : "h-[52px] px-5 text-[16px] leading-[1.5] font-medium",
  };

  const variants = {
    primary:
      "bg-[var(--color-bg-brand-filled)] text-[var(--color-text-on-brand)] active:bg-[var(--brand-primary-hover)] disabled:opacity-40 disabled:cursor-not-allowed",
    secondary:
      "bg-[var(--color-bg-surface)] text-[var(--color-text-brand)] border border-[var(--color-border-brand-default)] active:bg-[var(--color-bg-brand-surface)] disabled:opacity-40 disabled:border-[var(--color-border-neutral-primary)] disabled:cursor-not-allowed",
    ghost:
      "bg-transparent text-[var(--color-text-brand)] disabled:opacity-40 disabled:cursor-not-allowed",
    danger:
      "bg-[var(--color-text-danger)] text-[var(--color-text-on-brand)] disabled:opacity-40 disabled:cursor-not-allowed",
    link:
      "bg-transparent text-[var(--color-text-brand)] underline-offset-2 hover:underline focus:underline active:text-[var(--brand-primary-hover)] disabled:text-[var(--color-text-secondary)] disabled:no-underline disabled:cursor-not-allowed",
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`${base} ${sizes[resolvedSize] || sizes.m} ${variants[variant]} ${className}`}
    >
      {loading ? <Spinner /> : null}
      {!loading && icon && iconPosition === "left" ? icon : null}
      {children}
      {!loading && icon && iconPosition === "right" ? icon : null}
    </button>
  );
}
