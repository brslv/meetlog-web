import React from 'react'

export default function Label({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) {
  return (
    <label>
      <div className="text-xs uppercase text-gray-500 mb-2">{text}</div>
      {children}
    </label>
  )
}
