import React, { useEffect } from 'react'
import cn from '../utils/cn'

export default function Modal({
  children,
  open,
  onClose,
  ...rest
}: {
  children: React.ReactNode
  open: boolean
  onClose: () => void
} & React.ComponentPropsWithoutRef<'div'>) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keyup', handler)
    return () => window.removeEventListener('keyup', handler)
  }, [onClose])

  return open ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div
        {...rest}
        className={cn(
          { 'bg-white p-4 border border-gray-300 rounded z-10': true },
          rest.className
        )}
      >
        {children}
      </div>
      <div
        className="absolute top-0 left-0 w-screen h-screen"
        style={{ background: `rgba(0,0,0,0.15)` }}
        onClick={onClose}
      />
    </div>
  ) : null
}
