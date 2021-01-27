import React, { useRef, useState } from 'react'
import useOnClickOutside from '../utils/useOnOutsideClick'
import Avatar from './Avatar'
import Title from './core/Title'
import { RiStickyNoteLine as NoteIcon } from 'react-icons/ri'
import { RiTaskLine as TaskIcon } from 'react-icons/ri'
import { MeetingOutputType } from './MeetingOutput'
import cn from '../utils/cn'

export interface MeetingInputItemType {
  id: number
  text: string
  author: {
    name: string
    avatar: {
      src: string
    }
  }
  output: { type: MeetingOutputType } | null
}

export default function MeetingInputItem({
  input,
  isLast,
}: {
  input: MeetingInputItemType
  isLast: boolean
}) {
  const [isActionsPanelOpen, setIsActionsPanelOpen] = useState(false)
  const ref = useRef<React.ElementRef<'div'> | null>(null)

  useOnClickOutside(ref, () =>
    setTimeout(() => setIsActionsPanelOpen(false), 0)
  )

  return (
    <div
      className={cn({
        'flex relative mt-4': true,
        'mb-16': isActionsPanelOpen && isLast,
      })}
    >
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
              <div className="mr-2 text-sm text-gray-500 inline-block">
                12 Jan, 15:45
              </div>
              {input.output ? (
                <div className="inline-block px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  {input.output.type}
                </div>
              ) : null}
            </div>
            <div>{input.text}</div>
          </div>
        </div>

        {isActionsPanelOpen ? (
          <div
            ref={ref}
            className="z-10 absolute top-0 right-0 mt-2 -mr-2 shadow-xl"
          >
            <div className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
              <Title>Convert to</Title>
              <div className="mb-2 px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-52">
                <div className="flex justify-between items-center">
                  <span>Note</span>
                  <div>
                    <NoteIcon />
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-52">
                <div className="flex justify-between items-center">
                  <span>Next step</span>
                  <div>
                    <TaskIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
