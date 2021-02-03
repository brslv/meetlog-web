import Title from '../Title'
import React from 'react'

export default function ContextMenu({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
      <Title>{title}</Title>

      {children}
    </div>
  )
}
