import React from 'react'
import cn from '../../utils/cn'

export default function Title({
  bg,
  children,
}: {
  bg?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn({
        'text-xs font-medium inline-block text-gray-600 uppercase mb-4': true,
        'bg-gray-200 rounded-full px-4 py-1.5': bg,
      })}
    >
      {children}
    </div>
  )
}
