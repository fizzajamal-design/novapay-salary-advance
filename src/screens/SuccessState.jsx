import { AppBar, Button, Icon } from "../novakit";
import successState from "../assets/illustrations/success_state.png";

export default function SuccessState({ onClose, onReturn }) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-app)]">
      <AppBar onClose={onClose} title= "NovaPay Salary Advance" />

      <main className="flex-1 overflow-y-auto px-6 pt-2 pb-6 flex flex-col">
        <div className="flex justify-center">
          <img
            src={successState}
            alt=""
            className="w-full max-h-56 object-contain"
          />
        </div>

        <div className="mt-6 flex items-start gap-2">
          <span className="mt-0.5 text-[var(--color-text-success-surface)]">
            <Icon name="checkCircle" size={28} />
          </span>
          <h1 className="text-[24px] leading-[1.3] font-bold text-[var(--color-text-primary)]">
            Advance approved
          </h1>
        </div>

        <p className="mt-3 text-[14px] leading-[1.4] text-[var(--color-text-secondary)]">
          Rs 10,000 is on its way to your NovaPay wallet. We’ll collect Rs 10,300 automatically
          on 28 July 2026.
        </p>

        <div className="mt-auto pt-8">
          <Button variant="primary" size="l" onClick={onReturn}>
            Return to dashboard
          </Button>
        </div>
      </main>
    </div>
  );
}
