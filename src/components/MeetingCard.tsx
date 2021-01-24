import React from 'react'

interface Meeting {
  id: number
  title: string
  excerpt: string
}

export default function MeetingCard({ data }: { data: Meeting }) {
  return (
    <div className="border border-gray-300 rounded">
      <h1>{data.title}</h1>
      <blockquote>{data.excerpt}</blockquote>
    </div>
  )
}
