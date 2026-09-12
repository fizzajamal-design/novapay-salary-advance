import { AppBar, Button, Icon } from "../novakit";

export default function FailEntry({ onClose, onReturn, onUploadPayslip }) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-app)]">
      <AppBar onClose={onClose} title= "NovaPay Salary Advance" />
      <main className="flex-1 overflow-y-auto px-6 pt-4 pb-6 flex flex-col">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-bg-danger-surface)] text-[var(--color-text-danger-surface)]">
          <Icon name="alertTriangle" size={32} />
        </span>

        <h1 className="mt-6 text-[24px] leading-[1.3] font-bold text-[var(--color-text-primary)]">
        You are not eligible for an advance yet
        </h1>

        <p className="mt-3 text-[14px] leading-[1.4] text-[var(--color-text-secondary)]">
          We couldn’t verify your monthly salary deposit for the eligibility period. This could
          have happened for multiple reasons.
        </p>

        <p className="mt-2 text-[14px] leading-[1.4] text-[var(--color-text-secondary)]">
          <span className="font-medium text-[var(--color-text-primary)]">
            Don’t worry, we can fix this!
          </span>{" "}
          Upload your recent pay slip to manually verify and unlock eligibility within 24 hours.
        </p>

        <div className="mt-auto pt-8 space-y-3">
          <Button variant="primary" size="l" onClick={onUploadPayslip}>
            Upload payslip
          </Button>
          <Button variant="link" size="l" onClick={onReturn} className="w-full">
            Return to dashboard
          </Button>
        </div>
      </main>
    </div>
  );
}
