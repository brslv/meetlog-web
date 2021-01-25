import React from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 w-screen h-screen overflow-y-auto">
      {children}
    </div>
  )
}
