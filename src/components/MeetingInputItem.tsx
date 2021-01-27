import Button, { ButtonSize } from './core/Button'
import React, { useRef, useState } from 'react'
import useOnClickOutside from '../utils/useOnOutsideClick'
import Avatar from './Avatar'

export interface MeetingInputItemType {
  id: number
  text: string
  author: {
    name: string
    avatar: {
      src: string
    }
  }
}

export default function MeetingInputItem({
  input,
}: {
  input: MeetingInputItemType
}) {
  const [isActionsPanelOpen, setIsActionsPanelOpen] = useState(false)
  const ref = useRef<React.ElementRef<'div'> | null>(null)

  useOnClickOutside(ref, () =>
    setTimeout(() => setIsActionsPanelOpen(false), 0)
  )

  return (
    <div className="flex relative mt-4">
      <Avatar src={input.author.avatar.src} className="mr-2" />
      <div className="w-full" onClick={() => setIsActionsPanelOpen(true)}>
        <div
          key={input.id}
          className="bg-white dark:bg-gray-800 cursor-pointer relative border border-gray-300 dark:border-gray-700 rounded overflow-hidden"
        >
          <div className="p-4">
            <div className="text-sm mb-2">
              <div className="mr-2 font-bold inline-block">
                {input.author.name}
              </div>
              <div className="text-sm text-gray-500 inline-block">
                12 Jan, 15:45
              </div>
            </div>
            <div>{input.text}</div>
          </div>
        </div>

        {isActionsPanelOpen ? (
          <div ref={ref} className="absolute top-0 right-0 mt-2 mr-2">
            <Button size={ButtonSize.Sm}>Convert</Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
