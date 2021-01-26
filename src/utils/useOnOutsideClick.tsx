import React, { useEffect } from 'react'

const MOUSEDOWN = 'mousedown'
const TOUCHSTART = 'touchstart'

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART]
type HandledEventsType = HandledEvents[number]
type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type]
}[HandledEventsType]
type Handler = (event: PossibleEvent) => void
const events: HandledEvents = [MOUSEDOWN, TOUCHSTART]

export default function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: Handler | null
) {
  useEffect(() => {
    if (!handler) {
      return
    }

    const listener = (event: PossibleEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    events.forEach((event) => {
      document.addEventListener(event, listener)
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener)
      })
    }
  }, [handler, ref])
}
