import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../utils/cn'

type ButtonSize = 'sm' | 'md'
export type ButtonVariant = 'primary' | 'error'

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
      'px-4 py-1.5': size === 'md',
      'px-2 py-1 text-sm': size === 'sm',
      'bg-indigo-500 hover:bg-indigo-600': !outline && variant === 'primary',
      'bg-red-500 hover:bg-red-600': !outline && variant === 'error',
      'border border-indigo-500 text-indigo-500': !!(outline && 'primary'),
      'border border-red-500 text-red-500': !!(outline && 'error'),
    },
    className
  )
}

export function LinkButton({
  children,
  size = 'md',
  variant = 'primary',
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

export const IconButton = React.forwardRef<
  HTMLDivElement,
  { icon: React.ReactNode } & React.ComponentPropsWithoutRef<'div'>
>(({ icon, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        {
          'cursor-pointer flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 w-8 h-8 rounded-full': true,
        },
        props.className
      )}
    >
      {icon}
    </div>
  )
})

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
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
