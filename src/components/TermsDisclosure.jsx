import { useState } from "react";
import { Card, AmountText, ListRow, Button } from "../novakit";
import { Lock, Calendar, ShieldCheck, HelpCircle } from "lucide-react";

const TIERS = [5000, 10000, 15000];
const FEE_RATE = 0.03;

/**
 * TermsDisclosure — total cost disclosure screen.
 * Surfaces the fee breakdown and due date before the user proceeds to accept.
 */
export default function TermsDisclosure({
  offeredLimit = 10000,
  initialTier = 10000,
  dueDate = "28 July 2026",
  onProceed,
  onViewFeeDetails,
}) {
  const [selectedTier, setSelectedTier] = useState(initialTier);

  const fee = Math.round(selectedTier * FEE_RATE);
  const totalRepayment = selectedTier + fee;

  return (
    <div className="space-y-4">
      <Card className="space-y-3">
        <div className="text-title text-neutral-900">Choose your advance</div>

        <div className="grid grid-cols-3 gap-2">
          {TIERS.map((tier) => {
            const isLocked = tier > offeredLimit;
            const isSelected = !isLocked && tier === selectedTier;
            return (
              <button
                key={tier}
                type="button"
                disabled={isLocked}
                aria-pressed={isSelected}
                onClick={() => setSelectedTier(tier)}
                className={
                  "flex flex-col items-center justify-center gap-1 min-h-11 rounded-md py-3 px-2 transition-colors " +
                  (isLocked
                    ? "border border-neutral-300 bg-white opacity-50 cursor-not-allowed"
                    : isSelected
                    ? "border-2 border-brand bg-brand-100"
                    : "border border-neutral-300 bg-white active:bg-neutral-100")
                }
              >
                {isLocked ? <Lock className="h-4 w-4 text-neutral-500" /> : null}
                <span
                  className={
                    "text-body " + (isSelected ? "text-brand font-semibold" : "text-neutral-900")
                  }
                >
                  Rs {tier.toLocaleString("en-PK")}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 text-caption text-brand">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          <span>Fixed 3% fee, shown upfront in full — no hidden costs.</span>
        </div>
      </Card>

      <Card className="space-y-1">
        <div className="text-caption text-neutral-500 mb-1">Total cost breakdown</div>

        <ListRow
          title="Advance amount"
          trailing={<AmountText amount={selectedTier} size="body" />}
        />
        <ListRow
          title="Fixed fee (3%)"
          subtitle="Charged once, no compounding"
          trailing={<AmountText amount={fee} size="body" />}
        />
        <ListRow
          icon={<Calendar className="h-4 w-4" />}
          title="Repayment due"
          subtitle={dueDate}
        />

        <div className="flex items-center justify-between pt-3 mt-1 border-t border-neutral-200">
          <span className="text-title text-neutral-900">Total repayment</span>
          <AmountText amount={totalRepayment} size="title" />
        </div>
      </Card>

      <div className="space-y-2">
        <Button
          size="lg"
          onClick={() => onProceed?.({ tier: selectedTier, fee, totalRepayment, dueDate })}
        >
          Continue to Accept
        </Button>
        <Button
          variant="link"
          icon={<HelpCircle className="h-4 w-4" />}
          onClick={onViewFeeDetails}
          className="w-full"
        >
          Fee Details & FAQs
        </Button>
      </div>
    </div>
  );
}
