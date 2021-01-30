import React from 'react'
import MeetingCard from './MeetingCard'

export default function MeetingsList() {
  const meetings = [
    {
      id: 1,
      title: 'Registration flow',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 2,
      title: 'Referral mechanism and UX',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 3,
      title: 'SEO meeting',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 4,
      title: 'Third party integrations meeting',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 5,
      title: 'Weekly product meeting',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {meetings.map((meeting) => {
        return <MeetingCard key={meeting.id} data={meeting} />
      })}
    </div>
  )
}
