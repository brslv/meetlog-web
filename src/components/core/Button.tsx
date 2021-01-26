import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../utils/cn'

export enum ButtonSize {
  sm,
  md,
}

const cls = ({ size }: { size: ButtonSize }) => {
  return cn({
    'bg-indigo-500 dark:bg-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-500 rounded text-white dark:text-gray-900 focus:ring focus:outline-none': true,
    'px-4 py-1.5': size === ButtonSize.md,
    'px-2 py-1': size === ButtonSize.sm,
  })
}

export function LinkButton({
  children,
  size = ButtonSize.md,
  ...props
}: {
  children: React.ReactNode
  size?: ButtonSize
} & React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link {...props} className={cls({ size })}>
      {children}
    </Link>
  )
}

export default function Button({
  children,
  size = ButtonSize.md,
  ...props
}: {
  children: React.ReactNode
  size?: ButtonSize
} & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button {...props} className={cls({ size })}>
      {children}
    </button>
  )
}
