import React from 'react'
import Button from './Button'

interface Meeting {
  id: number
  title: string
  excerpt: string
}

export default function MeetingCard({ data }: { data: Meeting }) {
  return (
    <div className="border border-gray-300 rounded bg-white p-4 hover:shadow-md hover:border-indigo-500">
      <h1 className="font-bold text-xl">{data.title}</h1>
      <div className="">25 Jan 21, Monday</div>
      <blockquote className="text-gray-800">{data.excerpt}</blockquote>

      <div className="flex justify-between mt-4">
        <div />

        <Button type="button">Open</Button>
      </div>
    </div>
  )
}
