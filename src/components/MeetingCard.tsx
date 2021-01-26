import React from 'react'
import { LinkButton } from './core/Button'

interface Meeting {
  id: number
  title: string
  excerpt: string
}

export default function MeetingCard({ data }: { data: Meeting }) {
  return (
    <div className="flex flex-col justify-end border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 p-4 hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-300">
      <div className="flex-1">
        <h1 className="font-bold text-xl">{data.title}</h1>
        <div>25 Jan 21, Monday</div>
        <blockquote>{data.excerpt}</blockquote>
      </div>
      <div className="flex justify-between mt-4">
        <div />
        <LinkButton to="/m/1" type="button">
          Open
        </LinkButton>
      </div>
    </div>
  )
}
