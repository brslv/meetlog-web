import React from 'react'
import cn from '../../utils/cn'

export default function Input(props: React.ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      {...props}
      className={cn(
        {
          'w-full px-4 py-2 rounded bg-gray-100 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 outline-none focus:ring': true,
        },
        props.className
      )}
    />
  )
}
