import React from 'react'
import cn from '../utils/cn'

export interface IAvatar {
  src: string
}

export default function Avatar({
  src,
  placeholder,
  ...props
}: { placeholder: string } & Partial<IAvatar> &
  React.ComponentPropsWithoutRef<'img' | 'div'>) {
  const className = cn(
    {
      'w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 cursor-pointer': true,
    },
    props.className
  )

  return src ? (
    <img alt="User avatar" {...props} src={src} className={className} />
  ) : (
    <div {...props} className={className}>
      {placeholder}
    </div>
  )
}
