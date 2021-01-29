import cn from '../../utils/cn'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

export default function Textarea({
  ...props
}: React.ComponentPropsWithoutRef<typeof TextareaAutosize>) {
  return (
    <TextareaAutosize
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
