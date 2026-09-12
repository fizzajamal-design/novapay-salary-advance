import { Card, Button } from "../novakit";
import {
  WalletChrome,
  BalanceCard,
  ActivityCard,
  OfferBullets,
  OFFER_HEADLINE,
} from "./walletBits.jsx";

export default function DashboardEntry({ onGetStarted }) {
  return (
    <WalletChrome>
      <BalanceCard />

      <Card className="space-y-4">
        <div>
          <h2 className="text-[24px] leading-[1.3] font-bold text-[var(--color-text-primary)]">
            {OFFER_HEADLINE}
          </h2>
          <OfferBullets />
        </div>
        <Button variant="primary" size="l" onClick={onGetStarted}>
          Get started
        </Button>
      </Card>

      <ActivityCard />
    </WalletChrome>
  );
}
