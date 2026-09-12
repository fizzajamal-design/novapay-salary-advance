import { AppBar, Card, ListRow, AmountText, Icon } from "../novakit";

export const OFFER_HEADLINE = "Need cash before payday?";

export const OFFER_BULLETS = [
  "Get cash in minutes — added straight to your wallet",
  "Flat 3% fee. No interest, no compounding",
  "Auto-repaid in full on your next payday",
];

export function WalletChrome({ children }) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-app)]">
      <AppBar title="NovaPay" />
      <main className="flex-1 overflow-y-auto p-4 space-y-4">{children}</main>
    </div>
  );
}

export function BalanceCard() {
  return (
    <Card>
      <div className="text-[12px] leading-[1.3] font-medium text-[var(--color-text-secondary)]">
        Available balance
      </div>
      <div className="mt-1">
        <AmountText amount={4250} size="display" />
      </div>
    </Card>
  );
}

export function ActivityCard() {
  return (
    <Card className="space-y-0">
      <div className="text-[12px] leading-[1.3] font-medium text-[var(--color-text-secondary)] mb-1">
        Recent activity
      </div>
      <ListRow
        icon={<Icon name="arrowUpRight" size={16} className="text-[var(--color-text-secondary)]" />}
        title="Sent to Ahmed K."
        subtitle="Today, 2:14 PM"
        trailing={<AmountText amount={1500} size="body" />}
      />
      <ListRow
        icon={<Icon name="arrowDownLeft" size={16} className="text-[var(--color-text-brand)]" />}
        title="Salary credited"
        subtitle="28 Jun"
        trailing={<AmountText amount={68000} size="body" />}
      />
      <ListRow
        icon={<Icon name="arrowUpRight" size={16} className="text-[var(--color-text-secondary)]" />}
        title="Mobile top-up"
        subtitle="27 Jun"
        trailing={<AmountText amount={500} size="body" />}
      />
    </Card>
  );
}

export function OfferBullets() {
  return (
    <ul className="mt-3 space-y-2">
      {OFFER_BULLETS.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-[14px] leading-[1.4] text-[var(--color-text-secondary)]"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-brand)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
