import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
}: { children: React.ReactNode; to?: string } & (
  | React.ComponentPropsWithoutRef<'button'>
  | React.ComponentPropsWithoutRef<typeof Link>
)) {
  const cls =
    'px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded text-white focus:ring focus:outline-none'

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  } else {
    return <button className={cls}>{children}</button>
  }
}
