import cn from '../utils/cn'
import React, { useRef, useState } from 'react'
import Button, { ButtonSize } from './core/Button'
import Input from './core/Input'
import useOnClickOutside from '../utils/useOnOutsideClick'
import useOnEsc from '../utils/useOnEsc'

export default function Agenda() {
  const [isAgendaOpen, setIsAgendaOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsAgendaOpen(false))
  useOnEsc(() => setIsAgendaOpen(false))

  return (
    <div className="relative">
      <Button size={ButtonSize.sm} onClick={() => setIsAgendaOpen(true)}>
        Agenda
      </Button>

      {isAgendaOpen ? (
        <div className="z-10 absolute top-0 right-0 mt-11" ref={ref}>
          <div
            className="p-4 bg-white border border-gray-300 rounded"
            style={{ minWidth: 300, maxWidth: 350 }}
          >
            <Input />

            <div className={cn({ 'mt-4': true, hidden: !isAgendaOpen })}>
              This is my agenda
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
