import React from 'react'
import cn from '../../utils/cn'

export default function Card({
  children,
  isFocused = false,
  ...props
}: {
  children: React.ReactNode
  isFocused?: boolean
} & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        {
          'border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 p-4 hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-300': true,
          'border-indigo-500 dark:border-indigo-400 dark:hover:border-indigo-400 shadow-md': isFocused,
        },
        props.className
      )}
    >
      {children}
    </div>
  )
}
