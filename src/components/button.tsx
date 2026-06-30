import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/components/utils";

type ButtonVariant = "primary" | "fern" | "secondary" | "ghost" | "quiet" | "ink";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-clay bg-clay text-paper hover:bg-ink hover:border-ink",
  fern:
    "border border-fern bg-fern text-paper hover:bg-ink hover:border-ink",
  secondary:
    "border border-ink/18 bg-paper text-ink hover:border-fern/50 hover:bg-mist hover:text-fern",
  ghost:
    "border-b border-ink/30 rounded-none px-0 py-0 min-h-0 text-ink hover:text-fern hover:border-fern",
  quiet:
    "border-b border-transparent rounded-none px-0 py-0 min-h-0 text-ink/55 hover:text-ink hover:border-ink/25",
  ink:
    "border border-ink bg-ink text-paper hover:bg-fern hover:border-fern",
};

const baseClasses =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fern disabled:pointer-events-none disabled:opacity-60";

export function buttonClasses({
  variant = "fern",
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
  variant = "fern",
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
  variant = "fern",
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
