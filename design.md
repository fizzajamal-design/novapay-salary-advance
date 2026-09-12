# DESIGN.md — NovaPay Lending Pod Design System

## Overview

**NovaPay Lending Pod System** is a mobile-first, trust-centered design system extension built on top of **NovaKit Lite**. This document is the single source of truth for design tokens, component APIs, interaction states, icon sets, and financial disclosure guidelines for NovaPay's short-term Salary Advance product.

The system redesigns high-stress moments — total cost disclosures, accept decisions, and hard paths (declines, limits, and late repayments) — with high transparency and non-predatory UX principles.

---

## Token Architecture

The system uses a **three-tier token architecture**. Components must only consume **Tier 3 (Semantic Tokens)** to support full theme adaptability and state changes.

| Tier | Role | Example |
|---|---|---|
| **1. Reference** | Raw primitive values (hex, pixels) | `--ref-blue-60: #4F46E5` |
| **2. Brand** | Brand identity mapping & aliases | `--brand-primary: var(--ref-blue-60)` |
| **3. Semantic** | Contextual tokens consumed by UI components | `--color-bg-brand-filled: var(--brand-primary)` |

---

## Design Tokens

### Color Tokens

#### Tier 1: Reference Primitives

```css
/* Base */
--ref-white: #FFFFFF;
--ref-black: #000000;

/* Brand Palette (Nova Blue) */
--ref-blue-98: #F5F7FF;
--ref-blue-90: #E0E7FF;
--ref-blue-60: #4F46E5;
--ref-blue-50: #4338CA;
--ref-blue-10: #1E1B4B;

/* Neutral Palette */
--ref-neutral-98: #F9FAFB;
--ref-neutral-95: #F3F4F6;
--ref-neutral-90: #E5E7EB;
--ref-neutral-70: #9CA3AF;
--ref-neutral-50: #6B7280;
--ref-neutral-20: #1F2937;
--ref-neutral-10: #111827;

/* Status Families */
--ref-success-95: #ECFDF5;
--ref-success-50: #10B981;
--ref-success-20: #064E3B;

--ref-danger-95: #FEF2F2;
--ref-danger-50: #EF4444;
--ref-danger-20: #7F1D1D;

--ref-warning-95: #FFFBEB;
--ref-warning-50: #F59E0B;
--ref-warning-20: #78350F;
```

#### Tier 2: Brand Tokens (Identity Layer)

```css
/* Brand Aliases */
--brand-primary: var(--ref-blue-60);
--brand-primary-hover: var(--ref-blue-50);
--brand-surface: var(--ref-blue-98);
--brand-surface-highlight: var(--ref-blue-90);

/* Neutral Brand Aliases */
--brand-neutral-bg: var(--ref-neutral-98);
--brand-neutral-card: var(--ref-white);
--brand-neutral-text-main: var(--ref-neutral-20);
--brand-neutral-text-subtle: var(--ref-neutral-50);
--brand-neutral-border: var(--ref-neutral-90);

/* Status Brand Aliases */
--brand-danger-main: var(--ref-danger-50);
--brand-danger-surface: var(--ref-danger-95);
--brand-success-main: var(--ref-success-50);
--brand-success-surface: var(--ref-success-95);
```

#### Tier 3: Semantic Tokens (Used in Code)

| Semantic Token | Light Mode Target | Dark Mode Target | Role / Usage |
|---|---|---|---|
| `--color-bg-app` | `--brand-neutral-bg` | `--ref-neutral-10` | Mobile viewport background |
| `--color-bg-surface` | `--brand-neutral-card` | `--ref-neutral-20` | Cards, sheets, dialog containers |
| `--color-bg-surface-subtle` | `--ref-neutral-95` | `--ref-neutral-10` | Fee breakdown rows, list items |
| `--color-bg-brand-filled` | `--brand-primary` | `--ref-blue-50` | Primary action buttons |
| `--color-bg-brand-surface` | `--brand-surface` | `--ref-blue-10` | Tier selection cards, badges |
| `--color-bg-danger-surface` | `--brand-danger-surface` | `--ref-danger-20` | Decline / late status banners |
| `--color-border-neutral-primary` | `--brand-neutral-border` | `--ref-neutral-50` | Card borders, dividers, inputs |
| `--color-border-brand-default` | `--brand-primary` | `--ref-blue-50` | Selected loan tier border |
| `--color-text-primary` | `--brand-neutral-text-main` | `--ref-white` | PKR values, primary titles |
| `--color-text-secondary` | `--brand-neutral-text-subtle` | `--ref-neutral-70` | Breakdown labels, terms details |
| `--color-text-brand` | `--brand-primary` | `--ref-blue-90` | Selected state text, CTAs |
| `--color-text-danger` | `--brand-danger-main` | `--ref-danger-95` | Decline explanations, alerts |

---

