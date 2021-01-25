import React from 'react'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>
}

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 w-screen h-screen overflow-y-auto">
      {children}
    </div>
  )
}
