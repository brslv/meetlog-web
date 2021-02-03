import React from 'react'
import { LinkButton } from '../core/Button'
import Card from '../core/Card'

interface Meeting {
  id: number
  title: string
  excerpt: string
}

export default function MeetingCard({ data }: { data: Meeting }) {
  return (
    <Card className="flex flex-col justify-end">
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
    </Card>
  )
}
