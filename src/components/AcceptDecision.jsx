import { useState } from "react";
import { BottomSheet, Button } from "../novakit";
import { Calendar } from "lucide-react";

/**
 * AcceptDecision — final commitment sheet.
 * Requires an explicit terms agreement before the deposit can be confirmed.
 */
export default function AcceptDecision({
  open,
  onClose,
  amount = 10000,
  totalRepayment = 10300,
  dueDate = "28 July 2026",
  secondaryLabel = "Edit Amount",
  onAccept,
  onSecondaryAction,
}) {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleAccept() {
    if (!agreed || submitting) return;
    setSubmitting(true);
    try {
      await onAccept?.();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <BottomSheet open={open} onClose={submitting ? undefined : onClose}>
      <div className="space-y-4">
        <div>
          <div className="text-title text-neutral-900">Confirm your salary advance</div>
          <div className="text-body text-neutral-700 mt-1">
            Review the terms below before you accept.
          </div>
        </div>

        <label className="flex items-start gap-3 rounded-md border border-neutral-300 p-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            disabled={submitting}
            className="mt-0.5 h-5 w-5 shrink-0 accent-brand"
          />
          <span className="text-body text-neutral-900">
            I have read and agree to the{" "}
            <span className="font-semibold text-brand">Terms & Repayment Schedule</span>.
          </span>
        </label>

        <div className="flex items-start gap-2 rounded-md bg-neutral-100 p-3">
          <Calendar className="h-4 w-4 text-neutral-500 mt-0.5 shrink-0" />
          <p className="text-caption text-neutral-700">
            By accepting, Rs {totalRepayment.toLocaleString("en-PK")} will be automatically
            deducted from your salary credit on {dueDate}. No manual repayment needed.
          </p>
        </div>

        <div className="space-y-2 pt-1">
          <Button size="lg" disabled={!agreed} loading={submitting} onClick={handleAccept}>
            Accept & Deposit Rs {amount.toLocaleString("en-PK")}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            disabled={submitting}
            onClick={onSecondaryAction}
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}
