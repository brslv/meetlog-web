import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../utils/useOnOutsideClick'
import Avatar from '../Avatar'
import cn from '../../utils/cn'
import Card from '../core/Card'
import useOnEsc from '../../utils/useOnEsc'
import ReactMarkdown from 'react-markdown'

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
  contextMenu,
}: {
  data: IEntity
  isLast: boolean
  contextMenu: (entity: IEntity) => React.ReactNode
}) {
  const [isActionsPanelOpen, setIsActionsPanelOpen] = useState(false)
  const ref = useRef<React.ElementRef<'div'> | null>(null)

  useOnEsc(() => setIsActionsPanelOpen(false))
  useOnClickOutside(ref, () => setIsActionsPanelOpen(false))

  return (
    <div
      className={cn({
        '__markdown flex relative pt-4': true,
      })}
    >
      <Avatar src={data.author.avatar.src} className="mr-2" />
      <div className="w-full" onClick={() => setIsActionsPanelOpen(true)}>
        <Card
          key={data.id}
          className={cn({
            'cursor-pointer relative overflow-hidden': true,
            'border-indigo-500 dark:border-indigo-400 dark:hover:border-indigo-400 shadow-md': isActionsPanelOpen,
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
          <ReactMarkdown>{data.text}</ReactMarkdown>
        </Card>

        {isActionsPanelOpen ? (
          <div
            ref={ref}
            className={cn({
              'z-10 absolute right-0 mt-2 -mr-2 shadow-xl': true,
              'top-0': !isLast,
              'bottom-0 -mb-2': isLast,
            })}
          >
            <div className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
              {contextMenu(data)}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
