import Icon from "./Icon.jsx";

/**
 * AppBar — title + optional back or close (X)
 */
export default function AppBar({ title, onBack = null, onClose = null }) {
  return (
    <header className="h-14 flex items-center gap-2 px-3 border-b border-[var(--color-border-neutral-primary)] bg-[var(--color-bg-surface)] shrink-0">
      {onBack ? (
        <button
          onClick={onBack}
          aria-label="Back"
          className="h-11 w-11 -ml-1 flex shrink-0 items-center justify-center rounded-full text-[var(--color-text-primary)] active:bg-[var(--color-bg-surface-subtle)]"
        >
          <Icon name="chevronLeft" size={22} />
        </button>
      ) : null}
      {title ? (
        <h1 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-text-primary)] truncate">
          {title}
        </h1>
      ) : null}
      <div className="flex-1" />
      {onClose ? (
        <button
          onClick={onClose}
          aria-label="Close"
          className="h-11 w-11 -mr-1 flex shrink-0 items-center justify-center rounded-full text-[var(--color-text-primary)] active:bg-[var(--color-bg-surface-subtle)]"
        >
          <Icon name="x" size={22} />
        </button>
      ) : null}
    </header>
  );
}
