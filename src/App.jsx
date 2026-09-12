import { useState } from "react";
import DashboardEntry from "./screens/DashboardEntry.jsx";
import HowItWorks from "./screens/HowItWorks.jsx";
import AdvanceOptions from "./screens/AdvanceOptions.jsx";
import SuccessState from "./screens/SuccessState.jsx";
import FailEntry from "./screens/FailEntry.jsx";
import PayslipUploaded from "./screens/PayslipUploaded.jsx";

export const STEPS = {
  DASHBOARD_ENTRY: "DASHBOARD_ENTRY",
  HOW_IT_WORKS: "HOW_IT_WORKS",
  ADVANCE_OPTIONS: "ADVANCE_OPTIONS",
  SUCCESS: "SUCCESS",
  FAIL_ENTRY: "FAIL_ENTRY",
  PAYSLIP_UPLOADED: "PAYSLIP_UPLOADED",
};

const DEV_STEPS = [
  { id: STEPS.DASHBOARD_ENTRY, label: "1 Dash" },
  { id: STEPS.HOW_IT_WORKS, label: "2 How" },
  { id: STEPS.ADVANCE_OPTIONS, label: "3 Options" },
  { id: STEPS.SUCCESS, label: "4 Success" },
  { id: STEPS.FAIL_ENTRY, label: "5 Fail" },
  { id: STEPS.PAYSLIP_UPLOADED, label: "6 Payslip" },
];

const ADVANCE_OPTIONS_CONFIG = {
  DEFAULT: { tier: 10000, modal: null },
};

const SECONDARY_DEV_STEPS = [
  { id: "adv-tier1-fail", label: "Options: Tier 1 (fail path)", tier: 5000, modal: null },
  { id: "adv-modal-tier", label: "Modal: choose tier", tier: 10000, modal: "tier" },
  { id: "adv-modal-locked", label: "Modal: tier locked", tier: 10000, modal: "locked" },
];

function SecondaryDevNav({ onSelect }) {
  return (
    <nav
      aria-label="Dev secondary state jumper"
      className="fixed top-14 left-1/2 z-50 -translate-x-1/2 flex gap-1 rounded-full bg-[var(--ref-neutral-10)]/90 p-1 shadow-[var(--shadow-bottom-sheet)] backdrop-blur-sm"
    >
      {SECONDARY_DEV_STEPS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className="min-h-8 rounded-full px-2.5 text-[11px] font-medium whitespace-nowrap text-[var(--ref-white)]/80 hover:bg-white/10"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function DevNav({ current, onSelect }) {
  return (
    <nav
      aria-label="Dev screen jumper"
      className="fixed top-3 left-1/2 z-50 -translate-x-1/2 flex gap-1 rounded-full bg-[var(--ref-neutral-10)]/90 p-1 shadow-[var(--shadow-bottom-sheet)] backdrop-blur-sm"
    >
      {DEV_STEPS.map((step) => {
        const active = current === step.id;
        return (
          <button
            key={step.id}
            type="button"
            onClick={() => onSelect(step.id)}
            className={[
              "min-h-8 rounded-full px-2.5 text-[11px] font-medium whitespace-nowrap",
              active
                ? "bg-[var(--color-bg-brand-filled)] text-[var(--color-text-on-brand)]"
                : "text-[var(--ref-white)]/80 hover:bg-white/10",
            ].join(" ")}
          >
            {step.label}
          </button>
        );
      })}
    </nav>
  );
}

export default function App() {
  const [step, setStep] = useState(STEPS.DASHBOARD_ENTRY);
  const [advanceOptionsConfig, setAdvanceOptionsConfig] = useState(
    ADVANCE_OPTIONS_CONFIG.DEFAULT,
  );

  function goToStep(nextStep) {
    if (nextStep === STEPS.ADVANCE_OPTIONS) {
      setAdvanceOptionsConfig(ADVANCE_OPTIONS_CONFIG.DEFAULT);
    }
    setStep(nextStep);
  }

  function jumpToAdvanceOptions({ tier, modal }) {
    setAdvanceOptionsConfig({ tier, modal });
    setStep(STEPS.ADVANCE_OPTIONS);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-4 pt-16 pb-6">
      <DevNav current={step} onSelect={goToStep} />
      <SecondaryDevNav onSelect={jumpToAdvanceOptions} />

      <div className="relative w-[390px] h-[780px] bg-[var(--color-bg-app)] rounded-[28px] shadow-xl overflow-hidden border border-neutral-300">
        {step === STEPS.DASHBOARD_ENTRY && (
          <DashboardEntry onGetStarted={() => goToStep(STEPS.HOW_IT_WORKS)} />
        )}
        {step === STEPS.HOW_IT_WORKS && (
          <HowItWorks
            onClose={() => goToStep(STEPS.DASHBOARD_ENTRY)}
            onApply={() => goToStep(STEPS.ADVANCE_OPTIONS)}
          />
        )}
        {step === STEPS.ADVANCE_OPTIONS && (
          <AdvanceOptions
            key={`${advanceOptionsConfig.tier}-${advanceOptionsConfig.modal}`}
            onClose={() => goToStep(STEPS.DASHBOARD_ENTRY)}
            initialTier={advanceOptionsConfig.tier}
            initialModal={advanceOptionsConfig.modal}
            onContinue={(tier) =>
              setStep(tier === 5000 ? STEPS.FAIL_ENTRY : STEPS.SUCCESS)
            }
          />
        )}
        {step === STEPS.SUCCESS && (
          <SuccessState
            onClose={() => goToStep(STEPS.DASHBOARD_ENTRY)}
            onReturn={() => goToStep(STEPS.DASHBOARD_ENTRY)}
          />
        )}
        {step === STEPS.FAIL_ENTRY && (
          <FailEntry
            onClose={() => goToStep(STEPS.DASHBOARD_ENTRY)}
            onReturn={() => goToStep(STEPS.DASHBOARD_ENTRY)}
            onUploadPayslip={() => goToStep(STEPS.PAYSLIP_UPLOADED)}
          />
        )}
        {step === STEPS.PAYSLIP_UPLOADED && (
          <PayslipUploaded
            onClose={() => goToStep(STEPS.DASHBOARD_ENTRY)}
            onNotify={() => goToStep(STEPS.DASHBOARD_ENTRY)}
          />
        )}
      </div>
    </div>
  );
}
