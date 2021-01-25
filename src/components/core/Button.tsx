import React from 'react'

export default function Button({
  children,
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded text-white focus:ring focus:outline-none">
      {children}
    </button>
  )
}
