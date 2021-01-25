import React from 'react'

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
        <button className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded text-white focus:ring focus:outline-none">
          Open
        </button>
      </div>
    </div>
  )
}