### Typography Scale

Root body font size is **16px** (`1rem`). Font family: `Inter, system-ui, sans-serif`.

| Role | Size (rem / px) | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Display PKR** | 2.25 / 36px | 700 (Bold) | 1.2 | Main cash disbursement figure (`Rs 10,000`) |
| **H1 Title** | 1.5 / 24px | 700 (Bold) | 1.3 | Screen titles, decline headers |
| **H2 Section** | 1.125 / 18px | 600 (SemiBold) | 1.4 | Total repayment & fee summary headers |
| **Body Large** | 1.0 / 16px | 500 (Medium) | 1.5 | Primary button text, tier selector labels |
| **Body Regular** | 0.875 / 14px | 400 (Regular) | 1.4 | Term item descriptions, due date labels |
| **Caption XS** | 0.75 / 12px | 500 (Medium) | 1.3 | Fixed 3% fee disclaimers, micro metadata |

---

### Spacing & Layout Scale

Base unit: **4px**. Engineered for **mobile wallet viewports** (375px–428px reference width).

| Token | Value | Mobile Usage |
|---|---|---|
| `--spacing-xs` | 4px | Internal badge padding, icon gap |
| `--spacing-s` | 8px | Gap between fee label and amount |
| `--spacing-m` | 12px | List item internal padding |
| `--spacing-l` | 16px | Card horizontal padding |
| `--spacing-xl` | 24px | Outer screen margins, section gaps |
| `--spacing-2xl` | 32px | Top margin above primary action buttons |

---

### Elevation & Radius

| Token | Value | Component Application |
|---|---|---|
| `--radius-s` | 8px | Small buttons, status badges |
| `--radius-m` | 12px | Input fields, list containers |
| `--radius-l` | 16px | Product cards, total cost disclosure sheets |
| `--radius-full` | 9999px | Circular icons, pill buttons |
| `--shadow-card` | `0 2px 8px rgba(0,0,0,0.04)` | Surface cards on screen canvas |
| `--shadow-bottom-sheet` | `0 -4px 16px rgba(0,0,0,0.12)` | Fixed bottom action drawers |

---

## Icon System Mapping (Lucide React)

Stroke width defaults to **2px**.

| Icon Name | Code Export (`lucide-react`) | Usage / Context | Color Mapping |
|---|---|---|---|
| **Arrow Up Right** | `<ArrowUpRight />` | Recent outgoing transaction | `--color-text-secondary` |
| **Arrow Down Left** | `<ArrowDownLeft />` | Recent salary credit transaction | `--color-text-brand` |
| **Shield Check** | `<ShieldCheck />` | Trust disclosure badge (3% fee) | `--color-text-brand` |
| **Alert Circle** | `<AlertCircle />` | Decline / Ineligible reason callout | `--color-text-danger` |
| **Clock / Calendar** | `<Calendar />` | Payday repayment date indicator | `--color-text-secondary` |
| **Check Circle 2** | `<CheckCircle2 />` | Selected tier checkbox & accept state | `--color-text-brand` |
| **Help Circle** | `<HelpCircle />` | Fee structure tooltip trigger | `--color-text-secondary` |
| **Chevron Right** | `<ChevronRight />` | Forward action link / step indicator | `--color-text-secondary` |

---

## Component Specifications & API Contracts

### 1. Card / Surface Container (`Card`)

- **Variants:** `default` (bordered), `filled` (subtle background fill), `elevated` (shadow)
- **Props API:**

```typescript
interface CardProps {
  variant?: 'default' | 'filled' | 'elevated';
  padding?: 's' | 'm' | 'l';
  children: React.ReactNode;
  className?: string;
}
```

- **Token Mapping:** Background `--color-bg-surface`, Border `1px solid --color-border-neutral-primary`, Radius `16px`.

---

### 2. Loan Tier Selector (`TierSelector`)

Grid selector for approved salary advance tiers (PKR 5,000 / 10,000 / 15,000).

- **Props API:**

```typescript
interface TierSelectorProps {
  tiers: Array<5000 | 10000 | 15000>;
  selectedTier: number;
  offeredLimit: number;
  onSelectTier: (tier: number) => void;
}
```

- **States:**
  - **Selected:** Border `2px solid --color-border-brand-default`, Background `--color-bg-brand-surface`
  - **Unselected:** Border `1px solid --color-border-neutral-primary`, Background `--color-bg-surface`
  - **Exceeds Limit:** Visual lock icon, opacity `0.5`, disabled click state

---

### 3. Total Cost Disclosure Sheet (`TermsDisclosureCard`)

Surfaces full financial commitment prior to acceptance.

- **Props API:**

```typescript
interface TermsDisclosureCardProps {
  disbursedAmount: number; // e.g., 10000
  feePercentage: number;   // 3% fixed fee
  paydayDate: string;      // e.g., "28 July 2026"
}
```

