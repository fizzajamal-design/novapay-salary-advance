/**
 * AmountText — NovaKit Lite
 * Formats an integer PKR amount, e.g. 10000 -> "Rs 10,000".
 */
export default function AmountText({ amount, size = "title", className = "" }) {
  const sizes = {
    display: "text-[36px] leading-[1.2] font-bold",
    title: "text-title",
    body: "text-body",
  };
  const formatted = new Intl.NumberFormat("en-PK").format(amount ?? 0);
  return (
    <span className={`${sizes[size] || sizes.title} text-[var(--color-text-primary)] ${className}`}>
      Rs {formatted}
    </span>
  );
}
