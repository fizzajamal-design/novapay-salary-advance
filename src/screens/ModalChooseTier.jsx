import { BottomSheet, Button, Icon } from "../novakit";

const TIER_INFO = [
  { amount: "Rs 5,000", note: "Available to every approved wallet" },
  { amount: "Rs 10,000", note: "Your current approved tier" },
  { amount: "Rs 15,000", note: "Unlocks after 3 on-time repayments" },
];

export default function ModalChooseTier({ open, onClose }) {
  return (
    <BottomSheet open={open} onClose={onClose}>
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-text-primary)]">
          How your approved tier works
        </h2>
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
      Your offered limit is determined by your current risk assessment and repayment history. You can choose any available tier up to your maximum approved limit. Taking a lower amount helps keep your total repayment low, while consistent on-time repayments can unlock higher tiers for future advances.      </p>

      <ul className="mt-4 space-y-3">
        {TIER_INFO.map((tier) => (
          <li key={tier.amount} className="flex items-start gap-3">
            <span className="mt-0.5 text-[var(--color-text-brand)]">
              <Icon name="checkCircle" size={18} />
            </span>
            <div>
              <div className="text-[16px] leading-[1.5] font-medium text-[var(--color-text-primary)]">
                {tier.amount}
              </div>
              <div className="text-[12px] leading-[1.3] text-[var(--color-text-secondary)]">
                {tier.note}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <Button variant="primary" size="l" onClick={onClose}>
          Got it
        </Button>
      </div>
    </BottomSheet>
  );
}