- **Calculation Structure:**
  1. Advance Amount Requested (`Rs 10,000`)
  2. Fixed Fee (`3% = Rs 300`)
  3. Repayment Date (`Payday - 28 July 2026`)
  4. **Total Repayment (Surfaced Prominently):** `Rs 10,300`

- **Trust Requirement:** Total repayment PKR must be rendered in **H2 Bold typography** directly above the primary action button.

---

### 4. Button System (`Button`, `ButtonLink`)

Interactive mobile touch target (minimum height 44px). Covers three emphasis levels used across the flow: **Primary** (main commitment action), **Secondary** (alternate / less-committal action, often paired next to Primary), and **Link** (lowest-emphasis, inline text action).

- **Props API:**

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'm' | 'l'; // 44px vs 52px height
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

interface ButtonLinkProps {
  size?: 's' | 'm'; // 14px vs 16px text, inline (no fixed height box)
  underline?: 'always' | 'hover' | 'none';
  disabled?: boolean;
  icon?: React.ReactNode; // e.g. <ChevronRight /> for forward actions
  iconPosition?: 'left' | 'right';
  onClick: () => void;
  children: React.ReactNode;
}
```

#### 4.1 Primary Button (`variant="primary"`)

Used for the single main commitment action per screen (e.g. "Accept & Confirm", "Continue").

- **Default:** `--color-bg-brand-filled` background with `--ref-white` text
- **Active / Pressed:** `transform: scale(0.98)`, darker blue fill
- **Disabled:** Opacity `0.4`, `cursor: not-allowed`
- **Loading:** Disables button, renders `<Spinner size="s" />`

#### 4.2 Secondary Button (`variant="secondary"`)

Used for the paired alternate action next to a Primary button (e.g. "Not Now", "Change Tier", "Back") — never for the destructive/decline path, which uses `variant="danger"`.

- **Default:** Transparent / `--color-bg-surface` background, `1px solid --color-border-brand-default` border, `--color-text-brand` text
- **Active / Pressed:** `--brand-surface` background fill (`--color-bg-brand-surface`), `transform: scale(0.98)`
- **Disabled:** Opacity `0.4`, border color falls back to `--color-border-neutral-primary`, `cursor: not-allowed`
- **Loading:** Disables button, renders `<Spinner size="s" />` in `--color-text-brand`
- **Sizing/placement:** Matches Primary Button height (`44px`/`52px`) at the same `size` value so paired buttons align on a row or stack evenly full-width on narrow viewports.

#### 4.3 Button Link (`ButtonLink`)

Lowest-emphasis inline action — no fill, no border, no fixed touch-target box. Used for tertiary navigation and non-critical actions (e.g. "Skip for now", "View all transactions", "Learn how fees work").

- **Default:** No background, `--color-text-brand` text, `font-weight: 600` (Body Large / Body Regular scale depending on `size`)
- **Underline:** `hover`/`focus` by default (`text-decoration: underline`) to keep it visually distinct from static labels; `always` for links inline within a paragraph of body copy
- **Active / Pressed:** `--brand-primary-hover` text color (`--ref-blue-50`)
- **Disabled:** `--color-text-secondary` color, no underline, `cursor: not-allowed`
- **Icon:** Optional leading/trailing icon (commonly `<ChevronRight />`) in the same text color, `16px`, `4px` gap (`--spacing-xs`) from the label
- **Touch target:** Even though the visible text is compact, wrap with invisible padding so the tappable area still meets the 44px minimum height on mobile — never rely on the text's own line-height alone.

---

### 5. Decline & Ineligibility Card (`DeclineStateCard`)

Surfaces internal decline reasons without dead ends.

- **Props API:**

```typescript
interface DeclineStateCardProps {
  reason: 'credit_score' | 'income_unverified' | 'other';
  title: string;
  description: string;
  recoveryActionText?: string;
  onRecoveryAction?: () => void;
}
```

- **Visual Rules:**
  - Background: `--color-bg-danger-surface` (`#FEF2F2`)
  - Icon: `<AlertCircle />` in `--color-text-danger` (`#EF4444`)
  - Action: Explicit next step (e.g., *"Upload Payslip to Unlock Eligibility"*) instead of a dead end

---

## Non-Predatory UX & Accessibility Rules

1. **No Hidden Costs:** The 3% fixed fee shows both percentage and calculated PKR amount (e.g., `3% (Rs 300)`).
2. **Clear Due Dates:** Exact calendar dates are always shown (e.g., `Repayment due July 28, 2026`).
3. **Transparent Declines:** Clear drivers and recovery actions are surfaced instead of generic errors.
4. **Touch Targets:** All interactive mobile targets measure at least 44px in height.
5. **Motion Safety:** State transitions collapse to `0ms` when `prefers-reduced-motion: reduce` is detected.
