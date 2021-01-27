import React, { useRef, useState } from 'react'
import useOnClickOutside from '../utils/useOnOutsideClick'
import Avatar from './Avatar'
import Title from './core/Title'

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
          <div
            ref={ref}
            className="z-10 absolute top-0 right-0 mt-2 -mr-2 shadow"
          >
            <div className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
              <Title>Convert to</Title>
              <div className="mb-2 p-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-40">
                Note
              </div>
              <div className="mb-2 p-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-40">
                Next step
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
