import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/components/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "quiet" | "ink";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-clay bg-clay text-paper hover:bg-ink hover:border-ink",
  secondary:
    "border border-ink/18 bg-paper text-ink hover:border-clay/50 hover:bg-mist",
  ghost:
    "border-b border-ink/30 rounded-none px-0 py-0 min-h-0 text-ink hover:text-clay hover:border-clay",
  quiet:
    "border-b border-transparent rounded-none px-0 py-0 min-h-0 text-ink/55 hover:text-ink hover:border-ink/25",
  ink: "border border-ink bg-ink text-paper hover:bg-clay hover:border-clay",
};

const baseClasses =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-60";

export function buttonClasses({
  variant = "primary",
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
  variant = "primary",
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
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const linkClassName = buttonClasses({ variant, className });

  if (isExternal) {
    return (
      <a
        className={linkClassName}
        href={href}
        rel="noreferrer"
        target="_blank"
        {...props}
      >
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
