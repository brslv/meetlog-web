import React from 'react'
import cn from '../../utils/cn'

export default function Label({
  text,
  children,
  pushBottom = false,
}: {
  text: string
  children: React.ReactNode
  pushBottom?: boolean
}) {
  return (
    <label className={cn({ 'block mb-4': pushBottom })}>
      <div className="text-xs uppercase text-gray-500 mb-2">{text}</div>
      {children}
    </label>
  )
}
