import React from 'react'
import cn from '../utils/cn'

export default function Avatar({
  src,
  ...props
}: { src: string } & React.ComponentPropsWithoutRef<'img'>) {
  return (
    <img
      alt="User avatar"
      {...props}
      src={src}
      className={cn(
        {
          'w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 cursor-pointer': true,
        },
        props.className
      )}
    />
  )
}
