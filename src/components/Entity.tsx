import React, { useRef, useState } from 'react'
import useOnClickOutside from '../utils/useOnOutsideClick'
import Avatar from './Avatar'
import Title from './core/Title'
import cn from '../utils/cn'
import Card from './core/Card'
import useOnEsc from '../utils/useOnEsc'
import { DeleteIcon, NoteIcon, TaskIcon } from '../toolkit'

export enum EntityOutputType {
  Note = 'Note',
  NextStep = 'NextStep',
}

export interface IEntity {
  id: number
  text: string
  author: {
    name: string
    avatar: {
      src: string
    }
  }
  output: { type: EntityOutputType } | null
}

export default function Entity({
  data,
  isLast,
}: {
  data: IEntity
  isLast: boolean
}) {
  const [isActionsPanelOpen, setIsActionsPanelOpen] = useState(false)
  const ref = useRef<React.ElementRef<'div'> | null>(null)

  useOnEsc(() => setIsActionsPanelOpen(false))
  useOnClickOutside(ref, () => setIsActionsPanelOpen(false))

  return (
    <div
      className={cn({
        'flex relative pt-4': true,
      })}
    >
      <Avatar src={data.author.avatar.src} className="mr-2" />
      <div className="w-full" onClick={() => setIsActionsPanelOpen(true)}>
        <Card
          key={data.id}
          className={cn({
            'cursor-pointer relative overflow-hidden': true,
            'border-indigo-500 dark:border-indigo-400 shadow-md': isActionsPanelOpen,
          })}
        >
          <div className="text-sm mb-2">
            <div className="mr-2 font-bold inline-block">
              {data.author.name}
            </div>
            <div className="mr-2 text-sm text-gray-500 inline-block">
              12 Jan, 15:45
            </div>
            {data.output ? (
              <div className="inline-block px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 rounded-full">
                {data.output.type}
              </div>
            ) : null}
          </div>
          <div>{data.text}</div>
        </Card>

        {isActionsPanelOpen ? (
          <div
            ref={ref}
            className={cn({
              'z-10 absolute right-0 mt-2 -mr-2 shadow-xl': true,
              'top-0': !isLast,
              'bottom-0': isLast,
            })}
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
              <div className="mb-2 px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded w-52">
                <div className="flex justify-between items-center">
                  <span>Next step</span>
                  <div>
                    <TaskIcon />
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 cursor-pointer bg-red-100 dark:bg-red-500 hover:bg-red-200 hover:dark:bg-red-600 rounded w-52">
                <div className="flex justify-between items-center">
                  <span>Delete</span>
                  <div>
                    <DeleteIcon />
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
