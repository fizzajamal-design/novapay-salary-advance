import { Button } from "../novakit";
import { AlertCircle } from "lucide-react";

/**
 * DeclineState — Option A: Unverified Income.
 * Surfaces the decline reason with an explicit recovery path, never a dead end.
 */
export default function DeclineState({
  onUploadPayslip,
  onContactSupport,
  onReturnToDashboard,
}) {
  return (
    <div className="bg-danger-surface rounded-lg p-4 space-y-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-6 w-6 text-danger shrink-0" />
        <div>
          <div className="text-title text-neutral-900">
            We couldn&apos;t verify your income yet
          </div>
          <p className="text-body text-neutral-700 mt-1">
            Your last payslip didn&apos;t match your salary account records, so we can&apos;t
            confirm your eligibility for a salary advance right now. This isn&apos;t a
            rejection — upload a recent payslip and we&apos;ll recheck you right away.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Button size="lg" onClick={onUploadPayslip}>
          Upload Payslip Now
        </Button>
        <Button variant="secondary" size="lg" onClick={onContactSupport}>
          Contact Support
        </Button>
        <Button variant="link" onClick={onReturnToDashboard} className="w-full">
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
