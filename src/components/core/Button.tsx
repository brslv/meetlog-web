import React from 'react'
import { Link } from 'react-router-dom'

const cls =
  'px-4 py-1.5 bg-indigo-500 dark:bg-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-500 rounded text-white dark:text-gray-900 focus:ring focus:outline-none'

export function LinkButton({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<
  typeof Link
>) {
  return (
    <Link {...props} className={cls}>
      {children}
    </Link>
  )
}

export default function Button({
  children,
}: {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>) {
  return <button className={cls}>{children}</button>
}
