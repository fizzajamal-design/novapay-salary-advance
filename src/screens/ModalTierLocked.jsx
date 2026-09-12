import { BottomSheet, Button, Icon } from "../novakit";

export default function ModalTierLocked({ open, onClose }) {
  return (
    <BottomSheet open={open} onClose={onClose}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-surface-subtle)] text-[var(--color-text-secondary)]">
            <Icon name="lock" size={16} />
          </span>
          <h2 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-text-primary)]">
            Rs 15,000 is locked
          </h2>
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="h-11 w-11 -mr-2 -mt-2 flex shrink-0 items-center justify-center text-[var(--color-text-secondary)]"
        >
          <Icon name="x" size={20} />
        </button>
      </div>

      <p className="mt-2 text-[14px] leading-[1.4] text-[var(--color-text-secondary)]">
      Requesting an advance higher than your currently offered limit is not available for this cycle. Tier 3 (Rs 15,000) unlocks automatically once you complete consecutive on-time salary advance repayments.
      </p>

      <div className="mt-5">
        <Button variant="primary" size="l" onClick={onClose}>
          Got it
        </Button>
      </div>
    </BottomSheet>
  );
}
