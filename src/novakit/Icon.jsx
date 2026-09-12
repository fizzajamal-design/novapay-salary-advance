import {
  AlertCircle,
  AlertTriangle,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Info,
  Lock,
  ShieldCheck,
  X,
} from "lucide-react";

const ICONS = {
  alertCircle: AlertCircle,
  alertTriangle: AlertTriangle,
  arrowDownLeft: ArrowDownLeft,
  arrowUpRight: ArrowUpRight,
  calendar: Calendar,
  checkCircle: CheckCircle2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  helpCircle: HelpCircle,
  info: Info,
  lock: Lock,
  shieldCheck: ShieldCheck,
  x: X,
};

/**
 * Icon — Lucide wrapper. Consume via `name` so screens stay on DESIGN.md mapping.
 */
export default function Icon({
  name,
  size = 20,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
  "aria-hidden": ariaHidden = true,
}) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return (
    <Cmp
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={ariaHidden}
    />
  );
}
