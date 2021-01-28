import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../utils/cn'

export enum ButtonSize {
  Sm,
  Md,
}

export enum ButtonVariant {
  Primary = 'Primary',
  Error = 'Error',
}

const cls = ({
  size,
  variant,
  outline,
  className,
}: {
  size: ButtonSize
  variant?: ButtonVariant
  outline?: boolean
  className?: string
}) => {
  return cn(
    {
      'rounded text-white focus:ring focus:outline-none': true,
      'px-4 py-1.5': size === ButtonSize.Md,
      'px-2 py-1 text-sm': size === ButtonSize.Sm,
      'bg-indigo-500 hover:bg-indigo-600':
        !outline && variant === ButtonVariant.Primary,
      'bg-red-500 hover:bg-red-600':
        !outline && variant === ButtonVariant.Error,
      'border border-indigo-500 text-indigo-500': !!(
        outline && ButtonVariant.Primary
      ),
      'border border-red-500 text-red-500': !!(outline && ButtonVariant.Error),
    },
    className
  )
}

export function LinkButton({
  children,
  size = ButtonSize.Md,
  variant = ButtonVariant.Primary,
  outline = false,
  className,
  ...props
}: {
  children: React.ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
  outline?: boolean
  className?: string
} & React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link {...props} className={cls({ size, variant, className })}>
      {children}
    </Link>
  )
}

export default function Button({
  children,
  size = ButtonSize.Md,
  variant = ButtonVariant.Primary,
  outline = false,
  className,
  ...props
}: {
  children: React.ReactNode
  variant?: ButtonVariant
  outline?: boolean
  size?: ButtonSize
  className?: string
} & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button {...props} className={cls({ size, variant, outline, className })}>
      {children}
    </button>
  )
}
