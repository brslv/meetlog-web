import { useEffect } from 'react'

export default function useOnEsc(handler: () => void) {
  useEffect(() => {
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape') handler()
    })
    return () => window.removeEventListener('keyup', handler)
  }, [handler])
}
