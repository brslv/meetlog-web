import React, { useRef, useState } from 'react'
import useOnEsc from '../../../utils/useOnEsc'
import useOnClickOutside from '../../../utils/useOnOutsideClick'

export default function useContextMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<React.ElementRef<'div'> | null>(null)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  useOnEsc(close)
  useOnClickOutside(ref, close)

  return { isOpen, open, close, ref }
}
