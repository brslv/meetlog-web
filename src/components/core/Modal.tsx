import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import cn from '../../utils/cn'
import useOnEsc from '../../utils/useOnEsc'
import useOnClickOutside from '../../utils/useOnOutsideClick'

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
  const ref = useRef(null)
  useOnClickOutside(ref, onClose)
  useOnEsc(onClose)

  return open
    ? ReactDOM.createPortal(
        <div className="z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div
            ref={ref}
            {...rest}
            className={cn(
              {
                'bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded z-10': true,
              },
              rest.className
            )}
          >
            {children}
          </div>
          <div className="absolute top-0 left-0 w-screen h-screen bg-gray-700 dark:bg-gray-900 opacity-20 dark:opacity-70" />
        </div>,
        document.getElementById('portal') || document.createElement('div')
      )
    : null
}
