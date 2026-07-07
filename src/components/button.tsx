import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/components/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "quiet"
  | "ink"
  | "cobalt"
  | "mist";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-gold bg-deep-navy text-paper shadow-[0_16px_34px_rgba(26,53,87,0.22)] hover:border-gold hover:bg-ink",
  secondary:
    "border border-line bg-paper text-ink hover:border-gold hover:bg-mist",
  ghost:
    "min-h-0 rounded-none border-b border-ink/28 px-0 py-0 text-ink hover:border-gold hover:text-ink",
  quiet:
    "min-h-0 rounded-none border-b border-transparent px-0 py-0 text-ink/58 hover:border-ink/25 hover:text-ink",
  ink:
    "border border-deep-navy bg-deep-navy text-paper hover:border-gold hover:bg-ink",
  cobalt:
    "border border-gold bg-deep-navy text-paper shadow-[0_16px_34px_rgba(26,53,87,0.22)] hover:border-gold hover:bg-ink",
  mist:
    "border border-pale-mist bg-mist text-ink hover:border-gold hover:bg-paper",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-60";

export function buttonClasses({
  variant = "cobalt",
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
}) {
  return cn(baseClasses, variants[variant], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = "cobalt",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, className })}
      type={type}
      {...props}
    />
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
}

export function ButtonLink({
  children,
  className,
  href,
  variant = "cobalt",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const linkClassName = buttonClasses({ variant, className });

  if (isExternal) {
    return (
      <a className={linkClassName} href={href} rel="noreferrer" target="_blank" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href} {...props}>
      {children}
    </Link>
  );
}
