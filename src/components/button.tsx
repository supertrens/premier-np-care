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
    "border border-clay bg-clay text-paper hover:border-ink hover:bg-ink",
  fern:
    "border border-fern bg-fern text-paper hover:border-ink hover:bg-ink",
  secondary:
    "border border-ink/18 bg-paper text-ink hover:border-fern hover:bg-mist",
  ghost:
    "min-h-0 rounded-none border-b border-ink/30 px-0 py-0 text-ink hover:border-fern hover:text-fern",
  quiet:
    "min-h-0 rounded-none border-b border-transparent px-0 py-0 text-ink/58 hover:border-ink/25 hover:text-ink",
  ink:
    "border border-ink bg-ink text-paper hover:border-fern hover:bg-fern",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fern disabled:pointer-events-none disabled:opacity-60";

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
