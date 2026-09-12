import { AppBar, Button } from "../novakit";
import uploadState from "../assets/illustrations/upload_state.png";

export default function PayslipUploaded({ onClose, onNotify }) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-app)]">
      <AppBar onClose={onClose} />

      <main className="flex-1 overflow-y-auto px-6 pt-2 pb-6 flex flex-col">
        <div className="flex justify-center">
          <img src={uploadState} alt="" className="w-full max-h-56 object-contain" />
        </div>

        <h1 className="mt-6 text-[24px] leading-[1.3] font-bold text-[var(--color-text-primary)]">
          Payslip received
        </h1>

        <p className="mt-3 text-[14px] leading-[1.4] text-[var(--color-text-secondary)]">
          We’re reviewing your payslip now. This usually takes less than a business day — we’ll
          let you know the moment your eligibility is confirmed.
        </p>

        <div className="mt-auto pt-8">
          <Button variant="primary" size="l" onClick={onNotify}>
            Notify when I’m eligible
          </Button>
        </div>
      </main>
    </div>
  );
}
