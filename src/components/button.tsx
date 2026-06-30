import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/components/utils";

type ButtonVariant = "primary" | "secondary" | "quiet" | "ink";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-clay bg-clay text-paper shadow-[0_8px_24px_rgba(176,104,72,0.28)] hover:bg-ink hover:border-ink hover:shadow-[0_8px_24px_rgba(23,33,29,0.22)]",
  secondary:
    "border border-ink/18 bg-paper text-ink hover:border-clay/60 hover:bg-mist hover:text-clay",
  quiet:
    "border border-transparent bg-transparent text-ink underline hover:text-clay",
  ink: "border border-ink bg-ink text-paper shadow-[0_10px_30px_rgba(23,33,29,0.24)] hover:bg-clay hover:border-clay hover:shadow-[0_10px_30px_rgba(176,104,72,0.30)]",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-60";

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
