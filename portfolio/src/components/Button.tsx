'use client'

import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  href?: string
  asLink?: boolean
  target?: string
  rel?: string
  download?: string | boolean
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[38px] px-[20px] text-[11px] gap-1.5',
  md: 'h-[46px] px-[30px] text-[12px] gap-2',
  lg: 'h-[54px] px-[38px] text-[13px] gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  href,
  asLink,
  target,
  rel,
  download,
  ...props
}: ButtonProps) {
  const isDark = variant === 'secondary'

  const sweepBg = isDark ? 'bg-black' : 'bg-white'
  const textHover = isDark
    ? 'group-hover:text-white'
    : 'group-hover:text-black'
  const hoverGlow = isDark
    ? 'hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]'
    : 'hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]'

  const baseClasses = cn(
    'group relative inline-flex items-center justify-center overflow-hidden border select-none',
    'uppercase tracking-[3px] font-medium',
    'transition-all duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)]',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60',
    'hover:scale-[1.02] active:scale-[0.98]',
    'rounded-none cursor-pointer bg-transparent',
    sizeStyles[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 pointer-events-none',
    variant === 'primary' &&
      'border-white/35 text-white hover:border-white',
    variant === 'secondary' &&
      'border-black/35 text-black hover:border-black',
    hoverGlow,
    className,
  )

  const content = (
    <>
      <span
        className={cn(
          'absolute inset-0 scale-x-0 origin-left',
          'transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)]',
          'group-hover:scale-x-100',
          sweepBg,
        )}
      />
      <span
        className={cn(
          'absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent',
          '-translate-x-full group-hover:translate-x-full',
          'transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]',
        )}
      />
      <span
        className={cn(
          'relative z-10 inline-flex items-center gap-2 transition-colors duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)]',
          textHover,
        )}
      >
        {loading ? (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children && <span>{children}</span>}
        {rightIcon}
      </span>
    </>
  )

  if (href) {
    if (asLink) {
      return (
        <Link
          href={href}
          className={baseClasses}
          target={target}
          rel={rel}
          download={download}
          {...(props as any)}
        >
          {content}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={rel}
        download={download}
        {...(props as any)}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  )
}
