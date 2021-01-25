import React from 'react'
import cn from '../../utils/cn'

export default function Title({
  bg,
  children,
  pushBottom = true,
}: {
  bg?: boolean
  children: React.ReactNode
  pushBottom?: boolean
}) {
  return (
    <div className={cn({ 'mb-4': pushBottom })}>
      <span
        className={cn({
          'select-none text-xs font-medium text-gray-600 dark:text-gray-400 uppercase': true,
          'bg-gray-200 dark:bg-gray-800 rounded-full px-4 py-1.5': bg,
        })}
      >
        {children}
      </span>
    </div>
  )
}
