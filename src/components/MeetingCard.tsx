import React from 'react'

interface Meeting {
  id: number
  title: string
  excerpt: string
}

export default function MeetingCard({ data }: { data: Meeting }) {
  return (
    <div className="border border-gray-300 rounded bg-white p-4">
      <h1 className="font-bold text-xl">{data.title}</h1>
      <blockquote className="text-lg text-gray-800 my-4">
        {data.excerpt}
      </blockquote>

      <div className="flex justify-between">
        <div />
        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white">
          Open
        </button>
      </div>
    </div>
  )
}
