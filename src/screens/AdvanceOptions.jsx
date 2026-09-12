import { useState } from "react";
import { AppBar, Button, Card, Icon, TierSelector, AmountText } from "../novakit";
import ModalChooseTier from "./ModalChooseTier.jsx";
import ModalTierLocked from "./ModalTierLocked.jsx";

const FEE_RATE = 0.03;
const OFFERED_LIMIT = 10000;
const PAYDAY_DATE = "28 July 2026";

function formatPkr(amount) {
  return `Rs ${new Intl.NumberFormat("en-PK").format(amount)}`;
}

export default function AdvanceOptions({
  onContinue,
  onClose,
  initialTier = 10000,
  initialModal = null,
}) {
  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [activeModal, setActiveModal] = useState(initialModal);

  const fee = Math.round(selectedTier * FEE_RATE);
  const totalRepayment = selectedTier + fee;

  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-app)]">
      <AppBar onClose={onClose} title="Choose amount" />

      <main className="flex-1 overflow-y-auto p-4 pb-6">
        <Card variant="default" padding="l" className="space-y-5">
          <div className="flex items-center gap-1">
            <h2 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-text-primary)]">
              Your approved tier
            </h2>
            <button
              type="button"
              aria-label="About approved tier"
              onClick={() => setActiveModal("tier")}
              className="h-11 w-11 -my-3 -ml-2 flex items-center justify-center text-[var(--color-text-secondary)]"
            >
              <Icon name="info" size={16} />
            </button>
          </div>

          <TierSelector
            tiers={[5000, 10000, 15000]}
            selectedTier={selectedTier}
            offeredLimit={OFFERED_LIMIT}
            onSelectTier={setSelectedTier}
            onLockedTap={() => setActiveModal("locked")}
          />

          <div className="flex items-center gap-1 text-[12px] leading-[1.3] font-medium text-[var(--color-text-secondary)]">
            <span>Rs 15,000 locked</span>
            <button
              type="button"
              aria-label="Why Rs 15,000 is locked"
              onClick={() => setActiveModal("locked")}
              className="h-11 w-11 -my-3 -ml-2 flex items-center justify-center text-[var(--color-text-secondary)]"
            >
              <Icon name="info" size={16} />
            </button>
          </div>

          <div className="rounded-[var(--radius-m)] bg-[var(--color-bg-surface-subtle)] p-3 space-y-2">
            <div className="flex justify-between text-[14px] leading-[1.4]">
              <span className="text-[var(--color-text-secondary)]">Advance amount</span>
              <AmountText amount={selectedTier} size="body" />
            </div>
            <div className="flex justify-between text-[14px] leading-[1.4]">
              <span className="text-[var(--color-text-secondary)]">Fixed fee (3%)</span>
              <AmountText amount={fee} size="body" />
            </div>
            <div className="flex justify-between text-[14px] leading-[1.4]">
              <span className="text-[var(--color-text-secondary)]">Repayment date</span>
              <span className="text-[var(--color-text-primary)]">{PAYDAY_DATE}</span>
            </div>
            <div className="h-px bg-[var(--color-border-neutral-primary)]" />
            <div className="flex justify-between items-baseline">
              <span className="text-[18px] leading-[1.4] font-semibold text-[var(--color-text-primary)]">
                Total Repayment
              </span>
              <span className="text-[18px] leading-[1.4] font-bold text-[var(--color-text-primary)]">
                {formatPkr(totalRepayment)}
              </span>
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <span
              className={[
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-2",
                acceptedTerms
                  ? "bg-[var(--color-bg-brand-surface)] border-[var(--color-border-brand-default)] text-[var(--color-text-brand)]"
                  : "bg-[var(--color-bg-surface)] border-[var(--color-border-neutral-primary)]",
              ].join(" ")}
            >
              {acceptedTerms ? <Icon name="checkCircle" size={14} /> : null}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
            />
            <span className="text-[12px] leading-[1.3] font-medium text-[var(--color-text-secondary)]">
              I agree to NovaPay’s salary advance terms, including the 3% fee (
              {formatPkr(fee)}) and auto-repayment of {formatPkr(totalRepayment)} on{" "}
              {PAYDAY_DATE}.
            </span>
          </label>

          <div className="pt-2">
            <Button
              variant="primary"
              size="l"
              disabled={!acceptedTerms}
              onClick={() => onContinue(selectedTier)}
            >
              Review & Continue
            </Button>
          </div>
        </Card>
      </main>

      <ModalChooseTier open={activeModal === "tier"} onClose={() => setActiveModal(null)} />
      <ModalTierLocked open={activeModal === "locked"} onClose={() => setActiveModal(null)} />
    </div>
  );
}
