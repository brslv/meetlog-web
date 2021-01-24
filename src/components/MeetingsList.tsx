import React from 'react'
import MeetingCard from './MeetingCard'

export default function MeetingsList() {
  const meetings = [
    {
      id: 1,
      title: 'This is the meeting title',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 2,
      title: 'This is the meeting title',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 3,
      title: 'This is the meeting title',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 4,
      title: 'This is the meeting title',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 5,
      title: 'This is the meeting title',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
  ]

  return (
    <div className="grid  grid-cols-4 gap-2">
      {meetings.map((meeting) => {
        return <MeetingCard key={meeting.id} data={meeting} />
      })}
    </div>
  )
}
