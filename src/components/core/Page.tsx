import React from 'react'
import cn from '../../utils/cn'

export default function Page({
  children,
  narrow = false,
}: {
  children: React.ReactNode
  narrow?: boolean
}) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-screen overflow-y-auto">
      <div
        className={cn({
          'w-screen': !narrow,
          'w-1/2': narrow,
        })}
      >
        {children}
      </div>
    </div>
  )
}
