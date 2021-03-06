import cn from '../utils/cn'
import React, { useRef, useState } from 'react'
import Button from './core/Button'
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
      <Button onClick={() => setIsAgendaOpen(true)}>Agenda</Button>

      {isAgendaOpen ? (
        <div className="z-10 absolute top-0 right-0 mt-14 shadow-xl" ref={ref}>
          <div
            className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700   rounded"
            style={{ minWidth: 300, maxWidth: 350 }}
          >
            <Input placeholder="What do you plan to discuss?" />

            <div className={cn({ 'mt-4': true, hidden: !isAgendaOpen })}>
              This is my agenda
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
