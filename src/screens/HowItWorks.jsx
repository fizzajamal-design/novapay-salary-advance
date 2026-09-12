import { AppBar, Button } from "../novakit";
import howItWorks from "../assets/illustrations/how_it_works.png";

const HEADLINE = "How it works";

const BULLETS = [
  "Choose an amount up to your approved limit",
  "Transparent 3% fixed fee with no hidden charges or compound interest. Pay a single 3% fee only when you take an advance",
  "Automatic repayment on payday, so you don’t have to worry about deadlines!"
];

export default function HowItWorks({ onClose, onApply }) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-app)]">
      <AppBar onClose={onClose} />

      <main className="flex-1 overflow-y-auto px-6 pt-4 pb-6 flex flex-col">
        <div className="flex justify-center">
          <img
            src={howItWorks}
            alt=""
            className="w-full max-h-56 object-contain"
          />
        </div>

        <h2 className="mt-6 text-[24px] leading-[1.3] font-bold text-[var(--color-text-primary)]">
          {HEADLINE}
        </h2>

        <ol className="mt-4 space-y-3">
          {BULLETS.map((item, index) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-brand-surface)] text-[12px] font-medium text-[var(--color-text-brand)]">
                {index + 1}
              </span>
              <span className="text-[14px] leading-[1.4] text-[var(--color-text-secondary)]">
                {item}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-auto pt-8">
          <Button variant="primary" size="l" onClick={onApply}>
            Apply for salary advance
          </Button>
        </div>
      </main>
    </div>
  );
}
