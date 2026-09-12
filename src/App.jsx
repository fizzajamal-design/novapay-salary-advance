import { useRef, useState } from "react";
import { AppBar, Card, ListRow, Button, AmountText, Toast } from "./novakit";
import TermsDisclosure from "./components/TermsDisclosure";
import AcceptDecision from "./components/AcceptDecision";
import DeclineState from "./components/DeclineState";

const VIEWS = [
  { id: "dashboard", label: "Home Dashboard" },
  { id: "terms", label: "Terms & Accept" },
  { id: "decline", label: "Decline (Option A)" },
];

/**
 * Floating dev-only toggle so any screen in the prototype can be reached
 * directly, without walking the real navigation flow.
 */
function DevNav({ view, onSelect }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-dashed border-neutral-500 bg-neutral-900/95 px-2 py-1.5 shadow-xl">
        <span className="px-2 text-caption font-semibold uppercase tracking-wide text-neutral-500">
          Dev
        </span>
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => onSelect(v.id)}
            aria-current={view === v.id}
            className={
              "rounded-full px-3 py-1.5 text-caption font-semibold transition-colors " +
              (view === v.id
                ? "bg-brand text-white"
                : "text-neutral-300 active:bg-white/10")
            }
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ onSeeOffer }) {
  return (
    <>
      <AppBar title="NovaPay" />
      <main className="p-4 space-y-4">
        <Card>
          <div className="text-caption text-neutral-500">Available balance</div>
          <div className="mt-1">
            <AmountText amount={4250} size="display" />
          </div>
        </Card>

        <Card className="space-y-3">
          <div>
            <div className="text-title text-neutral-900">Need cash before payday?</div>
            <div className="text-body text-neutral-700 mt-1">
              You may qualify for a NovaPay salary advance.
            </div>
          </div>
          <Button size="lg" onClick={onSeeOffer}>
            See your offer
          </Button>
        </Card>

        <Card>
          <div className="text-caption text-neutral-500 mb-1">Recent activity</div>
          <ListRow
            icon="↑"
            title="Sent to Ahmed K."
            subtitle="Today, 2:14 PM"
            trailing={<AmountText amount={1500} size="body" />}
          />
          <ListRow
            icon="↓"
            title="Salary credited"
            subtitle="28 Jun"
            trailing={<AmountText amount={68000} size="body" />}
          />
          <ListRow
            icon="↑"
            title="Mobile top-up"
            subtitle="27 Jun"
            trailing={<AmountText amount={500} size="body" />}
          />
        </Card>
      </main>
    </>
  );
}

export default function App() {
  const [view, setView] = useState("dashboard");
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const toastTimer = useRef(null);

  function flashToast(message) {
    clearTimeout(toastTimer.current);
    setToastMessage(message);
    toastTimer.current = setTimeout(() => setToastMessage(null), 2400);
  }

  function goTo(nextView) {
    setAcceptOpen(false);
    setView(nextView);
  }

  function handleProceed(terms) {
    setAcceptTerms(terms);
    setAcceptOpen(true);
  }

  async function handleAccept() {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setAcceptOpen(false);
    flashToast(`Rs ${acceptTerms?.tier.toLocaleString("en-PK")} deposited to your account`);
    goTo("dashboard");
  }

  return (
    <div className="min-h-screen w-full flex justify-center pt-24 pb-6">
      <DevNav view={view} onSelect={goTo} />

      {/* Mobile frame */}
      <div className="relative w-[390px] min-h-[780px] bg-white rounded-[28px] shadow-xl overflow-hidden border border-neutral-300">
        {view === "dashboard" && <Dashboard onSeeOffer={() => goTo("terms")} />}

        {view === "terms" && (
          <>
            <AppBar title="Total Cost & Accept" onBack={() => goTo("dashboard")} />
            <main className="p-4">
              <TermsDisclosure
                onProceed={handleProceed}
                onViewFeeDetails={() => flashToast("Fee details & FAQs coming soon")}
              />
            </main>
            <AcceptDecision
              open={acceptOpen}
              onClose={() => setAcceptOpen(false)}
              amount={acceptTerms?.tier ?? 10000}
              totalRepayment={acceptTerms?.totalRepayment ?? 10300}
              dueDate={acceptTerms?.dueDate ?? "28 July 2026"}
              onAccept={handleAccept}
              onSecondaryAction={() => setAcceptOpen(false)}
            />
          </>
        )}

        {view === "decline" && (
          <>
            <AppBar title="Application Status" onBack={() => goTo("dashboard")} />
            <main className="p-4">
              <DeclineState
                onUploadPayslip={() => flashToast("Payslip upload coming soon")}
                onContactSupport={() => flashToast("Connecting you to support…")}
                onReturnToDashboard={() => goTo("dashboard")}
              />
            </main>
          </>
        )}

        <Toast open={!!toastMessage} message={toastMessage} />
      </div>
    </div>
  );
}
