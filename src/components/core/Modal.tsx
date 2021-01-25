import React, { useEffect } from 'react'
import cn from '../../utils/cn'

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
          {
            'bg-white dark:bg-gray-900 p-4 border border-gray-300 dark:border-gray-700 rounded z-10': true,
          },
          rest.className
        )}
      >
        {children}
      </div>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-gray-700 dark:bg-gray-800 opacity-20 dark:opacity-70"
        onClick={onClose}
      />
    </div>
  ) : null
}
