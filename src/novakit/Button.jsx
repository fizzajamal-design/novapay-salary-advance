/**
 * Button — NovaKit Lite
 * Variants: primary | secondary | link
 * Sizes: md | lg (ignored for "link", which is inline)
 * States: default, pressed (active), disabled, loading
 */
function Spinner({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 animate-spin motion-reduce:animate-none ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon = null,
  iconPosition = "left",
  onClick,
  type = "button",
  className = "",
}) {
  const isDisabled = disabled || loading;

  if (variant === "link") {
    return (
      <button
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        onClick={onClick}
        className={
          "inline-flex items-center justify-center gap-1 min-h-11 py-2 font-semibold " +
          "text-brand hover:underline focus-visible:underline active:text-brand-pressed " +
          "disabled:text-neutral-300 disabled:no-underline disabled:cursor-not-allowed " +
          "motion-reduce:transition-none " +
          (size === "lg" ? "text-body" : "text-caption") +
          " " +
          className
        }
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            {icon && iconPosition === "left" ? icon : null}
            {children}
            {icon && iconPosition === "right" ? icon : null}
          </>
        )}
      </button>
    );
  }

  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-transform select-none w-full " +
    "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 " +
    "motion-reduce:transition-none motion-reduce:active:scale-100";

  const sizes = {
    md: "h-11 px-4 text-body",
    lg: "h-14 px-5 text-title",
  };

  const variants = {
    primary: "bg-brand text-white active:bg-brand-pressed",
    secondary:
      "bg-white text-brand border border-brand active:bg-brand-100 disabled:border-neutral-300",
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}
