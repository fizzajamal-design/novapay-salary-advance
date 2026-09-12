import { Icon } from "./index.js";

const TIERS = [5000, 10000, 15000];

function formatPkr(amount) {
  return `Rs ${new Intl.NumberFormat("en-PK").format(amount)}`;
}

/**
 * Loan tier selector — DESIGN.md
 * Selected uses brand border/surface; locked tiers are faded with a lock icon.
 */
export default function TierSelector({
  tiers = TIERS,
  selectedTier,
  offeredLimit,
  onSelectTier,
  onLockedTap,
}) {
  return (
    <div className="grid grid-cols-3 gap-2" role="listbox" aria-label="Advance amount">
      {tiers.map((tier) => {
        const locked = tier > offeredLimit;
        const selected = !locked && selectedTier === tier;
        return (
          <button
            key={tier}
            type="button"
            role="option"
            aria-selected={selected}
            aria-disabled={locked}
            onClick={() => (locked ? onLockedTap?.(tier) : onSelectTier(tier))}
            className={[
              "relative min-h-11 rounded-[var(--radius-m)] px-2 py-3 text-[16px] leading-[1.5] font-medium",
              locked
                ? "opacity-50 cursor-pointer bg-[var(--color-bg-surface)] border border-[var(--color-border-neutral-primary)] text-[var(--color-text-secondary)]"
                : selected
                  ? "bg-[var(--color-bg-brand-surface)] border-2 border-[var(--color-border-brand-default)] text-[var(--color-text-brand)]"
                  : "bg-[var(--color-bg-surface)] border border-[var(--color-border-neutral-primary)] text-[var(--color-text-primary)]",
            ].join(" ")}
          >
            {locked ? (
              <span className="absolute top-1 right-1 text-[var(--color-text-secondary)]">
                <Icon name="lock" size={14} />
              </span>
            ) : null}
            {formatPkr(tier)}
          </button>
        );
      })}
    </div>
  );
}
